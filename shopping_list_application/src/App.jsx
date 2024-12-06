import { useState } from 'react'
import './App.css'
import image from './assets/shopping_cart_full.png'

function App() {
  const [item, setItem] = useState('')
  const [groceryItems, setGroceryItems] = useState([])
  const handleGroceryItem = (e) => {
    // console.log(e.target.value);
    setItem(e.target.value)
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (item) {
        const updatedList = [...groceryItems]
        const matched = updatedList.findIndex((el) => el.name === item)
        if (matched == -1) {
          updatedList.push({
            name: item,
            quantity: 1,
            completed: false
          })
        }
        else {
          updatedList[matched].quantity++
        }
        setGroceryItems(updatedList)
        setItem('')
      }
    }
  }
  const renderList = () => {
    return groceryItems.map((ele) => (
      <li key={ele.name}>
        <div className="container">
          <input type="checkbox" />
          <p>{ele.name}</p><span>{ele.quantity > 1 && ele.quantity}</span>
        </div>
        <button className='removeBtn'>x</button>
      </li>
    ))
  }
  return (
    <main>
      <div>
        <div>
          <h4 className='success'>You are Done</h4>
          <div className="header">
            <h1>Shopping List</h1>
            <img src={image} alt="" />
            <input type="text" placeholder='Add an Item'
              onChange={handleGroceryItem}
              value={item}
              onKeyDown={handleEnter}
            />
          </div>
        </div>
        <ul>
          {renderList()}
        </ul>
      </div>
    </main>
  )
}

export default App
