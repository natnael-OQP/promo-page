import Head from 'next/head';
import Image from 'next/image';

import Typewriter from 'typewriter-effect';
import { Zoom } from 'react-awesome-reveal';

export default function Home() {
    return (
        <div className="relative flex flex-col-reverse items-center justify-between w-full h-full px-2 overflow-hidden text-3xl font-bold lg:px-12 md:flex-row font-popi ">
            <div className="none md:top-0 md:-right-5 md:w-[57vw] md:h-[90vh]  md:fixed  overflow-hidden z-10 ">
                <div className="relative z-30 w-full h-full ">
                    <Image
                        layout="fill"
                        objectFit="fill"
                        src="/images/vector.png"
                        alt="logo"
                    />
                </div>
            </div>

            <div className="md:top-5 md:right-5 md:w-[49vw] md:h-[80vh] none  md:fixed overflow-hidden z-20 ">
                <div className="relative z-30 w-full h-full ">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/images/money.png"
                        alt="logo"
                    />
                </div>
            </div>
            {/*left*/}
            <div className="flex flex-col  z-40 justify-center md:pb-20 overflow-hidden w-full md:flex-[.45] h-full  md:h-screen  ">
                <h1 className="w-[90%] md:w-[90%] text-xl md:text-4xl">
                    <Typewriter
                        options={{
                            delay: 30,
                            cursor: ' ',
                        }}
                        // className="text-sm"
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    `<h1 style="color:#404554 "> Get credits anytime, anywhere, with no collateral, and pay on your preferred schedule! </h1>`
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
                <h5 className="text-sm text-[#404554] w-[75%] md:w-[50%] font-medium mt-2">
                    Knockdown inflation and purchase now, and enjoy every moment
                    of your payment without stress
                </h5>
                <div className="h-8 w-[210px]  rounded-xl flex flex-row items-center mt-8 justify-between relative border border-1 border-black  ">
                    <h6 className="text-[10px]  font-semibold uppercase flex-[.5] text-center text-[#404554] ">
                        coming soon
                    </h6>
                    <button className=" text-xs  h-9 z-40 w-[130px] rounded-full bg-[#5DF6AE] text-black font-bold absolute -top-1 -bottom-[2px] -right-5  ">
                        Promotion Video
                    </button>
                </div>
                <h1 className="text-xs text-[#404554] mt-7 none font-medium tracking-wider md:absolute md:bottom-10 md:left-10  ">
                    Privacy Policy
                </h1>
            </div>
            {/*right*/}
            <div className="z-30 w-full  relative  flex-[.6] mt-10">
                <Zoom triggerOnce>
                    <div className=" relative h-[50vh]  w-[70%] lg:w-full lg:h-[75vh]  lg:ml-10 ">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/images/Mobile Ahun Mockup.png"
                            alt="logo"
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
                        src="/images/Main Background gradient.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}
