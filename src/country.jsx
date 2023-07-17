import { useParams,Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCountries from "./fetchCountries";
import LineMdLoadingTwotoneLoop from './LineMdLoadingTwotoneLoop.jsx'
import LineMdArrowLeft from './LineMdArrowLeft'

const Country = () => {
    const {countryName} = useParams()
    const result = useQuery(['country',countryName],fetchCountries)
    const country = result.data
    console.log(country)
    return(
        <div className="country">
            <div className="back-btn">
            <Link to='/'><LineMdArrowLeft/> Back</Link>
            </div>
            {result.isLoading?<LineMdLoadingTwotoneLoop className='load-country'/> :
                <div className="country-info">
                    <div className="flag">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="info">

                        <h4>native name:{country.name.common}</h4>
                         <h4>sub region:{country.subregion} </h4>
                        <h4>population:{country.population}</h4>
                        <h4>region:{country.region} </h4>
                        <h4>Capital:{country.capital}</h4>
                    </div>
                    <h4>Top level domain:{country.tld}</h4>

                </div>
            }
        </div>
    )
}
export default Country;