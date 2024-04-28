import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";

let tabs = [
    "Candidate","Customer"
];

interface SignupTabsProps{
    activeTab:string;
    setActiveTab:Dispatch<SetStateAction<string>>;
}
const SignupTabs:FC<SignupTabsProps> = ({activeTab,setActiveTab}):JSX.Element=>{
  


  return (
    <div className="flex space-x-1 border border-red-500">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`${
            activeTab === tab? "text-red-500" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium bg-white text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}

export default SignupTabs