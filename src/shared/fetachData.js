const getFetchData = (apiFetchUrl) => {
    return fetch(apiFetchUrl,{
        method:'GET'
    })
}

export default getFetchData