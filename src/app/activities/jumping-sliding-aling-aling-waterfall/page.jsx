'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/app/components/navbar";
import DetailSidebar from "@/app/components/detail-sidebar";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";

import { FiActivity, FiClock, FiDollarSign, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import { FaCameraRetro } from "react-icons/fa";
import { TbCliffJumping } from "react-icons/tb";
import { GiWaterfall } from "react-icons/gi";
import { HiChevronRight } from "react-icons/hi";

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
        title: 'From IDR 781.000'
    },
];

export const faqData = [
    {
        id: 1,
        title: "Is this tour suitable for beginners?",
        desc: "Yes. Beginners can enjoy sliding and choose lower jump spots with guidance."
    },
    {
        id: 2,
        title: "Do I have to jump from high spots?",
        desc: "No. Jumps are optional and available in different heights."
    },
    {
        id: 3,
        title: "Is a local guide mandatory?",
        desc: "Yes. A local guide is required for safety during jumping and sliding."
    },
    {
        id: 4,
        title: "What should I bring?",
        desc: "Swimwear, towel, change of clothes, and water shoes."
    },
    {
        id: 5,
        title: "Is this tour safe?",
        desc: "Yes. A safety briefing, professional guidance, and insurance are included."
    },
    {
        id:6,
        title:'Is hotel pickup and drop-off available in all areas of Bali?',
        desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
    },
];

export const highlightsData = [
    {
        icon: TbCliffJumping,
        title: "Jump & Slide Adventure",
        desc: "Natural slides and jumps up to 20 meters."
    },
    {
        icon: GiWaterfall,
        title: "Aling-Aling & Kroya Waterfalls",
        desc: "Crystal-clear pools in a tropical setting."
    },
    {
        icon:   FaCameraRetro,
        title: "Wanagiri Photo Stop",
        desc: "Scenic views of the famous twin lakes."
    },
];

export const itineraryData = [
    {
        time: "08:00 AM",
        title: "Hotel Pick-up",
        desc: "Private hotel pick-up."
    },
    {
        time: "11:00 AM",
        title: "Arrival at Aling-Aling",
        desc: "Meet local guide and prepare."
    },
    {
        time: "11:15 AM",
        title: "Safety Briefing",
        desc: "Jumping and sliding instructions."
    },
    {
        time: "11:30 AM",
        title: "Jumping & Sliding",
        desc: "Waterfall adventure and swimming."
    },
    {
        time: "01:30 PM",
        title: "Change & Rest",
        desc: "Shower and change clothes."
    },
    {
        time: "02:00 PM",
        title: "Lunch Break (Optional)",
        desc: "Lunch at local restaurant."
    },
    {
        time: "03:00 PM",
        title: "Wanagiri Photo Stop",
        desc: "Twin lakes viewpoint."
    },
    {
        time: "04:00 PM",
        title: "Return Transfer",
        desc: "Drive back to hotel."
    },
    {
        time: "06:00 PM",
        title: "Arrive at Hotel",
        desc: "Tour ends."
    },
];

export const inclusionsData = {
    included: [
        "Private comfortable air-conditioned car",
        "English-speaking driver as guide",
        "Entrance ticket for jumping & sliding",
        "Local guide for jumping & sliding",
        "Insurance",
    ],
    excluded: [
        "Meals fee",
        "Personal expenses",
    ]
};

export default function JumpingSlidingAlingAlingWaterfall(){

    const productData = {
        title: 'Jumping Sliding Aling-Aling Waterfall',
        place: 'Buleleng, Bali',
        desc1: 'Jumping Sliding Aling-Aling Waterfall is an exciting adventure in the far north of Bali, perfect for travelers seeking adrenaline and natural beauty. This tour takes you to the Aling-Aling Waterfalls area, where you can jump, slide, and swim in clear natural pools formed by cascading waterfalls. With private hotel transfers from Ubud and selected areas of south Bali, the long journey becomes comfortable and hassle-free.',
        desc2: 'The Aling-Aling area is home to several waterfalls, including the famous Kroya Waterfall, the main spot for jumping and sliding activities. You will spend around 2 hours enjoying slides of about 15 meters and jumps from 10, 15, to 20 meters, all under the supervision of a local professional guide who provides safety instructions before each activity. A scenic photo stop at Wanagiri Twin Lakes completes this unforgettable adventure.',
    };

    const images = [
        {src:'/images/activities/jumping-sliding-aling-aling-waterfall/1.jpg', alt:'Jumping Sliding Aling Aling Waterfall Bali'},
        {src:'/images/activities/jumping-sliding-aling-aling-waterfall/2.jpg', alt:'Aling Aling Waterfall Bali'},
        {src:'/images/activities/jumping-sliding-aling-aling-waterfall/3.jpg', alt:'Wanagiri Twin Lakes Bali'},
        {src:'/images/activities/jumping-sliding-aling-aling-waterfall/4.jpg', alt:'Wanagiri Photo Spot Bali'},
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
                    className="object-cover object-center"
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
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><HiChevronRight className="text-xl inline-block align-middle" /></li>
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