import atomicHabitsCover from '../assets/books/atomic-habits.png'
import awakeningInWombCover from '../assets/books/awakening-in-womb.jpg'
import eightRulesOfLoveCover from '../assets/books/8-rules-of-love.png'
import sevenHabitsCover from '../assets/books/7-habits.png'
import artOfBeingAloneCover from '../assets/books/the-art-of-being-alone.jpg'
import artOfLettingGoCover from '../assets/books/art-of-letting-go.png'
import buildAnEpicCareerCover from '../assets/books/build-an-epic-career.png'
import howToWinFriendsCover from '../assets/books/how-to-win-friends.jpg'
import ikigaiCover from '../assets/books/ikigai.jpg'
import innerVoiceUltimateGuruCover from '../assets/books/your-inner-voice-ultimate-guru.jpg'
import jonathanLivingstonSeagullCover from '../assets/books/jonathan-livingston-seagull.png'
import learnedOptimismCover from '../assets/books/learned-optimism.jpg'
import magicOfThinkingBigCover from '../assets/books/magic-of-thinking-big.jpg'
import makeEpicMoneyCover from '../assets/books/make-epic-money.png'
import menAreFromMarsCover from '../assets/books/men-are-from-mars-women-are-from-venus.jpg'
import miracleMorningCover from '../assets/books/miracle-morning.webp'
import mountainIsYouCover from '../assets/books/the-mountain-is-you.jpg'
import overcomingFearCover from '../assets/books/overcoming-fear.jpg'
import readPeopleLikeABookCover from '../assets/books/read-people-like-a-book.jpeg'
import satvicRevolutionCover from '../assets/books/satvic-revolution.png'
import setBoundariesFindPeaceCover from '../assets/books/set-boundaries-find-peace.png'
import systemDesignInterviewCover from '../assets/books/system-design-interview.webp'
import subtleArtCover from '../assets/books/subtle-art.jpg'
import theSecretCover from '../assets/books/the-secret.jpg'
import thinkLikeAMonkCover from '../assets/books/think-like-a-monk.png'
import wasIEverEnoughCover from '../assets/books/was-i-ever-enough.jpg'

