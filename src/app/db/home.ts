import { HomeDbModel } from './models';

export const HomeDB: HomeDbModel = {
  presentation: {
    title: {
      EN: 'Let\'s Rachelable your project',
      ES: 'Vamos a Racheljorar tu proyecto'
    },
    content: {
      EN: 'Workaholic undergoing constant personal and professional development with a responsible, punctual, organised and cheerful character. I push my self to do quality work, continuously learning and contributing to others around me. I would give you a pleasant work experience and growth.',
      ES: 'Adicta al trabajo, en constante desarrollo personal y profesional con un carácter responsable, puntual, organizado y alegre. Me esfuerzo por hacer un trabajo de calidad, continuamente aprendiendo y contribuyendo a los que me rodean. Te daría una agradable experiencia laboral y crecimiento.'
    }
  },
  callToAction: {
    content: {
      EN: 'Want to know more about me?',
      ES: '¿Quieres saber más acerca de mí?'
    },
    buttonText: {
      EN: 'Click here',
      ES: 'Haz clic aquí'
    },
  },
  testimonials: [
    {
      image: '',
      person: 'Mariangelina Socorro Patiño',
      title: {
        EN: 'Lawyer at Banco Venezolano de Crédito',
        ES: 'Abogado en Banco Venezolano de Crédito'
      },
      content: {
        EN: 'Rachel is a responsible, committed person with leadership and initiative. She teaches the people around her to continue growing, she assumes mistakes humbly, and she is prepared for any crisis. Any company that hires it will have a productive and proactive person, and it will be a luxury among the staff.',
        ES: 'Rachel es una persona responsable, comprometida, con liderazgo e iniciativa. Enseña a las personas que están a su alrededor para seguir creciendo, asume los errores con humildad, y está preparada para cualquier crisis. Cualquier empresa que la contrate tendrá una persona productiva y proactiva, y será un lujo dentro del personal.'
      }
    },
    {
      image: '',
      person: 'Jean Lagarde Neu',
      title: {
        EN: 'Bilingual Administrative Assistant',
        ES: 'Auxiliar Administrativo Bilingüe'
      },
      content: {
        EN: 'Rachel is a very collaborative person and committed to what she does, empathy, objective focus and teamwork are other of her great qualities. It has been so nice having her as a supervisor!',
        ES: 'Rachel es una persona muy colaboradora y comprometida con lo que hace, la empatía el enfoque objetivo y trabajo en equipo son otras de sus grandes cualidades. ¡Ha sido muy agradable tenerla como supervisora!'
      }
    },
    {
      image: '',
      person: 'Yasir Patel',
      title: {
        EN: 'Head of School at The British School Caracas',
        ES: 'Director en The British School Caracas'
      },
      content: {
        EN: 'I have known Rachel Mata for 3 years.  She is an enthusiastic and self-motivated individual who will complete all tasks as required, and more. Rachel often goes the extra mile and offers creative solutions when she sees possible improvements. I recommend Rachel to future employers - she has a bright future and will be an asset to anybody.',
        ES: 'Conozco a Rachel Mata desde hace 3 años. Es una persona entusiasta y motivada que completará todas las tareas según sea necesario y más. Rachel a menudo hace un esfuerzo adicional y ofrece soluciones creativas cuando ve posibles mejoras. Recomiendo a Rachel a futuros empleadores: tiene un futuro brillante y será una ventaja para cualquiera.'
      }
    }
  ]
};
