const CardDetails = ({data}) => {
  return(
    <>
    { data &&
      <div className="card-details p-9 text-white rounded-lg my-5" style={{ backgroundImage: "url(/img/card_details.png)", backgroundSize: "cover" }}>
        <div className="row-1 day flex justify-between items-center pb-5">
          <h3 className="text-xl font-medium">Today</h3>
          <h3 className="font-light">{data.current?.last_updated}</h3>
        </div>
        <div className="row-2 specifc flex justify-between items-center pb-5">
          <div className="text-info">
            <h3 className="text-4xl font-semibold ">{data.current?.temp_c}<span className="text-lime ">°C</span></h3>
            <p className="text-half-white text-lg">{data.current?.condition.text}</p>
          </div>
          <img src={data.current?.condition.icon} width="100" alt={data.current?.condition?.text} />
        </div>
        <div className="row-3 location flex text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#28E13B" className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          &nbsp;
          {data.location?.name}, {data.location?.country}
        </div>
      </div>
      }
    </>
  )
}

const CardEmpty = () => {
  return(
    <div className="card-details px-9 py-28 text-white rounded-lg my-5" style={{ backgroundImage: "url(/img/card_details.png)", backgroundSize: "cover" }}>
      <h1 className="text-2xl font-semibold flex items-center">Not Found</h1>
    </div>
  )
}

export { CardDetails, CardEmpty } ;