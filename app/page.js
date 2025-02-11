'use client'
import Model from "@/components/Model";
import { Environment, PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "@/components/Scene";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import TrueFocus from "@/TrueFocus/TrueFocus";
import { Button } from "@/components/ui/button";
import { OptionCards } from "@/components/options/Option-cards";

export default function Home() {
  const scrollRef = useRef();
  const [OrbitCamera, setOrbitCamera] = React.useState(0);

  function handleClick() {
    setOrbitCamera(1);
    document.body.style.overflow = "hidden"; // Disable scrolling
  }

  function handleClose() {
    setOrbitCamera(2);
    document.body.style.overflow = "auto"; // Enable scrolling
  }

  return (
    <>
      {/* Scene */}
      <div className="fixed inset-0 z-[1]">
        <Scene OrbitCamera={OrbitCamera} />
      </div>

      {/* Section 1 */}
      <div className="h-screen w-full" id="section1">
        <div className="absolute text-[30rem] z-0 opacity-5">Focus</div>
        <div className="flex flex-col w-[34rem] h-full justify-center pl-32 gap-5">
          <div className="text-7xl z-10">
            <TrueFocus sentence="True Focus" manualMode borderColor="black" glowColor="rgba(0, 255, 0, 0.6) blurAmount={5}" />
          </div>
          <div className="text-xl">
            Discover our most advanced camera and lens series yet: blazing fast AF, incredible low light performance, superb image stabilization, sharp image quality, and so much more.
          </div>
          <div className="w-[50%] z-10 relative">
            <Button size="divfull">Know More</Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-screen w-full" id="section2">
        <div className="absolute text-[30rem] z-0 opacity-5">Output</div>
        <div className="w-full h-full flex flex-col items-end justify-center pr-32">
          <div className="w-[34rem] flex flex-col gap-5">
            <div>
              <span className="text-xl">Outstanding</span>
              <h1 className="text-7xl">Performance</h1>
            </div>
            <span className="text-xl">
              The Canon EOS 5D Mark IV is a 30.4MP full-frame DSLR with Dual Pixel AF, 4K video, 7 fps burst, and a 61-point AF system. It features ISO 100-32,000 (expandable), DIGIC 6+ processor, Wi-Fi, and GPS, delivering excellent image quality and performance.
            </span>
            <div className="flex w-full gap-5">
              <OptionCards />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-screen w-full" id="section3">
        <div className="absolute text-[30rem] z-0 opacity-5">Power</div>
        <div className="w-full h-full flex justify-between items-center px-32">
          <div className="w-[30rem] flex flex-col gap-5">
            <div>
              <span className="text-xl">Feature that bring you</span>
              <h1 className="text-7xl">Power</h1>
            </div>
            <span className="text-xl">
              The easy-to-carry EOS 5D Mark IV packs advanced features into a lightweight, compact design. Pair with a Canon RF-S/RF lens for a high-performance setup that fits easily and comfortably in your hand.
            </span>
          </div>
          <Image src="/power_features.png" alt="alt" width={126} height={126} />
        </div>
      </div>

      {/* Section 4 */}
      <div className="h-screen w-full relative" id="section4">
        <div className="absolute text-[30rem] z-0 opacity-5">Canon</div>

        {/* Conditionally Render Content */}
        {(OrbitCamera === 0 || OrbitCamera === 2) ? (
          <div className="w-full h-full flex flex-col items-end justify-center pr-32">
            <div className="w-[34rem] flex flex-col items-end gap-5">
              <div>
                <span className="text-xl">Crafted for Exceptional</span>
                <h1 className="text-7xl">Durability</h1>
              </div>
              <div className="w-[50%] z-10 relative">
                <Button size="divfull" onClick={handleClick}>
                  View Camera
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Show Close Button When OrbitCamera is Active
          <div className="absolute top-10 right-10 z-50">
            <Button size="icon"  onClick={handleClose}>
              ✖
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
