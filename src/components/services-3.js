import React from "react"

import GithubImage from "../images/github.png"
import GitlabImage from "../images/gitlab.png"
import BitbucketImage from "../images/bitbucket.png"

const ServicesThree = () => (
  <div className="container max-w-5xl mx-auto my-4 rounded bg-white">
    <div className="flex sm:flex-row flex-row-reverse justify-around items-center">
      <div className="w-5/12">
        <h2 
          className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
        >Using code hosting platforms</h2>
        <p className="mb-2">for version control and collaboration:</p>
        <ul className="list-disc list-inside ml-30">
          <li>Bitbucket</li>
          <li>Github</li>
          <li>Gitlab</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center w-5/12 py-6">
        <div className="w-auto self-start">
          <img className="object-contain object-center w-40 h-20" src={BitbucketImage} alt="Bitbucket code hosting platform" />
        </div>
        <div className="w-auto self-center">
          <img className="object-contain object-center w-40 h-20" src={GithubImage} alt="Github code hosting platform" />
        </div>
        <div className="w-auto self-end">
          <img className="object-contain object-center w-40 h-20" src={GitlabImage} alt="Gitlab code hosting platform" />
        </div>
      </div>
    </div>
  </div>
)

export default ServicesThree