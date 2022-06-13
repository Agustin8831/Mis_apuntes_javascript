import Course from './course.js'
import LearningPath from './learningPath.js'
import {FreeStudent,Teacher} from './student.js';

// Course:

const cursosProgBasica = new Course(
  {
    name: "introduccion a programacion basica",
    isFree: true,
  }
);
  const cursosGit = new Course(
    {
      name: "Introduccion a Git",
  }
);
const cursosCss = new Course(
  {
    name: "Introduccion a Css",
  }
);
const cursosHtml = new Course(
  {
    name: "Introduccion a Html",
  }
);

// LearningPath:

const escuelaWeb = new LearningPath(
  {
    name: "Escuela en desarrolo Web",
    logo: "https://images.pexels.com/photos/12348118/pexels-photo-12348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Aprende desarrollo web Full Stack desde cero con HTML, CSS y JavaScript. Domina herramientas como React, Vue, Angular y backend development con Node.js.",
    teachers: [
      "Ignacio rodriguez","Pablo vargas","Luis hernandez","Dulce ruiz","estefany garcia"
    ],
    levels: 4,
    cursos: [
      cursosProgBasica.name,
      cursosHtml.name,
      cursosCss.name,
      "Introduccion a JAVASCRIPT",          
      "Introduccion a REACT.JS",
    ]
  }
);
const escuelaDataScience = new LearningPath(
  {
    name: "Escuela en Data Science",
    logo: "https://images.pexels.com/photos/12348118/pexels-photo-12348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Domina las herramientas y técnicas para Data Science e Inteligencia Artificial.",
    teachers: [
      "Ignacio rodriguez","Pablo vargas","Luis hernandez","Dulce ruiz","estefany garcia"
    ],
    levels: 3,
    cursos: [
    "introduccion a programacion basica",
      "Introduccion a PYTHON",
      "Introduccion a TERMINAL",
      "Introduccion a IA",
      cursosGit.name,
      "Introduccion a ESTADISTICA",
    ]
  }
);
const escuelaWordpress = new LearningPath(
  {
    name: "Escuela de Wordpress",
    logo: "https://images.pexels.com/photos/12348118/pexels-photo-12348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Aprende desarrollo web Full Stack desde cero con HTML, CSS y JavaScript. Domina herramientas como React, Vue, Angular y backend development con Node.js.",
    teachers: [
      "Luis hernandez","Dulce ruiz","estefany garcia"
    ],
    levels: 4,
    cursos: [
      cursosProgBasica.name,
      cursosHtml.name,
      cursosCss.name,
      "Introduccion a JAVASCRIPT"
    ]
  }
);
const escuelaAws = new LearningPath(
  {
    name: "Escuela en Aws",
    logo: "https://images.pexels.com/photos/12348118/pexels-photo-12348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Domina las herramientas y técnicas para Data Science e Inteligencia Artificial.",
    teachers: [
      "Ignacio rodriguez","Pablo vargas","estefany garcia"
    ],
    levels: 3,
    cursos: [
      cursosProgBasica.name,
      "Introduccion a PYTHON",
      "Introduccion a TERMINAL",
      "Introduccion a IA",
      cursosGit.name,
      "Introduccion a ESTADISTICA",
    ]
  }
);

// Student

const juan = new FreeStudent (
  {
    name: "Juan",
    username: "Juan_8831",
    email: "Juan@gmail.com",
    instagram: "Juan_Perez_883",
    facebook: "JuanPerez",
    twitter: "JuanPerez883",
    learningPath: [
      escuelaWeb,
      escuelaWordpress,
      escuelaAws,
      escuelaDataScience,
    ]
  }
);

const freddy = new Teacher (
  {
    name: "freddy",
    username: "freddy_8831",
    email: "freddy@gmail.com",
    instagram: "freddy_883",
    facebook: "freddyPerez",
    twitter: "freddy883",
  }
);
console.log(juan);
console.log(freddy);

juan.publicarComentario("Esta bueno el curso");
console.log("");
freddy.publicarComentario("Pudo haver mejorado")