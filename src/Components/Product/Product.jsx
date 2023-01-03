import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink, useParams } from 'react-router-dom'
import { CartItemContext } from '../context/CartItem';






export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { addItem } = useContext(CartItemContext)


    async function getProduct() {
        setLoading(true);
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        setLoading(false)

    }

    useEffect(() => {
        getProduct()
    }, []);
 


    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={150} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>

                <div className="col-md-6">
                    <img src={product.image} alt={product.title} width='400px' height='400px' />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                    </p>
                    <h3 className='displat-6 fw-bold my-4'>$ {product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addItem(product)}>Add to Cart</button>
                    <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}
