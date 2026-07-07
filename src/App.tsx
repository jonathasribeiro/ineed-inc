import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Briefcase, Users, Zap } from 'lucide-react'

const professionals = [
  { name: 'Marina Costa', role: 'Product Designer', rate: 'R$ 180/h' },
  { name: 'Felipe Alves', role: 'Fullstack Engineer', rate: 'R$ 220/h' },
  { name: 'Julia Ferreira', role: 'Data Analyst', rate: 'R$ 160/h' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-bold">INeed</span>
          <Button variant="secondary">Post a project</Button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <Badge className="mb-4 bg-blue-500/20 text-blue-200">Marketplace</Badge>
        <h1 className="text-4xl font-bold md:text-6xl">Connect with senior professionals faster</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          INeed Inc rebuilt as a modern hiring marketplace — React, TypeScript, Tailwind v4,
          and shadcn-style UI components for a credible product landing page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg">Find talent</Button>
          <Button variant="secondary" size="lg">Browse projects</Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        <Card><CardContent className="p-6"><Users className="mb-3 h-6 w-6 text-blue-400" /><h3 className="font-semibold">Vetted network</h3><p className="mt-2 text-sm text-slate-400">Senior engineers, designers, and PMs.</p></CardContent></Card>
        <Card><CardContent className="p-6"><Zap className="mb-3 h-6 w-6 text-blue-400" /><h3 className="font-semibold">Fast matching</h3><p className="mt-2 text-sm text-slate-400">Shortlists in hours, not weeks.</p></CardContent></Card>
        <Card><CardContent className="p-6"><Briefcase className="mb-3 h-6 w-6 text-blue-400" /><h3 className="font-semibold">Enterprise ready</h3><p className="mt-2 text-sm text-slate-400">Contracts, billing, and compliance.</p></CardContent></Card>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-semibold">Featured professionals</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {professionals.map((pro) => (
            <Card key={pro.name} className="border-white/10 bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{pro.name}</h3>
                <p className="text-slate-400">{pro.role}</p>
                <p className="mt-4 font-bold text-purple-300">{pro.rate}</p>
                <Button className="mt-4 w-full" variant="secondary">View profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
