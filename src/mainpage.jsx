import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import fetchCountries from './fetchCountries'
import LineMdLoadingTwotoneLoop from './LineMdLoadingTwotoneLoop.jsx'
const Main = () => {
    const result = useQuery(['all'], fetchCountries);
    return (
        <div className="main">
            {result.isLoading?<div className="loading"><LineMdLoadingTwotoneLoop/></div>:(
                result.data.map((country) => {
                    return(
                        <div key={country.name.official} className="country-component">
                            <Link to={'/' + country.name.common}>
                                <img src={country.flags.png} alt="" />
                            </Link>
                            <div className="country-component-info">
                            <Link to={'/' + country.name.common}>
                                <h2>{country.name.common}</h2>
                            </Link>
                            
                                <h4>poulation:{country.population}</h4>
                                <h4>region:{country.region} </h4>
                                <h4>Capital:{country.capital}</h4>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
        
    )
}

export default Main;

