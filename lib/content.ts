export const welcome = {
  heading: "Herzlich willkommen!",
  questions: [
    "Sie suchen Hilfe bei gesundheitlichen Problemen?",
    "Sie wollen neue Wege zur Gesundheit gehen?",
    "Eine Erkrankung veranlasst Sie zur Neuorientierung?",
    "Sie wollen gesundheitlich neue Ziele erreichen?",
  ],
  closing: "Ich unterstütze Sie gerne dabei!",
};

export type OfferGroup = {
  title: string;
  intro?: string;
  items: string[];
};

export type OfferSection = {
  id: string;
  title: string;
  groups: OfferGroup[];
};

export const offers: OfferSection[] = [
  {
    id: "schwerpunkte",
    title: "Tätigkeitsschwerpunkte",
    groups: [
      {
        title: "Augenerkrankungen",
        items: [
          "Altersbedingte Makula-Degeneration (AMD)",
          "Augeninnendruckerhöhung (Grüner Star)",
          "Netzhautablösung (Nachbehandlung)",
        ],
      },
      {
        title: "Hals-Nasen-Ohren-Erkrankungen",
        items: [
          "chronische Nasen-Nebenhöhlen-Entzündungen",
          "chronische Mittelohrentzündungen",
          "chronische Mandelentzündungen",
          "Infekt-Anfälligkeit",
          "Heuschnupfen",
        ],
      },
    ],
  },
  {
    id: "diagnostik",
    title: "Diagnostik",
    groups: [
      {
        title: "Diagnostik",
        items: [
          "Ohrpunkt-Diagnose",
          "Reflexzonendiagnose",
          "Störfeld-Diagnostik",
          "Irisdiagnose",
        ],
      },
    ],
  },
  {
    id: "naturheilverfahren",
    title: "Naturheilverfahren",
    groups: [
      {
        title: "Naturheilverfahren",
        items: [
          "Pflanzenheilkunde",
          "Acunova (Augenakupunktur nach Boel)",
          "Ohr-Akupunktur nach Nogier",
          "Mikrobiologische Therapie (Darmsanierung)",
          "Homöopathie",
          "Traditionelle europäische Naturheilkunde",
          "NLP",
        ],
      },
    ],
  },
  {
    id: "beratung",
    title: "Beratung",
    groups: [
      {
        title: "Beratung",
        intro: "Beratung und Begleitung in",
        items: ["psychosomatischen Erkrankungen", "Prüfungsangst", "Flugangst"],
      },
    ],
  },
];

export type VitaEntry = { year: string; text: string };
export type VitaGroup = { title: string; entries: VitaEntry[] };

export const vitaIntro = {
  name: "Reinhard Naupert",
  details: "Jahrgang 1959, 2 Kinder",
};

