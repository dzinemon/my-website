import React from "react"

import JekyllImage from "../images/jekyll.png"
import GatsbyImage from "../images/gatsby.png"
import HugoImage from "../images/hugo.png"

const ServicesOne = () => (
  <div className="container max-w-5xl mx-auto my-4 rounded bg-white">
    <div className="flex sm:flex-row flex-row-reverse justify-around  items-center">
      <div className="w-5/12">
        <h2 
          className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
        >Migrate / Create / Update</h2>
        <p className="mb-2">web apps using popular static site generators:</p>
        <ul className="list-disc list-inside ml-30">
          <li>Hugo</li>
          <li>Gatsby</li>
          <li>Jekyll</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center w-5/12 py-6">
        <div className="w-auto self-start">
          <img className="object-contain object-center w-40 h-20" src={HugoImage} alt="Hugo static site generator" />
        </div>
        <div className="w-auto self-center">
          <img className="object-contain object-center w-40 h-20" src={GatsbyImage} alt="Gatsby static site generator" />
        </div>
        <div className="w-auto self-end">
          <img className="object-contain object-center w-40 h-20" src={JekyllImage} alt="Jekyll static site generator" />
        </div>
      </div>
    </div>
  </div>
)

export default ServicesOne