const books = [
  {
    id: 'think-like-a-monk',
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    status: 'Finished',
    takeaway: 'A calmer mind comes from practicing focus, compassion, and purpose every day.',
    cover: 'indigo',
    coverImage: thinkLikeAMonkCover,
  },
  {
    id: 'the-art-of-overcoming-fear',
    title: 'The Art of Overcoming Fear',
    author: 'Pradip Das',
    status: 'Finished',
    takeaway: 'A guide to handling fear, building self-management skills, and facing challenges.',
    cover: 'sky',
    coverImage: overcomingFearCover,
  },
  {
    id: '7-habits',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    status: 'Finished',
    takeaway: 'Lasting effectiveness starts with taking responsibility and acting from clear principles.',
    cover: 'forest',
    coverImage: sevenHabitsCover,
  },
  {
    id: 'build-an-epic-career',
    title: 'Build an Epic Career',
    author: 'Andrew LaCivita',
    status: 'Finished',
    takeaway: 'A meaningful career is built intentionally by aligning strengths, choices, and opportunities.',
    cover: 'blue',
    coverImage: buildAnEpicCareerCover,
  },
  {
    id: 'make-epic-money',
    title: 'Make Epic Money',
    author: 'Ankur Warikoo',
    status: 'Finished',
    takeaway: 'Understand your money habits, set clear goals, and let consistent decisions compound.',
    cover: 'amber',
    coverImage: makeEpicMoneyCover,
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'Reading',
    takeaway: 'Small, repeatable improvements compound into meaningful change over time.',
    cover: 'sage',
    coverImage: atomicHabitsCover,
  },
  {
    id: '8-rules-of-love',
    title: '8 Rules of Love',
    author: 'Jay Shetty',
    status: 'Finished',
    takeaway: 'Healthy love begins with understanding yourself and grows through deliberate care.',
    cover: 'rose',
    coverImage: eightRulesOfLoveCover,
  },
  {
    id: 'satvic-revolution',
    title: 'The Satvic Revolution',
    author: 'Subah Saraf',
    status: 'Finished',
    takeaway: 'Everyday food and lifestyle choices can be a practical foundation for wellbeing.',
    cover: 'leaf',
    coverImage: satvicRevolutionCover,
  },
  {
    id: 'jonathan-livingston-seagull',
    title: 'Jonathan Livingston Seagull',
    author: 'Richard Bach',
    status: 'Finished',
    takeaway: 'Keep pursuing growth and possibility, even when your path differs from the crowd.',
    cover: 'sky',
    coverImage: jonathanLivingstonSeagullCover,
  },
  {
    id: 'set-boundaries-find-peace',
    title: 'Set Boundaries, Find Peace',
    author: 'Nedra Glover Tawwab',
    status: 'Finished',
    takeaway: 'Clear, kind boundaries make room for healthier relationships and self-respect.',
    cover: 'plum',
    coverImage: setBoundariesFindPeaceCover,
  },
  {
    id: 'art-of-letting-go',
    title: 'The Art of Letting Go',
    author: 'Nick Trenton',
    status: 'Finished',
    takeaway: 'Notice what is outside your control and practice releasing the urge to hold on.',
    cover: 'clay',
    coverImage: artOfLettingGoCover,
  },
  {
    id: 'the-mountain-is-you',
    title: 'The Mountain Is You',
    author: 'Brianna Wiest',
    status: 'Finished',
    takeaway: 'Self-awareness helps turn self-sabotaging patterns into opportunities to grow.',
    cover: 'mountain',
    coverImage: mountainIsYouCover,
  },
  {
    id: 'art-of-being-alone',
    title: 'The Art of Being Alone',
    author: 'Renuka Gavrani',
    status: 'Finished',
    takeaway: 'Solitude can become a place to build a more grounded relationship with yourself.',
    cover: 'midnight',
    coverImage: artOfBeingAloneCover,
  },
  {
    id: 'inner-voice-ultimate-guru',
    title: 'Your Inner Voice, Your Ultimate Guru',
    author: 'Neha Arora',
    status: 'Finished',
    takeaway: 'Make space to listen inwardly and use reflection to guide your next step.',
    cover: 'teal',
    coverImage: innerVoiceUltimateGuruCover,
  },
  {
    id: 'the-secret',
    title: 'The Secret',
    author: 'Rhonda Byrne',
    status: 'Finished',
    takeaway: 'Attention shapes perspective; pair hopeful thinking with purposeful action.',
    cover: 'gold',
    coverImage: theSecretCover,
  },
  {
    id: 'ikigai',
    title: 'Ikigai',
    author: 'Héctor García and Francesc Miralles',
    status: 'Finished',
    takeaway: 'A sense of purpose can be found in small daily practices and meaningful connection.',
    cover: 'coral',
    coverImage: ikigaiCover,
  },
  {
    id: 'subtle-art',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    status: 'Finished',
    takeaway: 'Choose carefully what deserves your energy, and accept the challenges that matter.',
    cover: 'orange',
    coverImage: subtleArtCover,
  },
  {
    id: 'miracle-morning',
    title: 'The Miracle Morning',
    author: 'Hal Elrod',
    status: 'Finished',
    takeaway: 'A purposeful morning routine can make space for personal growth before the day begins.',
    cover: 'sunrise',
    coverImage: miracleMorningCover,
  },
  {
    id: 'magic-of-thinking-big',
    title: 'The Magic of Thinking Big',
    author: 'David J. Schwartz',
    status: 'Finished',
    takeaway: 'Belief expands what feels possible; back it up with action and steady effort.',
    cover: 'violet',
    coverImage: magicOfThinkingBigCover,
  },
  {
    id: 'how-to-win-friends',
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    status: 'Finished',
    takeaway: 'Genuine interest, careful listening, and appreciation build stronger connections.',
    cover: 'blue',
    coverImage: howToWinFriendsCover,
  },
  {
    id: 'read-people-like-a-book',
    title: 'Read People Like a Book',
    author: 'Patrick King',
    status: 'Finished',
    takeaway: 'Observe context and patterns, while staying curious instead of jumping to conclusions.',
    cover: 'slate',
    coverImage: readPeopleLikeABookCover,
  },
  {
    id: 'was-i-ever-enough',
    title: 'Was I Ever Enough',
    author: 'Yash Ranjith Jain',
    status: 'Finished',
    takeaway: 'Your worth is not something you need to earn through other people’s approval.',
    cover: 'berry',
    coverImage: wasIEverEnoughCover,
  },
  {
    id: 'learned-optimism',
    title: 'Learned Optimism',
    author: 'Martin E. P. Seligman',
    status: 'Finished',
    takeaway: 'Explanatory habits can be examined and practiced to build a more resilient outlook.',
    cover: 'green',
    coverImage: learnedOptimismCover,
  },
  {
    id: 'system-design-interview',
    title: 'System Design Interview',
    author: 'Alex Xu',
    status: 'Reading',
    takeaway: 'Break complex design problems into requirements, trade-offs, and clear system components.',
    cover: 'navy',
    coverImage: systemDesignInterviewCover,
  },
  {
    id: 'men-are-from-mars-women-are-from-venus',
    title: 'Men Are from Mars, Women Are from Venus',
    author: 'John Gray',
    status: 'Finished',
    takeaway: 'Clear communication starts with curiosity about how each person experiences and expresses their needs.',
    cover: 'green',
    coverImage: menAreFromMarsCover,
  },
  {
    id: 'awakening-in-womb',
    title: 'Awakening in Womb',
    author: 'Dr. Monika Singh',
    status: 'Finished',
    takeaway: 'A reflective guide to conscious conception, pregnancy, birth, and parenting.',
    cover: 'rose',
    coverImage: awakeningInWombCover,
  },
]

const orderedBooks = [...books].sort((first, second) => {
  if (first.status === second.status) return 0
  return first.status === 'Reading' ? -1 : 1
})

export default orderedBooks
