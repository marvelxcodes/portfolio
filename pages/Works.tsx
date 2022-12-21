import type { NextPage } from "next"
import Header from "@components/Header"
import WorkLayout from "@components/WorkLayout"

const Work: NextPage = () => {
  return (
    <div className="snap-y snap-always snap-mandatory">
      <Header />
      <WorkLayout className="bg-rose-500">
        <h1>hi</h1>
      </WorkLayout>
      <WorkLayout className="bg-purple-500">
        <h1>hi</h1>
      </WorkLayout>
      <WorkLayout className="bg-red-500">
        <h1>hi</h1>
      </WorkLayout>
    </div>
  )
}

export default Work
