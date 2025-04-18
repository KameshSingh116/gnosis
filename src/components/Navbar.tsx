'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Grievance', href: '/grievance' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Vision Lab', href: '/visionlab' },
  { name: 'AI Teacher', href: '/aiteacher' },
  { name: 'Safe Routes', href: '/saferoutes' },
  { name: 'Crime Report', href: '/crimereport' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1B1E3D]/80 backdrop-blur-sm border-b border-[#2A2E4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Gnosis
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-[#4361EE] text-white'
                      : 'text-[#A3A3A3] hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}