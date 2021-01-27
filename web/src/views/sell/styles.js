import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h2{
        color:#F53131;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-size: 17px;
    }
    input{
        width: 300px;
        height: 30px;
        border: none;
        border-bottom: 2px solid #6E6E6E;
        background: none;
        margin-bottom: 10px;
        font-size: 17px;
        color: #6E6E6E
    }
    button{
        background: #F53131;
        border: none;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
        margin: 10px 0
    }
    button:hover{
        opacity: 0.7
    }
`
