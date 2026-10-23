export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  location: string;
  status: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  domain: string;
  theme: string;
  tags: string[];
  challenge: string;
  approach: string;
  capabilities: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "northciti",
    name: "NorthCiti",
    client: "Vanguard Multimedia",
    category: "Media & publishing",
    location: "Ghana",
    status: "Public platform live",
    theme: "northciti",
    title: "News, live radio and television for Vanguard Multimedia.",
    description:
      "A public news and broadcasting website for Vanguard Multimedia, with a dedicated newsroom in development.",
    image: "/work/northciti.webp",
    imageAlt: "NorthCiti public website with news, live television and radio",
    url: "https://www.northcitionline.com/",
    domain: "northcitionline.com",
    tags: ["Digital publishing", "Live broadcasting", "Editorial workflows"],
    challenge:
      "A media organisation is always moving. Stories arrive, programmes go on air, and audiences move between reading, listening and watching. Vanguard Multimedia needed a digital experience that could bring those activities together.",
    approach:
      "We built NorthCiti’s public platform around news, radio and television, with a dedicated newsroom being developed alongside it. The public site supports reading, listening and watching; the newsroom covers editorial production.",
    capabilities: [
      {
        title: "Read. Listen. Watch.",
        text: "News coverage, connected radio streams, video and live television brought into one public destination.",
      },
      {
        title: "From pitch to publication",
        text: "A dedicated editorial workspace for story creation, assignments and review, with a visual board that makes each stage of the process clear.",
      },
      {
        title: "Intelligence for the newsroom",
        text: "The newsroom scope includes news discovery, AI-assisted reading and programme planning. These tools remain part of the ongoing development programme.",
      },
    ],
  },
  {
    slug: "aminadam",
    name: "Amin Adam",
    client: "Dr. Mohammed Amin Adam",
    category: "Profile website",
    location: "Ghana",
    status: "Live website",
    theme: "aminadam",
    title: "A profile website for an economist and former Minister for Finance.",
    description:
      "The professional website of Dr. Mohammed Amin Adam, an economist and adviser on finance, energy and economic transformation in Africa, with writing, speeches, advisory services and a newsletter.",
    image: "/work/aminadam.webp",
    imageAlt:
      "Amin Adam website homepage with the headline Finance, energy and economic reform in Africa",
    url: "https://aminadam.org/",
    domain: "aminadam.org",
    tags: ["Profile website", "Publishing", "Newsletter"],
    challenge:
      "A public figure's website is read by investors, boards, governments, conference organisers and the press. It has to present a career accurately, give each kind of reader a clear next step, and be easy to keep current as new writing and speeches are published.",
    approach:
      "We built a text-led site around the work: advisory services, the Africanomics writing, speeches, and speaking and media. Readers can search, browse by topic, subscribe by email or follow an RSS feed, and send enquiries that are routed by type, so a speaking request and an advisory request reach the right place.",
    capabilities: [
      {
        title: "Writing, organised",
        text: "Articles and opinion papers with dates, reading times and topics, plus a featured paper and a searchable archive.",
      },
      {
        title: "Enquiries that find the right person",
        text: "Contact routes for speaking and advisory work, so each kind of request starts in the right place.",
      },
      {
        title: "A newsletter and feeds",
        text: "Email sign-up with a privacy link and one-click unsubscribe, an RSS feed, and light, dark or automatic display.",
      },
    ],
  },
  {
    slug: "kraam",
    name: "Kraam",
    client: "International partner",
    category: "Care & community",
    location: "Germany",
    status: "Recently launched",
    theme: "kraam",
    title: "Family-support discovery and provider management in Germany.",
    description:
      "A German family-support platform that connects families with care professionals—and gives providers the tools to manage their work.",
    image: "/work/kraam.webp",
    imageAlt:
      "Kraam German-language family support platform with location search and provider registration",
    url: "https://kraam.net/de",
    domain: "kraam.net",
    tags: ["Provider workflows", "Client management", "Multilingual platform"],
    challenge:
      "Kraam needed to help families find care professionals while giving providers tools to manage enquiries, service records and invoices.",
    approach:
      "Working with our partner in Germany, we built a platform that brings family-support discovery and provider business workflows together. Families can find support by location and explore profiles, while providers have a connected path from enquiry to invoice.",
    capabilities: [
      {
        title: "Find the right support",
        text: "Location-based discovery and professional profiles help families explore available support and make contact.",
      },
      {
        title: "Enquiries, records & invoicing",
        text: "Provider workflows bring enquiries, quotations, service records and invoicing into the same platform.",
      },
      {
        title: "German & multilingual support",
        text: "A German-language experience with multilingual support, created in close collaboration with our international partner.",
      },
    ],
  },
  {
    slug: "commerce",
    name: "Silentech Commerce",
    client: "A Silentech product",
    category: "Retail & commerce",
    location: "Built for growing businesses",
    status: "Live product",
    theme: "commerce",
    title: "Point of sale and inventory, with offline selling.",
    description:
      "Sales, stock and business records in one place. A practical POS platform built for the realities of everyday commerce.",
    image: "/work/commerce.webp",
    imageAlt: "Silentech Commerce public product website",
    url: "https://app.silentech.live/",
    domain: "app.silentech.live",
    tags: ["Point of sale", "Inventory", "Offline workflows"],
    challenge:
      "Running a shop means keeping sales, stock, expenses and customer credit in sync. An unreliable connection should not bring the working day to a stop.",
    approach:
      "Silentech Commerce brings essential retail operations together in a platform that works from a phone. Merchants can record sales offline and sync later, while connected inventory and reporting help them keep track of their business.",
    capabilities: [
      {
        title: "Offline point of sale",
        text: "A focused point-of-sale experience, with offline selling and later synchronisation when connectivity returns.",
      },
      {
        title: "Stock, expenses & customer credit",
        text: "Stock tracking, expense records, reports and customer credit management support everyday business decisions.",
      },
      {
        title: "Take the shop online",
        text: "Digital catalogues and order links help merchants turn their inventory into a customer-facing storefront.",
      },
    ],
  },
  {
    slug: "philbro",
    name: "Philbro Oil",
    client: "Philbro Oil Enterprise",
    category: "Manufacturing & industry",
    location: "Ghana",
    status: "Live website",
    theme: "philbro",
    title: "A product catalogue and corporate website for Philbro Oil.",
    description:
      "A corporate website for a Ghanaian manufacturer, presenting its brands, product range, trade information and expansion plans.",
    image: "/work/philbro.webp",
    imageAlt:
      "Philbro Oil public website showcasing its cooking oil range and trade enquiry links",
    url: "https://www.philbrooil.com/",
    domain: "philbrooil.com",
    tags: ["Corporate website", "Product catalogue", "Trade enquiries"],
    challenge:
      "Philbro needed a coherent way to present its consumer brands, manufacturing activities and expansion plans to customers and commercial partners.",
    approach:
      "We built a public website that brings the company story, product catalogue and trade enquiries together, with dedicated space for its planned solar-powered refinery.",
    capabilities: [
      {
        title: "Products, clearly presented",
        text: "A structured catalogue gives household, foodservice and trade buyers a way to explore the range and find relevant product information.",
      },
      {
        title: "Trade & export enquiries",
        text: "Trade and export information, quote requests and direct sales links help visitors take the next step.",
      },
      {
        title: "Planned refinery project",
        text: "Dedicated project pages communicate the refinery development, distinguishing the planned facility from the existing business.",
      },
    ],
  },
];
