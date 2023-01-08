import { randomInt } from "crypto"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"

type FloatProps = {
  src: StaticImageData
  name: string
  color: string
}

const Float = ({ src, name, color }: FloatProps) => {
  return (
    <div className={`select-none m-3 w-56 bg-gray-400 rounded-xl items-center p-3 flex cursor-pointer`}>
      <Image src={src} height={50} width={50} />
      <h1 className="text-white pl-3 font-semibold">{name}</h1>
    </div>
  )
}

export default Float
