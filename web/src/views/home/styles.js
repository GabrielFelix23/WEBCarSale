import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const ContainerTaskCar = styled.div`
    flex-wrap: wrap;
    margin:0 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .ContainerInfo{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        position: absolute;
        top: 30%;

        h1{
            font-style: italic;
            opacity: 0.8
        }
    }
`