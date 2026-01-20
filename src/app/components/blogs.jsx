import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";

import { FiChevronRight } from 'react-icons/fi'

export default function Blogs(){
    return(
            <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl font-semibold">
                    Travel Blogs
                </h3>

                <p className="text-slate-400 max-w-xl mx-auto">
                    Discover travel tips, destination guides, and inspiring stories to help you plan the perfect Bali getaway.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                {blogData.slice(0, 3).map((item, index) => (
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
        </div>
    )
}