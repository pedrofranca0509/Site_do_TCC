import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom';

import styles from "../components/Usar.module.css"

function Usar() {
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
                        <img className="Img_logo" src="../public/logo.png" alt="Logo do projeto aqua" title="Logo do projeto" />
                    </div>

                    <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                        <nav>
                            <Link className={styles.textOp} to={"/"}>Home</Link>
                            <Link className={styles.textOp} to={"/material"}>Materiais</Link>
                            <Link className={styles.textOp} to={"/objetivo"}>Objetivo</Link>
                            <Link className={styles.textOp} to={"/publico"}>Integrantes</Link>
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
                            <Link className={styles.textOp} to={"/publico"}>Integrantes</Link>
                            <Link className={styles.textOp} to={"/usar"}>Como usar</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <body>
                <main className={styles.main}>
                    <div className={styles.textP}>
                        <h1 className={styles.textP} >Como Usar</h1>
                    </div>

                    <div className={styles.fundo}>

                        <div className={styles.component}>
                            <p className={styles.component}>
                                O uso é bem didático. Para fazer funcionar depois de já montado basta colocar o sensor de umidade na terra do seu vaso e como foi definido no código, quando o sensor identificar que a terra não está úmida o suficiente vai liberar água da válvula solenóide para que umidifique o solo.
                            </p>
                        </div>
                    </div>

                    <div className={styles.video}>

                        <iframe width="853" height="480" src="https://www.youtube.com/embed/BDwgDO3MgDs" title="Faça um Controle de Irrigação Inteligente com Arduino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>


                </main>
            </body>

        </>

    )
}

export default Usar