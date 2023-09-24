import React from "react";
import WorkItem from "./workitem";


const data = [
    {
        year: 2021,
        title: 'Algorithm Bootcamp Student',
        duration: '1 month',
        details: "From July 2021 - September 2021 i learned basic C programming in Algorithm Bootcamp held by Bina Nusantara University language preparing for my college lecture"
    },
    {
        year: 2021,
        title: 'Bina Nusantara Computer Club Member',
        duration: '7 months',
        details: 'From October 2021 - April 2022 i joined one of Bina Nusantara Student Activity Units, which is BNCC, i enrolled to one of the course that BNCC provided which is Java'
    }, 
    {
        year: 2021,
        title: 'Bina Nusantara Computer Club Activist',
        duration: '8 months',
        details: 'From October 2021 - May 2022 i became the activist of BNCC, i learn about a lot of things when i am taking a part in BNCC as an activist, such as leadership skill, communicating skill, front end development, and Python'
    }, 
    {
        year: 2022,
        title: 'Jollybee Bina Nusantara Basic Member',
        duration: '7 months',
        details: 'From November 2022 - July 2023 i joined Competitive Programming team under Bina Nusantara School of Computer Science, i learned a lot of new algorithm that related to graph, dynamic programming, divide and conquer, greedy, mathematics, etc.'
    }, 
    {
        year: 2023,
        title: 'Jollybee Bina Nusantara Member',
        duration: '4 months',
        details: 'From July 2023 - Present i became the member of Jollybee Programming team, i compete in a lot of competition, such as Gemastik, COMPFEST, etc.'
    }
]
const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-16">Work</h1>
            {data.map((item, idx)=> (
                <WorkItem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work