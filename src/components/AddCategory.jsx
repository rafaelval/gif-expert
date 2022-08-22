import { useState } from "react"

export function AddCategory({onNewCategory}) {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e)=>{
    setInputValue(e.target.value)
  }

  const onSubmit= (e)=>{
    e.preventDefault()
    if(inputValue.trim().length <= 1) return
    // setCategories(categories => [inputValue,...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder="Buscar Gifs" 
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
    
  )
}
