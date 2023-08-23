'use client'

import React from "react";
import Typewriter from "typewriter-effect";

const NameTyping = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default NameTyping;