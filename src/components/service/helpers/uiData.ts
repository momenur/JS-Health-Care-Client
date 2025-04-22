// Type declaration

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface InsuranceProvider {
  id: number;
  name: string;
  logo: string;
}

// Fake data Declaration
export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office, using our online booking system, or through the patient portal. We offer same-day appointments for urgent matters.",
  },
  {
    id: 2,
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your insurance card, photo ID, list of current medications, medical records if available, and any referral forms if required by your insurance.",
  },
  {
    id: 3,
    question: "Do you accept my insurance?",
    answer:
      "We accept most major insurance plans. Please contact our office to verify that we accept your specific insurance plan before your appointment.",
  },
  {
    id: 4,
    question: "How do I refill my prescription?",
    answer:
      "You can request prescription refills through our patient portal, by calling our office, or by having your pharmacy send us a refill request directly.",
  },
];

export const insuranceProviders: InsuranceProvider[] = [
  {
    id: 1,
    name: "Blue Cross Blue Shield",
    logo: "/placeholder.svg?height=60&width=120",
  },
  { id: 2, name: "Aetna", logo: "/placeholder.svg?height=60&width=120" },
  {
    id: 3,
    name: "UnitedHealthcare",
    logo: "/placeholder.svg?height=60&width=120",
  },
  { id: 4, name: "Cigna", logo: "/placeholder.svg?height=60&width=120" },
  { id: 5, name: "Humana", logo: "/placeholder.svg?height=60&width=120" },
  {
    id: 6,
    name: "Kaiser Permanente",
    logo: "/placeholder.svg?height=60&width=120",
  },
];
