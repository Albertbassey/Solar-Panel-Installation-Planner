import LoadingSpinner from "@/components/LoadingSpinner"

export default function AppLoader({ loading, children }) {
  if (loading) {
    return <LoadingSpinner />
  }
  return children
}
