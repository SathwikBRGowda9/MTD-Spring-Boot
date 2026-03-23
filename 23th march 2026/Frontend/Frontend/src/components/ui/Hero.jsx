function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full justify-center items-center h-75">
        <div className="text-center flex flex-col items-center">
          <div className="text-6xl pb-5">Prosperity of Knowledge</div>
          <div className="text-2xl pb-5">JCBM college , sringeri</div>
          <div className="px-5 py-2 w-fit bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
            Explore
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-6 py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold pb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 ">
          JCBM College, Sringeri is dedicated to providing quality education and 
          empowering students with knowledge, skills, and values. Our institution 
          focuses on academic excellence, personal growth, and preparing students 
          for a successful future.
        </p>
      </section>
    </>
  );
}

export default Hero;