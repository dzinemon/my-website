import React from "react"

const OtherServices = () => (
  <div className="container max-w-5xl mx-auto my-20 px-2">
    <div className="grid gap-4 sm:grid-cols-3 grid-cols-2">
    <div className="p-4 sm:p-10 rounded-md col-span-2">
      <h2 
        className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-7 mb-2"
      >Other tools and enhancements for web apps</h2>
      <p className="mb-2">
        Setting up and managing related services and tools to enhance website functionality and performance 
      </p>
        
      </div>

      <div className="p-4 sm:p-10 rounded-md">
        <h3 
          className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
        >Google tools and APIs</h3>
        <p className="mb-2"></p>
          <ul className="list-disc list-inside ml-30">
            <li>
              Tag Manager
            </li>
            <li>
              Analytics
            </li>
            <li>
              Optimize
            </li>
            <li>
              Search Console
            </li>
            <li>
              Charts
            </li>
            <li>
              Spreadsheet Api
            </li>
            <li>
              Maps
            </li>
            <li>
              Apps Script
            </li>
          </ul>
        </div>

        <div className="p-4 sm:p-10 rounded-md">
          <h3 
            className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
          >Marketing tools and APIs</h3>
          <p className="mb-2"></p>
            <ul className="list-disc list-inside ml-30">
              <li>
                Hubspot
              </li>
              <li>
                Zapier
              </li>
              <li>
                Formkeep
              </li>
              <li>
                Typeform
              </li>
              <li>
                Mailchimp
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-10 rounded-md">
          <h3 
            className="text-xl leading-8 font-semibold font-display text-gray-900 sm:text-2xl sm:leading-7 mb-2"
          >SEO and Accessibility</h3>
          <p className="mb-2">For improving the quality of web pages, I use Lighthouse audit to measure website Performance, Accessibility, Best Practices and Search engine optimisation.
          </p>
       
            
          </div>

          <div className="bg-gray-800 text-white p-4 sm:p-10 rounded-md">
          <p className="mb-2 font-semibold">I am able to grasp new concepts and tools quickly
          </p>
       
            
          </div>
      </div>
  </div>
)

export default OtherServices