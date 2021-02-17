import React from "react"

const ServicesTwo = () => (
  <div className="container max-w-5xl mx-auto my-12 rounded bg-white">
    <div className="flex flex-wrap sm:flex-row sm:justify-around justfy-center items-center -mx-5">
      <div className="w-full sm:w-8/12 my-4 px-5">
        <h2 className="leading-relaxed font-bold text-gray-900 text-3xl sm:text-4xl sm:leading-7 mb-2">
          Templating / Prototyping
        </h2>
        <p className="text-lg">using modern CSS Frameworks</p>
      </div>
      <div className="w-full sm:w-4/12 my-4 px-5">
        <ul className="list-disc list-inside ml-30 text-2xl md:text-3xl lg:text-4xl font-light">
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </div>
  </div>
)

export default ServicesTwo
