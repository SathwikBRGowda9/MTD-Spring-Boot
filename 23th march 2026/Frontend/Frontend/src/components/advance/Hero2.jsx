function Hero2() {
  return (
    <section className="h-screen flex items-center justify-between px-16 from-[#f5efe7] to-[#f2e4d8] relative overflow-hidden">

      {/* LEFT SIDE */}
      <div className="max-w-xl z-10">
        <h1 className="text-[80px]  font-semibold text-[#3a2b25]">
          THE <br />
          PERFECT <br />
          HOME
        </h1>

        <p className="mt-4 text-gray-600">
          / We craft custom homes /
        </p>

        <button className="mt-6 bg-[#3a2b25] text-white px-8 py-3 rounded-full hover:opacity-90 transition">
          START
        </button>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="relative z-10">

        <div className="bg-white p-6 rounded-3xl shadow-xl w-[350px]">

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">
              Interior
            </span>
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">
              Design
            </span>
            <span className="px-3 py-1 text-xs bg-[#3a2b25] text-white rounded-full">
              3D
            </span>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">
            Unique design & ergonomics
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            From blueprints to renders.
          </p>

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="house"
              className="w-full  object-cover"
            />
          </div>

        </div>

      </div>

      {/* Background Mountains (optional) */}
      <div className="absolute bottom-0 left-0 w-full  bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center opacity-30"></div>

    </section>
  );
}

export default Hero2;