import React from 'react'
import Styled from 'styled-components/macro'
import CustomizedTabs from '../atoms/NavTab'


const TabLoader = () =>{
    const StyleWrapper= Styled.div`
    display:flex;
    justify-content:center;
    align-item:center
    `
    return (
       <StyleWrapper>
          {/* <h1>By Route</h1> */}
          <CustomizedTabs />
       </StyleWrapper>
    )
}

export default TabLoader
