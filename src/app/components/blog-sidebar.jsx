import React from "react";
import { FiUser, FiCalendar } from "react-icons/fi";

export default function BlogSidebar({ author, date }) {
    return (
        <div className="lg:col-span-4 md:col-span-6">
            <div className="lg:sticky lg:top-24 space-y-6">

                {/* Author */}
                <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                    <h5 className="text-lg font-semibold mb-4">
                        Blog Information
                    </h5>

                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-center gap-3">
                            <FiUser className="text-[#397A3D]" />
                            <div>
                                <span className="block text-sm">Author</span>
                                <span className="text-slate-900 dark:text-white font-medium">
                                    {author}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center gap-3">
                            <FiCalendar className="text-[#397A3D]" />
                            <div>
                                <span className="block text-sm">Published</span>
                                <span className="text-slate-900 dark:text-white font-medium">
                                    {date}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}