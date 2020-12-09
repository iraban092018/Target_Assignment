/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useContext,useEffect} from 'react'
import Loader from '../atoms/Loader'
import getFetchData from '../../shared/fetachData'
import NativeSelects from '../atoms/PopulateDropDown'
import {TransitContext} from '../../context/TransitContext'
import Metra_Const from '../../shared/constants'
import StopDetailsLoader from './StopDetailsLoader'

const StopLoader = () => {
    const {hookState,updateHookState} = useContext(TransitContext)
    const fetchAPIData = async (apFetchUrl) => {
        try {
            await getFetchData(apFetchUrl).then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not OK')
                }
                return response.json()
            }).then(res => {
                updateHookState('selectedStop',res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const apFetchUrl=`${Metra_Const.apiEndPoint.getStops}${hookState.selectedRouteData}/${hookState.selectedDirectionData}`
        fetchAPIData(apFetchUrl)
    }, [hookState.selectedDirectionData])

    if(hookState.selectedStop.length>0){
        return(
            <>
            <NativeSelects value={{feature:'Stop'}} />
            {hookState.stopSelected && (
                <StopDetailsLoader />
            )}
            </>
        )
    }
   return (
        <>
        <Loader />
        </>
    )
}

export default  StopLoader
