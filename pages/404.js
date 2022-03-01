import PageLayout from "../components/PageLayout"
import Image from "next/image"

export default function Custom404() {
  return (
    <PageLayout title="Home" principal="">
      <div className="text-center">
        <Image src="/404.png" alt="404" quality={100} width={700} height={500} />
      </div>
    </PageLayout>
  )
}
