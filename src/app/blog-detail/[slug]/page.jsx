import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation";

import Navbar from "../../components/navbar";
import Blogs from '../../components/blogs'
import BlogSidebar from "../../components/blog-sidebar";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { blogData } from "../../data/data";

export default async function BlogDetail({ params }){
    const { slug } = await params;

    const data = blogData.find(
        (item) => item.slug === slug
    );

    if (!data) {
        notFound();
    };

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>
        <section className="relative w-full py-36 overflow-hidden">
            <Image
                src={data?.image}
                alt="Blog Background"
                fill
                priority
                className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">{data?.title}</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blog Detail</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">

                            <Image src={data?.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>

                            <div className="p-6 space-y-4">
                                {data.content.map((item, index) => {
                                    switch (item.type) {
                                    case "heading":
                                        return (
                                        <h2
                                            key={index}
                                            className="text-xl md:text-2xl font-semibold mt-6"
                                        >
                                            {item.text}
                                        </h2>
                                        );

                                    case "paragraph":
                                        return (
                                        <p
                                            key={index}
                                            className="text-slate-400 leading-relaxed text-sm md:text-base"
                                        >
                                            {item.text}
                                        </p>
                                        );

                                    case "quote":
                                        return (
                                        <blockquote
                                            key={index}
                                            className="italic border-x-4 border-primary rounded-ss-xl rounded-ee-xl p-4 text-slate-400 bg-slate-50 dark:bg-slate-800"
                                        >
                                            “{item.text}”
                                        </blockquote>
                                        );

                                    case "list":
                                        return (
                                        <ul
                                            key={index}
                                            className="list-disc list-inside text-slate-400 space-y-1"
                                        >
                                            {item.items.map((listItem, i) => (
                                            <li key={i}>{listItem}</li>
                                            ))}
                                        </ul>
                                        );

                                    default:
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                    <BlogSidebar
                        author={data.author}
                        date={data.date}
                    />
                </div>
            </div>

            <Blogs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}