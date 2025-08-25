export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 text-sm border-t border-red-700 py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 RedRecon. Educational use only.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/AnishKajan/Red-Recon" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
            GitHub
          </a>
          <a href="/setup" className="hover:text-red-400 transition">
            Lab Setup
          </a>
          <a href="/about" className="hover:text-red-400 transition">
            About
          </a>
        </div>
      </div>
    </footer>
  )
}
