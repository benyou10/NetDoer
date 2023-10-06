import Dashnav from "../_components/Dashnav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className=" w-full min-h-[100vh] bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-300 via-cyan-900 to-rose-100">
    
    <Dashnav/>
    {children}</div>
  }