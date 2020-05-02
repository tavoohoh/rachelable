import { HomeDbModel } from './models';

export const HomeDB: HomeDbModel = {
  presentation: {
    title: {
      en: 'Let\'s Rachelable your project',
      es: 'Vamos a Rachelorar tu proyecto'
    },
    content: {
      en: 'Workaholic undergoing constant personal and professional development with a responsible, punctual, organised and cheerful character. I push my self to do quality work, continuously learning and contributing to others around me. I would give you a pleasant work experience and growth.',
      es: 'Adicta al trabajo, en constante desarrollo personal y profesional con un carácter responsable, puntual, organizado y alegre. Me esfuerzo por hacer un trabajo de calidad, continuamente aprendiendo y contribuyendo a los que me rodean. Te daría una agradable experiencia laboral y crecimiento.'
    }
  },
  callToAction: {
    content: {
      en: 'Want to know more about me?',
      es: '¿Quieres saber más acerca de mí?'
    },
    buttonText: {
      en: 'Click here',
      es: 'Haz clic aquí'
    },
  },
  testimonials: [
    {
      image: './assets/testimonials/qw1.jpg',
      person: 'Mariangelina Socorro Patiño',
      title: {
        en: 'Lawyer at Banco Venezolano de Crédito',
        es: 'Abogado en Banco Venezolano de Crédito'
      },
      content: {
        en: 'Rachel is a responsible, committed person with leadership and initiative. She teaches the people around her to continue growing, she assumes mistakes humbly, and she is prepared for any crisis. Any company that hires it will have a productive and proactive person, and it will be a luxury among the staff.',
        es: 'Rachel es una persona responsable, comprometida, con liderazgo e iniciativa. Enseña a las personas que están a su alrededor para seguir creciendo, asume los errores con humildad, y está preparada para cualquier crisis. Cualquier empresa que la contrate tendrá una persona productiva y proactiva, y será un lujo dentro del personal.'
      }
    },
    {
      image: './assets/testimonials/we2.jpeg',
      person: 'Jean Lagarde Neu',
      title: {
        en: 'Bilingual Administrative Assistant',
        es: 'Auxiliar Administrativo Bilingüe'
      },
      content: {
        en: 'Rachel is a very collaborative person and committed to what she does, empathy, objective focus and teamwork are other of her great qualities. It has been so nice having her as a supervisor!',
        es: 'Rachel es una persona muy colaboradora y comprometida con lo que hace, la empatía el enfoque objetivo y trabajo en equipo son otras de sus grandes cualidades. ¡Ha sido muy agradable tenerla como supervisora!'
      }
    },
    {
      image: './assets/testimonials/de3.jpeg',
      person: 'Yasir Patel',
      title: {
        en: 'Head of School at The British School Caracas',
        es: 'Director en The British School Caracas'
      },
      content: {
        en: 'I have known Rachel Mata for 3 years.  She is an enthusiastic and self-motivated individual who will complete all tasks as required, and more. Rachel often goes the extra mile and offers creative solutions when she sees possible improvements. I recommend Rachel to future employers - she has a bright future and will be an asset to anybody.',
        es: 'Conozco a Rachel Mata desde hace 3 años. Es una persona entusiasta y motivada que completará todas las tareas según sea necesario y más. Rachel a menudo hace un esfuerzo adicional y ofrece soluciones creativas cuando ve posibles mejoras. Recomiendo a Rachel a futuros empleadores: tiene un futuro brillante y será una ventaja para cualquiera.'
      }
    }
  ]
};
