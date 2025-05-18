import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import List from './components/List'
import { create, readone, readall, update, deletereq } from './fetch'

function App() {
  const [list, setList] = useState(null)
  const [id, setId] = useState(null)
  const [title, setTitle] = useState(null)
  const [link, setLink] = useState(null)
  const [currentMethod, setCurrentMethod] = useState(null)

  useEffect(() => {
        const fetch = async () => {
            let data
            // if(currentMethod == "readAll") {
                data = await readall()
            // }
            // else if(currentMethod == "readOne") {
            //     console.log(data)
            //     data = await readone(id)
            // }
            setList(<List data={data}/>)
            console.log(data)
        }
        fetch()
    }, [currentMethod])

  function handleClick(e) {
    setCurrentMethod(e.target.id)
  }

  function handleInput(e) {
    if(e.target.name == "id")
      setId(e.target.value)
    else if(e.target.name == "title")
      setTitle(e.target.value)
    else
      setLink(e.target.value)
  }

  return (
    <>
      <span>id:</span>
      <input name='id' type='text' onChange={handleInput}></input>
      <span>title:</span>
      <input name='title' type='text' onChange={handleInput}></input>
      <span>link:</span>
      <input name='link' type='text' onChange={handleInput}></input>
      <button id="readAll" onClick={handleClick}>read all</button>
      <button id="readOne" onClick={handleClick}>read one</button>
      {list}
    </>
  )
}

export default App
