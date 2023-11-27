import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import uglyThingsData from './UglyThingsData'
import Header from './Header'
import UglyCard from './UglyCard'


function App() {

  const [uglyData, setUglyData] = useState([])

    // GET REQUEST
  useEffect(() => {
    axios.get("https://api.vschool.io/jordanburger/thing")
      .then(res => setUglyData(res.data))
  }, [])

    // INPUT 
 const [inputData, setInputData] = useState({
  title: "",
  imgUrl: "",
  description: ""
 })

 function InputListener(e){
  const {name, value} = e.target
  setInputData(prevData => ({
    ...prevData,
    [name]: value
  }))
 }

 
      // SUBMIT FORM
 function submitUglyData (){
  axios.post("https://api.vschool.io/jordanburger/thing", inputData)
    .then(res => {
      setUglyData(prevData => ([
        ...prevData,
        res.data
      ]))
    })
    setInputData({
      title: "",
      imgUrl: "",
      description: ""
    })
  }

  // DELETE BUTTON
  function deleteUgly(id){
    axios.delete(`https://api.vschool.io/jordanburger/thing/${id}`)
      .then(setUglyData(prevUglyData => {
        return prevUglyData.filter(card => card._id !== id)
      }))
  }


  // EDIT UPDATE BUTTON
  function editUgly(id, editField){
    axios.put(`https://api.vschool.io/jordanburger/thing/${id}`, editField)
      .then(setUglyData(prevUglyData => {
          return prevUglyData.map(card => {
            if(card._id === id){
              return{
                ...card,
                ...editField
              }
            }
            return card
          })
        })
      )
  }

  const card = uglyData.map(data => (
    <UglyCard 
      data={data}
      key={data._id}
    />
  ))
 
  return (
    <uglyThingsData.Provider value={{
      uglyData,
      inputData,
      InputListener,
      submitUglyData,
      deleteUgly,
      editUgly
    }}>
      <div>
        <Header />
        {card}
      </div>
    </uglyThingsData.Provider>
  )
}

export default App
