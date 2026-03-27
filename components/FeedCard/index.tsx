import React from 'react'
import Image from 'next/image'
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiShare } from "react-icons/fi";

const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-b-0 border-l-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image src="/profile3.png" alt="Profile" width={50} height={50} className='rounded-full' />
                </div>
                <div className='col-span-11'>
                    <h5>John Doe</h5>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.dafvasrfa r
                        zdfgdgas rsergsdrg aega SDfasrefaR
                        fdgersergsegraes
                        sdgrsdrg
                    </p>
                    <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
                        <div>
                            <FiMessageCircle />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <IoMdHeartEmpty />
                        </div>
                        <div>
                            <TbBrandGoogleAnalytics />
                        </div>
                        <div>
                            <FiShare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeedCard;