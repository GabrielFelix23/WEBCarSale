import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContainerInput = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        width: 100%;
        height: 30px;
        border: 1px solid #000;
        border-radius: 5px;
        padding-left: 10px;
        text-align: center;
        font-size: 20px
    }

    button{
        margin: 10px 0;
        width: 70%;
        height: 30px;
        border: none;
        background: #F53131;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7
        }
    }
`