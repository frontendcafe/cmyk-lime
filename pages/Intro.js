import Link from "next/link";
import styles from '../styles/Intro.module.css';
import { motion } from 'framer-motion';

import { Circle } from "/components/00_IntroCircle";
import { Smile } from "/components/01_IntroSmile.js";
import { Tongue } from "/components/02_IntroTongue.js";
import { Star } from "/components/03_IntroStar.js";

export default function IntroComponent(){
    return (
        <main className={styles.main}>
            <div className={styles.containerIntro}>
                <Link href="/">
                    <a><Circle></Circle></a>
                </Link>
                <h1 className={styles.text}>Hola, soy un punto</h1>
                <Star></Star>
                <Smile></Smile>
                <Tongue></Tongue>
            </div>
        </main>
        
        
)};

const Circle01 = ()=>{
    return(<>
        </>
        )
    
}
const Smile01 = ()=>{
    return(<>
        </>
        )
    
}
const Star01 = ()=>{
    return(<>
        </>
        )
    
}
const Tongue01 = ()=>{
    return(<>
        </>
        )
    
}

