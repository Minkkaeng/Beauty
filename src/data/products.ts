export type Product = {
  id: string;
  name: string;
  category: "Serum" | "Cream" | "Toner" | "Cleanser" | "Oil";
  price: number;
  image: string;
  description: string;
  details?: string[];
  usage?: string;
};

export const products: Product[] = [
  {
    id: "serum-01",
    name: "Radiance Vitamin C Serum",
    category: "Serum",
    price: 48000,
    image: "/assets/serum.png",
    description: "Brightening vitamin complex with sea buckthorn oil and pure Vitamin C.",
    details: [
      "Stabilized 15% Vitamin C",
      "Hydrating Sea Buckthorn Oil",
      "Antioxidant-rich formula",
      "Lightweight and fast-absorbing"
    ],
    usage: "Apply 2-3 drops after cleansing and toning. Pat gently into skin."
  },
  {
    id: "cream-01",
    name: "Deep Hydration Alpine Cream",
    category: "Cream",
    price: 55000,
    image: "/assets/hero.png",
    description: "Intensive moisture barrier support with alpine botanicals and ceramides.",
    details: [
      "72-hour moisture lock",
      "Alpine Botanical complex",
      "Strengthens skin barrier",
      "Non-greasy finish"
    ],
    usage: "Last step of your skincare routine. Massage onto face and neck."
  },
  {
    id: "toner-01",
    name: "Gentle Balancing Rose Toner",
    category: "Toner",
    price: 32000,
    image: "/assets/ingredients.png",
    description: "PH-balancing mist with Bulgarian rose water and chamomile.",
    details: [
      "100% Bulgarian Rose Water",
      "Soothes sensitive skin",
      "Optimizes skin pH",
      "Refreshing mist application"
    ],
    usage: "Spray directly onto face or apply with a cotton pad after cleansing."
  },
  {
    id: "cleanser-01",
    name: "Pure Botanical Oil Cleanser",
    category: "Cleanser",
    price: 38000,
    image: "/assets/serum.png", // Reusing image for demo
    description: "Gentle oil-to-milk cleanser that dissolves makeup and impurities.",
    details: [
      "Natural Plant Oils",
      "Deeply cleanses pores",
      "Rinses clean without residue",
      "Gentle on eyes"
    ],
    usage: "Massage onto dry skin, emulsify with water, then rinse thoroughly."
  },
  {
    id: "oil-01",
    name: "Face Glow Rejuvenating Oil",
    category: "Oil",
    price: 64000,
    image: "/assets/hero.png", // Reusing image for demo
    description: "Luxury facial oil for deep nourishment and a radiant glow.",
    details: [
      "Prickly Pear Seed Oil",
      "Intensive nourishment",
      "Improves skin elasticity",
      "Premium botanical scent"
    ],
    usage: "Mix 1-2 drops with your cream or apply as the final step."
  }
];
