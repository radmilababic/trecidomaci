import React from 'react'

export default function Table({ data, columns }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {columns.map(column => {
                        return (
                            <th key={column.name}>{column.name}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    data.map(element => {
                        return (
                            <tr key={element.id}>
                                {
                                    columns.map(column => {
                                        return (
                                            <td key={column.name}>
                                                {column.render ? column.render(element) : element[column.dataKey]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
