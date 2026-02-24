'use client'
import React, { useState, useEffect, useRef  } from 'react';
import { toursData, activitiesData, ticketsData } from "@/app/data/data"

import Link from 'next/link';
import Image from 'next/image';

export default function classNavbar({navclass, navlight, manuclass}){
    let [scrolling, setScrolling] = useState(false);
    let [isToggle, setToggle] = useState(false);
    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [userManu, setUserManu] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    let dropdownRef = useRef(null);
    let userRef = useRef(null);

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const userOutsideClick = (e) =>{
            if(userRef.current && !userRef.current.contains(e.target)){
                setUserManu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);
        
        let current = window.location.pathname
        setManu(current)
        setSubManu(current)
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
        };
    },[])

    const toggleMenu = () =>{
        setToggle(!isToggle)
    }

    return(
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight && (
                    <Link className="logo" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-rubt-dark.png' width={133} height={28} className="h-7 l-dark" alt=""/>
                            <Image src='/images/logo-rubt-light.png' width={133} height={28} className="h-7 l-light" alt=""/>
                        </span>
                        <Image src='/images/logo-rubt-white.png' width={133} height={28} className="hidden dark:inline-block" alt=""/>
                    </Link>
                )}
                {!navlight && (
                    <Link className="logo" href="/">
                        <div>
                            <Image src='/images/logo-rubt-dark.png' width={133} height={28} className="h-7 inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-rubt-white.png' width={133} height={28} className="h-7 hidden dark:inline-block" alt=""/>
                        </div>
                    </Link>
                )}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={() =>toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div id="navigation" style={{display: isToggle === true ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${manuclass}`}>
                        <li className={`parent-menu-item ${manu === '/' ? 'active' : '' }`}>
                            <Link href="/" onClick={()=>{ setManu('/'); setSubManu('/'); setToggle(false); }} className="sub-menu-item">Home</Link>
                        </li>

                        {/* <li className={`has-submenu parent-menu-item ${['/tours/nusa-penida-day-tour', '/tours/tanah-lot-sunset-tour', '/tours/gates-of-heaven-tour', '/tours/east-of-nusa-penida-day-tour', '/tours/bali-private-car-hire', '/tours/uluwatu-sunset-tour', '/tours/ubud-tanah-lot-tour', '/tours/bali-dolphin-tour', '/tours/bali-romantic-tour', '/tours/ubud-highlights-tour'].includes(manu) ? 'active' : ''}`}>
                            <Link href="" onClick={()=>setSubManu(subManu === '/tours-item' ? '' : '/tours-item')}>Tours</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${subManu === '/tours-item' ? 'open' : ''}`}>
                                <li className={`${manu === '/tours/nusa-penida-day-tour' ? 'active' : ''}`}><Link href="/tours/nusa-penida-day-tour" className="sub-menu-item">Nusa Penida Day Tour</Link></li>
                                <li className={`${manu === '/tours/tanah-lot-sunset-tour' ? 'active' : ''}`}><Link href="/tours/tanah-lot-sunset-tour" className="sub-menu-item">Tanah Lot Sunset Tour</Link></li>
                                <li className={`${manu === '/tours/gates-of-heaven-tour' ? 'active' : ''}`}><Link href="/tours/gates-of-heaven-tour" className="sub-menu-item">Gates of Heaven Tour</Link></li>
                                <li className={`${manu === '/tours/east-of-nusa-penida-day-tour' ? 'active' : ''}`}><Link href="/tours/east-of-nusa-penida-day-tour" className="sub-menu-item">East of Nusa Penida Day Tour</Link></li>
                                <li className={`${manu === '/tours/bali-private-car-hire' ? 'active' : ''}`}><Link href="/tours/bali-private-car-hire" className="sub-menu-item">Bali Private Car Hire</Link></li>
                                <li className={`${manu === '/tours/uluwatu-sunset-tour' ? 'active' : ''}`}><Link href="/tours/uluwatu-sunset-tour" className="sub-menu-item">Uluwatu Sunset Tour</Link></li>
                                <li className={`${manu === '/tours/ubud-tanah-lot-tour' ? 'active' : ''}`}><Link href="/tours/ubud-tanah-lot-tour" className="sub-menu-item">Ubud Tanah Lot Tour</Link></li>
                                <li className={`${manu === '/tours/bali-dolphin-tour' ? 'active' : ''}`}><Link href="/tours/bali-dolphin-tour" className="sub-menu-item">Bali Dolphin Tour</Link></li>
                                <li className={`${manu === '/tours/bali-romantic-tour' ? 'active' : ''}`}><Link href="/tours/bali-romantic-tour" className="sub-menu-item">Bali Romantic Tour</Link></li>
                                <li className={`${manu === '/tours/ubud-highlights-tour' ? 'active' : ''}`}><Link href="/tours/ubud-highlights-tour" className="sub-menu-item">Ubud Highlights Tour</Link></li>
                            </ul> 
                        </li> */}

                        <li className={`has-submenu parent-menu-item ${toursData.some((tour) => `/tours/${tour.slug}` === manu) ? "active" : "" }`}>
                            <Link href="#" onClick={(e) => {e.preventDefault(); setSubManu(subManu === "tours-item" ? "" : "tours-item"); }}>
                                Tours
                            </Link>

                            <span className="menu-arrow"></span>

                            <ul className={`submenu ${subManu === "tours-item" ? "open" : ""}`}>
                                {toursData.map((tour) => (
                                    <li key={tour.id} className={ manu === `/tours/${tour.slug}` ? "active" : "" }>
                                        <Link href={`/tours/${tour.slug}`} className="sub-menu-item">
                                            {tour.productData.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className={`has-submenu parent-menu-item ${activitiesData.some((activity) => `/activities/${activity.slug}` === manu) ? "active" : "" }`}>
                            <Link href="#" onClick={(e) => {e.preventDefault(); setSubManu(subManu === "activities-item" ? "" : "activities-item"); }}>
                                Activities
                            </Link>

                            <span className="menu-arrow"></span>

                            <ul className={`submenu ${subManu === "activities-item" ? "open" : ""}`}>
                                {activitiesData.map((activity) => (
                                    <li key={activity.id} className={ manu === `/activities/${activity.slug}` ? "active" : "" }>
                                        <Link href={`/activities/${activity.slug}`} className="sub-menu-item">
                                            {activity.productData.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                
                        <li className={`has-submenu parent-menu-item ${ticketsData.some((ticket) => `/tickets/${ticket.slug}` === manu) ? "active" : "" }`}>
                            <Link href="#" onClick={(e) => {e.preventDefault(); setSubManu(subManu === "tickets-item" ? "" : "tickets-item"); }}>
                                Tickets
                            </Link>

                            <span className="menu-arrow"></span>

                            <ul className={`submenu ${subManu === "tickets-item" ? "open" : ""}`}>
                                {ticketsData.map((ticket) => (
                                    <li key={ticket.id} className={ manu === `/tickets/${ticket.slug}` ? "active" : "" }>
                                        <Link href={`/tickets/${ticket.slug}`} className="sub-menu-item">
                                            {ticket.productData.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className={`parent-menu-item ${manu === '/blogs' || manu.startsWith('/blog-detail') ? 'active' : ''}`}>
                            <Link href="/blogs" onClick={() => { setManu('/blogs'); setSubManu('/blogs'); setToggle(false); }} className="sub-menu-item">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}