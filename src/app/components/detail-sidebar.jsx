'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FiCalendar, FiUser } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DetailSidebar({ priceOptions = [], slug }) {
    const [startDate, setStartDate] = useState(new Date());
    const [traveler, setTraveler] = useState(1);
    const [showOptions, setShowOptions] = useState(false);

    const router = useRouter();

    function getStartPrice(option) {
        return Math.min(...option.pricing.map(p => p.total));
    }

    function handleSelectOption(option) {

        const date = startDate.toISOString().split("T")[0];

        router.push(
            `/booking/${slug}?option=${option.id}&pax=${traveler}&date=${date}`
        );
    }

    return (
        <>
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
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
                                    minDate={new Date()}
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
                    <button
                        onClick={() => setShowOptions(prev => !prev)}
                        disabled={traveler < 1}
                        className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-[#397A3D] hover:bg-emerald-800 text-white rounded-md w-full disabled:opacity-60"
                    >
                        Choose Option
                    </button>
                </div>

                {/* OPTIONS */}
                {showOptions && (
                    <div className="mt-4 space-y-2">
                        {priceOptions.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => handleSelectOption(option)}
                                className="border border-gray-200 dark:border-gray-700 rounded-md p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">
                                        {option.name}
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        Start from IDR {getStartPrice(option).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}