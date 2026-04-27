export type Lang = "en";

export interface T {
  nav: {
    fleet: string;
    tours: string;
    how: string;
    voices: string;
    faq: string;
    book: string;
    reserve: string;
  };
  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Line2: string;
    desc: string;
    cta: string;
    dm: string;
    statFrom: string;
    statFleet: string;
    statRating: string;
    statBooking: string;
    live: string;
    cancel: string;
    confirm: string;
  };
  fleet: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Line3: string;
    from: string;
    perHour: string;
    halfDay: string;
    fullDay: string;
    power: string;
    topSpeed: string;
    seats: string;
    lastOne: string;
    bookedOut: string;
    available: string;
    reserve: string;
    waitlist: string;
    inclVat: string;
  };
  how: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    steps: Array<{ n: string; t: string; d: string }>;
  };
  gallery: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    stops: Array<{ t: string; c: string }>;
  };
  voices: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    ratingSource: string;
  };
  faq: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    items: Array<{ q: string; a: string }>;
  };
  tours: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    withGuide: string;
    noLicense: string;
    priceLabel: string;
    ctaBtn: string;
    perfectFor: string;
  };
  cta: {
    eyebrow: string;
    h2: string;
    desc: string;
    btn: string;
    dm: string;
    cancel: string;
    deposit: string;
    confirm: string;
  };
  footer: {
    tagline: string;
    exploreLabel: string;
    followLabel: string;
    hoursLabel: string;
    morning: string;
    morningTime: string;
    afternoon: string;
    afternoonTime: string;
    season: string;
    seasonTime: string;
    copyright: string;
    builtBy: string;
    links: {
      fleet: string;
      how: string;
      voices: string;
      faq: string;
      imprint: string;
      privacy: string;
      terms: string;
      safety: string;
    };
  };
  form: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    infoResponse: { label: string; value: string };
    infoCancel: { label: string; value: string };
    infoDeposit: { label: string; value: string };
    infoMeeting: { label: string; value: string };
    whatsappLabel: string;
    whatsappBtn: string;
    labelName: string;
    labelPhone: string;
    labelDate: string;
    labelDuration: string;
    labelJetski: string;
    labelMessage: string;
    placeholderName: string;
    placeholderPhone: string;
    placeholderMessage: string;
    noPreference: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
  };
}

