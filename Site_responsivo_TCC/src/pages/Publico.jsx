import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'

import styles from "../components/Publico.module.css"

function Publico() {
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
                        <img className="Imglogo" src="../public/logo.png" alt="Logo do projeto aqua"
                            title="Logo do projeto" />
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
                        <img className={styles.container} src="../public/logo.png" alt="Logo do projeto aqua" title="Logo do projeto" />
                    </div>

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
            <main className={styles.main}>

                <div className={styles.textP}>
                    <h1 className={styles.textP}>Integrantes</h1>
                </div>
                <div className={styles.fundo}>
                    <div className={styles.component}>
                        <p className={styles.component}>
                            Nosso grupo é composto
                        </p>
                        <div className={styles.component2}>
                            <a href="https://www.instagram.com/pdrx_tx/">
                                <img className={styles.component1} src="../public/pedro1.jpeg" alt="Menino bunito" title="Pedro Franca 32A" />
                            </a>
                            <a href="https://www.instagram.com//">
                                <img className={styles.component1} src="../public/bianca.jpeg" alt="Menina bunito" title="Bianca Freire32A" />
                            </a>
                            <a href="">
                                <img className={styles.component1} src="../public/arduino.png" alt="Menino bunito" title="Pedro Henrique 32A" />
                            </a>
                    </div>
                </div>
            </div>

        </main >

        </>
    )
}

export default Publico