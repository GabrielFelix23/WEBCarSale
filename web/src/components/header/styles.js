import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    background: #F53131;
    border-bottom: 3px solid #CC0000;

    img{
        width: 90px;
        margin: 0 10px;
    }
`

export const Nav = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 20px;

    a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }
    a:hover{
        color: #000
    }
    .divider:after{
        content: "|";
        color: #fff;
        padding: 0 20px;
    }
    button{
        border: none;
        background: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            color: #000
        }
    }
`