const translations: Record<Lang, T> = {
  en: {
    nav: {
      fleet: "Fleet",
      tours: "Tours",
      how: "How",
      voices: "Voices",
      faq: "FAQ",
      book: "Book",
      reserve: "Reserve",
    },
    hero: {
      eyebrow: "Lefkada · Ionian Sea · Summer 2026",
      h1Line1: "Chase the",
      h1Line2: "horizon.",
      desc: "Feel the thrill. Live the moment. The fastest jet skis on Lefkada — for individuals, families and groups.",
      cta: "Reserve your machine",
      dm: "DM David",
      statFrom: "From",
      statFleet: "Fleet",
      statRating: "Rating",
      statBooking: "Booking",
      live: "Live now · 3 machines available today",
      cancel: "Free cancel 48h",
      confirm: "Instant confirm",
    },
    fleet: {
      eyebrow: "The Machines · Curated fleet",
      h2Line1: "Four",
      h2Line2: "weapons.",
      h2Line3: "One captain.",
      from: "From",
      perHour: "per hour · incl. VAT",
      halfDay: "Half day",
      fullDay: "Full day",
      power: "Power",
      topSpeed: "Top speed",
      seats: "Seats",
      lastOne: "Last 1 today",
      bookedOut: "Booked out today",
      available: "available",
      reserve: "Reserve this machine",
      waitlist: "Join waitlist",
      inclVat: "incl. VAT",
    },
    how: {
      eyebrow: "How it works",
      h2Line1: "Ninety seconds.",
      h2Line2: "Then you're gone.",
      steps: [
        { n: "01", t: "Pick", d: "Choose your machine from the fleet above. See live availability, honest prices." },
        { n: "02", t: "Sign", d: "Electronic waiver. Greek Law 4727/2020 compliant. Insurance activates instantly." },
        { n: "03", t: "Pay", d: "100% now or 30% deposit. Apple Pay, Google Pay, cards, PayPal. One-tap checkout." },
        { n: "04", t: "Ride", d: "Meet David at the dock. Briefing. Launch. Secret bays. Return at sunset." },
      ],
    },
    gallery: {
      eyebrow: "Your route",
      h2Line1: "Six stops.",
      h2Line2: "One loop.",
      stops: [
        { t: "Porto Katsiki", c: "Most photographed beach on the island" },
        { t: "Egremni", c: "White cliffs, turquoise depths" },
        { t: "Meganisi", c: "Narrow channels, sometimes dolphins" },
        { t: "Sunset Return", c: "Golden hour on the way back" },
      ],
    },
    voices: {
      eyebrow: "327 voices · 4.9 stars",
      h2Line1: "They came.",
      h2Line2: "They returned.",
      ratingSource: "TripAdvisor · Google · Viator",
    },
    faq: {
      eyebrow: "The small print, big",
      h2Line1: "Questions we",
      h2Line2: "love.",
      items: [
        { q: "Do I need a boat license?", a: "No. Under our briefing and supervision, no license needed. Must be 18+ with valid photo ID at pickup." },
        { q: "Is insurance included?", a: "Yes — third-party liability up to €700,000 per Greek Law 4926/2022. We recommend personal accident insurance separately." },
        { q: "What about bad weather?", a: "Above Beaufort 5 we cannot operate by law. Weather-grounded bookings are refunded 100% or rescheduled free." },
        { q: "Can I cancel?", a: "Free cancellation 48h before. 48–24h is 50% refund. Under 24h non-refundable unless weather grounds us." },
        { q: "Where do I meet?", a: "GPS coordinates with booking confirmation. Nidri marina, 10 min walk from the village. Free parking." },
        { q: "How far can I ride?", a: "Greek Coast Guard rules: max 700m from shore, never inside swim buoys. Plenty of bays within that range." },
      ],
    },
    tours: {
      eyebrow: "Guided tours · With David",
      h2Line1: "Not ready to",
      h2Line2: "ride alone?",
      withGuide: "With David · Licensed guide",
      noLicense: "No license needed",
      priceLabel: "Price on request — we reply within 2 hours",
      ctaBtn: "Book a tour on WhatsApp",
      perfectFor: "Perfect for",
    },
    cta: {
      eyebrow: "Your summer starts here",
      h2: "See you on the water.",
      desc: "Four jetskis. Six hidden coves. One perfect afternoon waiting.",
      btn: "Book your machine",
      dm: "Chat with David",
      cancel: "Free cancel 48h",
      deposit: "30% deposit accepted",
      confirm: "Instant confirmation",
    },
    footer: {
      tagline: "Four jetskis, one David. Family-run, fully licensed, built around the best day you can have on water.",
      exploreLabel: "Explore",
      followLabel: "Follow & Legal",
      hoursLabel: "Hours",
      morning: "Morning",
      morningTime: "10–13",
      afternoon: "Afternoon",
      afternoonTime: "16–19",
      season: "Season",
      seasonTime: "May – Sep",
      copyright: "© 2026 Jetski Lefkada Rentals · Kristina Goldberg",
      builtBy: "Built by",
      links: { fleet: "Fleet", how: "How", voices: "Voices", faq: "FAQ", imprint: "Imprint", privacy: "Privacy", terms: "Terms", safety: "Safety" },
    },
    form: {
      eyebrow: "Booking inquiry",
      h2Line1: "Claim your",
      h2Line2: "machine.",
      infoResponse: { label: "Response time", value: "Under 2 hours" },
      infoCancel: { label: "Free cancel", value: "Up to 48h before" },
      infoDeposit: { label: "Deposit", value: "30% to confirm" },
      infoMeeting: { label: "Meeting point", value: "Nidri marina, Lefkada" },
      whatsappLabel: "Prefer WhatsApp?",
      whatsappBtn: "DM us directly",
      labelName: "Your name *",
      labelPhone: "WhatsApp / Phone *",
      labelDate: "Desired date *",
      labelDuration: "Duration",
      labelJetski: "Machine preference",
      labelMessage: "Anything else?",
      placeholderName: "Alex Müller",
      placeholderPhone: "+49 170 000 0000",
      placeholderMessage: "Number of people, special requests, questions...",
      noPreference: "No preference — surprise me",
      submitBtn: "Send booking request",
      submitting: "Sending…",
      successTitle: "Request sent!",
      successDesc: "We'll WhatsApp you back within 2 hours to confirm.",
    },
  },
};

export function getT(lang: Lang = "en"): T {
  return translations[lang] ?? translations.en;
}
