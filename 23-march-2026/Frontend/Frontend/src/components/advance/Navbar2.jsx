function Navbar2() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 absolute w-full z-10 text-black">

      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide">
        RANTY
      </div>

      {/* Menu */}
      <div className="flex gap-8 text-sm">
        <span className="cursor-pointer hover:text-gray-500">Services</span>
        <span className="cursor-pointer hover:text-gray-500">Homes</span>
        <span className="cursor-pointer hover:text-gray-500">About us</span>
        <span className="cursor-pointer hover:text-gray-500">Cases</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <span className="text-sm cursor-pointer">ENG</span>
        <button className="border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition">
          CONTACT US
        </button>
      </div>

    </nav>
  );
}

export default Navbar2;