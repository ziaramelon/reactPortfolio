import MyImg from "../assets/sawako.jpg";

export default function Hero() {
  return (
    // <div className="mt-20 container px-6 mx-auto flex flex-col lg:flex-row justify-around items-center gap-1">
    //   <div>
    //     <img src={MyImg} alt="Sawako" className="size-[500px] rounded-md" />
    //   </div>

    //   <div className="flex flex-col items-center text-center mt-10 lg:text-left lg:items-start">
    //     <div className="space-y-2 mr-2">
    //       <h1 className="font-bold text-6xl">Hello!</h1>
    //       <p className="font-semibold text-4xl">
    //         I am <span className="text-green-800">Rai Beligolo</span>{" "}
    //       </p>
    //       <p className="text-xl text-green-950">
    //         Layout Artist | Graphic Designer
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="hero bg-primary min-h-screen">
      <div className="hero-content flex-col lg:flex-row lg:gap-x-40">
        <img src={MyImg} className="max-w-60 sm:max-w-sm xl:max-w-md rounded-md shadow-2xl" />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-6xl font-bold text-black">Hello!</h1>
          <p className="py-2 text-black font-semibold text-xl md:text-4xl">
            I am <span className="text-green-800">Rai Beligolo</span>
          </p>
          <p className="md:text-xl text-green-950">
            Layout Artist | Graphic Designer
          </p>
        </div>
      </div>
    </div>
  );
}
