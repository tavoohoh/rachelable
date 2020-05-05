import { AboutModel } from './models';

export const AboutDB: AboutModel = {
  presentation: {
    title: {
      en: 'About me',
      es: 'Acerca de mi'
    },
    content: {
      en: [
        'Professional constantly developing with a responsible, punctual, organized and proactive personality. Strive to achieve quality work, continually learning and contributing to those around me.',
        'Teamwork and pleasant work experience of growth with extensive experience of administration, project management, Agile Methodologies, SCRUM, customer service oriented, team management, training, Office 365, Google Suits, Microsoft Teams and different planning and organization tools.'
      ],
      es: [
        'Profesional en constante desarrollo con un carácter responsable, puntual, organizado y proactivo. Enfocada en realizar siempre un trabajo de calidad, aprendiendo continuamente y contribuyendo a los que me rodean. Trabajo en equipo y experiencia laboral agradable de crecimiento.',
        'Con un amplio conocimiento en las áreas de administración, gestión y estructuración de proyectos, Metodologías Agile, SCRUM, atención y servicio al cliente, manejo de personal, training, Office 365, Google Suits, Microsoft Teams y diferentes herramientas de planificación y organización.'
      ]
    }
  },
  callToAction: {
    content: {
      en: 'Let\'s talk!',
      es: '¡Vamos a hablar!'
    },
    buttonText: {
      en: 'Contact me',
      es: 'Contactame'
    },
  },
  education: [
    {
      logo: './assets/education/iseb.jpg',
      course: {
        en: 'Master in Business Administration',
        es: 'Maestría en Administración de Negocios'
      },
      institution: 'Instituto Superior Europeo de Barcelona',
      year: 2021,
      tags: {
        en: [
          '#Translator', '#Interpreter', '#English', '#French', '#Spanish'
        ],
        es: [
          '#Traductor', '#Intérprete', '#Ingles', '#Frances', '#Español'
        ]
      }
    },
    {
      logo: './assets/education/iseb.jpg',
      course: {
        en: 'Master in Project Management',
        es: 'Master en gestión de proyectos'
      },
      institution: 'Instituto Superior Europeo de Barcelona',
      year: 2021,
      tags: {
        en: [
          '#Translator', '#Interpreter', '#English', '#French', '#Spanish'
        ],
        es: [
          '#Traductor', '#Intérprete', '#Ingles', '#Frances', '#Español'
        ]
      }
    },
    {
      logo: './assets/education/iseb.jpg',
      course: {
        en: 'Master in Project Management',
        es: 'Master en gestión de proyectos'
      },
      institution: 'Instituto Superior Europeo de Barcelona',
      year: 2021,
      tags: {
        en: [
          '#Translator', '#Interpreter', '#English', '#French', '#Spanish'
        ],
        es: [
          '#Traductor', '#Intérprete', '#Ingles', '#Frances', '#Español'
        ]
      }
    },
    {
      logo: './assets/education/ef.jpg',
      course: {
        en: 'English C2 Proficient',
        es: 'Inglés Proficient C2'
      },
      institution: 'EF Education First',
      year: 2020
    },
    {
      logo: './assets/education/coursera.jpg',
      course: {
        en: 'Teach English Now! Foundational Principles',
        es: '¡Enseña inglés ahora! Principios Fundacionales'
      },
      institution: 'Coursera',
      year: 2018
    },
    {
      logo: './assets/education/coursera.jpg',
      course: {
        en: 'Project Management: The basis of success',
        es: 'Gestión de proyectos: la base del éxito'
      },
      institution: 'Coursera',
      year: 2018
    },
    {
      logo: './assets/education/ucv.png',
      course: {
        en: 'Modern languages, translator and interpreter',
        es: 'Lenguas modernas, traductor e intérprete'
      },
      institution: 'Universidad Central de Venezuela',
      year: 2014,
      tags: {
        en: [
          '#Translator', '#Interpreter', '#English', '#French', '#Spanish'
        ],
        es: [
          '#Traductor', '#Intérprete', '#Ingles', '#Frances', '#Español'
        ]
      }
    }
  ]
};
