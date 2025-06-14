import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Energent AI
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link href="/solutions" className="text-gray-600 hover:text-blue-600">
            Solutions
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  )
}