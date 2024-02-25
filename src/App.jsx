import React from "react";
import data from "../data.json";
import Logo from "./assets/Design_a_captivating_logo_for_Barreto_a_progr__3_-removebg-preview-transformed.png";

export function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-100">
      <header className="w-full px-20">
        <img src={Logo} alt="Logo" className="h-40" />
      </header>
      <div className="flex flex-col items-center justify-center">
        <img
          src={data.avatar}
          alt="imagem da perfil"
          className="rounded-full w-28 h-28 border-2 p-0.5 border-blue-800"
        />
        <h1 className="mt-6 text-xl">{data.name}</h1>
        <p className="text-zinc-500 mb-4">{data.formed}</p>
        {data.links.map((links) => (
          <a
            href={links.url}
            target="_blank"
            className="w-full border-2 duration-300 mb-3 p-2 hover:bg-zinc-800 hover:scale-105 rounded-md text-center xl:max-w-96"
          >
            <div className="w-full flex justify-between items-center">
              <img
                src={links.image}
                alt="imagem do ...."
                className="w-8 h-8 rounded-sm"
              />
              <p className="w-full">{links.tittle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
