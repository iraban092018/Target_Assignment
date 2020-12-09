/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useContext,useEffect} from 'react'
import Loader from '../atoms/Loader'
import getFetchData from '../../shared/fetachData'
import {TransitContext} from '../../context/TransitContext'
import Metra_Const from '../../shared/constants'
import BasicTable from '../atoms/Table'

const StopDetailsLoader = () => {
    const {hookState,updateHookState} = useContext(TransitContext)
    const fetchAPIData = async (apFetchUrl) => {
        try {
            await getFetchData(apFetchUrl).then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not OK')
                }
                return response.json()
            }).then(res => {
                updateHookState('stopDetails',res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const apFetchUrl=`${Metra_Const.apiEndPoint.getbase}${hookState.selectedRouteData}/${hookState.selectedDirectionData}/${hookState.setSelectedStop}`
        fetchAPIData(apFetchUrl)
    }, [hookState.setSelectedStop])

    if(Object.keys(hookState.stopDetails).length>0){
        return(
            <BasicTable values={hookState.stopDetails} feature={{feature:'dropdownSearch'}}/>
        )
    }
   return (
        <>
        <Loader />
        </>
    )
}

export default  StopDetailsLoader