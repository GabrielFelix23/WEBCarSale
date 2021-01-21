import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const ContainerTaskCar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
`

export const TaskCar = styled.div`
    border: 1px solid #A4A4A4;
    border-radius: 5px;
    background: #fff;
    width: 300px;
    height: auto;
    padding: 20px;

    h3{
        margin-left: 30%
    }
` 
export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    a{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100px;
        height: 50px;
        background: #FF0000;
        color: #fff;
        text-decoration: none;
        border-radius: 10px;
    }
` 