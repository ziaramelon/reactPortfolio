import MyImg from "../assets/sawako.jpg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="mt-20 container px-6 mx-auto flex flex-col lg:flex-row justify-around items-center gap-1">
      <div>
        <img src={MyImg} alt="Sawako" className="size-[500px] rounded-md" />
      </div>

      <div className="flex flex-col items-center text-center mt-10 lg:text-left lg:items-start">
        <div className="space-y-2 mr-2">
          <h1 className="font-bold text-6xl">Hello!</h1>
          <p className="font-semibold text-4xl">
            I am <span className="text-green-800">Rai Beligolo</span>{" "}
          </p>
          <p className="text-xl text-green-950">
            Layout Designer | Graphic Artist
          </p>
        </div>
        <div className="my-6">
          <Button />
        </div>
      </div>
    </div>
  );
}
