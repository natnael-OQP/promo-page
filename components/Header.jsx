import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <div className="absolute top-0 left-0 z-50 flex flex-row items-center justify-between w-full h-20 px-0 mx-auto max-w-7xl md:px-10">
            {/*logo*/}
            <div className=" relative h-full w-[200px] z-55 ml-10">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src="/images/logo.png"
                    alt="logo"
                />
            </div>
            {/* navbar*/}
            <div className=" relative h-6 w-[300px] z-55  ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src="/images/socialmediaicon.png"
                    alt="logo"
                    className="z-55"
                />
            </div>
        </div>
    );
}

export default Header;
