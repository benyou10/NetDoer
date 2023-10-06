import Authontication from "../_components/authontication"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <Authontication>{children}</Authontication>
  }