'use client'
import Zoom from "../components/zoom";
import styles from "./page.module.css";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    },[])

    return (
        <main className={styles.main}>
            <Zoom />
        </main>
    )
}