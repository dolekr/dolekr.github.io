import type { Education, Experience, SkillGroup } from '../types'

export const profile = `Software tester with a background in frontend development, UX design, IT analysis, and project management. Working in a small development team has strengthened my sense of responsibility and communication skills. Having naturally taken on multiple roles in one team, I thrive in varied environments. Strong eye for detail, well suited to remote work. Currently expanding expertise in AI tools.`

export const experiences: Experience[] = [
  {
    company: 'Professional Development',
    location: null,
    period: 'April 2025 – present',
    roles: [
      {
        title: 'Frontend Dev & AI Tools',
        bullets: [
          'Frontend stack – HTML, CSS, Tailwind CSS, JavaScript, Vue.js, PrimeVue',
          'Collaborating on real-world frontend project under senior guidance',
          'Actively developing skills in AI tools and AI-assisted development',
        ],
      },
    ],
  },
  {
    company: 'CROSS Zlín, a.s.',
    location: 'Zlín',
    period: 'Oct 2024 – Mar 2025',
    roles: [
      {
        title: 'Software Tester',
        bullets: [
          'Department specialising in parking management software — vehicle barriers and payment kiosks supporting cash, card, QR, RFID, and licence plate recognition',
          "Tested the system's backend and frontend, hardware components, payment systems, and their correct integration",
          'Built a reusable test case library covering core product functionality, including parameterised test cases in Azure DevOps',
          'Regularly analysed system logs, used browser DevTools to investigate errors; occasionally used SQL and SSMS to verify server-side data',
          'Took part in backlog management, writing feature descriptions and release notes, sprint planning, and process improvements',
        ],
      },
    ],
  },
  {
    company: 'beecode, s.r.o.',
    location: 'Olomouc',
    period: 'Jan 2022 – Jul 2024',
    roles: [
      {
        title: 'Software Tester & Technical Support',
        bullets: [
          'Team developing native mobile apps (Android & iOS) for major Czech universities, used by tens of thousands of students',
          'Functional and non-functional testing of mobile and web apps, with occasional API testing',
          'Wrote and maintained test cases and test checklists',
          'Managed bug reports in ClickUp — logging, prioritising, and delegating to developers',
          'Provided technical support to students and clients via email, in-app reporting, or on-site meetings',
          'Wrote user manuals and release notes',
        ],
      },
      {
        title: 'IT Analyst & UI/UX Designer',
        bullets: [
          'Analysed business requirements and translated them into feature specifications',
          'Designed user interfaces for mobile and web applications',
          'Created wireframes and interactive prototypes in Figma',
          'Managed visual assets — icons, images, and logos for the applications',
          'Occasionally contributed to market analysis and sales strategy',
          'Created marketing content — social media posts, presentations, and product sheets in Canva',
        ],
      },
      {
        title: 'Scrum Master & Project Manager',
        bullets: [
          'Managed a small development team of 4–6 members using Agile methodology',
          'Maintained and prioritised the product backlog',
          'Facilitated daily standups and improved team communication',
          'Led sprint planning and roadmap planning; monitored progress toward long-term goals',
        ],
      },
    ],
  },
]

export const education: Education[] = [
  {
    year: '2026',
    title: 'Automated Software Testing with Playwright',
    institution: 'Udemy',
  },
  { year: '2025', title: 'Vue – The Complete Guide', institution: 'Udemy' },
  { year: '2025', title: 'The Web Developer Bootcamp', institution: 'Udemy' },
  {
    year: '2023–2025',
    title: 'Google UX Design Professional Certificate',
    institution: 'Coursera',
  },
  { year: '2022', title: 'Digital Academy: Testing', institution: 'Czechitas' },
  { year: '2022', title: 'Become a Coder', institution: 'Czechitas' },
  {
    year: '2019',
    title: 'English B2',
    institution: 'Academic & professional English, CZU',
  },
  {
    year: '2018–2021',
    title: 'Landscape Conservation & Use of Natural Resources, Bc.',
    institution: 'Czech University of Life Sciences in Prague',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Testing & QA',
    items: [
      'Test case design & management',
      'Regression & exploratory testing',
      'REST API Testing (Postman)',
      'Automated Testing (Playwright)',
      'Basic SQL / SSMS',
    ],
  },
  {
    category: 'Development',
    items: [
      'HTML / CSS / Tailwind CSS',
      'JavaScript / Vue.js / PrimeVue',
      'GitHub',
      'Claude (AI-assisted dev)',
    ],
  },
  {
    category: 'Design & Analysis',
    items: [
      'Figma & Canva',
      'Wireframing & prototyping',
      'UI/UX design',
      'Technical writing',
    ],
  },
  {
    category: 'Project Management',
    items: [
      'Agile methodology',
      'Azure DevOps',
      'ClickUp / Jira',
      'Backlog & sprint planning',
    ],
  },
  {
    category: 'Tools',
    items: ['Google Workspace', 'MS Office / LibreOffice', 'MS Teams / Slack'],
  },
]
