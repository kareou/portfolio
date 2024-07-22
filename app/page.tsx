'use client'

import Image from "next/image";
import { FormEvent, useEffect } from "react";
import Card from "@/app/exp_card";
import Pcard from "@/app/project_card";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Home() {

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const x = e.pageX;
      const y = e.pageY;
      const pointer = document.querySelector(".pointer-events-none");
      if (pointer) {
        pointer.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(205, 154, 227, 0.15), transparent 80%)`;
      }
    })
  }
    , [])
  const send = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send");
    const paper = document.getElementById("paper");
    paper?.classList.add("animation");
  }

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
                    <a className="group flex items-center py-3" href="#about">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#experience">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#projects">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#contact">
                      <span className="bar h-px w-8 mr-4 transition-all group-hover:w-16 bg-[rgb(255,247,255,0.5)]  group-hover:bg-[#FFF7FF]"></span>
                      <span className="text text-[rgb(255,247,255,0.5)] group-hover:text-[#FFF7FF]">Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" text-[#CD9AE3] flex flex-wrap ml-1 mt-8 items-center text-xl">
              <a
                href="" className="mr-4">
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
              <Card />
              <Card />
              <Card />
            </section>
            <section id="projects">
              <Pcard />
              <Pcard />
              <Pcard />
            </section>
            <section id="contact">
              <h1>Contact Me</h1>
              <form onSubmit={send}>
                <div className=" grid ">
                  <label htmlFor="email">Your email</label>
                  <input type="email" id="email" placeholder="name@example.com" className=" bg-gray-500/10 borde outline-none p-4 " />
                </div>
                <div className=" grid ">
                  <label htmlFor="message">Your message</label>
                  <textarea name="" id="message" className=" bg-gray-500/10 borde outline-none p-4 " placeholder="Your message..."></textarea>
                </div>
                <button type="submit" id="send" className=" shadow-lg py-2 px-8 w-32 h-12 rounded-full inline-flex items-center justify-center gap-2 bg-[#FFF7FF] text-black outline-none ">
                  <span>send </span>
                  <span id="paper"><FiSend /></span>
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
