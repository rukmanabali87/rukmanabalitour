"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import { allPackages } from "../data/data";
import { useSearchParams, useRouter } from "next/navigation";

import {FiMapPin, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Switcher from "../components/switcher";
import Footer from "../components/footer";

// export const metadata = {
//     title: "All Tour Packages | Rukmana Bali Tour",
//     description: "Browse Bali tour packages with flexible pagination.",
// };

export default function Packages(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 6;

     // Ambil page dari URL (?page=2)
    const currentPage = Number(searchParams.get("page")) || 1;

    const totalPages = Math.ceil(allPackages.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPackages = allPackages.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const goToPage = (page) => {
        router.push(`/packages?page=${page}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">All Tour Packages</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour Packages</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {currentPackages.map((item,index)=>{
                        return(
                            <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                    {item.tagText && (
                                        <div className="absolute top-0 start-0 p-4">
                                            <span className="bg-[#397A3D] text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4">
                                    <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-[#397A3D] size-4 me-1"></FiMapPin> {item.place}</p>
                                    <Link href={`/tour-detail-one/${item.id}`} className="text-lg font-medium hover:text-[#397A3D] duration-500 ease-in-out">{item.title}</Link>

                                    <div className="flex items-center mt-2">
                                        <span className="text-slate-400">Rating:</span>
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline text-black dark:text-white text-sm">5.0</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-[#397A3D]">From IDR {item.amount}</h5>

                                        <Link href={item.route} className="text-slate-400 hover:text-[#397A3D]">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                {/* Prev */}
                                <li>
                                    <button
                                        onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl border border-gray-100 dark:border-gray-800 hover:bg-[#397A3D] hover:text-white disabled:opacity-40"
                                    >
                                        <FiChevronLeft className="size-5" />
                                    </button>
                                </li>

                                {/* Page Numbers */}
                                {Array.from({ length: totalPages }).map((_, index) => {
                                    const page = index + 1;
                                    return (
                                        <li key={page}>
                                            <button
                                                onClick={() => goToPage(page)}
                                                className={`size-[40px] inline-flex justify-center items-center border
                                                    ${
                                                        currentPage === page
                                                            ? "bg-[#397A3D] text-white border-[#397A3D]"
                                                            : "bg-white dark:bg-slate-900 text-slate-400 border-gray-100 dark:border-gray-800 hover:bg-[#397A3D] hover:text-white"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        </li>
                                    );
                                })}

                                {/* Next */}
                                <li>
                                    <button
                                        onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl border border-gray-100 dark:border-gray-800 hover:bg-[#397A3D] hover:text-white disabled:opacity-40"
                                    >
                                        <FiChevronRight className="size-5" />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}