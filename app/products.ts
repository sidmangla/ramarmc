// Product line shared by the home page cards and the /products page.
export type Product = {
  id: string;
  code: string;
  name: string;
  range: string;
  pitch: string;
  detail: string;
  uses: string[];
  photo: string;
  photoAlt: string;
};

export const products: Product[] = [
  {
    id: "standard",
    code: "M7.5–M25",
    name: "Standard grades",
    range: "M7.5, M10, M15, M20, M25",
    pitch: "Everyday concrete for homes and commercial buildings.",
    detail:
      "From blinding and levelling layers to footings, slabs, columns and beams. Each grade is batched to a designed mix for the strength and exposure on your drawing, not a nominal one.",
    uses: [
      "PCC, levelling and blinding",
      "Footings, rafts and plinth beams",
      "Slabs, columns and beams",
      "Kerbs, drains and mass fill",
    ],
    photo: "/pour.jpg",
    photoAlt: "Concrete being poured into a footing",
  },
  {
    id: "high-strength",
    code: "M30–M60",
    name: "High-strength grades",
    range: "M30, M35, M40, M45, M50, M55, M60",
    pitch: "For heavy floors, tall frames and precast work.",
    detail:
      "Higher-grade mixes with controlled slump and admixtures for industrial floors laid to a flatness spec, high-rise frames and precast elements that need early strength.",
    uses: [
      "Warehouse and industrial floors",
      "Loading bays and hardstands",
      "High-rise columns and transfer beams",
      "Precast and high-strength elements",
    ],
    photo: "/plant-silos.jpg",
    photoAlt: "Cement silos and batching tower at the Rama RMC plant",
  },
  {
    id: "scc",
    code: "SCC",
    name: "Self-compacting concrete",
    range: "M30 to M60",
    pitch: "Flows into place under its own weight, with no vibration needed.",
    detail:
      "A high-flow mix that spreads through dense reinforcement and settles without vibrators, leaving a smooth finish with no honeycombing. Flow is tested at site before placement.",
    uses: [
      "Heavily reinforced columns and walls",
      "Thin sections and complex formwork",
      "Precast elements",
      "Fair-face and architectural surfaces",
    ],
    photo: "/hero-truck.jpg",
    photoAlt: "Rama RMC transit mixer at the plant",
  },
  {
    id: "tcc",
    code: "TCC",
    name: "Temperature-controlled concrete",
    range: "Grade to your specification",
    pitch: "Kept cool for thick rafts and mass pours.",
    detail:
      "Batched with chilled water or ice to keep the placing temperature down, so large pours don’t crack from the heat released as the concrete sets.",
    uses: [
      "Thick raft foundations",
      "Mass pours and pile caps",
      "Summer pours in high heat",
      "Large continuous pours",
    ],
    photo: "/plant-wide.jpg",
    photoAlt: "Rama RMC batching plant yard",
  },
  {
    id: "lwc",
    code: "LWC",
    name: "Lightweight concrete",
    range: "Density to your specification",
    pitch: "Cuts dead load where strength isn’t the priority.",
    detail:
      "A low-density mix that is lighter on the structure and easy to place, for filling and sloping work where a normal-weight concrete would add unnecessary load.",
    uses: [
      "Sunken area filling",
      "Roof slopes and screeds",
      "Insulation layers",
      "Non-structural partitions",
    ],
    photo: "/hero-plant.jpg",
    photoAlt: "Rama RMC plant with transit mixer",
  },
];

// Job-to-grade guide shown on the products page.
export const gradeGuide: { job: string; grade: string }[] = [
  { job: "PCC, levelling and blinding", grade: "M7.5 – M10" },
  { job: "Kerbs, drains and mass fill", grade: "M15" },
  { job: "Residential footings and slabs", grade: "M20" },
  { job: "Columns, beams and rafts", grade: "M25" },
  { job: "Warehouse and industrial floors", grade: "M30 – M35" },
  { job: "High-rise frames and heavy floors", grade: "M35 – M40" },
  { job: "Precast and high-strength work", grade: "M45 – M60" },
  { job: "Congested reinforcement, fair-face finish", grade: "SCC" },
  { job: "Thick rafts and mass pours", grade: "TCC" },
  { job: "Sunken filling and roof slopes", grade: "LWC" },
];
