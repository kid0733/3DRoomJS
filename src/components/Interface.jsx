import React from 'react'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { currentProjectAtom, projects } from './Projects'
import { ValidationError,useForm } from "@formspree/react";

const skills = [
    {
        title: "React",
        img: "/icons/react.svg" 
    },
    {
        title: "NextJS",
        img: "/icons/nextjs.svg", 
    },
    {
        title: "JavaScript",
        img: "/icons/javascript.svg", 
    },
    {
        title: "Python",
        level: "80",
        img: "/icons/python.svg", 
    },
    {
        title: "MongoDB",
        level: "40",
        img: "/icons/mongodb.svg", 
    },
    {
        title: "SQL",
        level: "40",
        img: "/icons/sql.svg", 
    },
]
const softwares = [
    {
        title: "VSCode",
        img: "/icons/vscode.svg",
    },
    {
        title: "Canva",
        img: "/icons/canva.svg",
    },
    {
        title: "Illustrator",
        img: "/icons/illustrator.svg",
    },
]




const Section = (props) => {
    const { children, mobileTop } = props

    return (
        <motion.section className={`h-screen w-screen p-5 max-w-screen-xl mx-auto flex flex-col items-start 
        ${mobileTop ? "sm:justify-start" : "justify-center"}
        `}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6
                },
            }}
        >
            {children}
        </motion.section>
    )
}

export const Interface = (props) => {
    const { setSection } = props
    return (
        <div className='flex flex-col items-center w-full'>
            <AboutSection setSection={setSection} />
            <SkillsSection />

            <div className='mt-24'>
                <ProjectsSection />
            </div>
            <Section>
                <ContactSection />
            </Section>
        </div>
    )
}

const AboutSection = (props) => {
    const { setSection } = props
    return (
        <Section mobileTop>
            <h1 className='text-5xl text-emerald-800 font-extrabold leading-snug mt-44 '>
                Hi, I'm
                <br />
                <span className='bg-emerald-400 px-1 italic'>Siddhant Singh Karki</span>
            </h1>
            <motion.p
                className='mt-12 font-inter text-xl text-emerald-600 bg-gray-600 bg-opacity-50  p-2 font-extrabold max-w-2xl rounded-2xl'
                style={{
                    backdropFilter: 'blur(5px)', // Apply backdrop blur directly using inline styles
                    backgroundColor: 'rgba(159, 215, 219, 0.01)' // Adjust opacity of background to control blur intensity
                }}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={
                    {
                        opacity: 1,
                        y: 0,
                    }
                }
                transition={{
                    duration: 1,
                    delay: 1.5
                }}
            >
                <div>
                Full-Stack Software Engineer | Front-end and Back-end Development | Agile Methodologies | B.S. in IT Student
                </div>
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className={`bg-emerald-600 text-teal-200 py-4 px-8 rounded-3xl font-bold text-lg mt-16 hover:bg-teal-200 hover:text-emerald-600 transition-colors duration-5`}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={
                    {
                        opacity: 1,
                        y: 0,
                    }
                }
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                Contact Me
            </motion.button>
        </Section>
    )
}



const SkillsSection = () => {
    return (
        <Section>
            {/* Skill Sect */}
            <motion.div whileInView={"visible"}>
                <h3 className="text-4xl font-bold text-cyan-900 text-center mt-32">Skills</h3>
                <div className=" mt-2 bg-emerald-600 bg-opacity-10 backdrop-blur-3xl p-8 rounded-3xl grid grid-cols-3 gap-8 ">
                    {skills.map((skill, index) => (
                        <div className="w-content bg-sky-950 bg-opacity-30 backdrop-blur-3xl p-8 rounded-3xl shadow-lg shadow-sky-950 text-center flex flex-col items-center max-h-48 justify-center " key={index}>
                            <img src={skill.img} alt="" className='w-14 h-14'/>
                            <h3 className="mt-5 text-md text-center font-bold text-cyan-900"
                            >{skill.title}</h3>
                        </div>
                    ))}
                </div>
                {/* Software Sect */}
                <h3 className="text-4xl font-bold text-cyan-900 text-center mt-8">Software </h3>
                <div className=" mt-8 backdrop-blur-3xl bg-emerald-600 bg-opacity-10  p-8 rounded-3xl grid grid-cols-3 gap-8 ">
                    {softwares.map((software, index) => (
                        <div className="w-content bg-sky-950 bg-opacity-30 backdrop-blur-3xl p-8 rounded-3xl shadow-lg shadow-sky-950 text-center flex flex-col items-center max-h-48 justify-center " key={index}>
                            <img src={software.img} alt="" className='w-14 h-14'/>
                            <h3 className="mt-5 text-md text-center font-bold text-cyan-900"
                            >{software.title}</h3>
                        </div>
                    ))}
                </div>
                
                

            </motion.div>
        </Section>
    )
}


const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section >
            <div className='flex w-screen h-full gap-8 items-center justify-center mb-80 text-cyan-200 animate-fade mx-auto'>
                <button className='hover:text-indigo-600 transition-colors'
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className='text-5xl font-bold'>Projects</h2>
                <button
                    className='hover:text-indigo-600 transition-colors'
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    )
}




const ContactSection = () => {
    const [state, handleSubmit] = useForm("mayzgjbd");
    return (
        <Section>
            <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
                {state.succeeded ? (
                    <p className="text-gray-900 text-center">Thanks for your message !</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label for="name" className="font-medium text-gray-900 block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <label
                            for="email"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <ValidationError
                            className="mt-1 text-red-500"
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label
                            for="email"
                            className="font-medium text-gray-900 block mb-1 mt-8"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                        />
                        <ValidationError
                            className="mt-1 text-red-500"
                            errors={state.errors}
                        />
                        <button
                            disabled={state.submitting}
                            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </Section>
    );
};