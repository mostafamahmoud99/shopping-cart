import { createContext, useEffect, useState } from "react";

export const CartItemContext = createContext([]);

export default function CartItemContextProvider({ children }) {
  const [addItems, setAddItems] = useState([]);




const addToLocalStorge = (data) =>{
  localStorage.setItem('storgeData' , JSON.stringify(data))
}

  const addItem = (product) => {
    let exist = addItems.find((ele) => ele.id === product.id);
    if (exist) {
      const prod = addItems.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty + 1 } : ele
      );
      setAddItems(prod);
      addToLocalStorge(prod)
    } else {
      let prod = [...addItems, { ...product, qty: 1 }];
      setAddItems(prod);
      addToLocalStorge(prod)
    }
  };

  const decrementItem = (product) => {
    let exist = addItems.find((ele) => ele.id === product.id);
    if (exist.qty > 1) {
      const prod = addItems.map((ele) =>
        ele.id === product.id ? { ...exist, qty: exist.qty - 1 } : ele
      );
      setAddItems(prod);
      addToLocalStorge(prod)
    }
  };

  const removeItem = (product) => {
    const prod = addItems.filter((ele) => ele.id !== product.id);
    setAddItems(prod);
    addToLocalStorge(prod)
  };

  useEffect(()=>{
    let data = JSON.parse( localStorage.getItem('storgeData'));
    if(data !==null){
     setAddItems(data)
    }
   },[])


  return (
    <CartItemContext.Provider
      value={{ addItems, addItem, decrementItem, removeItem }}
    >
      {children}
    </CartItemContext.Provider>
  );
}
