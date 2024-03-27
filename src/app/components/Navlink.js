'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({ href, ...rest }) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link
            className={isActive ? 'text-red-600' : ''}
            href={href}
            {...rest}
        />
    )
}

export default Navlink
