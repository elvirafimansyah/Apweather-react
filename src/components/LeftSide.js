import { Link } from "react-router-dom"
import ExCity from "./City"
const Left = ({...props}) => {
  const styleInput = {
    backgroundImage: "url(/img/search.png)",
    backgroundSize: "1.5em", 
    backgroundPosition: "16px 48%"
  }
  return(
    <div className="left-side bg-navy w-full lg:w-1/2 px-4 md:px-8 lg:px-4 lg:px-28 ">
      <nav className="py-7 flex justify-between lg:block">
        <Link to="/" className="flex items-center text-xl font-semibold whitespace-nowrap text-white">
          <img src="/img/logo.png" width="40" alt="logo" /> &nbsp;
            Ap<span className="text-lime">weather</span>
        </Link>
        <a href="https://github.com/elvirafimansyah/Apweather" target="blank" className="text-xl font-semibold whitespace-nowrap text-white lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github"
            viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </nav>
      <main className="py-5 lg:py-3 flex flex-col lg:block md:max-w-4xl lg:max-w-md " >
        <div className="search-bar h-12" >
          <input type="text" value={props.value} onChange={e => props.change(e)} className="w-full h-full bg-light-navy rounded-lg px-12 bg-no-repeat text-light-gray focus:outline-none " placeholder="Search Location" style={styleInput}/>
        </div>
        <div className="py-4 md:flex flex-wrap ">
          <ExCity />
        </div>
      </main>
    </div>

  )
}

export default Left;