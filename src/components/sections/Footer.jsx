export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-gray-400 py-10 px-6 md:px-16 lg:px-32 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Logo or Brand */}
          <div className="w-16">
            <img src="/logo.png" alt="" />
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-black text-sm">
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#features" className="hover:text-purple-400 transition">
              Features
            </a>
            <a href="#cta" className="hover:text-purple-400 transition">
              Join Waitlist
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Privacy
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Loop.AI. Built in Africa, for
          Africa.
        </div>
      </footer>
    </>
  );
}
