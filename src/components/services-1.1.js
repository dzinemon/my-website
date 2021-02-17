import React from "react"


const ServicesCMS = () => (
  <div className="container max-w-5xl mx-auto my-12 rounded bg-white">
    <div className="flex flex-wrap sm:flex-row sm:justify-around justfy-center items-center -mx-5">
      <div className="w-full sm:w-8/12 my-4 px-5">
        <h2 
          className="leading-relaxed font-bold text-gray-900 text-3xl sm:text-4xl sm:leading-7 mb-2"
        >Popular Content Management Systems</h2>
        <p className="text-lg">Create, update, and deliver content to your customers</p>
        <p className="text-sm text-gray-700">Can't find the one you need? I can easily dive into it.</p>
      </div>
      <div className="w-auto sm:w-4/12 my-4 px-5">
        <ul className="list-disc list-inside ml-30 text-2xl md:text-3xl lg:text-4xl font-light">
          <li>Contentful</li>
          <li>Prismic</li>
          <li>CloudCannon</li>
        </ul>
        
      </div>
    </div>
  </div>
)

export default ServicesCMS