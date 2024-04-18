import React from "react"
import { Link } from "react-router-dom";
import Bus_img from "../Assets/images/bus6.png"
const Footer = () => {
    return (
        <div className="w-full bg-blue-400 text-white pt-16 md:px-32 sm:px-24">
            <div className="flex md:flex-row flex-col gap-12 justify-center items-center place-content-between">
                <div className=" mx-5">
                    <div className="flex flex-row gap-10 mb-2 items-center ">
                        <Link to="/"><img className="w-24" src={Bus_img} alt='bus_logo' /></Link>
                        <Link classNames="  "to="/"><p className='font-bold text-3xl  text-white'>Reserve.</p></Link>
                    </div>
                    <p className='text-blue-200'> When you have a choice . choose Reserve.</p>
                    <p className="mt-5 text-balance">Reserve offers bus ticket booking through its website, IOS and androismobile apps for all mojnaor cities.</p>

                    <p className="mt-5 text- font-semibold">abhisheksing147@gmail.com</p>
                </div>


                <div className=" w-full flex flex-row gap-12 justify-center ">
                    <div>
                        <h1 className="text-lg font-bold mb-3">About</h1>
                        <div>
                            <ul className="text-blue-200">
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-3">Useful Link</h1>
                        <div>
                            <ul  className="text-blue-200">
                                <li>Careers</li>
                                <li>FAQ</li>
                                <li>T & C</li>
                                <li>Privacy Policy</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-3">Follow Us</h1>
                        <div>
                            <ul  className="text-blue-200">
                                <li><Link><img /></Link></li>
                                <li><Link><img /></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
             <hr className="w-full border border-blue-300  my-5"/>

            <div>
                <p className="text-center text-ellipsis font-semibold pb-4">All rights reserved - 2024</p>

            </div>

        </div>
    )
}
export default Footer;