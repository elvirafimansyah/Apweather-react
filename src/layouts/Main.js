import {useState, useEffect, useRef} from "react"
import Left from "../components/LeftSide"
import { CardDetails, CardEmpty } from "../components/CardDetails"
import WeatherDetails from "../components/Weather";
const Main = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("palembang");
  const [loading, setLoading] = useState(true);
  const linkRef = useRef(null)
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const scrollRef = ref => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
    ref.focus()
  }

  useEffect(() => {
    const searchData = async() => {
      try {
        const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${value}&aqi=no`);
        const respData = await resp.json();
        setData(respData)
        setLoading(false)
      } catch(err){
        console.error("error")
      }
    }
    searchData("palembang")
  }, [value])

  return(
    <div className="flex flex-col lg:flex-row">
      <Left change={handleChange} value={value} data={data} refff={linkRef}/>
      <div className="bg-light-navy w-full lg:w-1/2 px-4 lg:px-28">
        <nav className="py-3 lg:py-7">
          <a href="https://github.com/elvirafimansyah/Apweather"  target="blank" className="text-xl font-semibold whitespace-nowrap text-white hidden lg:block float-right"  >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github"
              viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </nav>
        {loading ? 
          <div className="middle ">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
            <div className="bar bar7"></div>
            <div className="bar bar8"></div>
          </div>
        : 
          <main className="lg:py-10">
            <h3 className="text-white text-2xl ">Weather <span className="text-lime font-medium">Forecast</span></h3>
            {
              value.length > 2 ? <CardDetails data={data}/> : <CardEmpty /> 
            }
            <h3 className="text-white text-xl pb-5">Today Overview</h3>
            <div className="box-details flex flex-wrap w-full h-full">
              <WeatherDetails weather={data} />
            </div>
          </main>
        }
        <a href="# " rel="noopener noreferrer" onClick={() => scrollRef(linkRef.current)}className="fixed no-underline p-1 w-10 h-10 flex items-center justify-center text-white rounded-lg bottom-8 right-8 z-10 bg-navy shadow-md lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Main;