'use client'
import React, { useState } from "react";
import { HiCheck, HiX } from 'react-icons/hi';

export default function TourInclusions({ inclusionsData }) {
    if (!inclusionsData) return null;

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(inclusionsData).map(([type, items]) => (
                <div key={type}>
                    <h5 className="text-lg font-semibold mb-4 capitalize">
                        {type}:
                    </h5>

                    <ul className="space-y-2 text-slate-400">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className={`w-5 flex justify-center mt-[2px] flex-shrink-0 ${type === "included" ? "text-green-600" : "text-red-500"}`}>
                                    {type === "included" ? <HiCheck size={18} /> : <HiX size={18} />}
                                </span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}