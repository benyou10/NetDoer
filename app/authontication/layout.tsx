import Authontication from "../_components/authontication"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <Authontication>{children}</Authontication>
  }