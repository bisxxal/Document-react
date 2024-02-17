import React, { useRef } from 'react'
import Card from './Card'
function Forgnd() {

  const ref = useRef(null);
  const data=[
    {
      desc:"Vibrant community fostering learning, innovation, diversity, and personal development.",
      fileSize:".1mb",
      close:false,
      tag:{isOpen:true ,tagTittel:"Dowload Now",tagColor:"#44ff44"}
    },
    {
      desc:"Exploring the Marvels of Nature: Nature, with its vastness and intricacy ",
      fileSize:".9mb",
      close:false,
      tag:{isOpen:true ,tagTittel:"Save Now",tagColor:"#ff12bc"}
    },
    {
      desc:"Coding empowers problem-solving, creativity, and innovation in technology-driven world.",
      fileSize:"2mb",
      close:true,
      tag:{isOpen:false ,tagTittel:"Dowload Now",tagColor:"pink"}
    },
    {
      desc:"Our office operates efficiently through adherence to established procedures.  ",
      fileSize:"1.1mb",
      close:true,
      tag:{isOpen:true ,tagTittel:"Upload Now",tagColor:"blue"}
    },
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full  flex flex-wrap gap-8 p-5  '>
      
      {data.map((item ,index)=>(
         <Card data={item} reference={ref}/>
      ))}
       
    </div>
  )
}

export default Forgnd