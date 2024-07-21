'use client'

import Image from "next/image";
import { useEffect } from "react";
import Card from "@/app/exp_card";
import Pcard from "@/app/project_card";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const x = e.pageX / window.innerWidth;
      const y = e.pageY / window.innerHeight;
      const pointer = document.querySelector(".pointer-events-none");
      if (pointer) {
        pointer.style.background = `radial-gradient(600px at ${x * 100}% ${y * 100}%, rgba(205, 154, 227, 0.15), transparent 80%)`;
      }
    })
  }
    , [])

  return (
    <div className="relative">
      <div className="pointer-events-none absolute w-full h-full z-30 inset-0 transition duration-300" style={{ background: "radial-gradient(600px at 0px 0px, rgba(205, 154, 227, 0.15), transparent 80%)" }}></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="">

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <a href="/">Mohamed Khairoun</a>
              </h1>
              <h4 className="mt-4 text-lg tracking-tight font-medium sm:text-xl">junior web developer</h4>
              <nav className="">
                <ul className="mt-16">
                  <li>
                    <a className="group flex items-center py-3" href="about">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" text-[#CD9AE3] flex flex-wrap ml-1 mt-8 items-center text-xl">
              <a href="" className="mr-4">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="" className="mr-4">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-[rgb(255,247,255,0.5)]">
              <p className="mb-4">A year ago, I initiated a quest to delve into the realm of development, a journey that rapidly transformed into a profound passion and dedication towards this domain. Today, my commitment towards enhancing my proficiency in this field remains unflinching, as I continuously seek avenues for learning and expanding my horizons</p>
              <p className="mb-4">In parallel to my professional commitments, I highly value the essence of work-life balance. To replenish my energy and to maintain a healthy mental state, I often indulge in leisure activities such as gaming with friends or engaging with diverse forms of visual entertainment</p>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <Card />
            </section>
            <section id="projects">
              <Pcard />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
