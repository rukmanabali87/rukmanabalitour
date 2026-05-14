'use client';

import Link from "next/link";
import Image from "next/image";
import Search from "../components/search";
import Navbar from "../components/navbar";
import { allPackages } from "../data/data";
import { useSearchParams, useRouter } from "next/navigation";

import {FiMapPin, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { MdStar, MdArrowForward, } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function PackagesClient(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 6;

    // 1. Ambil kata kunci dan kota dari URL
    const keyword = searchParams.get("q") || "";
    const cityFilter = searchParams.get("city") || ""; // Ambil parameter city

    // 2. Filter data allPackages berdasarkan keyword DAN city
    const filteredPackages = allPackages.filter((pkg) => {
        // Cek kecocokan keyword pencarian teks
        const matchKeyword = keyword === "" || (
            pkg.title?.toLowerCase().includes(keyword.toLowerCase()) ||
            pkg.place?.toLowerCase().includes(keyword.toLowerCase()) ||
            pkg.tagText?.toLowerCase().includes(keyword.toLowerCase())
        );

        // Cek kecocokan filter kota (place)
        const matchCity = cityFilter === "" || (
            pkg.place?.toLowerCase().includes(cityFilter.toLowerCase())
        );

        // Return true hanya jika paket lolos kedua filter (atau filter sedang kosong)
        return matchKeyword && matchCity;
    });

    const currentPage = Number(searchParams.get("page")) || 1;

    // 3. Gunakan filteredPackages.length untuk menghitung total halaman (bukan allPackages lagi)
    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage) || 1;

    // Proteksi: Jika user di page 3, lalu nge-search dan hasilnya cuma 1 page, kembalikan ke page 1
    const safeCurrentPage = currentPage > totalPages ? 1 : currentPage;

    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    
    // 4. Potong (slice) data dari hasil filter untuk ditampilkan di halaman ini
    const currentPackages = filteredPackages.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const goToPage = (page) => {
        // 5. Gunakan URLSearchParams agar query pencarian (?q=...) tidak terhapus saat pindah page
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        currentParams.set("page", page.toString());
        
        router.push(`/packages?${currentParams.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative w-full py-36 overflow-hidden">
            <Image
                src="/images/bg/9.jpg"
                alt="Bali Tour Packages"
                fill
                priority
                className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
                        {keyword ? `Search Results for "${keyword}"` : "All Tour Packages"}
                    </h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour Packages</li>
                </ul>
            </div>
        </section>

        <section className="relative py-4 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <Search/>
                </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                
                {/* 6. Tampilkan pesan jika hasil pencarian kosong */}
                {currentPackages.length === 0 ? (
                    <div className="text-center py-10">
                        <h4 className="text-2xl font-medium text-slate-800 dark:text-white mb-2">No packages found</h4>
                        <p className="text-slate-400">We couldn't find any tours matching "{keyword}". Try a different search term.</p>
                        <button onClick={() => router.push('/packages')} className="mt-4 py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-[#397A3D] text-white rounded-md">
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {currentPackages.map((item,index)=>{
                            return(
                                <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                    <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                        <Link href={item.route} className="block overflow-hidden">
                                            <Image
                                                src={item.image}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", height: "auto" }}
                                                className="scale-125 group-hover:scale-100 duration-500"
                                                alt={item.title}
                                            />
                                        </Link>
                                        {item.tagText && (
                                            <div className="absolute top-0 start-0 p-4">
                                                <span className="bg-[#397A3D] text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-[#397A3D] size-4 me-1"></FiMapPin> {item.place}</p>
                                        <Link href={item.route} className="text-lg font-medium hover:text-[#397A3D] duration-500 ease-in-out">{item.title}</Link>

                                        <div className="flex items-center mt-2">
                                            <span className="text-slate-400">Rating:</span>
                                            <ul className="flex items-center text-amber-400 list-none ms-2">
                                                <li className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                                <li className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                                <li className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                                <li className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                                <li className="inline-flex items-center">
                                                    <MdStar className="text-lg" />
                                                </li>
                                                <li className="text-black dark:text-white text-sm ms-1">
                                                    5.0
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                            <h5 className="text-lg font-medium text-[#397A3D]">
                                                From IDR {item.amount}
                                            </h5>

                                            <Link
                                                href={item.route}
                                                className="inline-flex items-center gap-1 text-slate-400 hover:text-[#397A3D]"
                                            >
                                                Explore Now
                                                <MdArrowForward size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* 7. Sembunyikan paginasi jika hasil filter tidak ada atau cuma muat di 1 halaman */}
                {totalPages > 1 && (
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    {/* Prev */}
                                    <li>
                                        <button
                                            onClick={() => goToPage(Math.max(safeCurrentPage - 1, 1))}
                                            disabled={safeCurrentPage === 1}
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
                                                            safeCurrentPage === page
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
                                            onClick={() => goToPage(Math.min(safeCurrentPage + 1, totalPages))}
                                            disabled={safeCurrentPage === totalPages}
                                            className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl border border-gray-100 dark:border-gray-800 hover:bg-[#397A3D] hover:text-white disabled:opacity-40"
                                        >
                                            <FiChevronRight className="size-5" />
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}