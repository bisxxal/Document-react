import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline  } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data , reference}) {
    
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=" relative overflow-hidden w-[13vw]   h-[240px] bg-[#111213a1] p-5 text-yellow-50 rounded-[40px]">
      <FaRegFileAlt />
     <p className="font-normal text-[13px] mt-5 font-sm leading-tight">{data.desc}</p>
     <div className="fotter absolute bottom-0 left-0    w-full ">
        <div className="flex px-5 py-1 items-center mb-3 justify-between">
            <h5 className="text-[14px]">{data.fileSize}</h5>
            {data.close ? <IoCloseCircle size={"1.4rem"} color={"red"} /> :<MdDownloadForOffline size={"1.4rem"} color="#44ff44"/>}
            
        </div>
        {data.tag.isOpen ? (

            <div style={{backgroundColor:`${data.tag.tagColor}`}} className= {`tag w-full py-2 px-6 bg-${data.tag.tagColor}
            flex items-center justify-center`}> <h3>{data.tag.tagTittel}</h3></div>
        )
        :null}
     </div>
    </motion.div>
  );
}

export default Card;
