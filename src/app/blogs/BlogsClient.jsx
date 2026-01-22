"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { blogData } from "../data/data";
import { useSearchParams, useRouter } from "next/navigation";

import Switcher from "../components/switcher";
import Footer from "../components/footer";

export default function BlogsClient() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 6;

    const currentPage = Number(searchParams.get("page")) || 1;

    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = blogData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const goToPage = (page) => {
        router.push(`/blogs?page=${page}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative w-full py-36 overflow-hidden">
            <Image
                src="/images/bg/8.jpg"
                alt="Travel Blogs"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
                    Travel Blogs
                    </h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
                </ul>
            </div>
        </section>

        {/* CONTENT */}
        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {currentBlogs.map((item, index) => (
                        <div className="group relative overflow-hidden" key={index}>
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <Link href={`/blog-detail/${item.slug}`} className="block overflow-hidden">
                                    <Image
                                        src={item.image}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                        className="group-hover:scale-110 group-hover:rotate-3 duration-500"
                                        alt={item.title}
                                    />
                                </Link>
                            </div>

                            <div className="mt-6">
                                <div className="flex mb-3 text-sm text-slate-400">
                                    <span>
                                        by{" "}
                                        <span className="text-slate-900 dark:text-white font-medium">
                                            {item.author}
                                        </span>
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span>{item.date}</span>
                                </div>

                                <Link
                                    href={`/blog-detail/${item.slug}`}
                                    className="text-lg font-medium hover:text-[#397A3D] duration-500"
                                >
                                    {item.title}
                                </Link>

                                <p className="text-slate-400 mt-2">
                                    {item.excerpt}
                                </p>

                                <div className="mt-3">
                                    <Link
                                        href={`/blog-detail/${item.slug}`}
                                        className="hover:text-[#397A3D] inline-flex items-center"
                                    >
                                        Read More
                                        <FiChevronRight className="size-4 ms-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
    );
}