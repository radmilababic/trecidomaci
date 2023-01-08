import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api';
import Navbar from './Navbar'
import Table from './Table';

const columns = [
    {
        name: 'Id',
        dataKey: 'id'
    },
    {
        name: 'Name',
        dataKey: 'name'
    },
    {
        name: 'Price',
        dataKey: 'price'
    }
]

export default function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(setProducts);
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='text-center m-3'>Products</h1>
                <Table data={products} columns={columns} />
            </div>

        </div>
    )
}
