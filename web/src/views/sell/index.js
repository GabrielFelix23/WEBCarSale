import React, {useState, useEffect} from 'react'
import * as S from './styles'

import api from '../../api'

function Sell(){
    const [brand, setBrand] = useState()
    const [price, setPrice] = useState()
    const [model, setModel] = useState()
    const [chassis, setChassis] = useState()
    const [year, setYear] = useState()
    const [km, setKm] = useState()
    const [exchange, setExchange] = useState()
    const [doors, setDoors] = useState()
    const [color, setColor] = useState()
    const [shield, setShield] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')

    async function saveSell(){
        await api.post('/', {
            macaddress,
            brand,
            price,
            model,
            chassis,
            year,
            km,
            exchange,
            doors,
            color,
            shield,
            state,
            city
        })
        .then(() => {
            alert("Salvo")
        })
        .catch((error) => {
            alert("não salvo")
            console.log(error)
        })
    }

    return(
        <S.Container>
                <label>Brand</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>

                <label>model</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)}/>

                <label>price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <label>chassis</label>
                <input type="number" value={chassis} onChange={(e) => setChassis(e.target.value)}/>

                <label>year</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)}/>

                <label>km</label>
                <input type="text" value={km} onChange={(e) => setKm(e.target.value)}/>

                <label>exchange</label>
                <input type="text" value={exchange} onChange={(e) => setExchange(e.target.value)}/>

                <label>doors</label>
                <input type="number" value={doors} onChange={(e) => setDoors(e.target.value)}/>

                <label>color</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                
                <label>shield</label>
                <input type="text" value={shield} onChange={(e) => setShield(e.target.value)}/>

                <label>state</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>

                <label>city</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                <button type="button" onClick={saveSell}>Pronto</button>
        </S.Container>
    )
}

export default Sell