/**
 * CERTIFICATIONS DATA
 * 
 * To add a new certification:
 * Simply add a new object to the `certifications` array below.
 * Images and PDFs can be placed in `public/certificates/`.
 */

export const certificationCategories = [
  'All',
  'Programming',
  'Web Development',
  'Cloud Computing',
  'Artificial Intelligence & Machine Learning',
  'Data Science',
  'Other'
];

export const certifications = [
  // ── Editable Example Records (Clearly marked as sample) ─────
  {
    id: 1,
    title: "Full-Stack Web Development Foundations",
    issuer: "Coursera / Meta (Sample Template)",
    issueDate: "2024",
    expiryDate: null,
    credentialId: "META-DEV-2024-EX",
    category: "Web Development",
    description: "Comprehensive coverage of modern frontend architectures, responsive design systems, asynchronous JavaScript, and component-based UI engineering.",
    image: "",
    certificateUrl: "",
    verificationUrl: "https://github.com/rishika-athchara",
    featured: true,
    isSample: true
  },
  {
    id: 2,
    title: "Java & Object-Oriented Software Design",
    issuer: "Oracle / University (Sample Template)",
    issueDate: "2024",
    expiryDate: null,
    credentialId: "JAVA-OOP-8891-EX",
    category: "Programming",
    description: "Deep dive into OOP principles, multithreading, collections framework, memory management, and clean modular code architecture in Java.",
    image: "",
    certificateUrl: "",
    verificationUrl: "https://github.com/rishika-athchara",
    featured: true,
    isSample: true
  },
  {
    id: 3,
    title: "Cloud Computing Fundamentals",
    issuer: "AWS Training & Certification (Sample Template)",
    issueDate: "2024",
    expiryDate: null,
    credentialId: "AWS-CCP-SAMPLE",
    category: "Cloud Computing",
    description: "Foundational understanding of cloud infrastructure, compute instances, storage buckets, distributed systems, and modern deployment pipelines.",
    image: "",
    certificateUrl: "",
    verificationUrl: "https://github.com/rishika-athchara",
    featured: false,
    isSample: true
  }
];

export default certifications;
