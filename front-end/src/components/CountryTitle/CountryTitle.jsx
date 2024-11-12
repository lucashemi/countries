import styles from './CountryTitle.module.css';

export default function CountryTitle({ name, url, handleGoHome }) {
    return (
        <span className={styles.span}>
            <button onClick={handleGoHome}>&larr; Go Back</button>
            <h1>{name}</h1>
            <div className={styles.imgbox}>
                <img className={styles.img} src={url} alt={`${name}'s flag`} />
            </div>
        </span>
    )
}