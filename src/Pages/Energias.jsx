import Navsol from "../components/Navsol";
import Energy from "../assets/images/energy-cover.jpg"
import Fotogif from "../assets/images/spa-renewables-climate.gif"
import Secrenergy from "../assets/images/secre-ener-renov.png"
import Camcli from "../assets/images/camcli.jpg"

const Energias = () => {
    return (
        <>
            <Navsol />
            <div className="pb-4 mb-4"></div>
            <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Energy} />
            </div>
            <main>
                <div className="col-md-8">
                    <h1 className="pb-4 mb-4 bold-italic border-bottom">Energías renovables:<br />
                        energías para un futuro más seguro</h1>

                    <article className="blog-post pb-4 mb-4">

                        <p className="lead">La energía es la base en el problema del cambio climático y también algo fundamental para su solución.</p>

                        <p className="lead">
                            Una gran cantidad de los gases de efecto invernadero que cubren la Tierra y atrapan el calor del Sol se generan debido a la
                            producción de energía, mediante la quema de combustibles fósiles con el objetivo de generar electricidad y calor.
                        </p>

                        <p className="lead">
                            Los combustibles fósiles, como el carbón, el petróleo y el gas, son con diferencia los mayores causantes del cambio climático
                            global, ya que son responsables de más del 75 % del total de emisiones de gases globales de efecto invernadero y cerca del
                            90 % de todas las emisiones en dióxido de carbono.
                        </p>
                        <p className="lead">
                            La ciencia lo indica claramente: para evitar los impactos más negativos del cambio climático, es necesario reducir las emisiones
                            a casi la mitad en 2030 y alcanzar el cero neto en el año 2050.
                        </p>
                        <p className="lead">
                            Para lograrlo, necesitamos dejar de depender de los combustibles fósiles e invertir en fuentes de energía alternativas que sean limpias,
                            accesibles, asequibles, sostenibles y fiables.
                        </p>
                        <p className="lead">
                            Las fuentes de energías renovables, que se encuentran en abundancia en nuestro entorno, ya sean aportadas por el Sol, el viento, el agua,
                            los residuos o el mismo calor de la Tierra, son renovadas por la propia naturaleza y emiten pocos (o ninguno) contaminantes o gases de
                            efecto invernadero en el aire.
                        </p>
                        <p className="lead">
                            Los combustibles fósiles dan cuenta todavía de más del 80 % de la producción de energía en todo el mundo, aunque las fuentes de energía más
                            limpias cada vez ganan más fuerza. Cerca del 29 % de la electricidad proviene actualmente de fuentes de energía renovables.
                        </p>
                        <p className="lead">
                            A continuación, se indican cinco motivos por los que acelerar el ritmo hacia una transición a energías limpias prepara el camino hacia un planeta
                            con un estado más sano y habitable, tanto hoy en día como para las generaciones venideras.
                        </p>
                    </article>

                    <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Fotogif} height={349} width={621} />
                    </div>
                    <div className="pb-4 mb-4"></div>

                    <article className="blog-post pb-4 mb-4">
                        <h3 className="bold-italic">1. Las energías renovables están a nuestro alrededor</h3>
                        <p>
                            Cerca del 80 % de la población mundial vive en países que son importadores netos de combustibles fósiles, lo que supone aproximadamente 6000 millones
                            de personas dependientes de los combustibles fósiles con origen en otros países, lo cual les hace vulnerables, tanto a crisis como a impactos
                            geopolíticos.
                        </p>
                        <p className="pb-4 mb-4">
                            Por contra, en todos los países hay fuentes de energías renovables, cuyo potencial todavía no se ha aprovechado completamente. La Agencia Internacional de
                            Energías Renovables (o IRENA, por sus siglas en inglés) calcula que el 90 % de la electricidad mundial puede, y debe, tener su origen en las energías
                            renovables para el año 2050.
                        </p>
                        <h3 className="bold-italic">2. Las energías renovables son más baratas</h3>
                        <p>
                            Actualmente, las energías renovables suponen, en realidad, la opción más asequible en la mayor parte del mundo. Los precios en tecnología para las energías
                            renovables disminuyen con rapidez. El coste de la electricidad proveniente de la energía solar cayó alrededor del 85 % entre los años 2010 y 2020. Los costes
                            relacionados con la energía eólica con ubicaciones en tierra y en alta mar bajaron cerca de un 56 % y un 48 %, respectivamente.
                        </p>
                        <p className="pb-4 mb-4">
                            En 2030, la electricidad más económica con su origen en fuentes renovables podría aportar el 65 % de todo el suministro de energía eléctrica a escala mundial.
                            Y para el año 2050, podría llegarse a descarbonizar el 90 % del sector energético, lo que supondría un recorte masivo de las emisiones de carbono y ayudaría
                            a mitigar los efectos del cambio climático.
                        </p>
                        <h3 className="bold-italic">3. Las energías renovables son más sanas</h3>
                        <p>
                            De acuerdo con la Organización Mundial de Salud (OMS), cerca del 99 % de las personas del planeta respiran un aire que no llega a los límites de calidad adecuados
                            y esto pone en peligro su salud. Asimismo, cada año se registran más de 13 millones de muertes en todo el mundo provocadas por entornos medioambientales evitables,
                            como la contaminación del aire.
                        </p>
                        <p className="pb-4 mb-4">
                            Los niveles perjudiciales de materiales en forma de pequeñas partículas y dióxido de nitrógeno se originan principalmente a partir de la quema de combustibles fósiles.
                            En 2018, la contaminación provocada por los carburantes fósiles originó un gasto económico y en salud que ascendió a 2,9 trillones de USD, alrededor de 8000 millones
                            de USD diarios.
                        </p>
                    </article>
                </div>

                <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Secrenergy} />
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
export default Energias;