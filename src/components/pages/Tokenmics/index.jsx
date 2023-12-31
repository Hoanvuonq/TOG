import React from 'react';
import { Link } from 'react-router-dom';

const Tokenmics = () => {
    return (
        <>
            <div className="all-center flex-col">
                <h1 className="text-title-box sm:text-[20px] text-[60px] text-white sm:mt-2 mt-20">TOKENOMICS</h1>
                <div className="all-center sm:gap-20 gap-10 lg:flex-row flex-col sm:mt-0 mt-10">
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Total Supply</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-xl sm:w-[200px] w-[330px] sm:h-7 h-14 shadow-custom  all-center border-4 border-white flex gap-3">
                                690,000,000,000
                                <p>$CJ</p>
                            </button>
                        </Link>
                    </div>
                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">Buys / Sells taxes</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-xl sm:w-[200px] w-[330px] sm:h-7 h-14 shadow-custom  all-center border-4 border-white">
                                0% / 0%
                            </button>
                        </Link>
                    </div>

                    <div className="all-center flex-col">
                        <p className="text-title-token pb-1">LP BURNT</p>
                        <Link to={'/'}>
                            <button className="text-token text-white py-3 px-5 rounded-xl sm:w-[200px] w-[330px] sm:h-7 h-14 shadow-custom  all-center border-4 border-white">
                                98.99%
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="all-center flex-col sm:mt-5 mt-14">
                <Link to={'/'}>
                    <button className="text-token text-white  py-3 px-2 rounded-xl sm:w-[200px] w-[330px] sm:h-7 h-14 shadow-custom  all-center border-4 border-white">
                        Ownership Renounced
                    </button>
                </Link>
            </div>
        </>
    );
};
export default Tokenmics;
