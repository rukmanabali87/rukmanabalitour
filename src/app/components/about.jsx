'use client'
import React from "react";
import Image from "next/image";

export default function About(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                <div className="md:col-span-5">
                    <div className="relative">
                        <Image src='/images/about.webp' width={0} height={0} sizes="100vw" style={{width:'90%', height:'auto'}} className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]" alt=""/>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h3 className="mt-8 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Bali Easily <br/> with Rukmana Bali Tour</h3>

                        <p className="text-slate-400 max-w-xl mb-6">Experience the magic of Bali with Rukmana Bali Tour&apos;s carefully crafted travel packages. From breathtaking beaches and iconic temples to vibrant culture and scenic nature, our tour packages let you explore the island stress-free. Whether you&apos;re planning a romantic getaway, a family holiday, or an adventure with friends, we provide flexible and affordable options to make your Bali vacation truly unforgettable.</p>
                    </div>
                </div>

                <div className="absolute bottom-0 start-1/3 -z-1">
                    <Image
                        src="/images/map-plane-big.png"
                        alt=""
                        width={600}
                        height={400}
                        className="lg:w-[600px] w-96 h-auto"
                        priority={false}
                    />
                </div>
            </div>
        </div>
    )
}