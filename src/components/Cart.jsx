import React, {useContext} from 'react'
import { GlobalContext } from '../store/globalContext'
import DuckCard from './DuckCard'

const Cart = () => {
  const {state} = useContext(GlobalContext)

  const cartDisplay = state.cart.map((duck) => {
    return <DuckCard duck={duck}  cart={true}/>
  })

  return (
    <div>
      <h2>Cart</h2>
      <div className="row-container">
        {cartDisplay}
      </div>
    </div>
  )
}

export default Cart