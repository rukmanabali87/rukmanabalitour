'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMapMarkedAlt, FaCar} from "react-icons/fa";
import { PiIslandFill } from "react-icons/pi";
import { MdTempleHindu } from "react-icons/md";

import TourImageOne from "@/app/components/tour-image-one";
import TourDetailFaq from "@/app/components/faq/tour-detail-faq";
import TourHighlights from "@/app/components/tour-highlights";
import TourItinerary from "@/app/components/tour-itinerary";
import TourInclusions from "@/app/components/tour-inclusions";
import Client from "@/app/components/client";


export const tourDetailAbout = [
    {
        icon: FiClock,
        name: 'Duration',
        title: '8 Hours (Approx.)'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Tour'
    },
    {
        icon: FiUsers,
        name: 'Group Size',
        title: '15 Peoples'
    },
    {
        icon: FiGlobe,
        name: 'Languages',
        title: 'English'
    },
    {
        icon: FiDollarSign,
        name: 'Start Price',
        title: 'From IDR 601.000'
    },
];

export const faqData = [
    {
        id:1,
        title:'Is this tour private?',
        desc:'Yes. You will have your own private car and driver for the entire day.'
    },
    {
        id:2,
        title:'Can I customize tour itinerary?',
        desc:'Yes. The itinerary can be adjusted based on your preferences. Please discuss your requests with the operator in advance. Additional charges may apply.'
    },
    {
        id:3,
        title:'Is it suitable for children or elderly?',
        desc:'Yes. All locations are easily accessible with minimal walking and no strenuous activities.'
    },
    {
        id:4,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaCar,
        title: "Private Car & Driver",
        desc: "Comfortable travel with a professional local driver.",
    },
    {
        icon: MdTempleHindu,
        title: "Lempuyang Gates of Heaven",
        desc: "Iconic temple gate with Mount Agung views.",
    },
    {
        icon: FaMapMarkedAlt,
        title: "Cultural & Scenic Journey",
        desc: "A relaxing blend of culture, nature, and beautiful landscapes.",
    },
];

export const itineraryData = [
    {
        time: "06:00 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel in selected areas."
    },
    {
        time: "07:30 AM",
        title: "Lempuyang Temple – Gates of Heaven",
        desc: "Visit the iconic gate with Mount Agung views."
    },
    {
        time: "09:00 AM",
        title: "Depart to Tirta Gangga",
        desc: "Continue the journey to East Bali."
    },
    {
        time: "09:30 AM",
        title: "Tirta Gangga Water Palace",
        desc: "Explore the royal water palace and gardens."
    },
    {
        time: "10:30 AM",
        title: "Depart to Tukad Cepung Waterfall",
        desc: "Travel to a hidden natural spot."
    },
    {
        time: "11:30 AM",
        title: "Tukad Cepung Waterfall",
        desc: "Enjoy the unique waterfall inside a canyon."
    },
    {
        time: "12:30 PM",
        title: "Return to Hotel",
        desc: "Start the return journey."
    },
    {
        time: "02:00 PM",
        title: "Hotel Drop-off",
        desc: "Drop-off at your hotel. Tour ends."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "All entrance fees (optional)",
        "Insurance",
    ],
    excluded: [
        "Meals Fee",
        "Personal Expenses",
    ]
};

export default function TanahLotSunsetTour(){

    const productData = {
        title: 'Gates of Heaven Tour',
        place: 'Karangasem, Bali',
        desc1: 'Gates of Heaven Tour is one of the most popular Bali day tours, offering a perfect blend of iconic landmarks, cultural heritage, and natural beauty in East Bali. This full-day tour takes you to some of Bali’s most photogenic and meaningful destinations, ideal for travelers seeking stunning scenery and authentic experiences.',
        desc2: 'The journey begins at Lempuyang Temple – The Gates of Heaven, famous for its breathtaking views of Mount Agung framed by the temple’s majestic gate. Continue to Tirta Gangga, the former royal water palace, where elegant fountains, stone carvings, and tranquil pools create a peaceful atmosphere surrounded by lush gardens.',
        desc3: 'The tour concludes with a visit to Tukad Cepung Waterfall, a hidden gem tucked inside a cave-like canyon. Sunlight streaming through the rocks creates a magical scene, making it one of Bali’s most unique waterfalls. The Gates of Heaven Tour is perfect for couples, photographers, and nature lovers looking to explore the spiritual and scenic side of Bali in one unforgettable day.',
    };

    const images = [
        {src:'/images/tours/gates-of-heaven-tour/1.webp', alt:'Gates of Heaven at Lempuyang Temple'},
        {src:'/images/tours/gates-of-heaven-tour/2.webp', alt:'Lempuyan Temple'},
        {src:'/images/tours/gates-of-heaven-tour/3.jpg', alt:'Tirta Ganga Water Palace'},
        {src:'/images/tours/gates-of-heaven-tour/4.jpg', alt:'Tukad Cepung Waterfall'},
    ];

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 -z-20">
                <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    priority
                    className="object-cover object-top"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{productData.title}</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">{productData.title}</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">
                        <TourImageOne images={images}/>

                        <h5 className="text-2xl font-semibold mt-5">{productData.title}</h5>
                        <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>{productData.place}</p>

                        <ul className="list-none">
                            {tourDetailAbout.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                    <li className="inline-flex items-center me-5 mt-5" key={index}>
                                        <Icon className="size-6 stroke-[1.5] text-[#397A3D]"></Icon>

                                        <div className="ms-3">
                                            <p className="font-medium">{item.name}</p>
                                            <span className="text-slate-400 font-medium text-sm">{item.title}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Tour Descriptions:</h5>

                            <p className="text-slate-400 mt-6">
                                {productData.desc1}
                            </p>
                            <p className="text-slate-400 mt-3">
                                {productData.desc2}
                            </p>
                            <p className="text-slate-400 mt-3">
                                {productData.desc3}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold mb-6">Tour Highlights:</h5>
                
                            <TourHighlights items={highlightsData} />
                        </div>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Tour Itinerary:</h5>

                            <TourItinerary items={itineraryData}/>
                        </div>

                        <TourInclusions items={inclusionsData}/>

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Questions & Answers:</h5>

                            <TourDetailFaq items={faqData}/>
                        </div>

                        <Client/>
                    </div>
                    <DetailSidebar/>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}