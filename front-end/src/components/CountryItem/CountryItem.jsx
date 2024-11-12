import styles from './CountryItem.module.css';

export default function CountryItem({ code, name, onCountryClick }) {
    return (
        <li className={styles.li}>
            <button 
                className={styles.button}
                onClick={(e) => onCountryClick(e.target.value)}
                value={`${code}-${name}`}
            >
                {code} - {name}
            </button>
        </li>
    )
}