import Link from "next/link"
import { ReactNode } from "react"

type NavItemProps = {
  children: ReactNode
  href: string
  onClick: () => void
}

const NavItem = ({ children, href, onClick }: NavItemProps) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className="hover:opacity-80 transition-opacity text-center flex items-center underlineOnHover"
      >
        {children}
      </a>
    </Link>
  )
}

export default NavItem
