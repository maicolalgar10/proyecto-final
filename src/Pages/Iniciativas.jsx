import Navsol from "../components/Navsol";
import Iniciat from "../assets/images/coalitions-hero.jpg"
import Energy1 from "../assets/images/energy01.png"
import Industry1 from "../assets/images/industry01.png"
import Nature1 from "../assets/images/nature01.png"
import Camcli from "../assets/images/camcli.jpg"

const Iniciativas = () => {
    return (
        <>
            <Navsol />
            <div className="pb-4 mb-4"></div>
            <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Iniciat} />
            </div>
            <div className="pb-4 mb-4">
                <span>Las coaliciones para la acción por el clima trabajan en todo el mundo para
                    reducir las emisiones, buscar soluciones basadas en la naturaleza, ampliar la energía sostenible e
                    invertir en ciudades resilientes, entre otras muchas iniciativas. ONU</span>
            </div>

            <main>
                <div className="col-md-8">
                    <h1 className="pb-4 mb-4 bold-italic border-bottom"><b>Iniciativas para la acción climática</b></h1>
                    <p className="lead pb-4 mb-4">
                        Los gobiernos, las empresas y los miembros de la sociedad civil suman sus fuerzas en iniciativas climáticas para acelerar
                        el ritmo de la acción por el clima. Las iniciativas, que se iniciaron en la Cumbre sobre la Acción Climática de 2019 que
                        se celebró en la sede de las Naciones Unidas, en Nueva York, están reduciendo las emisiones, abordando aspectos fundamentales,
                        como el empleo y la igualdad de género, desbloqueando la financiación, construyendo infraestructuras sostenibles, utilizando
                        soluciones basadas en la naturaleza y avanzando en la adaptación y la resiliencia climática.
                    </p>
                    <p className="lead pb-4 mb-4">
                        El papel de las Naciones Unidas como convocante es más necesario que nunca para animar a la gente a colaborar, ser ambiciosa
                        y tomar las medidas necesarias para limitar el aumento de la temperatura global a no más de 1,5 grados centígrados. Las Naciones
                        Unidas también apoyan la transición hacia una economía sostenible y baja en emisiones de carbono, que sea justa y
                        beneficiosa para todos.
                    </p>
                </div>
                <div className="pb-4 mb-4"></div>
                <h2 className="pb-4 mb-4 bold-italic"><b>Ejemplos de iniciativas de Acción por el Clima</b></h2>
                <div className="pb-4 mb-4"></div>

                <div className="accordion">
                    <div className="accordion-item row g-5">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <img src={Energy1} height={80} width={80} />
                                <h2 className="px-4 mx-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><b>Energía</b></h2>
                            </button>

                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body pb-4 mb-4">
                                <strong>Acelerar la transición a las energías renovables en los PEID:</strong> treinta y seis pequeños Estados insulares en desarrollo y sus socios se han reunido para compartir estrategias e impulsar la transición hacia sistemas energéticos renovables y resilientes.
                            </div>
                            <div className="accordion-body pb-4 mb-4">
                                <strong>La Alianza Mundial para la Eficiencia Energética:</strong> La alianza, una coalición de líderes gubernamentales, empresariales y no gubernamentales, defiende la aceleración de la eficiencia energética y ayuda a los países a preparar hojas de ruta para impulsar la eficiencia. El Club del Tres por Ciento establece un objetivo de mejora anual en eficiencia energética del 3 %.
                            </div>
                            <div className="accordion-body">
                                <strong>Impulsando la Alianza del Carbón:</strong> La alianza, una coalición de líderes gubernamentales, empresariales y no gubernamentales, defiende la aceleración de la eficiencia energética y ayuda a los países a preparar hojas de ruta para impulsar la eficiencia. El Club del Tres por Ciento establece un objetivo de mejora anual en eficiencia energética del 3 %.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <img src={Industry1} height={80} width={80} />
                                <h2 className="px-4 mx-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><b>Industria y Transporte</b></h2>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body pb-4 mb-4">
                                <strong>Acción hacia un transporte respetuoso con el clima:</strong> más de 100 organizaciones han forjado la mayor coalición de la historia dedicada a que todas las formas de transporte alcancen las cero emisiones. Investiga cuestiones como el acceso a las zonas rurales y cómo hacer que la economía de la descarbonización funcione. Un curso en línea ayuda a los líderes urbanos a desarrollar soluciones de movilidad urbana sostenible.
                            </div>
                            <div className="accordion-body pb-4 mb-4">
                                <strong>Descarbonizar el transporte: Coalición para llegar a cero:</strong> La coalición, una poderosa alianza de más de 150 empresas marítimas, energéticas, de infraestructuras y financieras, tiene un objetivo ambicioso: la viabilidad comercial de los buques transoceánicos con cero emisiones para 2030.
                            </div>
                            <div className="accordion-body">
                                <strong>Grupo de liderazgo en la transición de la industria:</strong> con el objetivo de que las emisiones de carbono de la industria se eliminen en 2050, la iniciativa ha creado grupos industriales y ha elaborado hojas de ruta para las industrias pesadas, en las que es difícil reducir las emisiones de carbono. Su rastreador muestra el perfil de transición de las industrias en diversos países.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <img src={Nature1} height={80} width={80} />
                                <h2 className="px-4 mx-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><b>Soluciones Basadas en la Naturaleza</b></h2>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body pb-4 mb-4">
                                <strong>Campaña por la naturaleza:</strong> esta floreciente coalición de más de 100 organizaciones ecologistas pide a los responsables políticos que se comprometan con un nuevo acuerdo, ambicioso y basado en la ciencia, para la naturaleza. Su objetivo es la protección de al menos el 30 % del planeta para 2030, con el apoyo de recursos financieros suficientes y la plena realización del liderazgo y los derechos indígenas.
                            </div>
                            <div className="accordion-body">
                                <strong>Ocean Risk and Resilience Action Alliance Alianza para la acción resiliente a los riesgos Oceánicos:</strong> esta alianza pone en contacto a gobiernos, instituciones financieras, el sector de los seguros, organizaciones medioambientales y actores de Sur Global para aumentar la resiliencia ante los riesgos oceánicos. Es pionera en productos de financiación y seguros destinados a incentivar una inversión de 500 millones de USD en soluciones basadas en la naturaleza para 2030.
                            </div>
                        </div>
                    </div>
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
export default Iniciativas;