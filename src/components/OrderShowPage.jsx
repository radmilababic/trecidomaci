import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOrder } from '../api';
import Navbar from './Navbar';
import Table from './Table';


const columns = [
    {
        name: 'Product',
        render: i => i.product.name
    },
    {
        name: 'Price',
        dataKey: 'unitPrice'
    },
    {
        name: 'Count',
        dataKey: 'count'
    },
    {
        name: 'Total',
        render: i => (Number(i.unitPrice) * Number(i.count)).toFixed(2)
    }
]

export default function OrderShowPage() {
    const id = useParams().id;
    const [order, setOrder] = useState(null);

    useEffect(() => {
        getOrder(id).then(setOrder);
    }, [id])
    if (!order) {
        return null;
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-5'>
                        <h3 className='text-center'>Info</h3>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Address
                            </div>
                            <div>
                                {order.address}
                            </div>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Name
                            </div>
                            <div>
                                {order.name}
                            </div>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Email
                            </div>
                            <div>
                                <a href={`mailto:${order.email}`}>{order.email}</a>
                            </div>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Phone
                            </div>
                            <div>
                                <a href={`tel:${order.phone}`}>{order.phone}</a>
                            </div>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Delivered
                            </div>
                            <div>
                                {order.delivered ? 'YES' : "NO"}
                            </div>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div>
                                Total
                            </div>
                            <div>
                                {order.items.reduce((acc, i) => {
                                    return acc + Number(i.unitPrice) * Number(i.count)
                                }, 0).toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <h3 className='text-center'>Items</h3>
                        <Table data={order.items || []} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}
