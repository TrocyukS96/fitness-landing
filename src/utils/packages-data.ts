import { IPackage } from "@/types";

export const packagesData: IPackage[] = [
  {
    id: "1",
    isHidden: false,
    type: "base",
    title: "Base tariff",
    price: {
      label: '47.5€',
      period: 'month',
      price: {
        byn: 162,
        rub: 4350,
        usd: 55.5,
        eur: 47.5,
      },
    },
    icon: "/packages/basePackageIcon.svg",
    features: [
      "8 online lessons",
      "Access to training exercises by the Pilates method",
      "General recommendations for nutrition",
      "Personal chat",
    ],
    badge: null,
  },
  {
    id: "2",
    isHidden: true,
    type: "premium",
    title: "Premium",
    price: {
      label: '76.5€',
      period: 'month',
      price: {
        byn: 260,
        rub: 6990,
        usd: 88.5,
        eur: 76.5,
      },
    },
    icon: "/packages/fireIcon.svg",
    features: [
      "8 online lessons",
      "Lifetime access to training exercises by the Pilates method",
      "General recommendations for nutrition",
      "Personal chat",
      "Homework+check",
      "Yearly discount(15%) on personal services: massage with a home visit and personal training in the Gym24(Nemiga) club",
    ],
    badge: "Best price",
  },  
  {
    id: "3",
    isHidden: false,
    type: "premiumBonus",
    title: "Premium",
    price: {
      label: '43.5€',
      period: 'month',
      price: {
        byn: 148.5,
        rub: 3990,
        usd: 50.8,
        eur: 43.5,
      },
    },
    icon: "/packages/fireIcon.svg",
    features: [
      "8 online lessons",
      "Lifetime access to training exercises by the Pilates method",
      "General recommendations for nutrition",
      "Personal chat",
      "Homework+check",
      "Yearly discount(15%) on personal services: massage with a home visit and personal training in the Gym24(Nemiga) club",
    ],
    badge: "Best price",
  }
];