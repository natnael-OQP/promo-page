import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
    const route = useRouter();
    const { pathname } = route;
    return (
        <div
            className={`absolute top-0 left-0 z-50 flex ${
                pathname == '/flipblack' ? 'flex-row-reverse' : 'flex-row'
            }  items-center justify-between w-full h-20 px-0 mx-auto max-w-7xl md:px-5`}
        >
            {/*logo*/}
            <div className=" relative h-full w-[200px] z-55 ml-10">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={
                        pathname == '/flipblack'
                            ? '/logo-white.png'
                            : '/images/logo.png'
                    }
                    alt="logo"
                />
            </div>
            {/* navbar*/}
            <div className=" relative h-6 w-[300px] z-55  ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={
                        pathname == '/flipblack'
                            ? '/social-media-icon.png'
                            : '/images/socialmediaicon.png'
                    }
                    alt="logo"
                    className="z-55"
                />
            </div>
        </div>
    );
}

export default Header;
