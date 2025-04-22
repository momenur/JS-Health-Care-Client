// Type declaration

interface Award {
  id: number;
  title: string;
  year: string;
  issuer: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
}

interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string;
  education: string;
  experience: string;
  bio: string;
}

// Fake data declaration
export const awards: Award[] = [
  {
    id: 1,
    title: "Excellence in Patient Care",
    year: "2023",
    issuer: "American Medical Association",
    description:
      "Awarded for exceptional patient satisfaction and quality of care.",
  },
  {
    id: 2,
    title: "Top Medical Practice",
    year: "2022",
    issuer: "Healthcare Leaders Association",
    description:
      "Recognized as one of the top medical practices in the region.",
  },
  {
    id: 3,
    title: "Innovation in Healthcare",
    year: "2021",
    issuer: "Medical Innovation Forum",
    description:
      "Awarded for implementing innovative healthcare solutions and technologies.",
  },
  {
    id: 4,
    title: "Community Service Award",
    year: "2020",
    issuer: "City Health Department",
    description:
      "Recognized for outstanding contributions to community health initiatives.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer L.",
    image: "/placeholder.svg?height=100&width=100",
    text: "The care I received at Dr. Smith Medical Clinic was exceptional. The doctors took the time to listen to my concerns and developed a treatment plan that worked perfectly for me.",
    rating: 5,
    date: "March 15, 2023",
  },
  {
    id: 2,
    name: "Robert T.",
    image: "/placeholder.svg?height=100&width=100",
    text: "After struggling with my condition for years, Dr. Chen finally provided the diagnosis and treatment I needed. The entire staff is professional, caring, and attentive.",
    rating: 5,
    date: "January 8, 2023",
  },
  {
    id: 3,
    name: "Maria G.",
    image: "/placeholder.svg?height=100&width=100",
    text: "I brought my daughter to see Dr. Rodriguez, and I couldn't be happier with the care she received. The clinic is child-friendly, and the staff made us feel comfortable.",
    rating: 5,
    date: "April 22, 2023",
  },
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Cardiology",
    education: "Harvard Medical School",
    experience: "15+ years",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating complex cardiac conditions. She leads our medical team with compassion and expertise.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Senior Physician",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Neurology",
    education: "Johns Hopkins University",
    experience: "12+ years",
    bio: "Dr. Chen specializes in neurological disorders and has pioneered several innovative treatment approaches. His patient-centered care has earned him numerous accolades.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Pediatric Specialist",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "Pediatrics",
    education: "Stanford University",
    experience: "10+ years",
    bio: "Dr. Rodriguez has dedicated her career to children's health. Her gentle approach and expertise make her a favorite among our youngest patients and their families.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Surgical Director",
    image: "/placeholder.svg?height=300&width=300",
    specialization: "General Surgery",
    education: "Yale School of Medicine",
    experience: "18+ years",
    bio: "Dr. Wilson leads our surgical department with precision and care. His innovative surgical techniques have helped countless patients recover faster with better outcomes.",
  },
];
