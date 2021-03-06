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
    .containerBack{
        position: relative;
        left: 90%;

        img{
            width: 30px;
            height: 30px;
        }
    }
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;

    button{
        background: #F53131;
        border: none;
        width: 100%;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
        margin: 10px 0;
    }
    button:hover{
        opacity: 0.7
    }

    .buttonClear{
        border: 1px solid #F53131;
        background: #fff;
        width: 100%;
        height: 40px;
        color: #F53131;
        border-radius: 5px;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
        margin: 10px 0 10px 10px
    }
    .buttonClear:hover{
        opacity: 0.7
    }
`
