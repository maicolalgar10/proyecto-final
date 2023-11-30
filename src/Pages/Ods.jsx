import Navsol from "../components/Navsol";
import Od from "../assets/images/ods.png"
import Videito from "../multimedia/acuerdo.mp4"
import Camcli from "../assets/images/camcli.jpg"

const Ods = () => {
    return (
        <>
            <Navsol />
            <div className="pb-4 mb-4"></div>
            <main>
                <div className="row g-5">
                    <div className="col-md-8">
                        <h1 className="pb-4 mb-4 bold-italic border-bottom">17 objetivos para transformar nuestro mundo</h1>
                        <p >
                            Los Objetivos de desarrollo sostenible (ODS) son un llamamiento a la acción de todos los países (pobres, ricos y de renta media) para promover
                            la prosperidad al tiempo que se protege el planeta. Reconocen que la erradicación de la pobreza debe ir acompañada de estrategias que fomenten
                            el crecimiento económico y aborden una serie de necesidades sociales, como la educación, la sanidad, la protección social y las oportunidades
                            de empleo, al tiempo que abordan el cambio climático y la protección del medio ambiente.
                        </p>
                        <p >
                            De los 17 objetivos, el número 13 precisa que se tomen medidas urgentes para combatir el cambio climático y sus efectos. Aunque todos los objetivos
                            influyen en el cambio climático, y viceversa. Avanzaremos poco en la acción climática si no aceleramos la consecución del objetivo 7 sobre energía
                            asequible y limpia, por ejemplo, o del objetivo 12 sobre consumo y producción responsables. Las soluciones climáticas pueden apoyar los objetivos,
                            como por ejemplo, a través de una transición justa a la energía renovable centrada en la provisión de trabajo digno, el enfoque del objetivo 8,
                            o a través del desarrollo de infraestructuras resistentes en el marco del objetivo 9
                        </p>
                        <p >
                            ¿Le interesa saber más sobre la conexión del clima con los principales ODS? Compruebe nuestras fichas informativas sobre la acción climática acerca de
                            energía, alimentación, empleo, salud y economía. Diviértase con la página Recursos sobre los ODS para estudiantes. O descubra cómo puede actuar ahora con
                            respecto al clima y los ODS. Y corra la voz con nuestros activos digitales Act for climate/Act for the SDGs (Acción por el clima/Acción por los OSD).
                        </p>
                        <p className="pb-4 mb-4">
                            Consulte las perspectivas de nuestros líderes de opinión, como el Representante especial del Secretario general de la ONU para la Energía Sostenible para Todos, Damilola Ogunbiyi,
                            a quien apasiona poner fin a la pobreza energética. El embajador Peter Thomson de Fiji, Enviado especial de las Naciones Unidas para los Océanos, opina sobre la relación entre el
                            océano y el clima, así como las posibilidades de una economía azul en sintonía con el objetivo 14.
                        </p>

                        <h2 className="pb-4 mb-4 bold-italic">Acción por el clima, acción por la energía asequible</h2>
                        <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <video controls width="712" height="400">
                                <source src={Videito} />
                            </video>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="pb-4 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Od} />
                        </div>
                        <p className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a className="btn btn-lg btn-primary" href="https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/">Learn More</a>
                        </p>
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
export default Ods;