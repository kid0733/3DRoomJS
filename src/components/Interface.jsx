import React from 'react'

const Section=(props)=>{
    const {children}=props

    return(
        <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            {children}
        </section>
    )
}

export const Interface=()=>{
    return(
        <div className='flex flex-col items-center w-full'>
            <AboutSection/>
            <SkillsSection />
            
            <Section>
                <h1>Project</h1>
            </Section>
            <Section>
                <h1>Contact</h1>
            </Section>
        </div>
    )
}

const AboutSection=()=>{
    return(
        <Section>
        <h1 className='text-6xl font-extrabold leading-snug mt-64'>
            Hi, I'm
            <br />
            <span className='bg-white px-1 italic'>Siddhant Singh Karki</span>
        </h1>
        <p className="text-lg text-blue-100 mt-4">
            Sugar-coated code: 
            <br />
            Crafting sweetness into digital magic
        </p>
        <button className="bg-indigo-400 text-white px-8 py-4 rounded-lg mt-16 text-lg font-bold">
            Contact Me
        </button>
    </Section>
    )
}
const skills=[
    {
        title:"Three.js / React Three Fiber",
        level:"80",
    },
    {
        title: "React",
        level:"90",
    },
    {
        title:"NodeJS",
        level:"80",
    },
    {
        title:"TypeScript",
        level:"80",
    },
    {
        title:"3D Modelling",
        level:"40",
    },
]
const languages=[
    {
        title:"3D Modelling",
        level:"40",
    },
    {
        title:"3D Modelling",
        level:"40",
    },
    {
        title:"3D Modelling",
        level:"40",
    },
    {
        title:"3D Modelling",
        level:"40",
    },
]


const SkillsSection=()=>{
    return(
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index)=>(
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.level}%` }}/>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="text-5xl font-bold mt-10">Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((lng, index)=>(
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lng.level}%` }}/>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </Section>
    )
}