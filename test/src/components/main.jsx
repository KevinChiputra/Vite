import React from "react";
import test from "../assets/hero.png"
import { TypeAnimation } from "react-type-animation";
import {FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={test} alt="" />
            <div className="w-full h-screen absolute top-0 left-0">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-[#E8E8E8]">I'm Nicholas Daniel Wijaya</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-[#E8E8E8]">
                        I'm an
                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Competitive Programmer',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            'Intelligence System Engineer',
                            1500,
                            'Tech Enthusiast',
                            1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[100px] w-full text-[#E8E8E8]">
                        <a href="https://www.instagram.com/daniell_wijayaa/"><FaInstagram className="cursor-pointer" size={30}/></a>
                        <a href="https://www.linkedin.com/in/nicholas-wijaya-964474216/"><FaLinkedinIn className="cursor-pointer" size={30}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main