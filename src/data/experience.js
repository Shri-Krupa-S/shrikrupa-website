import niqLogo from '../assets/niq-logo.png'
import tcsLogo from '../assets/tcs-logo.png'
import risingStarCertificate from '../assets/rising-star-certificate.png'
import bestYoungTalentCertificate from '../assets/best-young-talent-certificate.png'
import helpfulHagridCertificate from '../assets/helpful-hagrid-certificate.png'
import innovistaCertificate from '../assets/tcs-innovista-certificate.png'
import specialAchievementCertificate from '../assets/tcs-special-achievement-certificate.png'
import specialInitiativeCertificate from '../assets/tcs-special-initiative-certificate.png'
import applauseCertificate from '../assets/tcs-applause-certificate.png'
import niqAwardPhoto from '../assets/niq-award-photo.jpg'

export { niqAwardPhoto }

const experience = [
  {
    period: 'JUN 2023 — PRESENT',
    role: 'Full Stack Developer',
    company: 'NielsenIQ',
    logo: niqLogo,
    location: 'Chennai, India',
    product: 'NIQ Byzzer · Data on Demand',
    achievements: [
      { metric: 'Key Developer in $30B Revenue Product', description: 'Byzzer platform nearing 1,000 customers' },
      { metric: 'Led Frontend Refactoring', description: 'of key revenue generating module in the product' },
      { metric: 'Resolved 100+ Critical Bugs', description: 'within in two sprints' },
      { metric: 'Improved UI Performance', description: 'with caching, virtual scrolling, context, and memoization' },
      { metric: 'Rapid Learner', description: 'of complex modules reducing knowledge silos' }
    ],
    highlights: [
      'Contribute to Byzzer, a platform generating $30B in annual revenue and nearing 1,000 customers, through ownership of its Data on Demand (DOD) module.',
      'Built multi-market caching to cut redundant API calls and improve UI performance across widgets and reports.',
      'Resolved 100+ critical production bugs in two sprints, reducing open defects to single digits.',
      'Own and key contributor in Data on Demand (DOD), a heavily used, revenue-critical module in the platform.',
      'Led end-to-end refactoring of high revenue generating module.',
      'Delivered several end-to-end features single handedly, including UI, backend, and database changes.',
      'Contributed to backend data processing, query builders, scheduled and ad-hoc reporting, and BigQuery optimization across microservices.',
      'Contribute actively to re-architecture efforts that strengthen scalability, reliability, and cross-team collaboration.',
    ],
  },
  {
    period: 'JAN 2022 — MAY 2023',
    role: 'Technical Lead (Additional Role)',
    company: 'Tata Consultancy Services',
    logo: tcsLogo,
    location: 'Chennai, India',
    product: 'NIQ Byzzer · Global delivery',
    achievements: [
      { metric: 'Youngest Global Lead', description: 'led a team with 1–20+ years of experience' },
      { metric: '$30B Byzzer Engagement', description: 'helped sustain the NIQ Byzzer client for TCS Business' },
      { metric: 'Interviewed 270+ Candidates', description: 'screened with TCS RMG' },
      { metric: 'Zero Delivery Disruption', description: 'maintained quality and timelines through Agile delivery' },
      { metric: 'Junior Mentorship', description: 'mentored junior engineers and fresh hires in the PERN stack' },
      { metric: 'TCS Governance', description: 'managed audits, metrics, risks, resourcing, and executive updates' },
      { metric: 'Hands-on Leadership', description: 'took on the additional role without stepping away from technical work' },
    ],
    highlights: [
      'Stepped into a leadership gap as the TCS-NIQ account’s youngest lead, managing a global team with 1–20+ years of experience.',
      'Led Agile ceremonies while staying hands-on, maintaining quality and delivery timelines.',
      'Partnered with TCS RMG (Resource Management Group) to stabilize resourcing, screening and interviewing 270+ candidates.',
      'Mentored junior engineers and new hires in the PERN stack, building team capability.',
      'Managed TCS governance—audits, metrics, risks, and resourcing—and reported to leaders in India and the US.',
      'Helped sustain $30B Byzzer engagement for NIQ.',
    ],
  },
  {
    period: 'JAN 2021 — MAY 2023',
    role: 'Full Stack Developer',
    company: 'Tata Consultancy Services',
    logo: tcsLogo,
    location: 'Chennai, India',
    product: 'NIQ Byzzer · Customer Service',
    achievements: [
      { metric: 'Global Collaboration', description: 'grew alongside an experienced, international team' },
      { metric: 'Secure Access', description: 'implemented sensitive role-based controls' },
      { metric: 'Large-Scale Reporting', description: 'built data-heavy reports for Sales and Product' },
      { metric: 'Cypress Automation', description: 'implemented test scripts to expand coverage' },
    ],
    highlights: [
      'Scaled a customer service application through Agile collaboration with a distributed team across India, the UK, and the US.',
      'Delivered sensitive access-control features using role-based permissions, guarded routes, and middleware validation.',
      'Built customizable downloadable reports for Sales and Product teams, optimizing large-data report generation.',
      'Strengthened release quality with Jest and Cypress automation and consistent code reviews.',
    ],
  },
]

export const education = {
  institution: 'College of Engineering, Guindy, Anna University',
  degree: 'B.E. in Computer Science and Engineering',
  result: 'CGPA 9.01',
  classification: 'First Class with Distinction',
  distinction: {
    lead: 'Final-year project ranked among Anna University’s ',
    highlight: 'Top 5 in 2020',
    trailing: '.',
  },
}

export const awards = [
  {
    name: 'Rising Star Award',
    year: '2025',
    company: 'NIQ',
    organization: 'NIQ Global Technology Awards',
    certificate: risingStarCertificate,
  },
  {
    name: 'Best Young Talent Award',
    year: '2022',
    company: 'TCS',
    organization: 'TCS Global Townhall',
    certificate: bestYoungTalentCertificate,
  },
  {
    name: 'Helpful Hagrid Award',
    year: '2021',
    company: 'TCS',
    organization: 'TCS Client Appreciation',
    certificate: helpfulHagridCertificate,
  },
  {
    name: 'Innovista Top Seed',
    year: '2022',
    company: 'TCS',
    organization: 'TCS Gems',
    certificate: innovistaCertificate,
  },
  {
    name: 'Special Achievement Award',
    year: '2021',
    company: 'TCS',
    organization: 'TCS Gems',
    certificate: specialAchievementCertificate,
  },
  {
    name: 'Special Initiative Award',
    year: '2023',
    company: 'TCS',
    organization: 'TCS',
    certificate: specialInitiativeCertificate,
  },
  {
    name: 'Applause Award',
    year: '2022',
    company: 'TCS',
    organization: 'TCS Gems',
    certificate: applauseCertificate,
  },
]

export default experience