export const vita: VitaGroup[] = [
  {
    title: "Heilpraktikerausbildung",
    entries: [
      {
        year: "1984–1987",
        text: "3-jährige Vollzeitausbildung in Hamburg, „Norddeutsche Heilpraktiker-Fachschule“, Hamburg; „Heilpraktiker-Fachschule der Gesellschaft zur Aus- und Fortbildung der Heilpraktiker in Norddeutschland e.V.“",
      },
      {
        year: "1987/88",
        text: "1-jährige Assistenzzeit bei Hp Hans-Dieter Stahnke, Pinneberg",
      },
      {
        year: "1987",
        text: "Heilpraktiker-Erlaubnis durch Gesundheitsbehörde Hamburg",
      },
    ],
  },
  {
    title: "Praxis",
    entries: [
      {
        year: "1988",
        text: "Gründung Naturheilpraxis für Naturheilverfahren und Ohrakupunktur",
      },
    ],
  },
  {
    title: "Weitere Aus- und Fortbildungen",
    entries: [
      { year: "1988", text: "Fortbildung in Neuraltherapie" },
      {
        year: "1990–1991",
        text: "Ausbildung zum NLP-Practitioner am Odenwald-Institut",
      },
      {
        year: "1991–1993",
        text: "Ausbildung zum NLP-Master-Practitioner bei NLP-Resonanztraining (Gundl Kutschera), Salzburg",
      },
      {
        year: "2013–2015",
        text: "Ausbildung in Augenakupunktur, Prof. John Boel, Dänemark",
      },
      { year: "2023", text: "Ausbildung in Acunova, Prof. John Boel, Dänemark" },
    ],
  },
  {
    title: "Lehre und Verbandsarbeit",
    entries: [
      {
        year: "seit 1989",
        text: "Dozententätigkeit (Augen- und Hals-Nasen-Ohren-Heilkunde, Gesetzeskunde, Praxishygiene; zeitweise: Neurologie, Endokrinologie, Praxisführung)",
      },
      {
        year: "1993",
        text: "Mitbegründer der ARCANA-Heilpraktikerschule, Hamburg und einer deren Leiter",
      },
      {
        year: "2001",
        text: "Mitbegründer der ABIS-Heilpraktikerausbildung, Hamburg und einer deren Leiter",
      },
      {
        year: "2001",
        text: "Mitbegründer der Hanseatischen Naturheilkunde-Akademie, Hamburg und einer deren Organisatoren",
      },
      {
        year: "seit 2014",
        text: "Vortragstätigkeit für Fachverband Deutscher Heilpraktiker, versch. Landesverbände",
      },
      {
        year: "seit 2016",
        text: "1. Vorsitzender des Vereins zur Ausbildung der Heilpraktikerinnen und Heilpraktiker in Hamburg e.V. und Mitarbeit im Schulleitungsteam ARCANA/ABIS",
      },
      {
        year: "seit 2016",
        text: "Vortragstätigkeit für Fa. Dr. Pandalis, Urheimische Medizin",
      },
      {
        year: "seit 2017",
        text: "Gutachter für „Weiterbildung Hamburg e.V.“",
      },
      {
        year: "seit 2018",
        text: "Fernlehrer für „Traditionelle europäische Medizin“, ILS – Institut für Lernsysteme, Hamburg",
      },
      {
        year: "zeitweise",
        text: "Seminartätigkeit für Osterberg-Institut bei Eutin",
      },
    ],
  },
];

export const vitaHighlights: VitaEntry[] = [
  { year: "1984–1987", text: "Heilpraktikerausbildung in Hamburg, 3-jährige Vollzeitausbildung" },
  { year: "1987", text: "Heilpraktiker-Erlaubnis durch Gesundheitsbehörde Hamburg" },
  { year: "1988", text: "Gründung Naturheilpraxis für Naturheilverfahren und Ohrakupunktur" },
  {
    year: "seit 1989",
    text: "Dozententätigkeit (Augen- und Hals-Nasen-Ohren-Heilkunde, Gesetzeskunde, Praxishygiene)",
  },
  { year: "2013–2015", text: "Ausbildung in Augenakupunktur, Prof. John Boel, Dänemark" },
  { year: "2023", text: "Ausbildung in Acunova, Prof. John Boel, Dänemark" },
];

export const anfahrt = {
  heading: "Wie finden Sie zur Praxis?",
  parking: [
    "Das Viertel ist mit Parkplätzen nicht sehr üppig ausgestattet.",
    "Es wird aber immer wieder einer frei …",
  ],
  recommendation:
    "Meine Empfehlung: benutzen Sie lieber öffentliche Verkehrsmittel, Ihre Verbindung können Sie sich hier anzeigen lassen:",
  walkIntro: "Fußweg von den öffentlichen Verkehrsmitteln:",
  routes: [
    {
      from: "von Norden",
      options: [
        "U1 – Alsterdorf – 10 min Fußweg",
        "U1 – Alsterdorf – dann Bus 109 bis „Wilhelm-Metzger-Straße“ – 3 min Fußweg",
      ],
    },
    {
      from: "von Süden",
      options: [
        "U1 – Lattenkamp – 10 min Fußweg",
        "Bus 109 bis „Wilhelm-Metzger-Straße“ – 3 min Fußweg",
      ],
    },
  ],
  closing: "Der beste Weg zur Gesundheit ist der Fußweg …",
};
