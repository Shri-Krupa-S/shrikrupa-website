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
    product: 'Byzzer · Data on Demand',
    achievements: [
      { metric: '100+', description: 'critical production issues resolved' },
      { metric: '2 sprints', description: 'to bring open defects to single digits' },
      { metric: 'Fewer calls', description: 'through multi-market data caching' },
    ],
    highlights: [
      'Own and modernize the revenue-critical Data on Demand module in NIQ’s Byzzer retail analytics platform.',
      'Led a TypeScript frontend refactor with modular architecture, strict typing, custom hooks, virtual scrolling, memoization, and context-based state management.',
      'Designed multi-market data caching to reduce redundant API calls across widgets and reporting workflows.',
      'Helped resolve 100+ critical production bugs across two sprints, bringing the defect count down to single digits.',
      'Contribute to backend data processing, query builders, report generation, and BigQuery optimization across distributed microservices.',
      'Partner with global teams on code reviews, technical documentation, knowledge transfer, and ongoing re-architecture.',
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
      { metric: '270+', description: 'candidates screened and interviewed' },
      { metric: 'Global team', description: 'Agile delivery and technical mentorship' },
    ],
    highlights: [
      'Stepped into technical leadership during a team leadership gap while continuing hands-on development.',
      'Led Agile delivery across an international team and mentored junior engineers in the PERN stack.',
      'Helped address resource shortages by screening and interviewing more than 270 candidates.',
      'Coordinated governance, audits, risk mitigation, resource planning, and executive reporting.',
    ],
  },
  {
    period: 'JAN 2021 — MAY 2023',
    role: 'Full Stack Developer',
    company: 'Tata Consultancy Services',
    logo: tcsLogo,
    location: 'Chennai, India',
    product: 'Byzzer · Customer Service',
    achievements: [
      { metric: 'Access control', description: 'role-based permissions and guarded routes' },
      { metric: 'Large-data reports', description: 'custom exports for Sales and Product' },
    ],
    highlights: [
      'Scaled a customer service application with a distributed team across India, the UK, and the US.',
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
