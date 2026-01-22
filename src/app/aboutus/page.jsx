
import Link from 'next/link';
import Image from 'next/image';

import Navbar from "../components/navbar";
import Blogs from '../components/blogs'
import Client from '../components/client'
import About from '../components/about'
import Footer from '../components/footer';
import Switcher from '../components/switcher';

import { teamData } from "../data/data";

import {FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi"
import { HiChevronRight } from "react-icons/hi";
import TourImageSlider from '../components/tour-image-slider';

export default function Aboutus(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative w-full py-36 overflow-hidden">
            <Image
                src="/images/bg/9.jpg"
                alt="Bali Tour Packages"
                fill
                priority
                className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">About Us</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                </ul>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <About/>

            <Client/>

            <Blogs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}