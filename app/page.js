'use client'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/water-filling";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [load, setLoad] = useState(true)
  useEffect(()=>{
    setTimeout(() => {setLoad(false)},2000)}
  ,[load])
  
  return (
    <>
    {load?(<Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />):(
        <>
        <Header/>
        <Footer/>
        </>
      )}
    </>
  )
}
