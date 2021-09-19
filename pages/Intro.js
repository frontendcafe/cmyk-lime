import styles from '../styles/Intro.module.css';
import { motion, useCycle, AnimatePresence } from 'framer-motion';


import { Splash } from "/components/01_Splash";
import { Hola } from "/components/03_Hola.js";
import { SiJuegas } from "/components/02_SiJuegas.js";
import { MuchasCosas } from "/components/04_MuchasCosas.js";



 // Cada vez que tengo que esperar un input del usuario tendre que crear una funcion changeState dentro de 
 //estas funciones e ir cambiando el estado apropiadamente usando delays y esperando a las animaciones 
 //hasta que llegue a un estado en el que tenga que esperar input del usuario
     

//orquestador:
export default function IntroComponent(){
    const [state, setState] = useCycle("1", "2","3", "4",
                                        "5", "6", "7");
    var circle02Rotation = [0,0]
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const fromCircle01UntilCircle03 = async () => { // me han hecho click cuando estoy en circle01! 
        setState() // 1 -> 2
        await delay(6000)
        console.log("6") // espero 6 segundos a la animacion de salida de circle01
        setState() // 2 -> 3
        await delay(200)
        await delay(5000) 
        console.log("5")   // espero 5 segundos a la animacion de entrada de circle02
        setState() // 3 -> 4 
        await delay(500)
        console.log("0.5")  // espero 0.5 segundos a la animacion de salida de circle02
        setState()// 4 -> 5 y espero a que me vuelvan a hacer click
    }
    const fromCircle03UntilCircle07 =  async () => { // me han hecho click cuando estoy en circle03!
        setState() // 5 -> 6
        await delay(300)
        setState() // 6 -> 7
    }
   return (
        <motion.main className={styles.container}>
            <div className={styles.circle_container}>
                <AnimatePresence>
                    {state == "1" && (<Circle01 onclick={()=>fromCircle01UntilCircle03()}/>)}
                </AnimatePresence> 
                <AnimatePresence>
                    {state == "3" && (<Circle02  />)}
                </AnimatePresence>
                    <AnimatePresence>
                    {state == "5" && (<Circle03 onclick={()=>fromCircle03UntilCircle07()} />)}
                </AnimatePresence>
                <AnimatePresence>
                    {state == "7" && (<Circle04 />)}
                </AnimatePresence> 
            </div>    
        </motion.main>
)};    
    
     const Circle01 = ({ onclick }) => {
     return(
         <>
            <motion.p className={styles.text_circle01}
                    initial={{y: "-10vh", delay: 5, opacity: 0}}  
                    animate={{y: 1, duration: 3, opacity : 1, transition : { delay: 3, duration: 2, ease: "easeInOut"}}} 
                    exit={{y: "-20vh", duration: 4, opacity : 0,transition : { delay: 1, duration: 2, ease: "easeInOut" }}}
                    >
                        Hola, soy un punto
                </motion.p>
                <motion.div className={styles.circle01}
                    initial={{ opacity : 0.3, scale:1.1 }}  
                    animate={{ scale:1.2, opacity: 1, transition: { repeatType:"reverse", ease: 'easeInOut', duration: 1, repeat: Infinity }}}  
                    exit={{ y: 100, transition: { delay: 3, duration: 2 }}}
                    >
                    <Splash onClick={onclick} className={styles.click} />
                </motion.div>
            </>
     )
 }
const Circle02 = ({}) => {
    return(
        <>
            <motion.div className={styles.circle02}
                initial={{y: "100vh", scale: 0}}
                animate={{y: 1, scale: 1, rotate:[0, 0, 0, 360, 0, 360, 0], transition:{ duration: 1, ease:"easeInOut" }}}
                exit={{opacity: 1, scale: 0.1, opacity: 0, duration: 3 }}
            >
                <Hola className={styles.circle02}/>
                
            </motion.div>
            <motion.p className={styles.text_circle02}
            >
                Hola, soy un punto</motion.p>
        </>
    )
}
 const Circle03 = ({ onclick }) => {
     return(
         <>
             <motion.div className={styles.circle03}
               initial={{rotate: [360], scale: 0, duration: 0.5 }}
                animate={{ scale: 1, transition:{ duration: 1, ease:"easeInOut" }}}
                exit={{ opacity: 0, duration: 0.5 }}
                >
                <SiJuegas onClick={onclick} className={styles.click}/>
            </motion.div> 
            
             <motion.p className={styles.text_circle03}
              initial={{ opacity: 0, delay: 2 }}
              animate={{ opacity: 1 }}
              exit={{transition:{ opacity : 0, delay: 1 }}}
            >
                Si juegas conmigo...</motion.p>
         </>
     )
 }      
const Circle04 = () => {
     return(
        <>
            <motion.div className={styles.circle04}
               animate={{ rotate: [360, 0, 360, 0, 360, 0, 360, 0 ]}}
               transition={{
                   type: "spring",
                   damping: 10,
                   mass: 0.75,
                   stiffness: 100,
               }}
                >
                <MuchasCosas  className={styles.start}/>
            </motion.div>
            <motion.p className={styles.text_circle04}
                initial={{ opacity: 0, delay: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 1, duration: 10 }}}
                >
                    ¡muchas cosas puden pasar!</motion.p>
        </>
    )
 }      
