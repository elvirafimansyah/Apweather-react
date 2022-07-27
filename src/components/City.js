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

  const totalCity = () => {
    const list = []
    for (let i = 0; i < city.length; i++) {
      list.push(city[i].city)
      setResult(list);
    }
  }

  const getData = () => {
    // setWeather(respD)
    result.map(async (result) => {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${result}&aqi=no`);
      const respD = await res.json();
      setWeather(respD)
    })
  }

  const request = async() =>{
    await getData()
  }

  useEffect(() => {
    getCity()
    totalCity()
    request()
  })
  return(
    <>
      {/* {
        weather.map((data, i) => (
          <div class= "card bg-light-navy w-full  md:w-52 break-words p-6 rounded-lg mr-3 mb-3  relative" >
            <div class="row-1 flex justify-between items-center pb-10 ">
              <div class="text-info text-white pr-8">
                <h4 class="text-2xl font-semibold">{data.current?.temp_c}<span class="text-lime">°C</span></h4>
                <p class="text-light-gray">{data.current?.condition?.text}</p>
              </div>
              <img src={data.current?.condition?.icon} alt={data.current?.condition?.text} />
            </div>
            <div class="location absolute bottom-6">
              <h3 class="text-white">{data.location?.name}</h3>
            </div>
          </div>
        )) 
        
      } */}
    
    </>
  )
}

export default ExCity