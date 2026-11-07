const projects = [
  {
    number: '01',
    category: 'NIQ BYZZER · RETAIL ANALYTICS',
    title: 'Data on Demand',
    description:
      'Modernizing a revenue-critical retail analytics module with a more maintainable frontend, multi-market caching, and optimized data workflows.',
    stack: ['React', 'TypeScript', 'Node.js', 'BigQuery', 'GCP'],
    outcomes: [
      'Resolved 100+ critical production bugs across two sprints, reducing open defects to single digits.',
      'Reduced redundant API calls with a multi-market data caching strategy.',
      'Improved large-data interactions with virtual scrolling and memoization.',
    ],
  },
  {
    number: '02',
    category: 'NIQ BYZZER · CUSTOMER SERVICE',
    title: 'Customer service & reporting',
    description:
      'Developed customer service workflows, carefully controlled access features, and downloadable reports for Sales and Product teams.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Jest', 'Cypress'],
    outcomes: [
      'Added role-based access, guarded routes, and middleware validation for sensitive features.',
      'Built customizable downloadable reports and optimized large-data generation.',
      'Supported a globally distributed product team across India, the UK, and the US.',
    ],
  },
]

export default projects
