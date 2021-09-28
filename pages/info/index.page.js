import styles from './info.module.css';

function Info() {
    return (
        <div className={styles.body}>
            <h1 className={styles.h1}>Info para Padres</h1>
            <h2 className={styles.h2}>INFORMACION IMPORTANTE</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio justo, congue a tortor tincidunt, euismod placerat sem. Ut commodo fermentum ex ac semper. Nunc ac cursus mi, non condimentum est. Phasellus purus eros, tincidunt et est sed, egestas lacinia nunc. Donec volutpat urna eu ante vulputate hendrerit a sed turpis. Aenean blandit ut orci lacinia tincidunt. Morbi efficitur viverra molestie. Nam ullamcorper lectus felis, auctor faucibus velit eleifend non. Cras auctor ligula sit amet nisi porta placerat. Nunc libero ligula, sollicitudin eu ante a, ultrices semper turpis. Sed ac mattis augue. Nunc lobortis, neque eget pellentesque ornare, erat orci sodales erat, vel mattis turpis sem sed lectus.</p>

        </div>
    )
}

export default Info;