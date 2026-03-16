import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { createHash } from "crypto";

// Mailchimp config
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!, // e.g. "us8"
});

export async function POST(req: Request) {
  try {
    // Parse JSON body safely
    let body: any;
    try {
      body = await req.json();
      console.log("Subscribe payload:", body);
    } catch {
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
    }

    const { email, firstName, lastName, address, phone, company } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const mergeFields: Record<string, string> = {
      FNAME: firstName || "",
      LNAME: lastName || "",
      ADDRESS: address || "",
      PHONE: phone || "",
      COMPANY: company || "",
    };

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
    const subscriberHash = createHash("md5").update(email.toLowerCase()).digest("hex");

    try {
      // Add as new subscriber (double opt-in)
      await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: "pending",
        merge_fields: mergeFields,
      });

      return NextResponse.json(
        { message: "Almost done! Please check your email to confirm your subscription." },
        { status: 200 }
      );
    } catch (error: any) {
      const body = error.response?.body;
      console.error("Mailchimp error:", body || error);

      // Already subscribed or pending — re-send confirmation email
      if (body?.title === "Member Exists") {
        await mailchimp.lists.setListMember(audienceId, subscriberHash, {
          email_address: email,
          status: "pending",
          merge_fields: mergeFields,
          status_if_new: "pending", // ✅ Added to satisfy TypeScript
        });

        return NextResponse.json(
          { message: "You're already on our list. If you haven’t confirmed yet, please check your spam as well." },
          { status: 200 }
        );
      }

      // Previously unsubscribed (allowed to re-add)
      if (body?.title === "Forgotten Email Not Subscribed") {
        await mailchimp.lists.setListMember(audienceId, subscriberHash, {
          email_address: email,
          status: "pending",
          merge_fields: mergeFields,
          status_if_new: "pending", // ✅ Added
        });

        return NextResponse.json(
          { message: "Please check your email to confirm your re-subscription." },
          { status: 200 }
        );
      }

      // Cleaned / permanently invalid
      if (body?.detail && typeof body.detail === "string" && body.detail.toLowerCase().includes("cleaned")) {
        return NextResponse.json(
          { message: "This email address cannot be re-subscribed. Please use a different email." },
          { status: 400 }
        );
      }

      return NextResponse.json({ message: "We couldn’t subscribe this email. Please try again later." }, { status: 500 });
    }
  } catch (err) {
    console.error("Unhandled server error:", err);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}