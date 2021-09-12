import React from "react";
import LineOne from '../../components/LineOne';
import { motion } from "framer-motion";
import styles from '../../styles/Page-9.module.css';
import FaceSmile from "../../components/FaceSmile";
import CircleOne from "../../components/CircleOne";
import CircleFaceSmile from "../../components/CircleFaceSmile";


const PageNine = () => {
    return (
        <div className={styles.bodypagenine}>
            <div className={styles.lineone}>
            <LineOne />
            </div>
            <div className={styles.circlefacesmile}>
                <CircleFaceSmile />
            </div>
            {/*<div className={styles.facesmile}>
            <FaceSmile />
            </div> */}
            {/* <div className={styles.circleone}>
            <CircleOne />
            </div>  */}
            <h1 className={styles.h1}>MOVERME A LA IZQUIERDA</h1>
        </div>
    )
};




export default PageNine;