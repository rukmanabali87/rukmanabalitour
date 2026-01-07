'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaMapPin, FaCameraRetro } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

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
        title: '12 Hours (Approx.)'
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
        title: 'From IDR 1.281.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this a full-day tour?",
        desc: "Yes, this is a full-day tour starting early morning and returning to your hotel in the late afternoon."
    },
    {
        id: 2,
        title: "Is lunch included in the tour?",
        desc: "Yes, an Indonesian lunch at a local restaurant is included."
    },
    {
        id: 3,
        title: "Is this tour suitable for children or elderly?",
        desc: "Yes, but some locations involve stairs and uneven paths, so basic mobility is recommended."
    },
    {
        id: 4,
        title: "What should I bring for the tour?",
        desc: "Comfortable shoes, sunscreen, hat, camera, and personal essentials are recommended."
    },
    {
        id: 5,
        title: "Can I customize the itinerary?",
        desc: "Minor adjustments may be possible depending on conditions and should be discussed in advance."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaMapPin,
        title: "Iconic East Nusa Penida",
        desc: "Atuh Beach, Diamond Beach & Tree House views."
    },
    {
        icon: FaPersonWalkingLuggage,
        title: "Comfortable Day Trip",
        desc: "Hotel pick-up, fast boat & local guide."
    },
    {
        icon: FaCameraRetro,
        title: "Photo-Worthy Landscapes",
        desc: "Cliffs, beaches & ocean panoramas."
    },
];

export const itineraryData = [
    {
        time: "06:30 AM",
        title: "Hotel Pick-up",
        desc: "Pick-up from your hotel and transfer to Sanur Beach Harbour."
    },
    {
        time: "07:30 AM",
        title: "Fast Boat Check-in",
        desc: "Check-in and boarding fast boat at Sanur Harbour."
    },
    {
        time: "08:00 AM",
        title: "Depart to Nusa Penida",
        desc: "Fast boat departure from Sanur to Nusa Penida (approx. 45 minutes)."
    },
    {
        time: "08:45 AM",
        title: "Arrive at Nusa Penida",
        desc: "Arrive at Nusa Penida Island and meet your local guide."
    },
    {
        time: "09:15 AM",
        title: "Atuh Beach Visit",
        desc: "Enjoy scenic cliff views and a relaxing beach walk at Atuh Beach."
    },
    {
        time: "10:30 AM",
        title: "Diamond Beach Exploration",
        desc: "Explore Diamond Beach and capture stunning coastal photos."
    },
    {
        time: "12:00 PM",
        title: "Lunch Break",
        desc: "Enjoy an included Indonesian lunch at a local restaurant."
    },
    {
        time: "01:00 PM",
        title: "Tree House Visit",
        desc: "Photo stop at Tree House (Rumah Pohon Molenteng) with panoramic views."
    },
    {
        time: "02:30 PM",
        title: "Return to Harbour",
        desc: "Depart for Nusa Penida Harbour."
    },
    {
        time: "03:00 PM",
        title: "Return Fast Boat Check-in",
        desc: "Check-in and board fast boat back to Bali."
    },
    {
        time: "03:30 PM",
        title: "Depart to Bali",
        desc: "Fast boat departure from Nusa Penida to Sanur."
    },
    {
        time: "04:15 PM",
        title: "Arrive in Sanur",
        desc: "Arrive at Sanur Harbour and transfer back to hotel."
    },
    {
        time: "05:00 PM",
        title: "Hotel Drop-off",
        desc: "Arrive at your hotel and end of tour."
    }
];

export const inclusionsData = {
    included: [
        "Private Air-Conditioned Car & Driver",
        "English-Speaking Local Guide",
        "Hotel pick-up & drop-off in Bali",
        "Return fast boat ticket",
        "Indonesian lunch",
        "All entrance tickets",
        "Insurance",
    ],
    excluded: [
        "Personal Expenses",
    ]
};

export default function EastOfNusaPenidaDayTour(){

    const productData = {
        title: 'East of Nusa Penida Day Tour',
        place: 'Klungkung, Bali',
        desc1: 'The East of Nusa Penida Day Tour is a perfect choice for travelers who want to explore the most scenic and unspoiled eastern side of Nusa Penida Island. This full-day tour starts with a convenient hotel pick-up in Bali, followed by a fast boat ride from Sanur to Nusa Penida. Accompanied by a local guide, you will discover dramatic coastal cliffs, turquoise waters, and breathtaking viewpoints that make East Nusa Penida one of Bali’s most photogenic destinations.',
        desc2: 'During this East Nusa Penida tour, you will visit iconic spots such as Atuh Beach and Diamond Beach, famous for their white sand, crystal-clear ocean, and stunning cliffside panoramas. These locations are ideal for sightseeing, short beach walks, and capturing memorable photos. A lunch break at a local restaurant is available (optional), allowing you to relax and enjoy the island atmosphere before continuing your journey.',
        desc3: 'The highlight of the East of Nusa Penida Day Tour is a visit to the famous Tree House (Rumah Pohon Molenteng), offering panoramic views over the ocean and rugged cliffs—one of the most Instagrammable spots on the island. After a full day exploring the best of East Nusa Penida, you will return to Bali by fast boat and be transferred back to your hotel, completing an unforgettable Nusa Penida day trip experience.',
    };

    const images = [
        {src:'/images/tours/east-of-nusa-penida-day-tour/1.jpg', alt:'Tree House at East of Nusa Penida'},
        {src:'/images/tours/east-of-nusa-penida-day-tour/2.jpg', alt:'Diamond Beach Viewpoint'},
        {src:'/images/tours/east-of-nusa-penida-day-tour/3.jpg', alt:'Atuh Beach Landscape'},
        {src:'/images/tours/east-of-nusa-penida-day-tour/4.jpg', alt:'Sanur Harbour'},
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