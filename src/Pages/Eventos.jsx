import Cop28 from "../assets/images/cop28.jpg"
import Cumbre from "../assets/images/ambicion-climatica.svg"
import Conferen from "../assets/images/conferencias.png"
import Camcli from "../assets/images/camcli.jpg"

const Eventos = () => {
    return (
        <main>
            <div className="pb-4 mb-4"></div>

            <div className="row featurette pb-4 mb-4 bold-italic border-bottom">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1 border-bottom pb-4 mb-4"><b>COP28: La acción por el clima no puede <br /> esperar</b></h2>
                    <p className="lead">La COP28, la conferencia sobre el cambio climático de la ONU de este año, es una oportunidad
                        crucial para tomar el rumbo correcto y acelerar la acción para afrontar la crisis climática, teniendo en cuenta
                        los récords de las temperaturas a nivel mundial y los fenómenos temporales extremos que afectan a la población
                        del planeta. En esta, el mundo hará balance del progreso establecido por el Acuerdo de París (tratado climático
                        histórico firmado en 2015) y trazará el plan de acción para reducir las emisiones de forma drástica y proteger
                        vidas y sustentos.
                    </p>

                    <p className="lead">La ciencia es clara: para mantener un clima soportable, se debe reducir cuanto antes la producción
                        de carbón, petróleo y gas y triplicar la capacidad de energía renovable (eólica, solar, hidráulica y geotérmica) para
                        el año 2030. Al mismo tiempo, se requiere de un aumento sustancial de la financiación para la adaptación e inversión
                        en resiliencia climática. La COP28 reúne a líderes de gobiernos, negocios, ONG y sociedad civil para alcanzar soluciones
                        concretas a una problemática decisiva actual.</p>
                </div>
                <div className="col-md-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Cop28} height={300} width={536} />
                </div>
            </div>

            <div className="row featurette pb-4 mb-4 bold-italic border-bottom">
                <div className="col-md-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Cumbre} height={300} width={536} />
                </div>
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1"><b>Cumbre sobre la Ambición Climática</b></h2>
                    <h3 className="featurette-heading fw-normal lh-1 border-bottom pb-4 mb-4"><b>20 de septiembre de 2023, Sede de las Naciones <br /> Unidas, Nueva York</b></h3>
                    <p className="">En su último informe científico, el Grupo Intergubernamental de Expertos sobre el Cambio Climático resaltó
                        una vez más la urgencia de actuar. El daño ocasionado por la crisis climática es enorme, y las emisiones globales de gases de
                        efecto invernadero permanecen en niveles nunca antes vistos. Comenzando hoy y durante las próximas tres décadas, es imperativo
                        que se reduzcan las emisiones de inmediato y a gran escala, para limitar el calentamiento global a 1,5°C por encima de los
                        niveles preindustriales y así evitar las peores consecuencias.
                    </p>

                    <p className=""><b>
                        Con el objetivo de que los gobiernos, las autoridades comerciales, financieras y locales y la sociedad civil aceleren la toma
                        de medidas, y puedan escuchar de los «primeros líderes y emprendedores», el secretario general de las Naciones Unidas convoca
                        a una Cumbre sobre la Ambición Climática en la sede de las Naciones Unidas de Nueva York el 20 de septiembre de 2023.
                    </b></p>
                    <p className="">La Cumbre representa un hito político fundamental ya que demuestra que es la intención del colectivo mundial
                        acelerar el ritmo y la escala de una transición justa hacia una economía mundial resiliente al clima basada en energía renovable
                        más equitativa.
                    </p>
                </div>
            </div>

            <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Conferen} />
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
        </main >
    )
}
export default Eventos;