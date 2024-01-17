
interface className {
  className: string
}

function Sidebar(className: className) {
  return (
    <div className={className.className}>
      <header className="">
        <div className="rounded-full overflow-hidden w-40">
        <img src="/src/assets/img/profil.png" alt="" />
        </div>
        <h2 className="font-bold text-3xl">Josue Batey</h2>
        <ul className="text-gray-700 opacity-95 font-bold flex flex-wrap my-4">
          {
            headlines.map((headline, index, arr) => <li className="">
              <span>{headline}</span>
              {index < arr.length -1 && <span className="px-2 font-bold text-lg">|</span>} 
            </li>)
          }
        </ul>
      </header>
      <section>
        <ul className="flex gap-4 flex-col">
          <li className="flex items-center gap-4">
            <span className="material-symbols-outlined">work</span>
            <span>Open</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="material-symbols-outlined">location_on</span>
            <span>Kigali/rw</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="material-symbols-outlined">email</span>
            <span>josuebatey19@gmail.com</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="material-symbols-outlined">link</span>
            <span>Josue Batey</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="material-symbols-outlined">x</span>
            <span>Josue Batey</span>
          </li>
        </ul>
      </section>
      <button className="bg-yellow-500 rounded-full w-1/2 py-2 font-bold shadow-[0_20px_50px_rgba(250,_250,_250,_0.5)]">Hire me</button>
    </div>
  )
}

export default Sidebar

const headlines = [
  'Software Developer',
  'Nestjs',
  'TypeScript',
  'React',
  'Redux',
  'Ruby on Rails',
]
