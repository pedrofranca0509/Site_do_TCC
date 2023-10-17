import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'

import styles from "../components/Home.module.css"

function Home() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }
        setAbrirMenu(true)

    }
    return (
        <>
        
            <header>
                <div className={styles.mobile}>
                    <div className={styles.menu_logo}>
                        <button onClick={handleAbrirFecharMenu}>
                            {
                                abrirMenu === true ? (
                                    <X size={32} />
                                ) : (
                                    <List size={32} />
                                )
                            }
                        </button>
                        <div className={styles.logoM}>
                    <img src="../public/logo.png" alt="Logo do projeto aqua" title="Logo do projeto" />
                </div>
                    </div>

                    <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                        <nav>
                            <Link className={styles.textOp} to={"/"}>Home</Link>
                            <Link className={styles.textOp} to={"/material"}>Materiais</Link>
                            <Link className={styles.textOp} to={"/objetivo"}>Objetivo</Link>
                            <Link className={styles.textOp} to={"/publico"}>Público Alvo</Link>
                            <Link className={styles.textOp} to={"/usar"}>Como usar</Link>
                        </nav>
                    </div>
                </div>

    

                <div className={styles.desktop}>

                    <div>
                        <nav className={styles.desktop_options}>
                            <Link className={styles.textOp} to={"/"}>Home</Link>
                            <Link className={styles.textOp} to={"/material"}>Materiais</Link>
                            <Link className={styles.textOp} to={"/objetivo"}>Objetivo</Link>
                            <Link className={styles.textOp} to={"/publico"}>Público Alvo</Link>
                            <Link className={styles.textOp} to={"/usar"}>Como usar</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <section>
                <div className={styles.logoMenu}>
                    <img src="../public/logo.png" alt="Logo do projeto aqua" title="Logo do projeto" />
                </div>
            </section>

        </>

    )
}

export default Home