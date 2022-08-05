import Head from 'next/head';
import Image from 'next/image';

import Typewriter from 'typewriter-effect';
import { Zoom } from 'react-awesome-reveal';

export default function FlipBlack() {
    return (
        <div className="relative flex flex-col-reverse items-center justify-between w-full h-screen px-2 overflow-hidden text-3xl font-bold lg:px-16 md:flex-row-reverse font-popi ">
            {/* background image */}
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full overflow-hidden ">
                <div className="relative z-30 w-full h-full ">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src="/BG pic.png"
                        alt="logo"
                    />
                </div>
            </div>
            {/*left*/}
            <div className="flex flex-col  z-40 justify-center items-center md:item-end  md:pb-20 overflow-hidden w-full md:flex-[.45] h-full  md:h-screen  ">
                <h1 className="w-[90%] md:w-[90%] text-xl md:text-4xl text-left md:text-end ">
                    <Typewriter
                        options={{
                            delay: 30,
                            cursor: ' ',
                        }}
                        // className="text-sm"
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    `<h1 style="line-height: 3rem; color:#FFF;" > Get credits anytime, anywhere, with <span style="color:#5DF6AE">no collateral,</span>  and pay on your preferred <span style="color:#5DF6AE">schedule!</span> </h1>`
                                )
                                .start();
                            // .pauseFor(2500)
                            // .deleteAll()
                            // .callFunction(() => {
                            //     console.log('All strings were deleted');
                            // }).
                        }}
                    />
                </h1>
                <h5 className="text-sm text-[#FFF] w-[75%] md:w-[50%] font-medium md:mt-2  text-left md:text-end">
                    Knockdown inflation and purchase now, and enjoy every moment
                    of your payment without stress
                </h5>
                <div className="h-8 w-[210px] flex-end  rounded-xl flex flex-row items-center mt-8 justify-between relative border border-[1.6px] border-white  ">
                    <button className=" text-xs  h-9 z-40 w-[130px] rounded-full bg-[#5DF6AE] text-black font-bold absolute -top-1 -bottom-[2px] -left-5  ">
                        Promotion Video
                    </button>
                    <h6 className="text-[10px]  font-semibold uppercase flex-1 text-end text-[#FFF] mr-5">
                        coming soon
                    </h6>
                </div>
                <h1 className="text-xs text-[#fff] mt-3 none font-medium tracking-wider md:absolute md:bottom-10 md:left-10 text-left  ">
                    Privacy Policy
                </h1>
            </div>
            {/*right*/}
            <div className="z-30 w-full  relative  flex-[.4] mt-10 ">
                <Zoom triggerOnce>
                    <div className=" relative h-[50vh]   w-[70%] lg:w-full lg:h-[75vh]  lg:ml-10 ">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/Mobile Ahun Mockup (1).png"
                            alt="mobile ahun mockup"
                        />
                    </div>
                </Zoom>
            </div>
            {/* background image */}
            <div className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full overflow-hidden ">
                <div className="relative z-30 w-full h-full ">
                    <Image
                        layout="fill"
                        objectFit="fill"
                        src="/Rectangle 1.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}
