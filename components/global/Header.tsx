'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import '../../styles/header.scss'

export default function Header() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  const goToCybersecurityTab = (tab: string): void => {
    router.push(`/cybersecurity?tab=${tab}`)
    setIsOpen(false)
  }

  const goToCloudTab = (tab: string): void => {
    router.push(`/cloud?tab=${tab}`)
    setIsOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'sticky' : 'normal'}`}>
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 group cursor-pointer">
          <img
            src="/logo.png"
            alt="Jenlor"
            className={`logo-img transition-all duration-300 ${
              scrolled ? 'large' : 'small'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop flex items-center gap-8">

          <Link href="/" className="nav-link">
            Home
          </Link>

          {/* Cybersecurity Dropdown */}
          <div className="dropdown relative group">

            <Link href="/cybersecurity" className="nav-link">
              Cybersecurity
            </Link>

            <div className="dropdown-menu absolute top-full left-0  w-80 rounded-2xl border border-white/10 bg-[#16161e] shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <button onClick={() => goToCybersecurityTab('ztna')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Zero Trust Network Access</div> 
              </button>

              <button onClick={() => goToCybersecurityTab('endpoint')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Email, Endpoint & Identity</div> 
              </button>

              <button onClick={() => goToCybersecurityTab('awareness')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Awareness Training</div> 
              </button>

              <button onClick={() => goToCybersecurityTab('compliance')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Compliance & GRC</div> 
              </button>

            </div>
          </div>

          {/* Cloud Dropdown */}
          <div className="dropdown relative group">

            <Link href="/cloud" className="nav-link">
              Cloud
            </Link>

            <div className="dropdown-menu absolute top-full left-0  w-80 rounded-2xl border border-white/10 bg-[#16161e] shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <button onClick={() => goToCloudTab('migration')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Cloud Migration</div>
                <div className="dropdown-description">Secure infrastructure migration</div>
              </button>

              <button onClick={() => goToCloudTab('backup')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Backup & Disaster Recovery</div>
                <div className="dropdown-description">Business continuity solutions</div>
              </button>

              <button onClick={() => goToCloudTab('azure')} className="dropdown-item w-full text-left">
                <div className="dropdown-title">Microsoft Azure</div>
                <div className="dropdown-description">Enterprise cloud services</div>
              </button>

            </div>
          </div>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>

        </nav>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>

      </div>

      {/* Mobile Menu */}
      <nav className={`nav mobile ${isOpen ? 'open' : ''}`}>

        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/cybersecurity" onClick={closeMenu}>Cybersecurity</Link>
        <Link href="/cloud" onClick={closeMenu}>Cloud</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>

      </nav>
    </header>
  )
}