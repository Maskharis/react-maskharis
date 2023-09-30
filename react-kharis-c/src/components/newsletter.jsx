import heroImg from "../assets/img/hero-img.png";
import { Button } from "../components/button";
import { Input } from "postcss";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <section className="py-16 px-10 bg-slate-200">
      <div className="container">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-xl pb-3 font-semibold text-sky-800 text-center ">Join Our Newsletter</h1>
            <h1 className="text-lg pb-3 font-semibold text-sky-800 text-center ">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </h1>
            <div className="flex mt-2">
              <input className="border border-gray-300 rounded-full w-full px-4 py-2 mr-2" />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
