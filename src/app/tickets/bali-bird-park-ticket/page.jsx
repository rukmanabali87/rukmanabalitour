'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaDove, FaFeatherAlt, FaUserFriends } from "react-icons/fa";

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
        title: '6 Hours (Approx.)'
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
        title: 'From IDR 655.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this tour suitable for children?",
        desc: "Yes. Bali Bird Park is family-friendly and ideal for kids."
    },
    {
        id: 2,
        title: "How long should I spend at Bali Bird Park?",
        desc: "Most visitors spend around 3–4 hours exploring the park."
    },
    {
        id: 3,
        title: "Are bird shows included?",
        desc: "Yes. All scheduled bird shows are included in the ticket."
    },
    {
        id: 4,
        title: "Is hotel transfer included?",
        desc: "Hotel transfer is available as an optional service."
    },
    {
        id: 5,
        title: "Can I explore the park freely?",
        desc: "Yes. You can explore the park at your own pace."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: FaDove,
        title: "Home to 1,000+ Birds",
        desc: "Discover tropical and rare bird species from around the world."
    },
    {
        icon: FaFeatherAlt,
        title: "Educational Bird Shows",
        desc: "Enjoy interactive and informative bird performances."
    },
    {
        icon: FaUserFriends,
        title: "Family-Friendly Experience",
        desc: "A relaxed and fun activity for all ages."
    },
];

export const itineraryData = [
    {
        time: "09:00 AM",
        title: "Hotel Pick-up (Optional)",
        desc: "Private transfer to Bali Bird Park."
    },
    {
        time: "10:00 AM",
        title: "Arrival at Bali Bird Park",
        desc: "Entrance and registration."
    },
    {
        time: "10:15 AM",
        title: "Explore the Park",
        desc: "Discover bird zones and habitats."
    },
    {
        time: "12:00 PM",
        title: "Bird Shows",
        desc: "Watch educational bird performances."
    },
    {
        time: "01:00 PM",
        title: "Free Time",
        desc: "Explore more or relax."
    },
    {
        time: "02:00 PM",
        title: "Return Transfer",
        desc: "Optional hotel drop-off."
    },
    {
        time: "03:00 PM",
        title: "Arrive at Hotel",
        desc: "Tour ends."
    },
];

export const inclusionsData = {
    included: [
        "Hotel transfer (optional)",
        "Government tax & service charge",
        "Entrance ticket",
        "All bird shows",
    ],
    excluded: [
        "Meals",
        "Personal expenses",
    ]
};

export default function BaliBirdParkTicket(){

    const productData = {
        title: 'Bali Bird Park Ticket',
        place: 'Gianyar, Bali',
        desc1: 'Bali Bird Park Ticket is perfect for nature lovers and families who want to explore one of Bali’s finest bird sanctuaries at a relaxed pace. Home to around 1,000 birds from over 250 species, the park showcases a wide variety of tropical and rare birds, including macaws, toucans, cassowaries, eagles, pelicans, and the iconic Tiung bird. Educational bird shows and interactive performances make the visit both fun and informative.',
        desc2: 'This package includes entrance tickets and access to all bird shows, with private round-trip hotel transfers from Ubud and much of south Bali available (optional). Flexible departure times allow you to plan your visit easily and enjoy Bali Bird Park without rushing, making it an ideal activity for all ages.',
    };

    const images = [
        {src:'/images/tickets/bali-bird-park-ticket/1.jpg', alt:'Bali Bird Park Ticket Activity'},
        {src:'/images/tickets/bali-bird-park-ticket/2.jpg', alt:'Bird Park Bali Colorful Birds'},
        {src:'/images/tickets/bali-bird-park-ticket/3.jpg', alt:'Bali Bird Park Exotic Birds Show'},
        {src:'/images/tickets/bali-bird-park-ticket/4.jpg', alt:'Bali Bird Park Lush Greenery'},
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
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Tickets</Link></li>
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