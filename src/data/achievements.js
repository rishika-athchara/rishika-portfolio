/**
 * ACHIEVEMENTS DATA
 * 
 * To add a new achievement:
 * Simply add a new object to the `achievements` array below.
 * Images can be placed in `public/images/achievements/` or `public/assets/achievements/`.
 */

export const achievementCategories = [
  'All',
  'Academic Excellence',
  'Hackathons',
  'Coding Competitions',
  'Technical Achievements',
  'Leadership',
  'Other Achievements'
];

export const achievements = [
  // ── Verified Record ──────────────────────────────────────────
  {
    id: 1,
    title: "Academic Distinction — 9.64 CGPA",
    organization: "B.Tech Computer Science & Engineering",
    date: "2023 - Present",
    category: "Academic Excellence",
    description: "Maintained consistent academic distinction with a 9.64 CGPA across undergraduate computer science coursework, algorithmic problem solving, and software engineering foundations.",
    image: "",
    credentialUrl: "",
    position: "9.64 CGPA Distinction",
    featured: true,
    isSample: false
  },

  // ── Editable Example Records (Clearly marked as sample) ─────
  {
    id: 2,
    title: "Smart City Innovation Challenge",
    organization: "Inter-College Tech Symposium",
    date: "2024",
    category: "Technical Achievements",
    description: "Designed and engineered an IoT and real-time dashboard concept for urban resource management and traffic optimization.",
    image: "",
    credentialUrl: "https://github.com/rishika-athchara",
    position: "Project Showcase Finalist",
    featured: true,
    isSample: true
  },
  {
    id: 3,
    title: "24-Hour Code Sprint",
    organization: "Developer Student Club",
    date: "2024",
    category: "Coding Competitions",
    description: "Collaborated in a competitive programming sprint solving complex data structure challenges and algorithmic optimization tasks under tight time constraints.",
    image: "",
    credentialUrl: "https://github.com/rishika-athchara",
    position: "Top 10 Finalist",
    featured: false,
    isSample: true
  }
];

export default achievements;
