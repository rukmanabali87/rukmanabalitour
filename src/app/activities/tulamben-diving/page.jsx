'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaShip, FaWater, FaFish } from "react-icons/fa";

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
        title: 'From IDR 1.099.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this tour suitable for beginners?",
        desc: "Yes. This tour is suitable for beginners and certified divers, guided by professional instructors."
    },
    {
        id: 2,
        title: "How many dives are included in this tour?",
        desc: "The tour includes 2 dive sessions, each lasting approximately 30 minutes."
    },
    {
        id: 3,
        title: "Which dive sites will we visit?",
        desc: "You will dive at the USS Liberty Shipwreck and the Coral Garden in Tulamben."
    },
    {
        id: 4,
        title: "Is diving equipment provided?",
        desc: "Yes. All necessary diving equipment is included in the tour package."
    },
    {
        id: 5,
        title: "Is hotel transfer included?",
        desc: "Hotel transfer with an air-conditioned car and English-speaking driver is available as an optional service."
    },
    {
        id: 6,
        title: "What should I bring for the tour?",
        desc: "Bring swimwear, a towel, sunscreen, and personal expenses if needed."
    },
    {
        id:7,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaShip,
        title: "USS Liberty Shipwreck Dive",
        desc: "Explore the famous World War II wreck covered in colorful corals."
    },
    {
        icon: FaWater,
        title: "Two Dive Sessions",
        desc: "Dive at USS Liberty Wreck and Coral Garden in one day."
    },
    {
        icon: FaFish,
        title: "Rich Marine Life",
        desc: "Encounter diverse corals and hundreds of tropical fish species."
    },
];

export const itineraryData = [
    {
        time: "08:00",
        title: "Hotel Pick-up",
        desc: "Private hotel pick-up from Ubud or selected south Bali areas."
    },
    {
        time: "10:30",
        title: "Arrival at Tulamben & Registration",
        desc: "Arrival at dive center, registration, and equipment preparation."
    },
    {
        time: "10:45",
        title: "Dive Briefing",
        desc: "Safety briefing and dive instructions with professional guide."
    },
    {
        time: "11:00",
        title: "Dive Session 1 – USS Liberty Shipwreck (Approx. 30 Minutes)",
        desc: "Explore the famous World War II shipwreck covered with corals."
    },
    {
        time: "11:45",
        title: "Surface Interval",
        desc: "Short rest and preparation for the second dive."
    },
    {
        time: "12:30",
        title: "Dive Session 2 – Coral Garden (Approx. 30 Minutes)",
        desc: "Enjoy calm waters, coral formations, and marine life."
    },
    {
        time: "13:15",
        title: "Indonesian Lunch",
        desc: "Lunch at a local restaurant near the dive site."
    },
    {
        time: "14:00",
        title: "Return Transfer",
        desc: "Private transfer back to your hotel."
    },
    {
        time: "16:00",
        title: "Arrive at Hotel",
        desc: "End of Tulamben Diving tour."
    },
];

export const inclusionsData = {
    included: [
        "Comfortable air-conditioned car (optional)",
        "English-speaking driver (optional)",
        "2 dive sessions (approx. 30 minutes each)",
        "Indonesian lunch",
        "Complete diving equipment"
    ],
    excluded: [
        
    ]
};

export default function TulambenDiving(){

    const productData = {
        title: 'Tulamben Diving',
        place: 'Karangasem, Bali',
        desc1: 'Tulamben Diving offers an unforgettable underwater experience at one of Bali’s most iconic dive destinations. This private day tour takes you to Tulamben to explore two of its most popular dive sites: the legendary USS Liberty Shipwreck and the beautiful Coral Garden. With private round-trip hotel transfers from Ubud and selected areas of south Bali, your journey is comfortable and stress-free.',
        desc2: 'The first dive session is at the famous USS Liberty Wreck, a World War II ship that now lies just offshore and is completely covered with colorful corals. During this 30–40 minute dive, you’ll encounter dense coral growth and hundreds of fish species that have turned the wreck into a thriving underwater ecosystem, guided by a professional dive instructor.',
        desc3: 'The second dive session takes place at Coral Garden, known for its calm conditions and rich marine biodiversity. This dive allows you to explore healthy coral formations and spot unique marine life such as snappers, frogfish, ribbon eels, and scorpionfish. After completing both dives, enjoy a delicious Indonesian lunch before returning to your hotel, making Tulamben Diving a complete and rewarding day trip.',
    };

    const images = [
        {src:'/images/activities/tulamben-diving/1.jpg', alt:'Tulamben Diving in Bali'},
        {src:'/images/activities/tulamben-diving/2.jpg', alt:'Tulamben Diving Adventure Bali'},
        {src:'/images/activities/tulamben-diving/3.jpg', alt:'Diving in Tulamben Bali'},
        {src:'/images/activities/tulamben-diving/4.jpg', alt:'Underwater Scenery Tulamben Bali'},
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