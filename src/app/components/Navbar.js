import Link from 'next/link'
import Navlink from './Navlink'

const Navbar = () => {
    return (
        <div className="h-full w-full bg-black">
            <ul className="flex items-center gap-8 px-5 py-3 text-white">
                <li>
                    <Navlink href="/">Home</Navlink>
                </li>
                <li>
                    <Navlink href="/about">About</Navlink>
                </li>
                <li>
                    <Navlink href="/contact">Contact</Navlink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
