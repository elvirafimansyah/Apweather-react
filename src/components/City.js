import {  useEffect, useState} from "react";
import Modal from "react-modal";
Modal.setAppElement('#root')
const ExCity = () => {
  const [weather, setWeather] = useState([])
  const [value, setValue] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false);

  const mediaMatch = window.matchMedia('(min-width: 600px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const matchHandler = e => setMatches(e.matches);

  const requestUser = async () => {
    setIsOpen(false)
    try {
      const newCity = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=${value}&aqi=no`)
      const newC = await newCity.json();
      setWeather([...weather, newC])
    } catch(err) {
      console.error("error lol!")
    } 
  } 

  const customStyles = isRow =>  ({
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: "#152350",
      color: "#fff",
      padding: isRow ? "2rem" : "1em",
      borderRadius: '0.5rem'
    },
  });

  const deleteStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: "#152350",
      color: "#fff",
      borderRadius: '0.5rem'
    },
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setDeleteModal(false)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleDelete = (index) => {
    const newList = weather.filter((e, i) => {
      if (i !== index) {
        return e;
      }
    })

    setWeather(newList)
  }

  useEffect(() => {
    mediaMatch.addEventListener('change', matchHandler);
    return () => mediaMatch.removeEventListener('change', matchHandler);
  })
  return(
    <>
      {
        weather.map((data, i) => (
          <div className= "card bg-light-navy w-full  md:w-52 break-words p-6 rounded-lg mr-3 mb-3 relative" key={i} >
            <div className="flex justify-between pb-2">
              <span></span>
                {/* Delete Button */}
                <button type="button" className="p-2 text-sm font-medium text-white bg-red-500 rounded-md border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300" onClick={() => setDeleteModal(true)} title="delete">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
                {/* Modal After Clicked Delete Button */}
                {
                  deleteModal ? 
                  <Modal
                    isOpen={deleteModal}
                    onRequestClose={closeModal}
                    style={customStyles(matches)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="text-xl font-medium"></div>
                      <button onClick={() => setDeleteModal(false)} className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-low-navy hover:text-white hover:cursor-pointer" type="button"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                    </div>
                    <div className="text-center">
                      <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to reset this data?
                      </h3>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button class="text-white bg-red-600 border border-transparent hover:bg-red-700 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800  focus:!ring-2 group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button" onClick={() => {
                            handleDelete(i);
                            setDeleteModal(false)
                          }}><span class="flex items-center rounded-md text-sm px-4 py-2">Yes, I'm sure</span></button>

                        <button class="bg-transparent text-gray-400 border border-gray-600 hover:text-white focus:ring-2 focus:!ring-2 group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button" onClick={() => setDeleteModal(false)}><span class="flex items-center rounded-md text-sm px-4 py-2">No, cancel</span></button>
                      </div>
                    </div>
                  </Modal> 
                  : null
                }
            </div>

            <div className="row-1 flex justify-between items-center pb-10 ">
              <div className="text-info text-white pr-8">
                <h4 className="text-2xl font-semibold">{data.current?.temp_c}<span className="text-lime">°C</span></h4>
                <p className="text-light-gray">{data.current?.condition?.text}</p>
              </div>
              <img src={data.current?.condition?.icon} alt={data.current?.condition?.text} />
            </div>
            <div className="location absolute bottom-6 flex  items-center">
              <h3 className="text-white ">{data.location?.name}</h3>
            </div>
          </div>
        ))
      }
      {/* Add City Button */}
      <button className="card bg-light-navy w-full md:w-52 py-16 px-6 rounded-lg mr-3 mb-3 flex items-center justify-center hover:cursor-pointer " onClick={openModal} title="add city">
        <div className="row-1 flex justify-center items-center">
          <h4 className="text-4xl font-semibold text-lime">+</h4>
        </div>
      </button>

      {
        modalIsOpen ? 
          <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles(matches)}
            >
              <div className="flex items-start justify-between">
                <div className="text-xl font-medium"></div>
                <button onClick={closeModal} className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-low-navy hover:text-white hover:cursor-pointer" type="button"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
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
