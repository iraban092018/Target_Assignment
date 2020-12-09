import React, { useState } from 'react'

export const TransitContext = React.createContext()

export const  TransitContextProvider= ({children}) => {
    const [hookState,setHookState] = useState({
      routeList:{},
      routeSelected:false,
      directionSelected:false,
      stopSelected:false,
      selectedRouteData:'',
      selectedDirectionData:'',
      selectedDirection:[],
      selectedStop:[],
      setSelectedStop:'',
      stopDetails: {} ,
      showTextFiled:false,
      showRouteField:true,
      fetchDetailsForStop:false,
      stopNumber:'',
      direstionListAfterSearch:[]
    })

    const updateHookState=(key,value)=>{
        setHookState((prevState)=>({
            ...prevState,
            [key]:value
        }))
    }
    return (
        <TransitContext.Provider value={{hookState,updateHookState}}>
           {children} 
        </TransitContext.Provider>
    )
}
