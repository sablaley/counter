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
        setGroceryItems([...groceryItems, {
          quantity: 1,
          name: 'Cake',
          completed: false
        }])
        setItem('')
      }
    }
  }
  const renderList = () => {
    return groceryItems.map((ele,id) => (
      <li key={id}>
        <div className="container">
          <input type="checkbox" />
          <p>{ele.name}</p>
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
