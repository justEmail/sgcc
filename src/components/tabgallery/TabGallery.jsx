import React, { useState } from 'react'

// custom style
import './tabgallery.css'

// react icons
import { IoMdClose } from "react-icons/io";

// import imgages
import img1 from "../../assets/images/yangiliklar/img1.png";
import img2 from "../../assets/images/yangiliklar/img2.png";
import img3 from "../../assets/images/yangiliklar/img3.png";
import img4 from "../../assets/images/yangiliklar/img4.png";
import img5 from "../../assets/images/yangiliklar/img5.png";
import img6 from "../../assets/images/yangiliklar/img6.png";
import img7 from "../../assets/images/yangiliklar/img7.png";
import img8 from "../../assets/images/yangiliklar/img8.png";



const TabGallery = () => {
    let data = [
        {
            id:1,
            imgSrc:img1
        },
        {
            id:2,
            imgSrc:img2
        },
        {
            id:3,
            imgSrc:img3
        },
        {
            id:4,
            imgSrc:img4
        },
        {
            id:5,
            imgSrc:img5
        },
        {
            id:6,
            imgSrc:img6
        },
        {
            id:7,
            imgSrc:img7
        },
        {
            id:8,
            imgSrc:img8
        },

    ]

    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);
    }

  return (
    <>
    <div className={model ? "model open" : "model"}> 
       <img src={tempimgSrc} alt="image src" />
       <IoMdClose onClick={() => {setModel(false)}}/>
    </div>
      <div className='gallery'>
         {data.map((item,index) =>{
            return(
                <div className='pics' key={index} onClick={() =>getImg(item.imgSrc) }>
                    <img src={item.imgSrc} className='w-full' alt="image" />
                </div>
            )
         })}
      </div>
    </>
  )
}

export default TabGallery