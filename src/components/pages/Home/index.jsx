import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/avatar-version-1.jpg"
import Tokenmics from "../Tokenmics";
import Meet from "../Meet";
import Footer from "../../layouts/Footer";

const Home = () => {
    return (
        <div className="bg-kog w-full h-full">
            <div className="bg-[#010101a1] w-full h-full flex flex-col justify-between">
                <div className="all-center w-full pt-[50px] flex-col">
                    <img src={Avatar} alt="Item EOG" className="sm:w-[200px] w-[300px] border-[4px] rounded-2xl border-white" />
                    <h1 className="text-title text-white text-s sm:!text-[30px] !text-[80px] sm:leading-[50px] with-shadow">$CJ</h1>
                    <p className="text-content text-white text-center sm:!text-base !text-xl">CA : </p>
                    <p className="text-content text-white text-center">Carl CJ Johnson</p>
                    {/* <div className="all-center gap-10 mt-4 lg:flex-row flex-col">
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">dextools chart</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">telegram</button>
                        </Link>
                        <Link to={"#"} target="_blank">
                            <button className="bg-white text-[#432627] sm:py-3 py-8 px-10 sm:rounded-lg rounded-xl sm:w-[160px] w-[315px] sm:h-7 h-9 shadow-custom text-btn all-center">twitter</button>
                        </Link>
                    </div> */}
                    <Meet />
                    <Tokenmics />
                </div>
                <Footer />
            </div>
        </div>
    );
};
export default Home;