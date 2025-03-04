import AboutImg from "../assets/aboutMe.jpg";

function About() {
  return (
    // <div className="container mt-24 flex gap-12">
    //   <div>
    //     <img src={AboutImg} className="max-w-lg rounded-md" alt="" />
    //   </div>

    //   <div className="flex flex-col mt-12 gap-6">
    //     <h1 className="font-bold text-6xl text-green-800">About Myself</h1>
    //     <p className="text-2xl">
    //       Hi! I’m Raiza S. Beligolo from Tugbungan, Zamboanga City. I am a
    //       graphic designer and a layout artist.
    //     </p>
    //     <p className="text-2xl">
    //       Currently, I am expanding my knowledge in designing for UI design. I
    //       am dedicated to applying what I will learn throughout my journey of
    //       receiving criticisms and making improvements.
    //     </p>
    //   </div>
    // </div>

    <div className="hero bg-primary min-h-screen">
      <div className="hero-content flex-col md:flex-row lg:gap-x-24">
        <img
          src={AboutImg}
          className="max-w-60 sm:max-w-sm xl:max-w-md rounded-md shadow-2xl"
        />
        <div className="text-center md:text-left lg:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-green-800">About Myself</h1>
          <p className="py-2 lg:py-6 text-black text-sm sm:text-lg md:text-xl lg:text-2xl">
          Hi! I’m Raiza S. Beligolo from Tugbungan, Zamboanga City. I am a graphic designer and a layout artist.
          </p>
          <p className="py-2 lg:py-6 text-black text-sm sm:text-lg md:text-xl lg:text-2xl">
          Currently, I am expanding my knowledge in designing for UI design. I am dedicated to applying what I will learn throughout my journey of receiving criticisms and making improvements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
