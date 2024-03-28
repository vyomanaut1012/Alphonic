import circle from "../assests/images/circle.png";
import brand from "../assests/images/brand.webp";
import { useState } from "react";
import asset21 from "../assests/images/asset 21.png";
import asset22 from "../assests/images/asset 22.png";
import asset23 from "../assests/images/asset 23.png";
import asset24 from "../assests/images/asset 24.png";
import asset25 from "../assests/images/asset 25.png";
import asset26 from "../assests/images/asset 26.png";
import asset27 from "../assests/images/asset 27.png";
import asset28 from "../assests/images/asset 28.png";
import asset29 from "../assests/images/asset 29.png";
import asset30 from "../assests/images/asset 30.png";
import asset31 from "../assests/images/asset 31.png";
import asset32 from "../assests/images/asset 32.png";
import lessthan from "../assests/images/lessthan.png";
import greaterthan from "../assests/images/greaterthan.png";
const Home = () => {
    const [service, setService] = useState(true);
    const [industries, setIndustries] = useState(false);
    const serviceHandler = () => {
        setService(true);
        setIndustries(false);
    }
    const industryHandler = () => {
        setService(false);
        setIndustries(true);
    }

    return (
        <div className=" w-[85%] mx-auto">
            <div className="lg:flex  lg:flex-row flex-col rever mt-16">
                <div className=" my-auto lg:max-w-[50%] text-center lg:text-start">
                    <h1 className="text-xl lg:text-[43px] text-gray-600 leading-relaxed font-medium">Embrace Tomorrow's Technology Today</h1>
                    <h2 className=" lg:text-xl text-gray-600 lg:mt-2 mt-8 ">Empowering Businesses with Cutting-Edge Next-Generation App and Web Development Solutions. Unleash the Power of Innovation with Alphonic Network Solutions.</h2>
                    <button className=" hover:bg-[#06799c] bg-[#0a85abd5] transition-all duration-300 ease-linear text-white px-5 py-4 text-xl font-semibold rounded-md flex items-center mt-5 mx-auto lg:mx-0">
                        <img src={circle} alt="circle" className=" w-5 mr-3 animate-ping" />
                        <span>GET FREE CONSULTATION</span>
                    </button>
                </div>
                <div className=" mt-8 lg:mt-0">
                    <img src={brand} type="webp" className=" w-[90%] mx-auto"></img>
                </div>
            </div>

            <div className=" grid grid-cols-2 mt-20 mb-10 text-gray-600 gap-y-3">
                <button className={` text-lg md:text-2xl lg:text-[38px] lg:max-w-[70%] mx-auto py-3 lg:py-5 ${service ? "border-gray-600 border-b-2" : ""}`} onClick={serviceHandler}>Services We Provide</button>
                <button className={` text-lg md:text-2xl lg:text-[38px] lg:max-w-[70%] mx-auto py-3 lg:py-5 ${!service ? "border-gray-600 border-b-2" : ""}`} onClick={industryHandler}>Industries We Serve</button>
            </div>

            {
                service && (
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 transition-all ease-linear duration-200 mb-20">
                        {/* <!-- Card 1 --> */}
                        <div class="rounded-lg shadow-md bg-green-50 flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset21} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Mobile App Development</h2>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-pink-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset22} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Web Development</h2>
                        </div>

                        {/* <!-- Card 3 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset23} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">UI/UX Design</h2>
                        </div>
                    </div>
                )
            }
            {
                industries && (
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12 transition-all ease-linear duration-200 mb-20">
                        {/* <!-- Card 1 --> */}
                        <div class="rounded-lg shadow-md bg-green-50 flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset24} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Banking & Finance</h2>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-pink-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset25} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Trading & Stocks</h2>
                        </div>

                        {/* <!-- Card 3 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset26} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Healthcare & Fitness</h2>
                        </div>

                        {/* <!-- Card 4 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset27} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Travel & Hospitality</h2>
                        </div>

                        {/* <!-- Card 5 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset28} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Retail</h2>
                        </div>

                        {/* <!-- Card 6 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset29} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Education</h2>
                        </div>
                        {/* <!-- Card 7 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset30} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Restaurants
                            </h2>
                        </div>
                        {/* <!-- Card 8 -->/ */}
                        <div class="bg-green-50 rounded-lg shadow-md flex flex-col items-center text-center p-2">
                            <img class="w-36 mb-3" src={asset31} alt="Card image" />
                            <h2 class="font-medium text-gray-600 text-lg mb-2">Manufacturing</h2>
                        </div>
                    </div>
                )
            }




            <h1 className=" text-2xl md:text-3xl lg:text-[40px] text-gray-600 text-center font-medium">What Makes Us Unique?</h1>
            <img src={asset32} alt="unique" className=" mx-auto mt-14" />
            <h2 className=" text-sm md:text-lg lg:text-xl text-gray-600 mt-10 text-justify  ">We stand out as a trusted Software Development Company known for our forward-thinking approach in delivering mobile, web, and app development solutions. With over a decade of experience, we have proudly completed 700+ successful projects for startups and global enterprises. Our dedicated team of 60+ software developers, stays at the forefront of technology to provide innovative solutions.Our unique strength lies in our well-planned strategy and agile methodology, ensuring our software development solutions deliver profitable outcomes for businesses. We prioritize transparent communication to understand and exceed client expectations. Our exceptional work portfolio reflects our commitment to high client satisfaction and delivering quality-assured results.</h2>
        </div>
    );
}

export default Home;