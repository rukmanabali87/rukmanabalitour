'use client'
import React, { useState } from 'react';
import Script from "next/script";

import { FiCalendar, FiUser } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { productPrices } from "@/app/data/price";

export default function DetailSidebar({ price = 299000,slug }) {
    const [startDate, setStartDate] = useState(new Date());
    const [traveler, setTraveler] = useState(1);

    const currentProductPrices = productPrices[slug];
    let unitPrice = price;
    if (currentProductPrices) {
        const maxPaxInData = Math.max(...Object.keys(currentProductPrices).map(Number));
        
        const selectedPax = traveler > maxPaxInData ? maxPaxInData : traveler;
        
        unitPrice = currentProductPrices[selectedPax];
    }
    const totalPrice = unitPrice * traveler;

    return (
        <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20 flex flex-col gap-6">

                {/* Booking Card */}
                <div className="p-4 rounded-md shadow dark:shadow-gray-700">
                    <div className='flex flex-col'>
                        <h3 className="text-xl font-bold text-center"> Booking </h3>
                    </div>
                    
                    <div className="mt-4">
                        <div className="md:flex mt-4 items-center">
                            <div className="md:w-1/3">
                                <label className="font-medium">Date:</label>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <div className="form-icon relative w-full h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded border border-gray-100 dark:border-gray-800 flex items-center">
                                    <FiCalendar className="w-4 absolute top-3 start-4" />
                                    <DatePicker
                                        className="w-full ps-12 py-2 px-3 h-10 outline-none border-0 focus:outline-none focus:ring-0"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:flex mt-4 items-center">
                            <div className="md:w-1/3">
                                <span className="font-medium">Traveler:</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <div className="form-icon relative">
                                    <FiUser className="w-4 h-4 absolute top-3 start-4" />
                                    <input
                                        type="number"
                                        min="1"
                                        value={traveler}
                                        onChange={(e) => setTraveler(Number(e.target.value))}
                                        className="w-full ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="No. of person"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="mt-6 border-t dark:border-gray-800 pt-4 mb-4">
                            <div className="flex justify-between items-center text-lg">
                                <span className="font-semibold">Total:</span>
                                <span className="font-bold text-primary">
                                    Rp {totalPrice.toLocaleString("id-ID")}
                                </span>
                            </div>
                            <div className="text-right text-sm text-slate-400 mt-1">
                                (Rp {unitPrice.toLocaleString("id-ID")} / pax)
                            </div>
                        </div>
                        <button className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/80 text-white rounded-md w-full disabled:opacity-60">
                            Check Availability
                        </button> 
                    </div>
                </div>

                {/* WhatsApp Us Card */}
                <div className="p-4 rounded-md shadow dark:shadow-gray-700">
                    <div className='flex flex-col items-center'>
                        <div className="flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full mb-3">
                            <FaWhatsapp className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-1">WhatsApp Us</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                            Have questions? Chat with us directly on WhatsApp for fast responses.
                        </p>
                        <a
                            href="https://wa.me/6287862207901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2 px-5 w-full tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/80 text-white rounded-md"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}