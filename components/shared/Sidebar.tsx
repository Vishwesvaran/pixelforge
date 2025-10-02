'use client'
import { navLinks } from '@/constants'
import { SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className='sidebar'>
      <div className="flex size-full flex-col gap-4 items-center">
        <Link href={'/'} className='sidebar-logo'>
          <Image src="/assets/pixelForgelogo.png" width={180} alt='logo' height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
      
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar