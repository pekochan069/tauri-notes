import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/posts/[id]')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/[id]"!</div>
}
