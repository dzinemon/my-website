import React from 'react'

const Contact = () => {
  return (
    <div className="container max-w-5xl mx-auto my-4 rounded bg-white flex justify-center px-2">
    <div className="w-full sm:w-1/2">
      <h2 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">Contact me</h2>
      <p className="mt-2 max-w-2xl text-base leading-6 text-gray-700">
        I added the form below, just in case you would like to reach me
      </p>
      <form id="contact"  method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <p className="mt-2">
          <label className="cursor-pointer">Your Name: 
            <input type="text" name="name" 
            className="h-10  bg-gray-100 focus:bg-white focus:border-blue-600 border-2 border-gray-800 p-2 form-input flex-1 block w-full rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </label>   
        </p>
        <p className="mt-2">
          <label>Your Email: <input type="email" name="email" required
            className="h-10  bg-gray-100 focus:bg-white focus:border-blue-600 border-2 border-gray-800 p-2 form-input flex-1 block w-full rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          /></label>
        </p>
        
        <p className="mt-2">
          <label>Message: <textarea name="message"
            className="h-32  bg-gray-100 focus:bg-white focus:border-blue-600 border-2 border-gray-800 p-2 form-input flex-1 block w-full rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          ></textarea></label>
        </p>
        <p className="mt-2">
          <button 
          className="py-2 px-10 rounded font-bold border-2 border-gray-800 bg-white text-gray-800 hover:text-white hover:bg-gray-800"
          type="submit">Send</button>
        </p>
      </form>
     
      
    </div>
  </div>
  )

}

export default Contact