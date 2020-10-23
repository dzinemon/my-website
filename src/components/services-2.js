import React from "react"

import BootstrapImage from "../images/bootstrap.png"
import BulmaImage from "../images/bulma.png"
import TailwindImage from "../images/tailwind.png"

const ServicesTwo = () => (
  <div className="container max-w-5xl mx-auto my-4 rounded bg-white">
    <div className="flex sm:flex-row flex-row-reverse justify-around items-center">
      <div className="flex flex-col justify-center w-5/12 py-6">
        <div className="w-auto self-end">
          <img className="object-contain object-center w-40 h-20" src={BootstrapImage} alt="Bootstrap static site generator" />
        </div>
        <div className="w-auto self-center">
          <img className="object-contain object-center w-40 h-20" src={BulmaImage} alt="Bulma static site generator" />
        </div>
        <div className="w-auto self-start">
          <img className="object-contain object-center w-40 h-20" src={TailwindImage} alt="Tailwind static site generator" />
        </div>
      </div>
      <div className="w-5/12">
        <h2 
          className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
        >Templating / Prototyping</h2>
        <p className="mb-2">using modern CSS Frameworks:</p>
        <ul className="list-disc list-inside ml-30">
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Tailwind</li>
        </ul>
        
      </div>
      
    </div>
  </div>
)

export default ServicesTwo