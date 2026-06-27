import {
  School,
  GraduationCap,
  Code2,
  BrainCircuit,
  Stethoscope,
  Video,
  HelpCircle,
  Award,
  Briefcase,
  Users,
} from 'lucide-react'

export const STATS = [
  { label: 'Students', sub: 'Learning & Growing', value: '5000+', icon: Users },
  { label: 'Tutors', sub: 'Experts You Can Trust', value: '100+', icon: GraduationCap },
  { label: 'Courses', sub: 'From Basics to Advanced', value: '200+', icon: School },
]

export const CATEGORIES = [
  { label: 'School', sub: 'Classes 6 – 12', icon: School },
  { label: 'College', sub: 'UG & PG', icon: GraduationCap },
  { label: 'Programming', sub: 'Code Your Future', icon: Code2 },
  { label: 'AI', sub: 'Artificial Intelligence', icon: BrainCircuit },
  { label: 'NEET / JEE', sub: 'Medical & Engineering', icon: Stethoscope },
]

export const COURSES = [
  {
    title: 'Class 10 Mathematics',
    sub: 'Complete Course',
    tag: 'CLASS 10 MATHEMATICS',
    rating: 4.8,
    reviews: '1.2K',
    tutor: 'Ankush Sir',
    cardBg: 'bg-maroon-950',
  },
  {
    title: 'Python for Beginners',
    sub: 'Zero to Hero',
    tag: 'PYTHON',
    tagline: 'for Beginners',
    rating: 4.9,
    reviews: '968',
    tutor: 'Harsh Sharma',
    cardBg: 'bg-maroon-900',
  },
  {
    title: 'NEET Biology',
    sub: 'Full Syllabus',
    tag: 'NEET BIOLOGY',
    tagline: 'Full Syllabus',
    rating: 4.7,
    reviews: '743',
    tutor: "Dr. Priyanka Ma'am",
    cardBg: 'bg-maroon-800',
  },
  {
    title: 'Data Structures & Algorithms',
    sub: 'Using C++',
    tag: 'DATA STRUCTURES',
    tagline: '& ALGORITHMS',
    rating: 4.8,
    reviews: '856',
    tutor: 'Love Babbar Sir',
    cardBg: 'bg-maroon-900',
  },
  {
    title: 'AI Fundamentals',
    sub: 'From Basics',
    tag: 'AI',
    tagline: 'Fundamentals',
    rating: 4.6,
    reviews: '512',
    tutor: 'Arjun Verma',
    cardBg: 'bg-maroon-950',
  },
]

export const TUTORS = [
  { name: 'Ankush Sir', subject: 'Mathematics', rating: 4.9, reviews: '1.2K', exp: '10+ Years Exp.' },
  { name: 'Harsh Sharma', subject: 'Programming', rating: 4.9, reviews: '968', exp: '8+ Years Exp.' },
  { name: "Dr. Priyanka Ma'am", subject: 'Biology', rating: 4.8, reviews: '743', exp: '12+ Years Exp.' },
  { name: 'Love Babbar Sir', subject: 'DSA Expert', rating: 4.9, reviews: '856', exp: '7+ Years Exp.' },
  { name: 'Arjun Verma', subject: 'AI & ML', rating: 4.8, reviews: '512', exp: '6+ Years Exp.' },
]

export const WHY_CHOOSE = [
  { icon: Video, label: 'Live Classes', sub: 'Interactive & engaging live sessions' },
  { icon: HelpCircle, label: 'Doubt Solving', sub: 'Instant doubt resolution by expert mentors' },
  { icon: Award, label: 'Certificates', sub: 'Get certified & boost your profile' },
  { icon: Briefcase, label: 'Career Guidance', sub: 'Expert advice for better career decisions' },
  { icon: Users, label: 'Placement Support', sub: 'Interview prep & placement assistance' },
]

export const TESTIMONIALS = [
  {
    quote: 'D for Doubts has completely changed the way I learn. Doubt solving is super fast!',
    name: 'Riya Sharma',
  },
  {
    quote: 'The mentors are amazing and the courses are very well structured.',
    name: 'Arjun Verma',
  },
  {
    quote: 'Live classes and practice tests helped me boost my NEET score.',
    name: 'Ananya Gupta',
  },
]

export const FOOTER_LINKS = {
  quick: ['Home', 'Courses', 'Tutors', 'About Us', 'Contact Us'],
  popular: ['Class 10 Maths', 'Class 12 Physics', 'JEE Main & Advanced', 'NEET Biology', 'Python Programming'],
}
