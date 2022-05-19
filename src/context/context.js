import React from 'react'
import { createContext } from 'react'

const Cart = createContext();


const context = ({ children }) => {
  return (
    <Cart.Provider>
        {{children}}
    </Cart.Provider>
  )
}

export default context