"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "@/public/assets/css/reset.css"
import "@/public/assets/scss/common.scss"
import "@/public/assets/scss/common_low.scss"


import AOS from "aos"
import "aos/dist/aos.css"


import React, { useState,useEffect } from "react";
import Head from "next/head"
import { Metadata } from "next"

export const metadata:Metadata= {
  title: '進化するごみ袋',
  description:"進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供",
  openGraph: {
    title: '進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供',
    description:'進化するごみ袋 | サステナブルなリサイクルの最新トピックを提供'
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    AOS.init({
      once: true,
      duration:1000,
    });
  }, []);

  const dataCate: Array<any> = [
    {
      id:1,
      title: '商品紹介',
      slug: '商品紹介'
    },
    {
      id:2,
      title: 'お客様の声',
      slug: 'お客様の声'
    },
    {
      id:3,
      title: '導入実績',
      slug: '導入実績'
    },
    {
      id:4,
      title: 'メディア掲載',
      slug: 'メディア掲載'
    },
    {
      id:5,
      title: 'その他',
      slug: 'その他'
    }
  ]


  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <html lang="en">
      <Head>
        <title>sdfsdfs</title>
      </Head>
      <style jsx global>{`
        html {
          ${toggle?"overflow:hidden":""}          
        }        
      `}</style>      
      <body>
        <div id='wrapper'>
          <Header dataCate={dataCate} toggle={toggle} handleToggle={handleToggle} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
