import Link from "next/link"
import { Heart } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image
              src="/yourcareailogo.png"
              alt="YourCareAI Logo"
              width={120}
              height={48}
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 YourCareAI. Preventing disease with AI.</p>
            <p className="mt-2 md:mt-0">Built with ❤️ for better health outcomes</p>
          </div>
          
          {/* Company Details */}
          <div className="text-center text-xs text-gray-500">
            <p className="mb-1">
              <strong className="text-gray-400">DIGITBITE LIMITED</strong> - Registered in England and Wales
            </p>
            <p>
              Suite A 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
