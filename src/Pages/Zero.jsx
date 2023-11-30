import Navsol from "../components/Navsol";
import Video from "../multimedia/emicioneszero.mp4"
import Emisi from "../assets/images/emisiones-45.jpg"
import Emisiones from "../assets/images/efecto-invernadero.jpg"
import Secretario from "../assets/images/Secretario.png"
import Camcli from "../assets/images/camcli.jpg"

const Zero = () => {
    return (
        <>
            <Navsol />
            <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video controls width="854" height="480">
                    <source src={Video} />
                </video>
            </div>
            <main>
                <div className="col-md-8">
                    <h1 className="pb-4 mb-4 bold-italic border-bottom">Llegar a las emisiones netas cero: <br /> el mundo se compromete a tomar medidas</h1>

                    <article className="blog-post">
                        <h4 className="bold-italic">¿Qué indica el "cero neto"?</h4>
                        <p className="pb-4 mb-4">Dicho de forma sencilla, el "cero neto" signifa recortar las emisiones de gases de efecto invernadero hasta dejarlas lo más cerca posible a las emisiones nulas,
                            con algunas emisiones residuales que sean reabsorbidas en la atmósfera, por el océano y los bosques, por ejemplo.</p>
                        <h4 className="bold-italic">¿Por qué es tan importante el "cero neto"?</h4>
                        <p className="pb-4 mb-4">
                            La ciencia ha demostrado claramente que a fin de evitar los peores efectos del cambio climático y para conservar un planeta habitable,
                            el aumento global de la temperatura necesita limitarse a no más de 1,5 °C por encima de los niveles preindustriales. En la actualidad,
                            la Tierra ya tiene un calentamiento superior al 1,1 °C en comparación a finales del siglo XIX, y las emisiones continúan yendo al alza.
                            Para mantener el calentamiento global por debajo de 1,5 °C, tal como se exige en el Acuerdo de París, es necesario que las emisiones
                            se reduzcan alrededor del 45 % para 2030 y que se alcance el cero neto hacia 2050.
                        </p>
                        <h4 className="bold-italic">¿Cómo puede alcanzarse el cero neto?</h4>
                        <p className="pb-4 mb-4">
                            La transición a un mundo con cero emisiones supone uno de los mayores retos a los que se ha enfrentado la humanidad. Nos exige, ni más ni menos,
                            que se produzca una completa transformación del modo de producir, consumir y trasladarnos. El sector energético constituye la fuente de cerca de
                            tres cuartos de las emisiones de gases de efecto invernadero en la actualidad y encierra la clave para evitar los peores efectos del cambio climático.
                            La sustitución de generadores de contaminación, como la producción de energía mediante el carbón, el petróleo o el gas, por fuentes de energía renovables,
                            como la energía solar o eólica, reducirían drásticamente las emisiones de carbono.
                        </p>
                    </article>
                </div>

                <div className="container my-5">
                    <div className="bg-body-tertiary p-5 rounded">
                        <div className="col-sm-8 py-5 mx-auto">
                            <h3 className="pb-4 mb-4 bold-italic border-bottom">Los planes nacionales actuales se han quedado cortos</h3>
                            <div className="row featurette">
                                <div className="col-md-6">
                                    <img src={Emisi} height={350} width={325} />
                                </div>
                                <div className="col-md-6">
                                    <img src={Emisiones} height={350} width={325} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Secretario} />
                </div>

                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                                <img src={Camcli} height={60} width={60} className="rounded" />
                            </a>
                            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Climate Change, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg></a></li>
                            <li className="ms-3"><a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                            </svg></a></li>
                            <li className="ms-3"><a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg></a></li>
                        </ul>
                    </footer>
                </div>
            </main>

        </>
    )
}
export default Zero;