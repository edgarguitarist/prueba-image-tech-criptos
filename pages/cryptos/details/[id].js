import { useRouter } from "next/router"
import PageLayout from "../../../components/PageLayout"
import { CryptoDetail } from "../../../components/CryptoDetail"
import { useCryptoDetails } from "../../../hooks/useCryptoDetails"

export default function CryptoDetails() {

    const router = useRouter()
    const { id } = router.query
    const crypto = useCryptoDetails(id)

  return (
    <PageLayout title={crypto.name} principal ="Detalles">
      <CryptoDetail cryptoDetails={crypto} />
    </PageLayout>
  )
}