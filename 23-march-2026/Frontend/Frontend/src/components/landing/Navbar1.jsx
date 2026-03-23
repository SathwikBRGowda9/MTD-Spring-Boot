function Navbar1() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-white absolute w-full z-10">
      
      <div className="text-xl font-bold">SteveEditor</div>

      <div className="flex gap-8">
        <div className="cursor-pointer hover:text-green-400">Main</div>
        <div className="cursor-pointer hover:text-green-400">About</div>
        <div className="cursor-pointer hover:text-green-400">Program</div>
        <div className="cursor-pointer hover:text-green-400">Price</div>
        <div className="cursor-pointer hover:text-green-400">Contact</div>
      </div>

      <div className="flex gap-4">
        <div>🌐</div>
        <div>📷</div>
        <div>💼</div>
      </div>

    </nav>
  );
}

export default Navbar1;