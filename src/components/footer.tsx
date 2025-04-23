import React from "react"

const Footer = () => {
  return (
    <footer
      className="p-4 mt-20 bg-gray-100 dark:bg-neutral-800 transition-colors duration-300"
    >
      <div className="container text-center mx-auto dark:text-neutral-300">
        {new Date().getFullYear()}, Find me on 
          {` `}
        <a className="text-blue-800 dark:text-blue-400 hover:underline font-bold transition-colors duration-300"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/andriisha">Twitter</a>,
          {` `}
        <a className="text-blue-800 dark:text-blue-400 hover:underline font-bold transition-colors duration-300"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/dzinemon">Github</a>,
          {` `}
        <a className="text-blue-800 dark:text-blue-400 hover:underline font-bold transition-colors duration-300"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/andrii-sharapatov/">Linkedin</a>

        <hr className="mx-auto w-40 my-4 border-neutral-300 dark:border-neutral-600 transition-colors duration-300"/>
        <p>This website is created using 
          {` `}
          <a 
            className="text-blue-800 dark:text-blue-400 hover:underline font-bold transition-colors duration-300"
            href="https://www.gatsbyjs.com/">Gatsby
          </a>
        </p>
      </div>
    </footer>
  )
}


export default Footer