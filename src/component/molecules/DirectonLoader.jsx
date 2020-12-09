/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useContext,useEffect} from 'react'
import Loader from '../atoms/Loader'
import getFetchData from '../../shared/fetachData'
import NativeSelects from '../atoms/PopulateDropDown'
import {TransitContext} from '../../context/TransitContext'
import Metra_Const from '../../shared/constants'
import StopLoader from './StopLoader'

const DirectonLoader = () => {
    const {hookState,updateHookState} = useContext(TransitContext)
    const fetchAPIData = async (apFetchUrl) => {
        try {
            await getFetchData(apFetchUrl).then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not OK')
                }
                return response.json()
            }).then(res => {
                updateHookState('selectedDirection',res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const apFetchUrl=`${Metra_Const.apiEndPoint.getDirection}${hookState.selectedRouteData}`
        fetchAPIData(apFetchUrl)
    }, [hookState.selectedRouteData])

    if(hookState.selectedDirection.length>0){
        return(
            <>
            <NativeSelects value={{feature:'direction'}} />
            {hookState.directionSelected && (
                <StopLoader />
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

export default  DirectonLoader
