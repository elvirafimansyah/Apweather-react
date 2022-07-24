const WeatherDetails = ({weather}) => {
  const overview = [
    {
      image: "/img/wind.png",
      text: "wind speed",
      description: weather.current?.wind_mph,
      behind: "/mph"
    },
    {
      image: "/img/waves.png",
      text: "pressure",
      description: weather.current?.pressure_mb,
      behind: "/mb"
    },
    {
      image: "/img/temp.png",
      text: "feels like",
      description: weather.current?.feelslike_c.toFixed(0),
      behind: "°C"
    },
    {
      image: "/img/uv.png",
      text: "UV index",
      description: weather.current?.uv,
      behind: "/mph"
    }
  ]
  return(
    <>
      {
        overview.map((data, i) => (
          <div className="box bg-low-navy p-7 w-full md:w-52 lg:w-56 mr-5 mb-5 flex justify-center items-center rounded-lg" key={i}>
            <img src={data.image} width="38" height="38" alt={data.text} />
            <div class="text pl-4">
              <p class="text-light-gray font-light text-xs lg:text-sm capitalize">{data.text}</p>
              { data && <h3 class="text-white font-semibold text-xl lg:text-2xl">{data.description}{data.behind}</h3>}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default WeatherDetails
