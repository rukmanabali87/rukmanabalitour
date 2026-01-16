'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMotorcycle, FaWater, FaLeaf, FaCarSide } from "react-icons/fa";

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
        title: '10 Hours (Approx.)'
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
        title: 'From IDR 1.202.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this tour suitable for beginners?",
        desc: "Yes. Both quad bike and rafting activities are beginner-friendly and guided by professional instructors."
    },
    {
        id: 2,
        title: "Can children join this tour?",
        desc: "Yes. Children may join as passengers on tandem quad bikes and join rafting with adult supervision."
    },
    {
        id: 3,
        title: "How long is each activity?",
        desc: "Each main activity lasts approximately 2 hours, including quad bike riding and Ayung River rafting."
    },
    {
        id: 4,
        title: "Is safety equipment provided?",
        desc: "Yes. Safety equipment and insurance are included in the tour."
    },
    {
        id: 5,
        title: "What should I bring?",
        desc: "Comfortable clothes, a change of clothes, sandals or water shoes, sunscreen, and extra cash."
    },
    {
        id: 6,
        title: "Are photos and videos included?",
        desc: "No. Photo and video services are not included and available at an additional cost."
    },
    {
        id:7,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaMotorcycle,
        title: "Quad Bike Adventure",
        desc: "ATV ride through muddy tracks and tropical jungle."
    },
    {
        icon: FaWater,
        title: "Ayung River Rafting",
        desc: "Fun rafting on Bali’s most popular river."
    },
    {
        icon: FaLeaf,
        title: "Natural Scenery",
        desc: "Lush rainforest, waterfalls, and river gorges."
    },
    {
        icon: FaCarSide,
        title: "All-Inclusive Comfort",
        desc: "Buffet lunch and private hotel transfers included."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Private hotel pick-up with air-conditioned vehicle and English-speaking driver."
    },
    {
        time: "10:00 AM",
        title: "Quad Bike Safety Briefing",
        desc: "Registration, safety briefing, and equipment preparation at the ATV basecamp."
    },
    {
        time: "10:15 AM",
        title: "Quad Bike Adventure (Approx. 2 Hours)",
        desc: "Enjoy an exciting ATV ride through muddy tracks, rice fields, bamboo forest, and tropical jungle."
    },
    {
        time: "12:15 PM",
        title: "Shower & Change",
        desc: "Time to clean up and change clothes after the quad bike experience."
    },
    {
        time: "12:45 PM",
        title: "Transfer to Rafting Point",
        desc: "Continue to the Ayung River rafting starting point."
    },
    {
        time: "01:00 PM",
        title: "Rafting Safety Briefing",
        desc: "Meet your professional rafting guide and receive safety instructions."
    },
    {
        time: "01:15 PM",
        title: "Ayung River Rafting (Approx. 2 Hours)",
        desc: "White water rafting through rainforest, waterfalls, and scenic river gorges."
    },
    {
        time: "03:15 PM",
        title: "Buffet Lunch",
        desc: "Enjoy an Indonesian buffet lunch with valley views."
    },
    {
        time: "04:15 PM",
        title: "Return to Hotel",
        desc: "Private transfer back to your hotel."
    },
    {
        time: "06:00 PM",
        title: "Arrive at Hotel",
        desc: "End of Bali Quad Bike and Rafting tour."
    },
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "Professional guide",
        "2 hours quad bike riding",
        "2 hours Ayung River rafting",
        "Safety equipment",
        "Indonesian buffet lunch",
        "Insurance",
    ],
    excluded: [
        "Photo/video",
        "Personal Expenses",
    ]
};

export default function BaliQuadBikeAndRafting(){

    const productData = {
        title: 'Bali Quad Bike and Rafting',
        place: 'Gianyar, Bali',
        desc1: 'Bali Quad Bike and Rafting is the perfect one-day adventure for thrill seekers who want to experience Bali’s wild side without the hassle. Start your journey with a professionally guided quad bike (ATV) ride through muddy off-road tracks, lush rice fields, bamboo forests, and tropical jungle landscapes in Ubud. Suitable for beginners and experienced riders, this adventure also offers a tandem ATV option, making it ideal for couples who want to ride together while enjoying the excitement.',
        desc2: 'After your quad bike adventure, continue with an unforgettable Ayung River white water rafting experience. Paddle through gentle rapids surrounded by dense rainforest, dramatic river gorges, waterfalls, and ancient stone carvings that reflect Bali’s rich cultural heritage. Led by experienced rafting guides, this safe and fun activity is perfect for families, first-timers, and adventure lovers looking for a refreshing outdoor experience.',
        desc3: 'To complete your day, relax and recharge with a delicious Indonesian buffet lunch overlooking the scenic valley. With private round-trip hotel transfers included, you can enjoy both adventures comfortably and stress-free. This Bali Quad Bike and Rafting tour offers the ideal combination of adrenaline, natural beauty, and authentic Balinese atmosphere—all in one unforgettable day.',
    };

    const images = [
        {src:'/images/activities/bali-quad-bike-and-rafting/1.jpg', alt:'Quad Bike ATV in Bali'},
        {src:'/images/activities/bali-quad-bike-and-rafting/2.jpg', alt:'Quad Bike Adventure Bali'},
        {src:'/images/activities/bali-quad-bike-and-rafting/3.jpg', alt:'Rafting Ayung River Bali'},
        {src:'/images/activities/bali-quad-bike-and-rafting/4.jpg', alt:'Rafting Adventure Bali'},
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