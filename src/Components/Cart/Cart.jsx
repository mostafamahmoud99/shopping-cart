import React, { useContext } from 'react';
import { CartItemContext } from '../context/CartItem';


export default function Cart() {
  const { addItems, addItem, decrementItem, removeItem } = useContext(CartItemContext)
  const totalPrice = addItems.reduce((x, y) => x + y.qty * y.price, 0)

  return (
    <>
      <div className="container">
        {addItems.length === 0 ? <div className='w-75 mx-auto text-center py-5 fs-1 my-5'>Cart is Empty</div> : ''}
        {addItems.length === 0 ? '' : <h2 className='text-end my-3'>total Price : {totalPrice.toFixed(2)}</h2>}
        {addItems.map((ele) => (
          <div className="row" key={ele.id}>
            <div className="col-md-4 my-3 text-center p-3">
              <img src={ele.image} className='w-50' alt="" />
            </div>
            <div className="col-md-8 text-center my-3">
              <h4>{ele.title}</h4>
              <h5 className='py-3'>{ele.price}</h5>
              <button className='btn btn-dark px-4' onClick={() => addItem(ele)}>+</button>
              <h2 className='d-inline-block mx-5'>{ele.qty}</h2>
              <button className='btn btn-dark px-4' onClick={() => decrementItem(ele)}>-</button>
              <button className='btn btn-dark d-block mx-auto w-25 my-4' onClick={() => removeItem(ele)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}