import Header from "@/src/Components/Header"
import Head from 'next/head'
import React from "react";
import Link from "next/link";

import Slider from "react-slick";
import Footer from "@/src/Components/Footer";

const about = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]        
      };
          
  return (
    <>
      <Head>
      <title>About Us</title>
        <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="images/logo/faveicon.jpg" type="image/x-icon" />        
    <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>    
      </Head>    
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="z-50">
            <div className="container">
                <Header />
                <div>
                    <div className="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                        <div data-aos="fade" className="aos-init aos-animate">
                            <div className="py-12">
                                <h2 className="after-effect after:left-52 mt-12 lg:mt-0"> About Me </h2>
                                <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                                    <div className="col-span-12 md:col-span-4">
                                        <img className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                            src="images/about/about.jpg" alt="about image" />
                                    </div>
                                    <div className="col-span-12 md:col-span-8 space-y-2.5">
                                        
                                        <div className="md:mr-12 xl:mr-16">
                                            <h3 className="text-4xl font-medium dark:text-white mb-2.5"> Who am i? </h3>
                                            <p className="text-gray-lite dark:text-color-910 leading-7"> I'm Creative
                                                Director and UI/UX Designer from Sydney, Australia, working in web
                                                development and print media. I enjoy turning complex problems into
                                                simple, beautiful and intuitive designs. </p>
                                            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> My aim is to
                                                bring across your message and identity in the most creative way. I
                                                created web design for many famous brand companies. </p>
                                        </div>

                                        <div>
                                            <h3 className="text-4xl font-medium my-5 dark:text-white"> Personal Info </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="flex">
                                                    <span
                                                        className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910"> Phone
                                                        </p>
                                                        <h6 className="font-medium dark:text-white"> +91 - 7291907183 </h6>
                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <span
                                                        className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910"> Location
                                                        </p>
                                                        <h6 className="font-medium dark:text-white"> Delhi India 110052 </h6>
                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <span
                                                        className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i className="fa-solid fa-envelope-open-text"></i>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910"> Email
                                                        </p>
                                                        <h6 className="font-medium dark:text-white"> example@mail.com </h6>
                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <span
                                                        className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                    </span>
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-lite dark:text-color-910"> Birthday
                                                        </p>
                                                        <h6 className="font-medium dark:text-white"> May 27, 1990 </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-12">
                                <h3 className="text-[35px] dark:text-white font-medium pb-5"> What I do! </h3>
                                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    <div className="about-box dark:bg-transparent bg-[#fcf4ff]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Ui/Ux Design </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fefaf0]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon1.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> App Development </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fcf4ff]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon2.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Photography </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fff4f4]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon3.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Photography </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fff0f8]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon4.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Managment </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#f3faff]">
                                        <img className="w-10 h-10 object-contain block" src="images/icons/icon5.svg"
                                            alt="icon" />
                                        <div className="space-y-2">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Web Development </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                                    <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold">Clients</h3>
                                    <Slider {...settings} className="px-2 pt-8 text-center">
                                        <div>
                                        <img className="overflow-hidden brand-img" src="images/slider/brand.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                        <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                        <img className="overflow-hidden brand-img" src="images/slider/brand2.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                        <img className="overflow-hidden brand-img" src="images/slider/brand3.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                            <img className="overflow-hidden brand-img" src="images/slider/brand4.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                            <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                                alt="brand" />
                                        </div>
                                        <div>
                                            <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                                alt="brand" />
                                        </div>
                                        </Slider>                                    

                                    
                                </div>
                            </div>
                            <p></p>
                            <Footer />
                            

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>     
    </>
  )
}

export default about