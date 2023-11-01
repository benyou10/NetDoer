import Dashnav from "../_components/Dashnav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className=" w-full min-h-[100vh] bg-sc">
    
    <Dashnav/>
    {children}</div>
  }