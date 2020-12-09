/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react'
import Loader from '../atoms/Loader'
import getFetchData from '../../shared/fetachData'
import { TransitContext } from '../../context/TransitContext'
import Metra_Const from '../../shared/constants'

import BasicTable from '../atoms/Table'

const TextLoader = () => {
    const { hookState, updateHookState } = useContext(TransitContext)
    const[load,setLoad]=useState(false)
    const [tableDisplay,setTableDisplay] = useState(false)
    const [error,setError]= useState(false)

    const fetchAPIData = async (apiFetchUrl) => {
        try {
            await getFetchData(apiFetchUrl).then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not OK')
                }
                return response.json()
            }).then(res => {
                setLoad(true)
                setTableDisplay(true)
                setError(false)
                updateHookState('direstionListAfterSearch', res)
            })
        } catch (error) {
            setLoad(true)
            setError(true)
            setTableDisplay(false)
            console.log(error)
        }
    }


    useEffect(() => {
        if (hookState.stopNumber !== '') {
            const apFetchUrl = `${Metra_Const.apiEndPoint.getbase}${hookState.stopNumber}`
            fetchAPIData(apFetchUrl)
        }

    }, [hookState.stopNumber])

    if(load){
        console.log(hookState.direstionListAfterSearch.length)
        return (
            <>
                {Object.keys(hookState.direstionListAfterSearch).length > 0 && tableDisplay && (
                    <BasicTable values={hookState.direstionListAfterSearch} feature={{ feature: 'textSearch' }} />
                )}
               {error && (
                   <p>{hookState.stopNumber}{' '}{Metra_Const.notValidStopNumber}</p>
               )}
            </>
    
        )
    }
   
    return (
        <Loader />
    )


}

export default TextLoader
