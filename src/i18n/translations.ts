export type Lang = "en" | "de" | "el";

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
      copyright: "© 2026 Jetski Lefkada Rentals",
      builtBy: "Built by",
      links: { fleet: "Fleet", how: "How", voices: "Voices", faq: "FAQ", imprint: "Imprint", privacy: "Privacy", terms: "Terms" },
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

  de: {
    nav: {
      fleet: "Flotte",
      tours: "Touren",
      how: "Ablauf",
      voices: "Stimmen",
      faq: "FAQ",
      book: "Buchen",
      reserve: "Reservieren",
    },
    hero: {
      eyebrow: "Lefkada · Ionisches Meer · Sommer 2026",
      h1Line1: "Jag dem",
      h1Line2: "Horizont nach.",
      desc: "Spür den Nervenkitzel. Leb den Moment. Die schnellsten Jet Skis auf Lefkada — für Einzelpersonen, Familien und Gruppen.",
      cta: "Maschine reservieren",
      dm: "David schreiben",
      statFrom: "Ab",
      statFleet: "Flotte",
      statRating: "Bewertung",
      statBooking: "Buchung",
      live: "Live · 3 Maschinen heute verfügbar",
      cancel: "Kostenlos stornieren 48h",
      confirm: "Sofortbestätigung",
    },
    fleet: {
      eyebrow: "Die Maschinen · Kuratierte Flotte",
      h2Line1: "Vier",
      h2Line2: "Waffen.",
      h2Line3: "Ein Kapitän.",
      from: "Ab",
      perHour: "pro Stunde · inkl. MwSt.",
      halfDay: "Halber Tag",
      fullDay: "Ganzer Tag",
      power: "Leistung",
      topSpeed: "Höchstgeschwindigkeit",
      seats: "Sitzplätze",
      lastOne: "Letzte heute",
      bookedOut: "Heute ausgebucht",
      available: "verfügbar",
      reserve: "Diese Maschine reservieren",
      waitlist: "Warteliste",
      inclVat: "inkl. MwSt.",
    },
    how: {
      eyebrow: "So funktioniert es",
      h2Line1: "Neunzig Sekunden.",
      h2Line2: "Dann bist du weg.",
      steps: [
        { n: "01", t: "Wählen", d: "Wähle deine Maschine aus der Flotte. Echte Verfügbarkeit, faire Preise." },
        { n: "02", t: "Unterschreiben", d: "Elektronischer Haftungsausschluss. Gemäß griechischem Recht 4727/2020. Versicherung aktiviert sofort." },
        { n: "03", t: "Bezahlen", d: "100% jetzt oder 30% Anzahlung. Apple Pay, Google Pay, Kreditkarte, PayPal. Ein-Klick-Checkout." },
        { n: "04", t: "Fahren", d: "Triff David am Steg. Briefing. Start. Geheime Buchten. Rückkehr bei Sonnenuntergang." },
      ],
    },
    gallery: {
      eyebrow: "Deine Route",
      h2Line1: "Sechs Stopps.",
      h2Line2: "Eine Runde.",
      stops: [
        { t: "Porto Katsiki", c: "Meist fotografierter Strand der Insel" },
        { t: "Egremni", c: "Weiße Felsen, türkisblaue Tiefen" },
        { t: "Meganisi", c: "Enge Kanäle, manchmal Delfine" },
        { t: "Sonnenuntergang", c: "Goldene Stunde auf dem Rückweg" },
      ],
    },
    voices: {
      eyebrow: "327 Stimmen · 4,9 Sterne",
      h2Line1: "Sie kamen.",
      h2Line2: "Sie kamen wieder.",
      ratingSource: "TripAdvisor · Google · Viator",
    },
    faq: {
      eyebrow: "Das Kleingedruckte, groß",
      h2Line1: "Fragen, die",
      h2Line2: "wir lieben.",
      items: [
        { q: "Brauche ich einen Bootsführerschein?", a: "Nein. Im Rahmen unserer Einweisung und Aufsicht ist kein Führerschein nötig. Mindestalter 18 Jahre, gültiger Lichtbildausweis beim Abholen." },
        { q: "Ist eine Versicherung inklusive?", a: "Ja – Haftpflicht bis €700.000 gemäß griechischem Recht 4926/2022. Wir empfehlen zusätzlich eine persönliche Unfallversicherung." },
        { q: "Was passiert bei schlechtem Wetter?", a: "Ab Beaufort 5 dürfen wir gesetzlich nicht fahren. Buchungen, die wetterbedingt ausfallen, werden 100% erstattet oder kostenlos umgebucht." },
        { q: "Kann ich stornieren?", a: "Kostenlose Stornierung 48h vorher. 48–24h = 50% Erstattung. Unter 24h nicht erstattungsfähig, außer bei Wetterausfall." },
        { q: "Wo ist der Treffpunkt?", a: "GPS-Koordinaten mit der Buchungsbestätigung. Nidri Marina, 10 Minuten zu Fuß vom Dorf. Kostenlose Parkplätze." },
        { q: "Wie weit darf ich fahren?", a: "Griechische Küstenwache: max. 700 m vom Ufer, niemals in Schwimmbereichen. Viele Buchten liegen innerhalb dieser Grenzen." },
      ],
    },
    tours: {
      eyebrow: "Geführte Touren · Mit David",
      h2Line1: "Noch nicht bereit",
      h2Line2: "allein zu fahren?",
      withGuide: "Mit David · Lizenzierter Guide",
      noLicense: "Kein Führerschein nötig",
      priceLabel: "Preis auf Anfrage — Antwort in unter 2 Stunden",
      ctaBtn: "Tour per WhatsApp buchen",
      perfectFor: "Perfekt für",
    },
    cta: {
      eyebrow: "Dein Sommer beginnt hier",
      h2: "Bis auf dem Wasser.",
      desc: "Vier Jet Skis. Sechs versteckte Buchten. Ein perfekter Nachmittag wartet.",
      btn: "Maschine buchen",
      dm: "David schreiben",
      cancel: "Kostenlos stornieren 48h",
      deposit: "30% Anzahlung möglich",
      confirm: "Sofortbestätigung",
    },
    footer: {
      tagline: "Vier Jet Skis, ein David. Familiengeführt, vollständig lizenziert, für den besten Tag, den du auf dem Wasser verbringen kannst.",
      exploreLabel: "Entdecken",
      followLabel: "Folgen & Rechtliches",
      hoursLabel: "Öffnungszeiten",
      morning: "Morgen",
      morningTime: "10–13 Uhr",
      afternoon: "Nachmittag",
      afternoonTime: "16–19 Uhr",
      season: "Saison",
      seasonTime: "Mai – Sep",
      copyright: "© 2026 Jetski Lefkada Rentals",
      builtBy: "Entwickelt von",
      links: { fleet: "Flotte", how: "Ablauf", voices: "Stimmen", faq: "FAQ", imprint: "Impressum", privacy: "Datenschutz", terms: "AGB" },
    },
    form: {
      eyebrow: "Buchungsanfrage",
      h2Line1: "Sicher dir",
      h2Line2: "deine Maschine.",
      infoResponse: { label: "Antwortzeit", value: "Unter 2 Stunden" },
      infoCancel: { label: "Kostenlose Stornierung", value: "Bis 48h vorher" },
      infoDeposit: { label: "Anzahlung", value: "30% zur Bestätigung" },
      infoMeeting: { label: "Treffpunkt", value: "Nidri Marina, Lefkada" },
      whatsappLabel: "Lieber WhatsApp?",
      whatsappBtn: "Direkt schreiben",
      labelName: "Dein Name *",
      labelPhone: "WhatsApp / Telefon *",
      labelDate: "Gewünschtes Datum *",
      labelDuration: "Dauer",
      labelJetski: "Maschinenauswahl",
      labelMessage: "Noch etwas?",
      placeholderName: "Alex Müller",
      placeholderPhone: "+49 170 000 0000",
      placeholderMessage: "Anzahl Personen, Sonderwünsche, Fragen...",
      noPreference: "Keine Präferenz — überrasch mich",
      submitBtn: "Buchungsanfrage senden",
      submitting: "Wird gesendet…",
      successTitle: "Anfrage gesendet!",
      successDesc: "Wir melden uns per WhatsApp innerhalb von 2 Stunden.",
    },
  },

  el: {
    nav: {
      fleet: "Στόλος",
      tours: "Εκδρομές",
      how: "Πώς",
      voices: "Φωνές",
      faq: "FAQ",
      book: "Κράτηση",
      reserve: "Κράτηση",
    },
    hero: {
      eyebrow: "Λευκάδα · Ιόνιο Πέλαγος · Καλοκαίρι 2026",
      h1Line1: "Κυνήγα τον",
      h1Line2: "ορίζοντα.",
      desc: "Νιώσε τη συγκίνηση. Ζήσε τη στιγμή. Τα πιο γρήγορα jet ski στη Λευκάδα — για άτομα, οικογένειες και γκρουπ.",
      cta: "Κλείσε τη μηχανή σου",
      dm: "Γράψε στον David",
      statFrom: "Από",
      statFleet: "Στόλος",
      statRating: "Βαθμολογία",
      statBooking: "Κράτηση",
      live: "Live · 3 μηχανές διαθέσιμες σήμερα",
      cancel: "Δωρεάν ακύρωση 48ω",
      confirm: "Άμεση επιβεβαίωση",
    },
    fleet: {
      eyebrow: "Οι Μηχανές · Επιλεγμένος Στόλος",
      h2Line1: "Τέσσερα",
      h2Line2: "όπλα.",
      h2Line3: "Ένας καπετάνιος.",
      from: "Από",
      perHour: "ανά ώρα · συμπ. ΦΠΑ",
      halfDay: "Μισή μέρα",
      fullDay: "Ολόκληρη μέρα",
      power: "Ισχύς",
      topSpeed: "Μέγιστη ταχύτητα",
      seats: "Θέσεις",
      lastOne: "Τελευταίο σήμερα",
      bookedOut: "Κλεισμένο σήμερα",
      available: "διαθέσιμα",
      reserve: "Κλείσε αυτή τη μηχανή",
      waitlist: "Λίστα αναμονής",
      inclVat: "συμπ. ΦΠΑ",
    },
    how: {
      eyebrow: "Πώς λειτουργεί",
      h2Line1: "Ενενήντα δευτερόλεπτα.",
      h2Line2: "Και φεύγεις.",
      steps: [
        { n: "01", t: "Επιλογή", d: "Διάλεξε τη μηχανή σου από τον στόλο. Πραγματική διαθεσιμότητα, τίμιες τιμές." },
        { n: "02", t: "Υπογραφή", d: "Ηλεκτρονική δήλωση. Συμμόρφωση με ελληνικό νόμο 4727/2020. Η ασφάλεια ενεργοποιείται αμέσως." },
        { n: "03", t: "Πληρωμή", d: "100% τώρα ή 30% προκαταβολή. Apple Pay, Google Pay, κάρτες, PayPal. Γρήγορη ολοκλήρωση." },
        { n: "04", t: "Οδήγηση", d: "Συνάντησε τον David στην προβλήτα. Ενημέρωση. Εκκίνηση. Κρυφές παραλίες. Επιστροφή στο ηλιοβασίλεμα." },
      ],
    },
    gallery: {
      eyebrow: "Η διαδρομή σου",
      h2Line1: "Έξι στάσεις.",
      h2Line2: "Μια βόλτα.",
      stops: [
        { t: "Πόρτο Κατσίκι", c: "Η πιο φωτογραφημένη παραλία του νησιού" },
        { t: "Εγκρεμνοί", c: "Λευκά βράχια, τιρκουάζ βάθη" },
        { t: "Μεγανήσι", c: "Στενά κανάλια, μερικές φορές δελφίνια" },
        { t: "Ηλιοβασίλεμα", c: "Χρυσή ώρα στο γυρισμό" },
      ],
    },
    voices: {
      eyebrow: "327 φωνές · 4,9 αστέρια",
      h2Line1: "Ήρθαν.",
      h2Line2: "Επέστρεψαν.",
      ratingSource: "TripAdvisor · Google · Viator",
    },
    faq: {
      eyebrow: "Τα ψιλά γράμματα, μεγάλα",
      h2Line1: "Ερωτήσεις που",
      h2Line2: "αγαπάμε.",
      items: [
        { q: "Χρειάζομαι δίπλωμα σκάφους;", a: "Όχι. Με την ενημέρωση και εποπτεία μας δεν χρειάζεται δίπλωμα. Ελάχιστη ηλικία 18 ετών με ταυτότητα ή διαβατήριο." },
        { q: "Περιλαμβάνεται ασφάλεια;", a: "Ναι – αστική ευθύνη έως €700.000 σύμφωνα με ελληνικό νόμο 4926/2022. Συνιστούμε επιπλέον προσωπική ασφάλεια ατυχήματος." },
        { q: "Τι γίνεται με κακό καιρό;", a: "Άνω από Μποφόρ 5 δεν μπορούμε να λειτουργήσουμε νόμιμα. Κρατήσεις που ακυρώνονται λόγω καιρού επιστρέφονται 100% ή επαναπρογραμματίζονται δωρεάν." },
        { q: "Μπορώ να ακυρώσω;", a: "Δωρεάν ακύρωση 48 ώρες πριν. 48–24 ώρες = 50% επιστροφή. Κάτω από 24 ώρες δεν επιστρέφεται, εκτός αν ακυρωθεί λόγω καιρού." },
        { q: "Πού θα συναντηθούμε;", a: "GPS συντεταγμένες με την επιβεβαίωση κράτησης. Μαρίνα Νυδρίου, 10 λεπτά με τα πόδια από το χωριό. Δωρεάν χώρος στάθμευσης." },
        { q: "Πόσο μακριά μπορώ να πάω;", a: "Κανόνες Ελληνικού Λιμενικού: μέγιστο 700μ. από την ακτή, ποτέ μέσα σε ζώνες κολύμβησης. Πολλές παραλίες βρίσκονται εντός αυτών των ορίων." },
      ],
    },
    tours: {
      eyebrow: "Ξεναγούμενες εκδρομές · Με τον David",
      h2Line1: "Δεν είσαι έτοιμος",
      h2Line2: "να οδηγήσεις μόνος;",
      withGuide: "Με τον David · Αδειοδοτημένος οδηγός",
      noLicense: "Δεν χρειάζεται δίπλωμα",
      priceLabel: "Τιμή κατόπιν αιτήματος — απαντάμε σε 2 ώρες",
      ctaBtn: "Κλείσε εκδρομή μέσω WhatsApp",
      perfectFor: "Ιδανικό για",
    },
    cta: {
      eyebrow: "Το καλοκαίρι σου αρχίζει εδώ",
      h2: "Τα λέμε στο νερό.",
      desc: "Τέσσερα jet ski. Έξι κρυφές παραλίες. Ένα τέλειο απόγευμα σε περιμένει.",
      btn: "Κλείσε τη μηχανή σου",
      dm: "Γράψε στον David",
      cancel: "Δωρεάν ακύρωση 48ω",
      deposit: "Δεκτή προκαταβολή 30%",
      confirm: "Άμεση επιβεβαίωση",
    },
    footer: {
      tagline: "Τέσσερα jet ski, ένας David. Οικογενειακή επιχείρηση, πλήρως αδειοδοτημένη, για την καλύτερη μέρα σου στο νερό.",
      exploreLabel: "Εξερεύνηση",
      followLabel: "Ακολούθησε & Νομικά",
      hoursLabel: "Ώρες",
      morning: "Πρωί",
      morningTime: "10–13",
      afternoon: "Απόγευμα",
      afternoonTime: "16–19",
      season: "Σεζόν",
      seasonTime: "Μάιος – Σεπτ.",
      copyright: "© 2026 Jetski Lefkada Rentals",
      builtBy: "Κατασκευή από",
      links: { fleet: "Στόλος", how: "Πώς", voices: "Φωνές", faq: "FAQ", imprint: "Εταιρικά", privacy: "Απόρρητο", terms: "Όροι" },
    },
    form: {
      eyebrow: "Αίτηση κράτησης",
      h2Line1: "Κλείσε",
      h2Line2: "τη μηχανή σου.",
      infoResponse: { label: "Χρόνος απόκρισης", value: "Κάτω από 2 ώρες" },
      infoCancel: { label: "Δωρεάν ακύρωση", value: "Έως 48 ώρες πριν" },
      infoDeposit: { label: "Προκαταβολή", value: "30% για επιβεβαίωση" },
      infoMeeting: { label: "Σημείο συνάντησης", value: "Μαρίνα Νυδρίου, Λευκάδα" },
      whatsappLabel: "Προτιμάς WhatsApp;",
      whatsappBtn: "Γράψε μας απευθείας",
      labelName: "Όνομά σου *",
      labelPhone: "WhatsApp / Τηλέφωνο *",
      labelDate: "Επιθυμητή ημερομηνία *",
      labelDuration: "Διάρκεια",
      labelJetski: "Προτίμηση μηχανής",
      labelMessage: "Κάτι άλλο;",
      placeholderName: "Αλέξανδρος Π.",
      placeholderPhone: "+30 69 00 000 000",
      placeholderMessage: "Αριθμός ατόμων, ειδικές απαιτήσεις, ερωτήσεις...",
      noPreference: "Καμία προτίμηση — έκπληξη",
      submitBtn: "Αποστολή αίτησης κράτησης",
      submitting: "Αποστολή…",
      successTitle: "Η αίτηση εστάλη!",
      successDesc: "Θα σου απαντήσουμε στο WhatsApp εντός 2 ωρών.",
    },
  },
};

export function getT(lang: Lang): T {
  return translations[lang] ?? translations.en;
}
