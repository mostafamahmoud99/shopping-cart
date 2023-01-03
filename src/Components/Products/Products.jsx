
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
import { GetAData } from '../context/ProductDataContext';


export default function Products() {

  const { data, loading, filterr, setFilter } = GetAData()




  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>

      </>
    )
  }

  const filterProduct = (category) => {
    const updateCategory = data.filter((x) => x.category === category)
    setFilter(updateCategory)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex flex-wrap justify-content-center mb-5 pb-5">
          <button className='btn btn-outline-dark my-2 me-2' onClick={() => setFilter(data)} >All</button>
          <button className='btn btn-outline-dark my-2 me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='btn btn-outline-dark my-2 me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='btn btn-outline-dark my-2 me-2' onClick={() => filterProduct("jewelery")}>Jewelery Clothing</button>
          <button className='btn btn-outline-dark my-2 me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>

        {filterr.map((product) => (
          <div key={product.id} className='col-md-3 mb-4'>
            <div className="card h-100 text-center p-4">
              <img src={product.image} className="card-img-top" height='250px' alt={product.title} />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }



  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  )
}
