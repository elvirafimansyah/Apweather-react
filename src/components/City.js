import { useEffect, useState } from "react";
const ExCity = () => {
  const [city, setCity] = useState([]);
  const [result, setResult] = useState([])
  const [weather, setWeather] = useState([])

  const getCity = async(e) => {
    const resp = await fetch("/data/city.json");
    const respData = await resp.json();
    setCity(respData)
  }

  const getData = () => {
    // setWeather(respD)
    const list = []
    for (let i = 0; i < city.length; i++) {
      list.push(city[i].city)
    }
    setResult(list);
    result.map(async (result) => {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${result}&aqi=no`);
      const respD = await res.json();
      setWeather([...weather, respD])
    })
  }
  
  useEffect(() => {
    getCity()
    getData()
  })
  return(
    <>
      {/* {
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
        
      } */}
    
    </>
  )
}

export default ExCity