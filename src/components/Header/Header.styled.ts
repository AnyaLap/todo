import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #a672cf;
    display: flex;
    align-items: center;
`
export const HeaderBlock = styled.div`
     max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HeaderNavLink = styled(NavLink)`
   text-decoration: none;
    padding: 10px;
    color: #fff;
`