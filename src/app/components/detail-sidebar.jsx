'use client'
import React, { useState } from 'react';
import Script from "next/script";

import { FiCalendar, FiUser } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DetailSidebar({ price = 299000 }) {
    const [startDate, setStartDate] = useState(new Date());
    const [traveler, setTraveler] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleBooking = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/midtrans", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orderId: `ORDER-${Date.now()}`,
                    amount: price * traveler,
                    name: "Guest",
                    email: "guest@email.com",
                }),
            });

            const data = await res.json();

            if (window.snap) {
                window.snap.pay(data.token);
            } else {
                alert("Midtrans Snap belum siap");
            }

        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan");
        } finally {
            setLoading(false);
        }
    };

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
                        onClick={handleBooking}
                        disabled={loading}
                        className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-[#397A3D] hover:bg-emerald-800 text-white rounded-md w-full disabled:opacity-60"
                    >
                        {loading ? "Processing..." : "Check Availability"}
                    </button>
                </div>
            </div>
        </div>

        <Script
            src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
            strategy="lazyOnload"
        />
        </>
    );
}