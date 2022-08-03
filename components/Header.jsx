import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <div className="max-w-7xl z-50 h-20 w-full mx-auto    flex flex-row justify-between items-center px-10 absolute top-0 left-0">
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
