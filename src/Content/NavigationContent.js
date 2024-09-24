
import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";


export const navigation = [
    {
        lable: 'Tv Shows',
        href: 'tv',
        icon: <PiTelevisionFill />,
    },
    {
        lable: 'Movies',
        href: 'movie',
        icon: <BiMoviePlay />

    }
]

export const mobileNavigation = [
    {
        lable: "Home",
        href: "/",
        icon: <MdHome />
    },



    ...navigation,
    {
        lable: "search",
        href: "/search",
        icon: <IoSearchOutline />
    },
]
