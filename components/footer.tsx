import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-primary-light">
              Prevention is Cheaper Than Cure is committed to improving healthcare access and disease prevention globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-light hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-primary-light hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-primary-light hover:text-white transition">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-light hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@picc.org" className="text-primary-light hover:text-white transition">
                  info@picc.org
                </a>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-primary-light hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-primary-light hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-light pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-light">
          <p>&copy; {currentYear} Prevention is Cheaper Than Cure. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
