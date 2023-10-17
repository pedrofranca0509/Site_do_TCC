import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'



import styles from "../components/Material.module.css"


function Material() {
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
                    <h1 className={styles.textP}>Materiais Utilizados</h1>
                </div>


                <div className={styles.fundo}>

                    <div className={styles.component}>
                        <div>
                            <img className={styles.component1} src="../public/arduino.png" alt="" title="" />
                            <p className={styles.component}> -1 Arduino Uno R3 + Cabo USB;
                                Carregar os códigos e fazer as suas conexões
                            </p>
                        </div>

                        <div>
                            <img src="../public/sensor.png" alt="" title="" />
                            <p className={styles.component}>-1 Sensor de Umidade de Solo para Arduíno;
                                Irá ver quão úmido o solo está.
                            </p>
                        </div>

                        <div>
                            <img src="../public/protoboard.png" alt="" title=""/>
                            <p className={styles.component}>-1 Protoboard;
                                Ajudar nas conexões e para ficar
                                mais organizado as partes dos
                                fios.
                            </p>
                        </div>


                        <div>
                            <img src="../public/lcd.png" alt="" />
                            <p className={styles.component}>-1 Display LCD (opcional);
                                Vai mostrar a porcentagem de
                                umidade de acordo com o sensor.
                            </p>
                        </div>

                        <div>
                            <img src="../public/mangueira.png" alt="" />
                            <p className={styles.component}>-50 cm de mangueira;
                                Vai ser por onde a água vai ser conduzida.
                            </p>
                        </div>

                        <div>
                            <p className={styles.component}>-1 Relé (opcional);
                                é um equipamento eletrônico que permite a abertura
                                e fechamento de um circuito elétrico, ou seja, pode
                                bloquear ou não o fluxo de corrente elétrica.
                            </p>
                        </div>

                        <div>
                            <p className={styles.component}>-1 Bomba de aquario;
                                Vai ser essencial na pressão da agua.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <carrosel/>
                </div>

            </main>
        </>
    )
}
export default Material