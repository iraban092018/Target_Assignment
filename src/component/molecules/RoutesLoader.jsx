/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react'
import Loader from '../atoms/Loader'
import getFetchData from '../../shared/fetachData'
import NativeSelects from '../atoms/PopulateDropDown'
import { TransitContext } from '../../context/TransitContext'
import DirectonLoader from './DirectonLoader'
import Metra_Const from '../../shared/constants'
import TextLoader from './TextLoader'
import BasicTextFields from '../atoms/BasicTextFields'


const RoutesLoader = () => {
    const { hookState, updateHookState } = useContext(TransitContext)

    const fetchAPIData = async (apiFetchUrl) => {
        try {
            await getFetchData(apiFetchUrl).then(response => {
                if (!response.ok) {
                    throw new Error('Network response is not OK')
                }
                return response.json()
            }).then(res => {
                updateHookState('routeList', res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const apiFetchUrl = Metra_Const.apiEndPoint.getRoutes
        fetchAPIData(apiFetchUrl)
    }, [])

   

    if (hookState.routeList.length > 0) {
        return (
            <>
                {hookState.showRouteField && (
                    <>
                        <NativeSelects value={{ feature: 'routes' }} />
                        {hookState.routeSelected && (
                            <DirectonLoader />
                        )}
                    </>
                )}
                {hookState.showTextFiled && (
                    <>
                        <BasicTextFields />
                        {hookState.fetchDetailsForStop && (<TextLoader />
                    )}
                    </>
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

export default RoutesLoader
