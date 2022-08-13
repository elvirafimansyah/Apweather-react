import { useEffect, useState} from "react";
const ExCity = () => {
  const [weather, setWeather] = useState([])

  const allData = async () => {
    try {
      const jakarta = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=jakarta&aqi=no")
      const jak = await jakarta.json();

      const london = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=london&aqi=no")
      const lon = await london.json()

      const newyork = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=new york&aqi=no")
      const newy = await newyork.json()

      const beijing = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=beijing&aqi=no")
      const bej = await beijing.json()

      const paris = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=paris&aqi=no")
      const par = await paris.json()

      setWeather([jak, lon, newy, bej, par])
    } catch {
      console.error("jaskajs")
    }
  }

  useEffect(() => {
    allData()

  }, [])
  return(
    <>
      {
        weather.map((data, i) => (
          <div className= "card bg-light-navy w-full  md:w-52 break-words p-6 rounded-lg mr-3 mb-3  relative" key={i} >
            <div className="row-1 flex justify-between items-center pb-10 ">
              <div className="text-info text-white pr-8">
                <h4 className="text-2xl font-semibold">{data.current?.temp_c}<span className="text-lime">°C</span></h4>
                <p className="text-light-gray">{data.current?.condition?.text}</p>
              </div>
              <img src={data.current?.condition?.icon} alt={data.current?.condition?.text} />
            </div>
            <div className="location absolute bottom-6">
              <h3 className="text-white">{data.location?.name}</h3>
            </div>
          </div>
        ))
      }
      <div className="card bg-light-navy w-full md:w-52  rounded-lg mr-3 mb-3 flex items-center justify-center">
        <div className="row-1 flex justify-center items-center">
          <h4 className="text-4xl font-semibold text-white">+</h4>
        </div>
      </div>
    </>
  )
}

export default ExCity