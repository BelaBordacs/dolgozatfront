import React from 'react'
import { ingatlanContext } from '../context/IngatlanContext'

const IngatlanTablazat = () => {
    const {ingatlanList} = useContext(ingatlanContext)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Kategória</th>
                    <th>Leírás</th>
                    <th>Hirdetés dátuma</th>
                    <th>Tehermentes</th>
                    <th>Ár</th>
                    <th>Fénykép</th>
                </tr>
            </thead>
            <tbody>
                {ingatlanList.map((e,i) => {
                    return (
                        <tr key={i}>
                            <td>{e.kategoria}</td>
                            <td>{e.leiras}</td>
                            <td>{e.hirdetesDatuma}</td>
                            <td>{e.tehermentes}</td>
                            <td>{e.ar}</td>
                            <td>{e.ar}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default IngatlanTablazat