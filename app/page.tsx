"use client";

import { FaTwitter } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import FeedCard from "@/components/FeedCard";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
import { GoogleLogin } from '@react-oauth/google'
import { useCallback } from 'react';

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoHomeOutline />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />
  },
  {
    title: "Money",
    icon: <FaMoneyCheckAlt />
  },
  {
    title: "More",
    icon: <CgMoreR />
  }


];

export default function Home() {
  const handleLoginWithGoogle = useCallback(() => {
    
  }, [])
  
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 px-4">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-1 text-xl font-semibold pr-4">
            <ul>
            {sidebarMenuItems.map(items => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2" 
                key={items.title}>
                <span className="text-3xl">{items.icon}</span>
                <span>{items.title}</span>
              </li>
            ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-fullcursor-pointer">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r border-l h-screen overflow-y-auto border-gray-600 scrollbar-hide">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl font-bold">New to Twitter?</h1>
            <div className="mt-4 flex justify-center">
              <GoogleLogin 
                onSuccess={(cred) => {
                  console.log("Google Login Success:", cred);
                }}
                onError={() => {
                  console.log("Google Login Failed");
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Google Login Button</p>
          </div>
        </div>
      </div>
    </div>
  );
}
