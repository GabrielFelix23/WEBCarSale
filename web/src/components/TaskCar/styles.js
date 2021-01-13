import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 40px;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 1px solid #706E6E;
    border-radius: 10px;
    width: 180px;
    height: 150px;
    padding: 10px;
    margin: 0 10px;

    img{
        width: 40px
    }
`

export const Value = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    small{
        font-size: 18px
    }
`