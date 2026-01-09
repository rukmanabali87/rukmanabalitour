'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaParachuteBox, FaWater, FaUmbrellaBeach } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";

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
        title: '4 Hours (Approx.)'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Activity'
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
        title: 'From IDR 859.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this package suitable for beginners?",
        desc: "Yes. All activities are beginner-friendly and guided by professional instructors."
    },
    {
        id: 2,
        title: "How long does the tour last?",
        desc: "The water sports activities last approximately 4 hours in total."
    },
    {
        id: 3,
        title: "What activities are included?",
        desc: "Parasailing, jet ski, banana boat, and donut boat rides are included in this package."
    },
    {
        id: 4,
        title: "Is hotel transfer included?",
        desc: "Hotel transfer is optional and available from selected areas."
    },
    {
        id: 5,
        title: "Is safety equipment provided?",
        desc: "Yes. Safety equipment and insurance coverage are included."
    },
    {
        id: 6,
        title: "What should I bring?",
        desc: "Bring swimwear, a towel, sunscreen, and extra cash if needed."
    },
    {
        id:7,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaParachuteBox,
        title: "Parasailing Adventure",
        desc: "Enjoy one round of parasailing with stunning ocean views."
    },
    {
        icon: FaShip,
        title: "Jet Ski Ride",
        desc: "Feel the thrill of a high-speed jet ski experience."
    },
    {
        icon: FaWater,
        title: "Fun Water Rides",
        desc: "Ride a banana boat and donut boat for 15 minutes each."
    },
    {
        icon: FaUmbrellaBeach,
        title: "Beginner-Friendly",
        desc: "Basic safety briefing provided before every activity."
    },
];

export const itineraryData = [
    {
        time: "09:00 AM",
        title: "Arrival & Registration",
        desc: "Arrive at Tanjung Benoa Beach, registration, and preparation."
    },
    {
        time: "09:15 AM",
        title: "Safety Briefing",
        desc: "Receive safety instructions and equipment explanation for all activities."
    },
    {
        time: "09:30 AM",
        title: "Parasailing Adventure",
        desc: "Enjoy 1 round of parasailing with beautiful ocean views."
    },
    {
        time: "10:15 AM",
        title: "Jet Ski Ride",
        desc: "Experience an exciting 15-minute jet ski ride."
    },
    {
        time: "10:45 AM",
        title: "Banana Boat Ride",
        desc: "Have fun on a 15-minute banana boat ride."
    },
    {
        time: "11:15 AM",
        title: "Donut Boat Ride",
        desc: "Enjoy a thrilling 15-minute donut boat ride."
    },
    {
        time: "12:00 PM",
        title: "Free Time & Change",
        desc: "Free time to shower, change clothes, and relax."
    },
    {
        time: "01:00 PM",
        title: "Tour Ends",
        desc: "End of Bali Water Sports Package."
    },
];

export const inclusionsData = {
    included: [
        "Hotel transfer (optional)",
        "Professional instructor",
        "Parasailing (approx. 6 minutes)",
        "Jet ski with instructor (15 minutes)",
        "Banana boat (15 minutes)",
        "Donut boat (15 minutes)",
        "Shower, changing room & locker access",
        "Local taxes",
        "Insurance",
    ],
    excluded: [
        "Food and drinks",
        "Souvenir photos",
    ]
};

export default function BaliWaterSportsPackage(){

    const productData = {
        title: 'Bali Water Sportts Package',
        place: 'Badung, Bali',
        desc1: 'Bali Water Sports Package is the perfect half-day adventure for those looking to add excitement to their Bali holiday at Tanjung Benoa Beach. This action-packed experience requires no prior experience, as you will receive basic safety instructions and equipment briefing before each activity. Enjoy the freedom to choose which game to start with, making the experience flexible and fun for everyone.',
        desc2: 'This package includes one round of parasailing, followed by thrilling Jet Ski, banana boat, and donut boat rides, each lasting approximately 15 minutes. Ideal for friends and families, this tour guarantees adrenaline and laughter in a safe and well-organized environment. Optional round-trip hotel transfers from Ubud and selected areas of south Bali are available for added convenience.',
    };

    const images = [
        {src:'/images/activities/bali-water-sports-package/1.jpg', alt:'Tulamben Diving in Bali'},
        {src:'/images/activities/bali-water-sports-package/2.jpg', alt:'Tulamben Diving Adventure Bali'},
        {src:'/images/activities/bali-water-sports-package/3.jpg', alt:'Diving in Tulamben Bali'},
        {src:'/images/activities/bali-water-sports-package/4.jpg', alt:'Underwater Scenery Tulamben Bali'},
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
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Activities</Link></li>
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