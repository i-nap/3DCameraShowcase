'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useGLTF.preload('/camera.glb');
gsap.registerPlugin(ScrollTrigger);

export default function Model({ OrbitState }) {
    const group = useRef(null); // Ref for the model group
    const { scene } = useGLTF('/camera.glb');
    const el = useRef();
    const q = gsap.utils.selector(el);

    console.log(OrbitState);



    useLayoutEffect(() => {
        if (!group.current) return;
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top top",
                end: "bottom top",
                scrub: true,
                snap: 1,
            },
        })
            .to(group.current.rotation, {
                x: 1,
                y: 0,
                ease: "power2.inOut"
            })
            .to(group.current.position, {
                x: -1.2,
                y: 0.5,
                ease: "power2.inOut"
            }, "<")
            .to(group.current.scale, {
                x: 1.4,
                y: 1.4,
                z: 1.4,
                ease: "power2.inOut"
            }, "<");

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section2",
                start: "top top",
                end: "bottom top",
                scrub: true,
                snap: 1,

            },
        })
            .to(group.current.rotation, {
                x: 0,
                y: 0,
                ease: "power2.inOut"
            })
            .to(group.current.position, {
                x: 0.9,
                y: 0,
                ease: "power2.inOut"
            }, "<")
            .to(group.current.scale, {
                x: 1.2,
                y: 1.2,
                z: 1.2,
                ease: "power2.inOut"
            }, "<");

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section3",
                start: "top top",
                end: "bottom top",
                scrub: true,
                snap: 1,

            },
        })
            .to(group.current.rotation, {
                x: 0,
                y: 3.8,
                ease: "power2.inOut"
            })
            .to(group.current.position, {
                x: -1.8,
                y: 0,
                ease: "power2.inOut"
            }, "<")
            .to(group.current.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                ease: "power2.inOut"
            }, "<");


        const tl4 = gsap.timeline({ paused: true })
            .to(group.current.rotation, {
                x: 0,
                y: 0,
                ease: "power2.inOut"
            })
            .to(group.current.position, {
                x: 0,
                y: 0,
                ease: "power2.inOut"
            }, "<")
            .to(group.current.scale, {
                x: 1.4,
                y: 1.4,
                z: 1.4,
                ease: "power2.inOut"
            }, "<");


        const tl5 = gsap.timeline({ paused: true })
            .to(group.current.rotation, {
                x: 0,
                y: 3.8,
                z: 0,
                ease: "power2.inOut"
            })
            .to(group.current.position, {
                x: -1.8,
                y: 0,
                z: 0,
                ease: "power2.inOut"
            }, "<")
            .to(group.current.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                ease: "power2.inOut"
            }, "<");

        if (OrbitState === 1) {
            tl4.play();
        } else if(OrbitState === 2) {
            gsap.set(group.current.rotation, { x: 0.2, y: 2.2, z: 0 });
            gsap.set(group.current.position, { x: 0.8, y: 0, z: 0 });
            gsap.set(group.current.scale, { x: 1.6, y: 1.6, z: 1.6 });
        
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        
            console.log("Reset done, ScrollTrigger refreshed");
        }
        return () => {
            tl1.revert();
            tl2.revert();
            tl3.revert();
        };

    }, [group, OrbitState]);

    return (
        <group ref={group} rotation={[0.2, 2.2, 0]} position={[0.8, 0, 0]} scale={[1.6, 1.6, 1.6]} castShadow receiveShadow>
            <primitive object={scene} />
        </group>
    );
}
