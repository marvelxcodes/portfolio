import Image, { StaticImageData } from "next/image"

type FloatProps = {
    src: StaticImageData
}

const Float = ({ src }:FloatProps) => {
  return (
    <div className="select-none pointer-events-none">
        <Image src={src} height={50} width={50} />
    </div>
  )
}

export default Float