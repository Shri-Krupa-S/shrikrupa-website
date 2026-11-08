export const articleCategories = [
  {
    id: 'technology',
    number: '01',
    label: 'TECHNOLOGY',
    title: 'A Developer\'s Field Notes.',
    description: 'Some code, some concepts, some lessons learnt along the way.',
  },
  {
    id: 'learnings',
    number: '02',
    label: 'LEARNINGS',
    title: 'Things I didn’t know yesterday.',
    description: 'A growing collection of things worth figuring out.',
  },
  {
    id: 'life-philosophy',
    number: '03',
    label: 'LIFE & PHILOSOPHY',
    title: 'Still figuring this one out.',
    description: 'Debugging life, code & everything in between.',
  },
]

export const articles = [
  {
    slug: 'performance-is-a-product-feature',
    category: 'technology',
    title: 'Performance Is a Product Feature',
    publishedOn: '2026-11-08',
    content: [
      'Performance work is not just about impressive metrics. It is about removing friction so people can stay focused on what they came to do.',
      'A slow interface interrupts a user’s train of thought. A fast, predictable one lets the work remain the focus. That makes performance part of the product experience, not just an engineering concern.',
      'The useful first step is to find where the friction actually is. Measure real interactions, identify repeated work, and focus on the parts of the experience users feel most. A small, well-targeted improvement can matter more than a broad rewrite.',
      'Caching, virtualizing long lists, and avoiding unnecessary renders are tools—not goals on their own. The best choice is the one that makes the experience measurably more responsive without making the system harder to understand.',
    ],
  },
  {
    slug: 'read-the-code-before-changing-it',
    category: 'learnings',
    title: 'Read the Code Before Changing It',
    publishedOn: '2026-11-08',
    content: [
      'A new task can tempt us to start coding immediately. Taking time to understand the existing system often leads to a smaller, safer, and more useful change.',
      'When entering an unfamiliar codebase, the first useful question is not “Where should I add this?” It is “How does this work today?” Following the existing flow reveals the conventions, constraints, and decisions that are easy to miss from a single file.',
      'That context can change the solution. A helper may already exist, a component may be shared across pages, or an edge case may be handled in a different layer. Understanding those connections keeps a focused change from becoming a surprise elsewhere.',
      'Reading first is not slower engineering. It is how we make changes with confidence—and leave the code easier for the next person to understand.',
    ],
  },
  {
    slug: 'progress-is-a-practice',
    category: 'life-philosophy',
    title: 'Progress Is a Practice',
    publishedOn: '2026-11-08',
    content: [
      'Not every season brings a dramatic breakthrough. Sometimes progress is the quiet habit of showing up, staying curious, and trying again.',
      'It is easy to measure progress only by the visible milestones: the launch, the promotion, the finished plan. But much of becoming better happens between those moments—in the questions we ask and the small decisions we repeat.',
      'Some days the work is about moving forward. Other days it is about learning why something did not work, asking for help, or making space to begin again. Those days count too.',
      'I am still figuring out how to balance ambition with patience. For now, I am learning to trust steady effort: stay curious, do the next thoughtful thing, and let the bigger picture take shape over time.',
    ],
  },
]
