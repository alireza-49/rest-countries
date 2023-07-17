const fetchCountries = async ({queryKey}) => {
    if (queryKey[0] == 'all'){
        const res = await fetch('https://restcountries.com/v3.1/all')
        if (!res.ok){
            throw new Error('fetch went wrong')
        }
        const json = await res.json()
        return json
    }
    const name = queryKey[1]
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    if (!res.ok){
        throw new Error('fetch went wrong')
    }
    const json = await res.json()
    return json[0]


}

export default fetchCountries;