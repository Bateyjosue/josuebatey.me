import Sidebar from './navigation/Sidebar'
import Header from './navigation/Header'
import Hero from './Hero'

export default function Home() {
  return (
    <section className="wrapper-lg flex max-w-full max-h-full h-full min-h-screen bg-blue-950 text-white">
      <Sidebar className="w-3/12 flex flex-col justify-around gap-12" />
      <main className="w-10/12 border rounded-lg">
        <Header />
        <Hero />
      </main>
    </section>
  )
}
