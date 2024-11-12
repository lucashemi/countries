import CountryItem from "../components/CountryItem/CountryItem";
import CountryList from "../components/CountryList/CountryList";

export default function Home({ countries, onCountryClick }) {
    return (
        <div>
            <h1>Countries</h1>
            <p>Click in one country button to get detailed information.</p>
            <CountryList>
                {countries && countries.map((country) => (
                    <CountryItem
                        key={country.countryCode}
                        code={country.countryCode}
                        name={country.name}
                        onCountryClick={onCountryClick}
                    />
                ))}
            </CountryList>
        </div>
    )
}