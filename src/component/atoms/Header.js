import React from 'react'
import Styled from 'styled-components/macro'

const Header = (props)=> {
    const StyleWrapper = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center
    font-size:1.5rem;
    font-weight:700;
    align-content:center;
    padding:1rem;
    `
    return (
        <StyleWrapper>
            {props.children}
        </StyleWrapper>
    )
}

export default Header
