import Button1 from "./Button1"; // ✅ correct import

function Hero1() {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center relative">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          EDIT LIKE A PRO <br /> AND MAKE MONEY
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          This is an intensive program designed for those who want to master
          professional editing and graphic design.
        </p>

        <div className="flex justify-center">
          <Button1 /> {/* ✅ using correct button */}
        </div>
      </div>

    </section>
  );
}

export default Hero1;