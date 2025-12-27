import Image from "next/image";
import Link from "next/link";

import Tagline from "./components/tagline";
import Navbar from "./components/navbar";
import Form from "./components/form";
import About from "./components/about";
import Client from "./components/client";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Switcher from "./components/switcher";
import WhyChooseUs from "./components/why-choose-us";
import {packages, topTourPackages, tourPackages} from './data/data';
import {FiMapPin} from 'react-icons/fi';

export default function Home() {
    return (
    <>
    <Tagline/>
    <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="!justify-end nav-light"/>
    
    <section className="relative w-full min-h-[100svh] md:h-screen overflow-hidden">
        {/* Fallback Image */}
        <div className="absolute inset-0 -z-20">
            <Image src="/images/bg/10.webp" alt="Landing Page Background" fill priority className="object-cover object-center"/>
        </div>

        {/* Video */}
        <video autoPlay muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/landing-page-home.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/50 md:bg-slate-900/40"></div>
        <div className="container relative h-full flex items-start md:items-center pt-28 sm:pt-32 md:pt-0">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center w-full gap-6 md:gap-[30px]">
                <div className="lg:col-span-8 md:col-span-7 text-center md:text-left">
                    <h5 className="text-xl sm:text-2xl md:text-3xl !font-dancing text-white mb-4">
                        Explore Bali&apos;s Wonders
                    </h5>

                    <h4 className="font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                        Escape the Ordinary, <br /> with Rukmana Bali Tour
                    </h4>

                    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
                        Ready for a tropical escape? We&apos;ll design the perfect island journey just for you.
                    </p>
                </div>

                <div className="lg:col-span-4 md:col-span-5 flex justify-center md:justify-end">
                    <div className="flex items-center h-full">
                        <Image
                            src="/images/tripadvisor/1.png"
                            alt="TripAdvisor Travelers' Choice Award"
                            width={220}
                            height={160}
                            className="invert w-[140px] sm:w-[180px] md:w-[220px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
            <Form/>
        </div>
    </section>
    <section className="relative md:pb-24 pb-16 overflow-hidden">
        <About/>

        {/* Bagian Top Tour Packages */}
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Tour Packages</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Discover our top tour packages — curated itineraries, great value, and unforgettable Bali experiences ready to book.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                {topTourPackages.slice(0,6).map((item,index)=>{
                    return(
                        <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                            <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                {item.tagText && (
                                    <div className="absolute top-0 start-0 p-4">
                                        <span className="bg-[#397A3D] text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                    </div>
                                )}
                            </div>
                                
                            <div className="p-4">
                                <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-[#397A3D] size-4 me-1"></FiMapPin> {item.place}</p>
                                <Link href={item.route} className="text-lg font-medium hover:text-[#397A3D] duration-500 ease-in-out">{item.title}</Link>

                                <div className="flex items-center mt-2">
                                    <span className="text-slate-400">Rating:</span>
                                    <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                        <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                        <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                        <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                        <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                        <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                        <li className="inline text-black dark:text-white text-sm">5.0(30)</li>
                                    </ul>
                                </div>
                                
                                <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                    <h5 className="text-lg font-medium text-[#397A3D]">From IDR {item.amount}</h5>

                                    <Link href={item.route} className="text-slate-400 hover:text-[#397A3D]">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-6 text-center">
                <Link href="/grid" className="text-slate-400 hover:text-[#397A3D] inline-block">See More Tours <i className="mdi mdi-arrow-right align-middle"></i></Link>
            </div>
        </div>

        <WhyChooseUs/>

        <Client/>

        <Blogs/>
    </section>
    <Footer/>
    <Switcher/>
    </>
    );
}
