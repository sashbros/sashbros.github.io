const aboutMe = "about"
const projects = "projects"
const skills = "skills"
const experience = "experience"
const contact = "contact"

// make sure to add all the five items to the orderList
export let orderList = [aboutMe, projects, skills, experience, contact]

export let entryObject = {
    image: './img/background.jpg',
    name: 'Sarvagna Shukla',
    role: 'Developer',
    nameTextColor: "white",
    roleTextColor: "white", // #ffff00b5 for yellow with `b5` alpha works
    websiteTheme: 'dark' // 'light' or 'dark' <don't use light currently, it's a bit weird>
}

export let aboutMeObject = {
    image: './img/pp.jpg',
    aboutMe: `I'm <b>Sarvagna Shukla</b>, a grad-student, and I always look forward to learn new and innovative tech in the industry. <br /> I try my best to catch-up with the latest trends.
    I have a passion for creating engaging and functional websites, applications, and games.<br /> I love to travel and explore new places, play video games and watch anything worth watching from GOT to AOT and from Dark to Stark.
    `
}

export let projectsList = [
    {
        name: 'Six Degrees of Wikipedia',
        description: `Six Degrees of WikiPedia is all about finding the shortest path between any two WikiPedia pages. It is based on the fact that all wiki pages are six or fewer connections (hyperlinks on the wiki page) away from each other.
        `,
        image: './img/sixdegrees.png',
        projectLink: 'http://sixdegreeswiki.us.to/',
        githubLink: 'https://github.com/sashbros/six-degrees-wiki'
    },
    {
        name: 'DIS',
        description: 'Department Information System (DIS), a website for university, digitizing data and streamlining information access for students and faculty.',
        image: './img/dis.jpg',
        projectLink: '',
        githubLink: 'https://github.com/dis-cse-sgsits/cse-dis-backend/'
    },
    {
        name: `Games Don't Lie`,
        description: `Loved and enjoyed by over 20,000+ people across the internet, the game is about a square on its journey to survive the strange parallel world. Unravel the mystery of a game that lies !!
        `,
        image: './img/gdl.png',
        projectLink: 'https://sashbros.itch.io/games-dont-lie',
        githubLink: 'https://github.com/sashbros/games-dont-lie'
    },
    {
        name: 'Sports Score Tracker',
        description: `A sports game-history tracking android app for users to view the history of games for their favorite teams in all sports.`,
        image: './img/sportsData.png',
        projectLink: '',
        githubLink: 'https://github.com/sashbros/SportsData'
    },
    {
        name: 'AI plays a game',
        description: `I made an AI that plays Google Chrome's Dinosaur Game by itself. Also made a devlog on it. Check it out!`,
        image: './img/chrome-dino.jpg',
        projectLink: 'https://youtu.be/nnR4rI_viqU',
        githubLink: 'https://github.com/sashbros/chrome-dino'
    },
    {
        name: 'Bon Voyage',
        description: `A social platform android app for users to share travel experiences and provide detailed itineraries for cities they have visited.`,
        image: './img/bon-voyage.jpg',
        projectLink: '',
        githubLink: ''
    },
    {
        name: 'Anonymity at Ease',
        description: `Social media portal where people can post while being anonymous, have their private profile page with some points, for which the scoring system is based on their posts' engagement.`,
        image: './img/anon.png',
        projectLink: '',
        githubLink: ''
    },
    {
        name: 'Messenger',
        description: `A real-time chat-website and android app, like Whatsapp, on which people can chat and exchange messages.`,
        image: './img/messenger.jpg',
        projectLink: '',
        githubLink: ''
    },
    {
        name: 'some games',
        description: `collection of all the games made by me. enjoy playing them!`,
        image: './img/games.jpg',
        projectLink: 'https://sashbros.itch.io',
        githubLink: ''
    }
]

export let skillsList = [
    'Java',
    'JavaScript',
    'Python',
    'SpringBoot',
    'React',
    'Express.js',
    'Next.js',
    'Node.js',
    'Flask',
    'Git',
    'GitHub',
    'MongoDB',
    'DynamoDB',
    'Linux',
    'MySQL',
    'PostgreSQL',
    'AWS',
    'GCP',
    'JUnit',
    'Jira'
]

export let experienceList = [
    {
        name: 'Mercari US',
        image: './img/mercari.png',
        role: 'Software Engineer Co-op',
        duration: 'May 2022 - Dec 2022'
    },
    {
        name: 'Deloitte USI',
        image: './img/deloitte.png',
        role: 'Summer Intern',
        duration: 'May 2020 - Jun 2020'
    },{
        name: 'Appointy Inc.',
        image: './img/appointy.png',
        role: 'Product Development Intern',
        duration: 'May 2019 - Jun 2019'
    },
]

export let contactObject = {
    linkedin: 'https://www.linkedin.com/in/sarvagna-shukla/',
    github: 'https://github.com/sashbros',
    youtube: 'https://www.youtube.com/@sashbros4196',
    instagram: 'https://www.instagram.com/sashbros/',
    email: 'mailto:sarvagnashukla21@gmail.com',
}
