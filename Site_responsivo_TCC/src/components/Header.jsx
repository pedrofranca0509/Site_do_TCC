import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

import styles from "./Header.module.css"

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }
        setAbrirMenu(true)

    }
    return (
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
                    <h1>Logo</h1>
                </div>

                <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                    <nav>
                        <a href="">Home</a>
                        <a href="">Materiais</a>
                        <a href="">Objetivo</a>
                        <a href="">Montagem</a>
                        <a href="">Como usar</a>
                    </nav>
                </div>
            </div>

            <div className={styles.desktop}>

                <div>
                    <h1>Logo</h1>
                </div>

                <div>
                    <nav className={styles.desktop_options}>
                        <a href="">Home</a>
                        <a href="">Materiais</a>
                        <a href="">Objetivo</a>
                        <a href="">Montagem</a>
                        <a href="">Como usar</a>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header