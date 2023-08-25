'use client'


import React, { useCallback } from 'react';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.



const Particle: React.FC = () => {


    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);


    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            // className={styles['tsparticles']}
            // init={particlesInit}
            // loaded={particlesLoaded}
            options={{
                name: "Snow",
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500
                        },
                    },
                    color: {
                        value: "#fff",
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        enable: true,
                        speed: 0.05,
                        direction: "right",
                        straight: false,
                    },
                    wobble: {
                        enable: true,
                        distance: 10,
                        speed: 10,
                    },
                    zIndex: {
                        value: {
                            min: 0,
                            max: 100,
                        },
                        opacityRate: 10,
                        sizeRate: 10,
                        velocityRate: 10,
                    },
                    links: {
                        enable: false,
                        distance: 600,
                        color: "#ffffff",
                        width: 2,
                        opacity: 0.03,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05
                        }
                    }
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        push: {
                            particles_nb: 1
                        }
                    }
                },
                background: {
                    color: "transparent",
                },
                retina_detect: true
            }}
        />
    );
}

export default Particle;