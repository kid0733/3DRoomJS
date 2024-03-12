import React from 'react'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { currentProjectAtom, projects } from './Projects'

const skills = [
    {
        title: "Three.js / React Three Fiber",
        level: "80",
    },
    {
        title: "React",
        level: "90",
    },
    {
        title: "NodeJS",
        level: "80",
    },
    {
        title: "TypeScript",
        level: "80",
    },
    {
        title: "3D Modelling",
        level: "40",
    },
]
const languages = [
    {
        title: "3D Modelling",
        level: "40",
    },
    {
        title: "3D Modelling",
        level: "40",
    },
    {
        title: "3D Modelling",
        level: "40",
    },
    {
        title: "3D Modelling",
        level: "40",
    },
]




const Section = (props) => {
    const { children, mobileTop } = props

    return (
        <motion.section className={`h-screen w-screen p-5 pt-0 max-w-screen-xl mx-auto flex flex-col items-start 
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
            <h1 className='text-5xl font-extrabold leading-snug mt-44 '>
                Hi, I'm
                <br />
                <span className='bg-white px-1 italic'>Siddhant Singh Karki</span>
            </h1>
            <motion.p
                className='text-lg text-gray-600 mt-4'
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
                Sugar-coated code:
                <br />
                Crafting sweetness into digital magic
            </motion.p>
            <motion.button
                onClick={() => setSection(3)}
                className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
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
            <motion.div whileInView={"visible"}>
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-md font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 1 + index * 0.2,
                                    }
                                }}
                            >{skill.title}</motion.h3>
                            <div className="h-3 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-indigo-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2
                                            }
                                        }
                                    }}

                                />
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mt-10">Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((lng, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-md font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 1 + index * 0.2,
                                    }
                                }}
                            >{lng.title}</motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-indigo-500 rounded-full"
                                    style={{ width: `${lng.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 2 + index * 0.2
                                            }
                                        }
                                    }}

                                />
                            </div>
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
            <div className='flex w-full h-full gap-8 items-center justify-center mt-80 text-cyan-200 animate-fade'>
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
    return (
        <Section>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </Section>
    );
};