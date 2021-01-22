import React, {useState, useEffect} from 'react'
import * as S from './styles'

import api from '../../api'
import { Redirect } from 'react-router-dom'

function Sell({match}){
    const [redirect, setRedirect] = useState(false)
    const [redirectHome, setRedirectHome] = useState(false)
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
        if(!brand){
            alert("Marca é obrigatória!")
        }

        else if(!model){
            alert("Modelo é obrigatório!")
        }

        else if(!price){
            alert("Preço é obrigatório!")
        }

        else if(!chassis){
            alert("Chassi é obrigatório!")
        }

        else if(chassis.length < 7){
            alert("Chassi é obrigatório ter 7 número!")
        }

        else if(!year){
            alert("Ano é obrigatório!")
        }

        else if(!km){
            alert("KM/H é obrigatório!")
        }

        else if(!exchange){
            alert("Câmbio é obrigatório!")
        }

        else if(!doors){
            alert("Quantidade de postas são obrigatórias!")
        }

        else if(!color){
            alert("Cor é obrigatório!")
        }

        else if(!shield){
            alert("Blindagem é obrigatório!")
        }

        else if(!state){
            alert("Estado é obrigatório!")
        }

        else if(!city){
            alert("Cidade é obrigatório!")
        }

        if(match.params.id){
            await api.put(`/update/${match.params.id}`, {
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
                setRedirect(true)
            })
        }
        else{
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
                setRedirectHome(true)
            })
        }
    }

    async function updating(){
        await api.get(`/filter/${match.params.id}`)
        .then((response) => {
            setBrand(response.data.brand)
            setModel(response.data.model)
            setPrice(response.data.price)
            setChassis(response.data.chassis)
            setYear(response.data.year)
            setKm(response.data.km)
            setExchange(response.data.exchange)
            setDoors(response.data.doors)
            setColor(response.data.color)
            setShield(response.data.shield)
            setState(response.data.state)
            setCity(response.data.city)            
        })
    }

    useEffect(() => {
        updating()
    }, [])

    return(
        <S.Container>
                {redirect  && <Redirect to={`/filter/${match.params.id}`}/>}
                {redirectHome && <Redirect to={'/'}/>}
                <label>Marca</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>

                <label>modelo</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)}/>

                <label>Preço</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <label>Chassi</label>
                <input type="number" value={chassis} onChange={(e) => setChassis(e.target.value)}/>

                <label>Ano</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)}/>

                <label>Km/H</label>
                <input type="number" value={km} onChange={(e) => setKm(e.target.value)}/>

                <label>Câmbio</label>
                <input type="text" value={exchange} onChange={(e) => setExchange(e.target.value)}/>

                <label>Portas</label>
                <input type="number" value={doors} onChange={(e) => setDoors(e.target.value)}/>

                <label>Cor</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                
                <label>Blindado</label>
                <input type="text" value={shield} onChange={(e) => setShield(e.target.value)}/>

                <label>Estado</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>

                <label>Cidade</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                <button type="button" onClick={saveSell}>Pronto</button>
        </S.Container>
    )
}

export default Sell