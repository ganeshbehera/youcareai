"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { WaitlistModal } from "./yourcare/waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Platform", 
    href: "#",
    submenu: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" }
    ]
  },
  { name: "Customers", href: "/customers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false)
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/yourcareailogo.png"
                alt="YourCareAI"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                      onMouseEnter={() => setPlatformMenuOpen(true)}
                      onMouseLeave={() => setPlatformMenuOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {platformMenuOpen && (
                      <div 
                        className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
                        onMouseEnter={() => setPlatformMenuOpen(true)}
                        onMouseLeave={() => setPlatformMenuOpen(false)}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              onClick={() => openModal("Join Waitlist", "Get early access to our enterprise AI platform launching Q2 2026. Be among the first to transform healthcare with AI.")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Join Waitlist
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <Image
                    src="/yourcareailogo.png"
                    alt="YourCareAI"
                    width={150}
                    height={50}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.submenu ? (
                          <div>
                            <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                              {item.name}
                            </div>
                            <div className="ml-4 space-y-1">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-gray-600 hover:bg-gray-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        openModal("Join Waitlist", "Get early access to our enterprise AI platform launching Q2 2026. Be among the first to transform healthcare with AI.")
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
