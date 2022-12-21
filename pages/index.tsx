import type { NextPage } from "next"
import Header from "@components/Header"
import Head from "@components/Head"
import Section2Img from "@assets/laptop.jpg"
import Image from "next/image"

import {
  PostgreSQL,
  TypeScript,
  Sass,
  React,
  Python,
  HTML,
  Prisma,
  CSS,
  JavaScript,
  TailwindCSS,
  ExpressJS,
  Java,
  NextJS,
  Redux,
  NodeJS,
  MongoDB,
  Figma,
} from "@assets/techstack"
import Float from "@components/Float"
const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Header />
      <div className="bg-[#040b1e] min-h-screen flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center p-12">
          <h3 className="text-2xl md:text-3xl text-gray-300 font-bold">
            This is
          </h3>
          <h1 className="md:text-7xl text-5xl min-w-[286px] font-extrabold text-transparent gradient-text text-center">
            Rama Krishnan V
          </h1>
          <h6 className="text-white font-medium text-lg tracking-wider text-center">
            FULL STACK DEVELOPER
          </h6>
          <div className="flex space-x-8 mt-10">
            <p className="text-white max-w-xl text-center">
              {" "}
              I&apos;m a passionated programmer from South India. I love
              building minimal and elegantly designed sites.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#040b1e] min-h-screen flex lg:flex-row flex-col-reverse flex-1 items-center justify-center">
        <div className="flex flex-col text-white items-center p-5 lg:pt-0 pt-20">
          <h1 className="text-4xl font-bold text-transparent gradient-text lg:text-left text-center">
            Why should you choose me?
          </h1>
          <ul className="mt-6 space-y-2 px-5">
            <li>•&nbsp;&nbsp;All my sites are fully responsive</li>
            <li>
              •&nbsp;&nbsp;I&apos;ll take care of Search Engine Optimization
            </li>
            <li>•&nbsp;&nbsp;I&apos;ll design solutions for your needs</li>
            <li>•&nbsp;&nbsp;</li>
          </ul>
        </div>
        <div className="lg:w-5/12 w-3/4 max-w-md z-0 rounded-tr-[100%] -skew-x-12 rounded-tl-[110%] rounded-bl-[70%] rounded-br-[90%] overflow-hidden">
          <Image
            alt="Prop1"
            width={100}
            height={70}
            layout="responsive"
            src={Section2Img}
          />
        </div>
      </div>
      <div className="bg-[#040b1e] py-16 min-h-screen flex flex-col flex-1 items-center justify-center">
        <h1 className="text-white text-4xl font-extrabold m-8">
          My Tech Stack
        </h1>
        <div className="flex w-full md:w-5/6 bg-red-50 flex-1 p-5 relative">
          <Float src={React} />
          <Float src={ExpressJS} />
          <Float src={MongoDB} />
          <Float src={NodeJS} />
          <Float src={CSS} />
          <Float src={HTML} />
          <Float src={Figma} />
          <Float src={Sass} />
          <Float src={Java} />
          <Float src={JavaScript} />
          <Float src={TypeScript} />
          <Float src={NextJS} />
          <Float src={PostgreSQL} />
          <Float src={TailwindCSS} />
          <Float src={Redux} />
          <Float src={Python} />
          <Float src={Prisma} />
        </div>
      </div>
    </>
  )
}

export default Home
