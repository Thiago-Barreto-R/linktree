import React from "react";
import { data } from "../data.js";
import Logo from "./assets/logo.png";
import { HeroPattern } from "./components/HeroPatterns.jsx";
import Marquee from "react-fast-marquee";

export function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-100">
      <HeroPattern />
      <div className="w-full z-50 relative">
        <header className="fixed">
          <img src={Logo} alt="Logo" className="h-32" />
        </header>
        <div className="flex flex-col items-center justify-center">
          <img
            src={data.avatar}
            alt="imagem da perfil"
            className="rounded-full w-28 h-28 border-2 mt-10 p-0.5 border-violet-600"
          />
          <h1 className="mt-6 text-xl">{data.name}</h1>
          <p className="text-zinc-500 mb-4">{data.formed}</p>
          <div className="w-full flex items-center justify-center gap-5 mb-5">
            {data.links.map((link) => (
              <a key={link.id} href={link.url} target={link.target}>
                <link.icon />
              </a>
            ))}
          </div>
          <Marquee
            gradient
            gradientColor={["#18181b"]}
            gradientWidth={75}
            loop={0}
            style={{ width: "35%" }}
          >
            <div className="w-96 flex items-center justify-center gap-8 mb-4">
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                HTML5
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">CSS3</p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                JavaScript
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                Python
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">Rust</p>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            gradient
            gradientColor={["#18181b"]}
            gradientWidth={55}
            loop={0}
            style={{ width: "35%" }}
          >
            <div className="w-96 flex items-center justify-center gap-5 mb-4">
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                Mysql
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                Nodejs
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                Electron.js
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                Tauri.js
              </p>
              <p className="p-2 rounded-md bg-zinc-800 text-violet-600">
                TailwindCss
              </p>
            </div>
          </Marquee>

          {data.cards.map((card) => (
            <a
              key={card.id}
              href={card.url}
              download={card.cv_download}
              className="border-2 border-violet-900 bg-zinc-900 rounded-md shadow-md shadow-zinc-950 flex items-center justify-center py-3 w-60 mb-4 duration-300 hover:scale-105 xl:w-96"
            >
              {card.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
