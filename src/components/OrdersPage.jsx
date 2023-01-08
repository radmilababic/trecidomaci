import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOrders } from '../api'
import Navbar from './Navbar'
import Pagination from './Pagination'
import Table from './Table'

const columns = [
    {
        name: 'Id',
        render: o => (
            <Link to={`/orders/${o.id}`}>{o.id}</Link>
        )
    },
    {
        name: 'Name',
        dataKey: 'name'
    },
    {
        name: 'Address',
        dataKey: 'address'
    },
    {
        name: 'Email',
        render: o => (<a href={`mailto:${o.emial}`}>{o.email}</a>)
    },
    {
        name: 'Phone',
        render: o => (<a href={`tel:${o.phone}`}>{o.phone}</a>)
    },
    {
        name: 'Delivered',
        render: o => o.delivered ? 'YES' : 'NO'
    }
]

export default function OrdersPage() {
    const [email, setEmail] = useState('')
    const [page, setPage] = useState(1);
    const [orderRes, setOrderRes] = useState(null);

    useEffect(() => {
        getOrders(email, page, 20).then(setOrderRes);
    }, [email, page])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='text-center m-3'>Orders</h1>
                <div className='m-2'>
                    <input type="text" className='form-control' placeholder='Search' value={email} onChange={e => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <Table columns={columns} data={orderRes?.data || []} />
                <div className='pt-3'>
                    <Pagination
                        page={page}
                        setPage={setPage}
                        size={20}
                        total={orderRes?.total || 0}
                    />
                </div>
            </div>
        </div>
    )
}
