import React from "react";
import ProjectItem from "./projectitem";
import jb from '../assets/jb.png'
import bncc from '../assets/bncc.png'
import binus from '../assets/binus.png'
import algoboot from '../assets/algoboot.png'

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Here's some of the project that i've been worked on in college</p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={jb} title='Jollybee Code' link="https://github.com/nicholaswijaya004/JollyBee"/>
                <ProjectItem img={bncc} title='BNCC Projects' link="https://drive.google.com/drive/folders/1n9fx-qWOLfSg6xCVTNSOkO6r6OKAJZ73?usp=sharing"/>
                <ProjectItem img={binus} title='College Projects' link="https://github.com/nicholaswijaya004/BNCC"/>
                <ProjectItem img={algoboot} title='Algorithm Bootcamp Projects' link="https://github.com/nicholaswijaya004/Algorithm-Bootcamp"/>
            </div>
        </div>
    )
}

export default Projects