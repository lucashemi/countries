import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const baseUrlNager = process.env.BASE_URL_NAGER || 'https://date.nager.at/api/v3';
const baseUrlCountriesNow = process.env.BASE_URL_COUNTRIES_NOW || 'https://countriesnow.space/api/v0.1';

const getCountries = async (_req, res) => {
    try {
        const url = `${baseUrlNager}/AvailableCountries`;
        const { data: countryList } = await axios.get(url);

        return res.status(200).send({ countryList });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An internal error ocurred.' });
    }
}

const getCountry = async (req, res) => {
    try {
        const { country } = req.params; // BR

        // Border countries
        const countryInfoUrl = `${baseUrlNager}/CountryInfo/${country}`;
        const { data: countryInfoData } = await axios.get(countryInfoUrl);

        const borderCountries = countryInfoData.borders;

        // Country population
        const countryPopulationUrl = `${baseUrlCountriesNow}/countries/population`;
        const { data: countryPopulationData } = await axios.post(countryPopulationUrl, {
                "country": countryInfoData.commonName // Brazil
        });

        const countryPopulation = countryPopulationData.data.populationCounts;

        // Country flag
        const countryFlagUrl = `${baseUrlCountriesNow}/countries/flag/images`;
        const { data: countryFlagData } = await axios.post(countryFlagUrl, {
            "iso2": country // BR
        })

        const countryFlag = countryFlagData.data.flag;

        return res.status(200).send({ borderCountries, countryPopulation, countryFlag });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An internal error ocurred.' });
    }
}

export { getCountries, getCountry };