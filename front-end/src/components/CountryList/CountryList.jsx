import styles from './CountryList.module.css';

export default function CountryList({ children }) {
    return (
        <ul className={styles.ul}>{children}</ul>
    )
}