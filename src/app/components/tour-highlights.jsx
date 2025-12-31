'use client';
import React from "react";

export default function TourHighlights({ items = [] }){
    return (
        <ul className="space-y-6">
            {items.map((item, index) => {
                const Icon = item.icon;

                return (
                    <li key={index} className="group flex items-center gap-4 p-4 rounded-md shadow hover:shadow transform hover:scale-105 transition-all duration-300 border-l-4 border-[#397A3D] dark:shadow-gray-700">
                        <span className="text-3xl text-[#397A3D] dark:text-white flex items-center leading-none transition-transform duration-300 group-hover:scale-110 group-hover:text-[#397A3D]">
                            <Icon />
                        </span>

                        <div>
                            <h6 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#397A3D]">
                                {item.title}
                            </h6>
                            <p className="text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};