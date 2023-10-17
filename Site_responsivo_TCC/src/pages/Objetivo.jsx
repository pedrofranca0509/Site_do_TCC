import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom';

import styles from "../components/Objetivo.module.css"

function Objetivo() {
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
                    <h1 className={styles.textP}>Nosso objetivo e Publico alvo</h1>
                </div>
                <div className={styles.fundo}>

                    <div className={styles.component}>
                        <p className={styles.component}>
                            O objetivo do nosso projeto é trazer mais praticidade para as pessoas, principalmente para as que trabalham muito e acabam não tendo muito tempo para tarefas de casa. O nosso irrigador automático ajudará bastante essas pessoas, ja que o único trabalho será reasbastecer o reservatório de.
                        </p>
                        
                        <p className={styles.component}>
                            Nosso público é destinado a pessoas já adultas, por conta de ser algo muito complelaborado, uma criança não entenderia com funciona.
                        </p>

                    </div>

                </div>
            </main>

        </>

    )
}

export default Objetivo