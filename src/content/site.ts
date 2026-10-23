export const contact = {
  email: "support@silentech.live",
  address: ["Malshegu", "Tamale, Northern Region", "Ghana"],
  digitalAddress: "NS-484-9337",
  hours: "8:30am to 5:00pm GMT",
  coordinates: "9.40° N, 0.85° W",
};

export const mailto = (subject: string, body?: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const dpc = {
  name: "Data Protection Commission, Ghana",
  ref: "APL-2026-AAAACY",
  law: "Data Protection Act, 2012 (Act 843)",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
] as const;

export const stages = [
  {
    name: "Discover & define",
    text: "We start with the people who use and run your systems. Together we map current workflows, find the problems and agree what the project must achieve.",
    outputs: [
      "A scope document and prioritised requirements",
      "Workflow maps and user journeys",
      "Acceptance criteria and project constraints",
    ],
  },
  {
    name: "Design & plan",
    text: "We turn requirements into a product experience and a practical technical approach, then review designs and delivery priorities with you.",
    outputs: [
      "UX/UI designs and interface prototypes",
      "Technical design and integration requirements",
      "A delivery roadmap with milestones and dependencies",
    ],
  },
  {
    name: "Build & validate",
    text: "We build the agreed solution, connect the systems it depends on and test it against the requirements, with regular reviews so gaps show up early.",
    outputs: [
      "Working software and agreed integrations",
      "Functional testing and acceptance review",
      "Technical documentation and deployment preparation",
    ],
  },
  {
    name: "Launch & evolve",
    text: "We plan the rollout, document how the system works and hand it over. Maintenance and improvements are scoped around what your organisation needs next.",
    outputs: [
      "Rollout and handover planning",
      "User and operational documentation",
      "A prioritised plan for ongoing improvements",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Can we hire you for advice without a full build?",
    a: "Yes. We can take on one stage, such as requirements, documentation, design or implementation planning. We agree the scope and deliverables with you before work begins.",
  },
  {
    q: "Can you work with our existing team or software?",
    a: "Yes. We can support your internal team, or focus on improving and integrating the systems you already have. We start by reviewing the current setup, constraints and responsibilities.",
  },
  {
    q: "Do you work with organisations outside Ghana?",
    a: "Yes. We are based in Tamale and work with partners abroad. Kraam, a family-support platform, was built with a partner in Germany.",
  },
  {
    q: "How do you price a project?",
    a: "It depends on scope, integrations, how much is already documented and what must ship first. A first conversation lets us define the next step, and we agree a project-specific scope before estimating delivery.",
  },
  {
    q: "What happens after launch?",
    a: "We help with handover, documentation, maintenance and future improvements. The support scope and responsibilities are agreed for each engagement.",
  },
] as const;
