
// import React from "react";
// import E_Voting from '../assets/E_Voting.png'
// import tweeter_analysis from '../assets/tweeter_analysis.jpeg'
// import Footer from './Footer'

// const ProjectCard = ({ image, title, description, git, technologies }) => {
//     return (
//         <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             {title=='AI based Tuberculosis Classification' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={E_Voting} alt="" />
//             </a>}
//             {title=='User Manual Interpreter' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={tweeter_analysis} alt="" />
//             </a>}
//             {title=='Ethereum Blockchain driven E- voting' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={E_Voting} alt="" />
//             </a>}
//             {title=='Twitter Sentiment Analysis' && <a href="#">
//                 <img className="w-full rounded-t-lg h-auto object-cover " src={tweeter_analysis} alt="" />
//             </a>}
//             <div className="p-4 sm:p-6">
//                 <a href="#">
//                     <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
//                 </a>
//                 <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
//             </div>
//             <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
//                 <div className='flex flex-wrap gap-2 pl-2'>
//                     {technologies.map((tag, index) => (
//                         <p
//                             key={`${index}-${tag}`}
//                             className='text-[14px] text-blue-500'
//                         >
//                             #{tag}
//                         </p>
//                     ))}
//                 </div>
//                 <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
//             </div>
//         </div>
//     );
// };
  
// const Projects = () => {
//     return (
//         <div className="bg-black">
//             <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
//                 {project.map((item, index) => (
//                     <ProjectCard
//                         key={index}
//                         image={item.image}
//                         title={item.title}
//                         description={item.description}
//                         links={item.links}
//                         git={item.git}
//                         technologies={item.technologies}
//                     />
//                 ))}
//             </div>
//             <Footer/>
//         </div>
//     );
// }


// export const project = [
//     {
//         title:'AI based Tuberculosis Classification',
//         description:'This project leverages advanced machine learning techniques to automatically detect and classify tuberculosis in chest X-ray images.',
//         image: {E_Voting},
//         git:'https://github.com/arun-meradakonda',
//         technologies:['YOLO v8' ,'ReactJS' , 'Fastapi']
//     },
//     {
//         title:'User Manual Interpreter',
//         description:'Implemented an AI-based assistant capable of understanding and responding to user queries about manual content.',
//         image: {tweeter_analysis},
//         git:"https://github.com/arun-meradakonda",
//         technologies:['MERN stack', 'NLP', 'OpenAI']
//     },
//     {
//         title:'Twitter Sentiment Analysis',
//         description:'Developed the mobile application using Flutter, enabling cross-platform support.',
//         image: {tweeter_analysis},
//         git:"https://github.com/arun-meradakonda",
//         technologies:[ 'Flutter', 'Flask', 'NLP']
//     },
//     {
//         title:'Ethereum Blockchain driven E- voting',
//         description:'Developed MERN satck web application to conduct E voting in small organizations using Blockchain',
//         image: {E_Voting},
//         git:"https://github.com/arun-meradakonda",
//         technologies:[ 'MERN', 'Smart Contract', 'Truffle']
//     }
// ]

// export default Projects

import React from "react";
import E_Voting from '../assets/E_Voting.png';
import tweeter_analysis from '../assets/tweeter_analysis.jpeg';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="project-container">
      <a href="#">
        <img className="project-image" src={image} alt={title} />
      </a>
      <div className="project-content">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
        <div className="flex justify-between items-end mt-auto">
          <div className="project-tags">
            {technologies.map((tag, index) => (
              <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
                #{tag}
              </p>
            ))}
          </div>
          <a href={git} className="project-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: 'AI based Tuberculosis Classification',
    description: 'This project leverages advanced machine learning techniques to automatically detect and classify tuberculosis in chest X-ray images.',
    image: E_Voting,
    git: 'https://github.com/arun-meradakonda',
    technologies: ['YOLO v8', 'ReactJS', 'Fastapi']
  },
  {
    title: 'User Manual Interpreter',
    description: 'Implemented an AI-based assistant capable of understanding and responding to user queries about manual content.',
    image: tweeter_analysis,
    git: "https://github.com/arun-meradakonda",
    technologies: ['MERN stack', 'NLP', 'OpenAI']
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: 'Developed the mobile application using Flutter, enabling cross-platform support.',
    image: tweeter_analysis,
    git: "https://github.com/arun-meradakonda",
    technologies: ['Flutter', 'Flask', 'NLP']
  },
  {
    title: 'Ethereum Blockchain driven E-voting',
    description: 'Developed MERN stack web application to conduct E voting in small organizations using Blockchain',
    image: E_Voting,
    git: "https://github.com/arun-meradakonda",
    technologies: ['MERN', 'Smart Contract', 'Truffle']
  }
];

export default Projects;
