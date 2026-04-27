export interface Tour {
  id: string;
  name: string;
  tagline: string;
  durationMin: number;
  description: string;
  highlights: string[];
  forWho: string[];
  accent: string;
}

export const tours: Tour[] = [
  {
    id: "discovery",
    name: "The Discovery",
    tagline: "Your first taste of the Ionian",
    durationMin: 30,
    description:
      "Let David lead you along Lefkada's most stunning coastline. No experience, no license, no worries — just hold on and enjoy the ride.",
    highlights: [
      "Full safety briefing & instruction included",
      "David pilots — you sit back and enjoy",
      "Porto Katsiki coastal route",
      "Suitable for all ages & abilities",
    ],
    forWho: ["Families with children", "Seniors", "First-timers", "No license needed"],
    accent: "#4a90b8",
  },
  {
    id: "expedition",
    name: "The Expedition",
    tagline: "The full Ionian experience",
    durationMin: 60,
    description:
      "One hour, six stops, memories that last a lifetime. David takes you to secret coves, white-cliff bays, and waters only locals know.",
    highlights: [
      "6 scenic stops with David",
      "Hidden sea caves & secret bays",
      "Meganisi strait & Egremni cliffs",
      "Sunset timing available on request",
    ],
    forWho: ["Groups", "Couples", "Adventurers", "No license needed"],
    accent: "#ff5a36",
  },
];
