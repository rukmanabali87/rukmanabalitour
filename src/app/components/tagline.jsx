import React from "react";

import {FiClock, FiMapPin, FiMail, FiFacebook, FiInstagram, FiTwitter, FiPhone} from 'react-icons/fi'

export default function Tagline(){
    return(
        <>
        <div className="tagline bg-[#0B472D] dark:bg-emerald-900">
            <div className="container relative">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="list-none space-x-2">
                            {/* <li className="inline-flex items-center">
                                <FiClock className="text-primary size-4"></FiClock>
                                <span className="ms-2 text-slate-300">Mon-Sat: 9am to 6pm</span>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <FiMapPin className="text-primary size-4"></FiMapPin>
                                <span className="ms-2 text-slate-300">Houston, USA 485</span>
                            </li> */}
                        </ul>

                        <ul className="list-none">
                            <li className="inline-flex items-center">
                                <FiMail className="text-slate-300 size-4"></FiMail>
                                <a href="mailto:info@rukmanabalitour.com" className="ms-2 text-slate-300 hover:text-slate-200">info@rukmanabalitour.com</a>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <ul className="list-none space-x-3">
                                    <li className="inline-flex mb-0"><a href="https://www.facebook.com/rukmanabalitour" className="text-slate-300 hover:text-[#DEA243]"><FiFacebook className="size-4 align-middle" title="facebook"></FiFacebook></a></li>
                                    <li className="inline-flex ms-2 mb-0"><a href="https://www.instagram.com/rukmanabalitour/" className="text-slate-300 hover:text-[#DEA243]"><FiInstagram className="size-4 align-middle" title="instagram"></FiInstagram></a></li>
                                    <li className="inline-flex ms-2 mb-0"><a href="https://wa.me/6287862207901" className="text-slate-300 hover:text-[#DEA243]"><FiPhone className="size-4 align-middle" title="phone"></FiPhone></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}