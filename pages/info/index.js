import Head from 'next/head';

const styles = {
    h1: {
        fontFamily: 'Amatic SC',
        fontStyle: 'cursive'
    },
    h2: {
        fontFamily: 'Amatic SC',
        fontStyle: 'cursive'
    },
    paragraph: {
        fontFamily: 'Roboto',
        fontStyle: 'normal'
    }
}

export default function Info() {
    return (
        <div>
            <h1 style={styles.h1}>Info para padres</h1>
            <h2 style={styles.h2}>INFORMACION IMPORTANTE</h2>
            <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel. Magna fringilla urna porttitor rhoncus dolor purus non enim. Sagittis aliquam malesuada bibendum arcu. Enim ut sem viverra aliquet eget sit amet tellus. Ut aliquam purus sit amet luctus venenatis lectus. Volutpat diam ut venenatis tellus in metus. Sem viverra aliquet eget sit amet. Aliquam ut porttitor leo a diam sollicitudin. Sed vulputate odio ut enim blandit volutpat. Non sodales neque sodales ut etiam. Justo donec enim diam vulputate ut pharetra sit amet. </p>

        </div>
    )
}