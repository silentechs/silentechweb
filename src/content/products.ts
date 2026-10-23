export type Product = {
  slug: "commerce" | "stitchcraft" | "schools" | "docket";
  name: string;
  status: "Live" | "Opening soon";
  forWho: string;
  line: string;
  features: string[];
  url: string;
  host: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "commerce",
    name: "Silentech Commerce",
    status: "Live",
    forWho: "Shops and traders",
    line: "Sales, stock, expenses and customer credit in one place. Keep selling when the connection drops, and sync when it returns.",
    features: [
      "Point of sale that works offline",
      "Stock tracking and reports",
      "Expenses and customer credit",
      "Online catalogue and order links",
    ],
    url: "https://app.silentech.live/",
    host: "app.silentech.live",
    accent: "#12A66B",
  },
  {
    slug: "stitchcraft",
    name: "StitchCraft",
    status: "Live",
    forWho: "Tailors and fashion studios",
    line: "Client measurements, orders and studio records for designers who are done managing their business on paper.",
    features: [
      "Measurements and client records",
      "Order tracking",
      "Studio workflows",
      "Ready-to-wear sales",
    ],
    url: "https://www.stitchcraft.live/",
    host: "stitchcraft.live",
    accent: "#1B6B3A",
  },
  {
    slug: "schools",
    name: "Silentech Schools",
    status: "Opening soon",
    forWho: "Junior high, senior high and technical schools",
    line: "Run the whole school from one place, even when the internet is slow. Lessons, records, marks, fees and parent messages in one system.",
    features: [
      "Registers and attendance",
      "Marks and report cards",
      "Parent messages by SMS",
      "Fees, bills and receipts",
      "Timetables",
      "A school website",
    ],
    url: "https://schools.silentech.live/",
    host: "schools.silentech.live",
    accent: "#0E6F73",
  },
  {
    slug: "docket",
    name: "Docket",
    status: "Opening soon",
    forWho: "Law chambers in Ghana",
    line: "Every matter, in order. Court dates, files, people and fees in one calm workspace for your chambers.",
    features: [
      "Matters, courts and hearing outcomes",
      "Client updates you review before sharing",
      "Files and evidence packs",
      "Time recording and invoices",
      "Clients and people, imported from a spreadsheet",
      "A record of every change",
    ],
    url: "https://web-production-cf5865.up.railway.app/",
    host: "web-production-cf5865.up.railway.app",
    accent: "#E9B44C",
  },
];

export const schoolsModules = [
  {
    title: "Registers and records",
    icon: "ClipboardCheck",
    text: "Enrolment, class and house placement, daily registers and conduct records. Boarding schools can manage houses, dormitories, beds and exeats. Staff see only their own students.",
  },
  {
    title: "Marks and report cards",
    icon: "FileText",
    text: "Set the grading scheme and weights, enter marks in a grid, and add teacher and head remarks. Late changes need a reason, and nothing reaches parents until the school releases it.",
  },
  {
    title: "Parents and messages",
    icon: "MessageSquare",
    text: "Parents sign in with their phone number and a texted code, then see attendance, results, notices and the calendar. Absence and safety alerts go out by SMS, and parents can opt out.",
  },
  {
    title: "Fees and receipts",
    icon: "Wallet",
    text: "Only school-approved items, with a second approver. Bills, pay links and receipts anyone can check. Online payments go to the school's own account, so Silentech never holds school money.",
  },
  {
    title: "Lessons and quizzes",
    icon: "BookOpen",
    text: "Notes, files and links, assignments, quizzes and a reusable question bank. Students sign in with a school-issued PIN.",
  },
  {
    title: "Timetables",
    icon: "CalendarDays",
    text: "Set bells, rooms and subject loads, auto-draft, then adjust by hand with clashes shown. Cover suggestions for absent teachers, A4 print and spreadsheet export.",
  },
  {
    title: "School website",
    icon: "Globe",
    text: "A public site with news, events, programmes, staff and admissions enquiries. Students appear only with guardian consent. A lite mode keeps it fast on slow connections.",
  },
  {
    title: "Forms and surveys",
    icon: "Layers",
    text: "Consent forms, feedback and staff surveys sent by text. Families need no account. Anonymous rounds are available.",
  },
] as const;

export const docketModules = [
  {
    title: "Matters and courts",
    icon: "Landmark",
    text: "A record for every matter with its court and division, court dates, hearing outcomes, next actions and full history.",
  },
  {
    title: "Client updates",
    icon: "MessageSquare",
    text: "Prepare a client update, review it, then choose what to share. A client portal is part of the product.",
  },
  {
    title: "Files and evidence",
    icon: "FileText",
    text: "Files, evidence packs and court-day notes sit with the matter, with an independent review step.",
  },
  {
    title: "Time and billing",
    icon: "Wallet",
    text: "Record time, prepare invoices and keep track of outstanding balances.",
  },
  {
    title: "People and clients",
    icon: "Users",
    text: "One record for each client and contact. Bring your existing clients across from a spreadsheet.",
  },
  {
    title: "Audit trail",
    icon: "ClipboardCheck",
    text: "A record of every change that shows who changed what and when. Entries cannot be edited or removed.",
  },
] as const;
