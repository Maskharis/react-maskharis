import heroImg from "../assets/img/hero-img.png";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-14  bg-sky-800">
      <div className="container">
        <div className="flex flex-wrap lg:pl-20 ">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-5xl pb-3 font-bold text-white ">Better Solutions For Your Business</h1>
            <h2 className="font-medium text-slate-400 text-lg mb-5 lg:text-2xl">
              We are team of talented designers making websites with Bootstrap
            </h2>
            <Link to="/create-product">
              <Button label="create product" />
            </Link>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <img className=" h-full mx-auto pt-3 lg:w-1/2" src={heroImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
