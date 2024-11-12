import BordersWidget from "../components/BordersWidget/BordersWidget"
import CountryTitle from "../components/CountryTitle/CountryTitle"
import LinePopulationChart from "../components/LinePopulationChart/LinePopulationChart"

export default function Country({ country, onCountryClick, handleGoHome }) {
    return (
        <div>
            <CountryTitle
                name={country.name}
                url={country.data.countryFlag}
                handleGoHome={handleGoHome}
            />
            <BordersWidget
                bordersList={country.data.borderCountries}
                onCountryClick={onCountryClick}
            />
            <LinePopulationChart populationData={country.data.countryPopulation} />
        </div>
    )
}