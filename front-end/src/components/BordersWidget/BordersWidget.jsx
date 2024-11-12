import CountryItem from "../CountryItem/CountryItem"
import CountryList from "../CountryList/CountryList"

export default function BordersWidget({ bordersList, onCountryClick }) {
    return (
        <div>
            <h3>List of Border Countries</h3>
            <CountryList>
                {bordersList && bordersList.map((country) => (
                    <CountryItem
                        key={country.countryCode}
                        code={country.countryCode}
                        name={country.commonName}
                        onCountryClick={onCountryClick}
                    />
                ))}
            </CountryList>
        </div>
    )
}