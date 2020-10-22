import React from "react"

const Footer = () => {
  return (
    <footer
      className="p-4 mt-20 bg-gray-100"
    >
      <div className="container text-center mx-auto">
        {new Date().getFullYear()}, Find me on 
          {` `}
        <a className="text-blue-600 hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/andriisha">Twitter</a>,
          {` `}
        <a className="text-blue-600 hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/dzinemon">Github</a>,
          {` `}
        <a className="text-blue-600 hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/andrii-sharapatov/">Linkedin</a>

        <hr className="mx-auto w-40 my-4"/>
        <p>This website is created using 
          {` `}
          <a 
            className="text-blue-600 hover:text-blue-400"
            href="https://www.gatsbyjs.com/">Gatsby
          </a>
        </p>
      </div>
    </footer>
  )
}


export default Footer