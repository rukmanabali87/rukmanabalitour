import Link from "next/link";
import Navbar from "../components/navbar";
import Switcher from "../components/switcher";
import Footer from "../components/footer";
import { HiChevronRight } from "react-icons/hi";

import { restrictions } from "../data/data";

export default function Terms(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="!justify-end nav-light"/>

        <section className="relative table w-full py-20 lg:py-24 bg-[#0B472D]">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold text-white">Terms & Conditions</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/70 hover:text-white"><Link href="/">Rukmana Bali Tour</Link></li>
                    <li className="inline-block text-base text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-base text-white/50 mx-0.5"><HiChevronRight className="text-xl inline-block align-middle" /></li>
                    <li className="inline-block text-base text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-white" aria-current="page">Terms & Conditions</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white shadow rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Introduction :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                            <h5 className="text-xl font-semibold mb-4 mt-8">User Agreements :</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <b className="text-primary-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-primary-600">composed</b> in a pseudo-Latin language which more or less <b className="text-primary-600">corresponds</b> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-primary-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-primary-600">advantage</b> of its Latin origin and the relative <b className="text-primary-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <b className="text-primary-600">attention</b> from the layout.</p>
                            <p className="text-slate-400 mt-3">There is now an <b className="text-primary-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-primary-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-primary-600">nonsensical</b> stories.</p>
                            <p className="text-slate-400 mt-3">It seems that only <b className="text-primary-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            
                            <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                            <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                            <ul className="list-none text-slate-400 mt-3">
                                {restrictions.map((item,index)=>{
                                    return(
                                        <li className="flex mt-2" key={index}><i className="mdi mdi-chevron-right text-primary text-lg align-middle me-2"></i>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <Footer/>
        </>
    )
}