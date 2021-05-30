import text from '../assets/text.json'

export interface ChapterType {
  chapterId: number
  chapterNumber: string
  title: string
  text: string
}

export const chapters: Array<ChapterType> = [
  {
    chapterId: 1,
    chapterNumber: 'Chapter One',
    title: 'There’s a ghost mystery…will you help me solve it?',
    text: text.chapterOne,
  },
  {
    chapterId: 2,
    chapterNumber: 'Chapter Two',
    title: 'The ghost map gets bigger',
    text: `You’ve definitely proved that you’re excellent at sleuthing. I’d love for you to solve this ghost mystery with me!

          You’re right, the three places the ghosts have visited near me are the playground, bus shelter and car park. These places have one thing in common. The lights are on all the time.

          Do you have a place nearby to you that has lights on all the time? Can you use your Detective Drawing Skills to make a map for me? Draw your ‘lights on all the time’ place on it too. This way we can start to build a bigger ghost map.

          When you’re done, send your map to me at squishysleuthing@gmail.com, that’s S Q U I S H Y S L E U T H I N G @gmail.com and I’ll reply – check your junk mail if you don’t hear from me!`,
  },
  {
    chapterId: 3,
    chapterNumber: 'Chapter Three',
    title: 'Venture into the night!',
    text: `Thanks for that map. That definitely looks like a place where the lights are on day and night.I’ve given your location a code name. It’s Big Dipper—the brightest stars in the sky!

    Your map made me think of a couple of things. If the ghosts appear where the lights are on, they actually want us to see them. What do they want us to see though?

    I also remembered this nature strip near me that’s always lit. I’m sure the ghosts will go there tonight. If I can venture into the night and set up a camera there, I can record the ghosts and watch the video in the morning. Maybe I can see what they’re trying to show us.

    Can you help me find the best time to sneak out?`,
  },
]
