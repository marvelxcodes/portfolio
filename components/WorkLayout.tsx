import { ReactNode } from "react"

type WorkLayoutProps = {
    children: ReactNode
    className: string
}

const WorkLayout = ({children, className}:WorkLayoutProps) => {
  return (
    <div className={`h-screen w-full snap-center ${className}`}>
        {children}
    </div>
  )
}

export default WorkLayout