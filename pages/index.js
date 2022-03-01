import PageLayout from "../components/PageLayout"
import { NewUser } from "../components/NewUser"

export default function Home() {
  return (
    <PageLayout title="Home" principal="Usuario" home={true}>      
      <NewUser />
    </PageLayout>
  )
}
