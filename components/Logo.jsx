import Image from "next/image"
import Link from "next/link"

export function Logo({...props}) {
  const {width, height} = props
  return (
    <Link href="/">
      <a className="">
        <Image
          src="/logo.png"
          alt="logo"
          width={width}
          height={height}
          layout="intrinsic"
        />
      </a>
    </Link>
  )
}

Logo.defaultProps = {
  width: "50",
  height: "50"
}
