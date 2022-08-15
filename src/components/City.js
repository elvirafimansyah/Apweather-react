import { useEffect, useState, useRef} from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

const ExCity = () => {
  const [weather, setWeather] = useState([])
  const [value, setValue] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false)
  const requestUser = async () => {
    setIsOpen(false)
    try {
      const newCity = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${value}&aqi=no`)
      const newC = await newCity.json();
      setWeather([...weather, newC])
    } catch {
      console.error("error lol!")
    } 
  } 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: "#152350",
      color: "#fff",
      padding: '2rem',
      borderRadius: '0.5rem'
    },
  };

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value);
  }

  
  return(
    <>
      {
        weather.map((data, i) => (
          <div className= "card bg-light-navy w-full  md:w-52 break-words p-6 rounded-lg mr-3 mb-3 relative" key={i} >
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
      <button className="card bg-light-navy w-full md:w-52 py-16 px-6 rounded-lg mr-3 mb-3 flex items-center justify-center hover:cursor-pointer " onClick={openModal} title="add city">
        <div className="row-1 flex justify-center items-center">
          <h4 className="text-4xl font-semibold text-white">+</h4>
        </div>
      </button>

      {
        modalIsOpen ? 
          <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium"></h3>
                <button onClick={closeModal} className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-low-navy hover:text-white" type="button"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
              </div>
              <form onSubmit={requestUser}>
                <h3 className="text-xl font-medium text-white pb-2.5 ">Add Your City</h3>
                <input  type="text" className="bg-low-navy  text-white text-sm rounded-md focus:outline-none block w-full p-2.5" placeholder="Your City" onChange={(e) => handleChange(e)} autoFocus  />
                <button type="submit" className="block w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5" >+ Add</button>
              </form>
            </Modal>
          </div>
        
        : null
      }
    </>
  )
}


export default ExCity
