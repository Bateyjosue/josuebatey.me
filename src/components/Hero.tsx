import Typewriter from "typewriter-effect"

export default function Hero() {
  return (
    <section className="px-4">
      <h1 className="flex flex-col gap-2 text-3xl font-semibold">
        <span className="">
          <Typewriter
            options={
              {
                strings: ['Hi👋', 'Jambo 👋', 'Salut 👋', "Hallo 👋"],
                autoStart: true,
                loop: true
              }
            }
          />
        </span>
        <span className="pl-12">
          <i>I'm </i>
          <i className=" font-bold text-yellow-500 text-4xl">Josue Batey</i>
        </span>
        <span className="pl-20 font-bold text-5xl">
          Software Engineer
        </span>
      </h1>
      <p className="flex flex-col mt-12 gap-4">
        <span className="w-9/12">
          a dynamic web developer with a Bachelor's degree in Computer Engineering. Proficient in <code className="text-yellow-500">JavaScript/ Typescript</code>, <code className="text-yellow-500">Ruby</code> and <code className="text-yellow-500">Python</code>, I excel in full-stack development, contributing to notable projects like <code className="text-blue-600">"Moni share"</code>, <code className="text-green-500">“The meal”</code> and <code className="text-pink-500">"Metrics Apps."</code> Experienced in remote pair programming, project management, and effective communication.
        </span>
        <span className="pl-52 items-center text-right">
           Josue is committed to continuous learning. His diverse skill set includes front-end (<code className="bg-yellow-500 py-1">JavaScript/ Typescript, React, Tailwindcss</code>) and back-end (<code className="bg-green-500 py-1">Nestjs, Ruby on Rails, Django/fastAPI</code>), and he holds a solid foundation in computer science principles. With a track record of successful projects and a background in mentoring, Josue is a dedicated professional with expertise in AI and machine translation gained through an NLP Fellowship at HuzaLabs
        </span>
      </p>
    </section>
  )
}
