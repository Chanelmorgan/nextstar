import DanceBugPage from "@/app/dance-bug/page";
import Link from "next/link";
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Entry', href: '/entry' },
  { label: 'Spectator Tickets', href: '/tickets' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Rules', href: '/rules' },
  { label: 'Events Dates', href: '/events-dates' },
  { label: 'Gallery', href: '/coming-soon' }
]

export const FAQ_ITEMS = [
  {
    question: "What ages can enter the competition?",
    answer: (
      <>
        Next Star welcomes dancers of all ages. Please check the{" "}
        <Link href="/about">About page</Link> for detailed age divisions and categories.
      </>
    ),
  },
  {
    question: "How do I submit my entry?",
    answer: (
      <>
        We use Dance Bug for our registrations. Visit the{" "}
        <Link href="/entry">Entry Page</Link> to enter an event.
      </>
    ),
  },
  {
    question: "What are the entry fees?",
    answer: (
      <>
        Solos – 2.5 mins max – £20, Duets/Trios – 3 mins max – £15 per dancer, Groups – 4 mins max – £11 per dancer.
      </>
    ),
  },
  {
    question: "When will I receive the competition schedule?",
    answer: (
      <>
        The full competition schedule will be emailed to studios 2 weeks before the event.
      </>
    ),
  },
  {
    question: "Where can I find the rules and terms?",
    answer: (
      <>
        Please read our{" "}
        <Link href="/rules" target="_blank" rel="noopener noreferrer">
          Rules & Terms and Conditions
        </Link>{" "}
        page before submitting your entry.
      </>
    ),
  },
  {
    question: "Can I enter multiple categories?",
    answer: (
      <>
        Yes! Dancers can enter multiple categories as long as they comply with the timing and fees for each routine.
      </>
    ),
  },
];

export const RULES = {
  title: "Next Star Dance Competition 2026–2027 Rules",
  intro:
    "IT IS THE RESPONSIBILITY OF EACH STUDIO, DANCE SCHOOL AND/OR INDIVIDUAL TO REVIEW ALL EXISTING RULES AND REGULATIONS. PLEASE READ AND ADHERE TO ALL TERMS AND CONDITIONS.",
  items: [
    "Judges’ decisions are final. All judges are highly credited professionals.",

    "The safety of dancers performing on stage is the responsibility of dance teachers and parents. Routines must be well rehearsed and safe to perform. Next Star Dance Competition takes no responsibility for injuries.",

    "Children must be ready to perform at their allotted times and must arrive at least 1 hour before their category start time.",

    "Two free teacher tickets will be issued to dance schools with more than 10 entries. Individual entrants will not receive free spectator tickets.",

    "Dancers, teachers, and spectators must follow theatre etiquette at all times. Phones must be on silent, and movement during performances is strictly prohibited.",

    "All children remain the responsibility of their chaperones, legal guardians, or dance teachers throughout the event.",

    "Next Star Dance Competition is not responsible for the loss of personal valuables.",

    "All entries are final. Refunds will only be issued in the event of competition cancellation.",

    "All heats are qualifiers for the Summer Grand Final. Dancers must place in the top 2 of their category (top 3 for novice entrants) or be in the top 3 highest scores to qualify automatically.",

    "Next Star Dance Competition is limited to non-professional dancers.",

    "Next Star Dance Competition does not take any responsibility for any injuries that may occur. All routines and tricks must be well rehearsed and stage ready.",

    "By registering to compete, entrants agree to all rules and grant Next Star Dance Competition permission to use photos and videos for social media, flyers, websites, and television promotion."
  ],
  closing: "We look forward to welcoming you at one of our events soon!",
  termsUrl: "https://example.com/terms-and-conditions"
};


export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/placeholder.png",
    alt: "Dancer 1",
    event: "Brighton 2026",
    date: "2026-09-15"
  },
  {
    src: "/images/gallery/placeholder.png",
    alt: "Dancer 2",
    event: "Surrey 2026",
    date: "2026-09-10"
  },
];

export const MERCH_ITEMS = [
  {
    id: 1,
    name: "Next Star Hoodie",
    price: "£35",
    image: "/images/merch/placeholder.png",
    description: "Premium quality hoodie featuring the Next Star logo."
  },
  {
    id: 2,
    name: "Next Star T-Shirt",
    price: "£20",
    image: "/images/merch/tshirt.jpg",
    description: "Soft cotton t-shirt perfect for dancers and supporters."
  },
  {
    id: 3,
    name: "Next Star Tote Bag",
    price: "£15",
    image: "/images/merch/tote.jpg",
    description: "Ideal for dance gear, competitions, and everyday use."
  },
  {
    id: 4,
    name: "Next Star Water Bottle",
    price: "£12",
    image: "/images/merch/bottle.jpg",
    description: "Stay hydrated in style at rehearsals and events."
  }
];

export const EVENT_DATES = [
  {
    date: "13th of September 2026",
    location: "Bristol",
    venue: ""
  },
  {
    date: "26th of September 2026",
    location: "East Sussex",
    venue: ""
  },
  {
    date: "3rd of October 2026",
    location: "Surrey",
    venue: ""
  },
  {
    date: "21st of November 2026",
    location: "Rugby",
    venue: ""
  },
  {
    date: "29th of November 2026",
    location: "Kent",
    venue: ""
  }
  ,
  {
    date: "21st of February 2027",
    location: "South Shields",
    venue: ""
  }
  ,
  {
    date: "3rd of April 2027",
    location: "Ipswich",
    venue: ""
  }
];


export const VENUES = [
  {
    name: "Bristol",
    link: "https://buytickets.com/brighton",
  },
  {
    name: "East Sussex",
    link: "https://buytickets.com/brighton",
  },
  {
    name: "Surrey",
    link: "https://buytickets.com/surrey",
  },
  {
    name: "Rugby",
    link: "https://buytickets.com/birmingham",
  },
  {
    name: "Kent",
    link: "https://buytickets.com/kent",
  }
  ,
  {
    name: "South Shields",
    link: "https://buytickets.com/kent",
  }
  ,
  {
    name: "Ipswich",
    link: "https://buytickets.com/ipswich",
  }
];