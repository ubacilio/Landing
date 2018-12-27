import React from 'react'
import { Grid, Image, Header, Modal } from 'semantic-ui-react'
import logoFooter from '../../../assets/images/logo-footer.png'
import '../../../assets/styles/footer.css'  
export class Footer extends React.Component {
    state = {
        openModal:false,
        closeModal: false
    }
    constructor(props) {
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
      this.setState({ openModal: true })
      this.setState({ closeModal: false })
    }
    handleCloseModal() {
      this.setState({ closeModal: true })
      this.setState({ openModal: false })
    }

    render() {
        return (
            <footer>
                <Grid centered padded="horizontally">
                    
                    <Grid.Row textAlign="center">
                        <Grid.Column mobile={14} computer={5}>
                             
                            <h2>Redes sociales</h2> 
                            <div className="underline_title_descriptionProject" > </div>
                            <p className="socialNetworks">
                                <a href="https://t.me/grupoptm" target="_blank"><i className="fa fa-telegram fa-fw fa-2x"></i></a>
                                <a href="https://twitter.com/grupoptm" target="_blank"><i className="fa fa-twitter-square fa-fw fa-2x"></i></a>
                                <a href="https://www.reddit.com/user/grupoptm" target="_blank"><i className="fa fa-reddit fa-fw fa-2x"></i></a>
                                <a href="https://medium.com/@grupoptm" target="_blank"><i className="fa fa-medium fa-fw fa-2x"></i></a>
                                <a href="https://www.youtube.com/grupoptm" target="_blank"><i className="fa fa-youtube-play fa-fw fa-2x"></i></a>
                                <a href="https://github.com/cstmining/" target="_blank"><i className="fa fa-github fa-fw fa-2x"></i></a>
                                <a href="mailto:info@grupoptm.org" target="_blank"><i className="fa fa-envelope-o fa-fw  fa-2x"></i></a></p>
                           
                        </Grid.Column>
                        <Grid.Column mobile={14} computer={9}>
                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column mobile={14} computer={14}>
                            <Image className="logoFooter" src={logoFooter} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p>
                                <span id="cookieslink" onClick={this.handleOpenModal}>
                                    <small>
                                        Aviso Legal y Política de Privacidad
                                    </small>
                                </span>
                            </p>
                            <p className="copyright">&copy; 2018 GrupoPTM. Todos los derechos reservados.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Modal
                    closeIcon
                    open={this.state.openModal}
                    onClose={this.handleCloseModal}>
                    <Modal.Header>Aviso Legal y Política de Privacidad</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>GRUPO PTM - POLÍTICA DE PRIVACIDADr</Header>
                            <div className="content"> 
                                <table className="table table-responsive table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Responsable</th>
                                            <th>grupoptm S.L.</th>
                                        </tr>
                                        <tr>
                                            <th>Finalidad</th>
                                            <th>
                                                <ul>
                                                    <li>Envío de comunicaciones informativas y promocionales por grupoptm S.L. relativas a novedades, evolución y actualización del proyecto y otra información que pueda resultar de interés para el usuario.</li>
                                                    <li>Envío de facturas comerciales.</li>
                                                    <li>Análisis de los datos a través de la plataforma CRM Agile.</li>
                                                </ul>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>Legitimación</th>
                                            <th>
                                                <ul>
                                                    <li>Responder a las consultas, proporcionar informaciones requeridas por el Usuario;</li>
                                                    <li>Realizar toda aquella prestación de servicios y/o productos contratados o suscritos por el Usuario;</li>
                                                    <li>Proporcionar acceso al Usuario a determinadas funcionalidades del Sitio Web; o bien realizar todas aquellas actividades conexas que se deriven de la ejecución del contrato/servicio contratado.</li>
                                                </ul>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>Destinatarios</th>
                                            <th>grupoptm S.L y terceros que deban conocer los datos para cumplimiento de las finalidades descritas.</th>
                                        </tr>
                                        <tr>
                                            <th>Derechos</th>
                                            <th>De acceso, rectificación, supresión, limitación, portabilidad, oposición, retirada consentimiento, reclamación ante la Autoridad de Control</th>
                                        </tr>
                                        <tr>
                                            <th>Información Adicional</th>
                                            <th>Consulte la Información Adicional sobre Protección de Datos en el enlace política de privacidad</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4>INFORMACIÓN ADICIONAL</h4>

                                <p>Las presente Política de Protección de datos regula el tratamiento de datos personales facilitados por Ud. (en adelante, denominado también “el Usuario”) incluidos en la plataforma web de titularidad de grupoptm S.L. (en adelante, “la Plataforma”).</p>
                                <p><strong>1.- Garantías de los usuarios</strong></p>
                                <p>El Usuario garantiza que los datos aportados que contiene la Plataforma son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación.</p>
                                <p>En el caso de que los datos aportados pertenecieran a un tercero, el Usuario garantiza que ha informado a dicho tercero de los aspectos contenidos en este documento y obtenido su autorización para facilitar sus datos a grupoptm S.L. para los fines señalados.</p>
                                <p><strong>2.- Responsable y destinatarios</strong></p>
                                <p>Los datos de Ud. contenidos en la Plataforma, serán incorporados y tratados en el fichero denominado “clientes y proveedores” de titularidad del Responsable del tratamiento, grupoptm S.L, ESPAÑA, email: <a href="mailto:info@grupoptm.org">info@grupoptm.org</a> </p>
                                <p>Los destinatarios serán grupoptm S.L, y terceros que deban conocer los datos personales, para las finalidades para las que se ha obtenido su consentimiento y que se recogen con mayor detalle a continuación.</p>
                                <p><strong>3.- Finalidad, forma y duración del tratamiento de datos</strong></p>
                                <p><strong>Finalidad</strong></p>
                                <p>La recogida de datos tiene por finalidades las siguientes:</p>
                                <ul>
                                    <li>Envío de comunicaciones informativas y promocionales por grupoptm S.L relativas a novedades, evolución y actualización del proyecto y otra información que pueda resultar de interés para el usuario.</li>
                                    <li>Envío de facturas comerciales.</li>
                                    <li>Análisis de los datos a través de la plataforma CRM Agile.</li>
                                </ul>
                                <p><strong>Forma</strong></p>
                                <p>Los datos de carácter personal facilitados serán tratados de forma confidencial y se adoptarán las medidas de seguridad técnicas y organizativas que resulten adecuadas para evitar la alteración, pérdida y el tratamiento o acceso no autorizado a dichos datos.</p>
                                <p><strong>Duración</strong></p>
                                <p>Los datos personales se conservarán mientras se mantenga la finalidad para la que han sido recabados, y en tanto no ejercite los derechos que se indican en el punto 5.</p>
                                <p><strong>4.- Legitimación</strong></p>
                                <p>La base legal para el tratamiento de los datos es la legitimación por consentimiento del Usuario.</p>
                                <p>Al marcar la casilla correspondiente, relativa a la aceptación de la política de privacidad, Ud. consiente de forma clara, exacta e inequívoca el tratamiento de los datos facilitados en el mismo para las finalidades antes descritas, así como la cesión a terceros para su cumplimiento.</p>
                                <p>La base sobre la que se sustenta la legitimación de recogida de datos sería la siguiente:</p>
                                <ul>
                                    <li>Responder a las consultas, proporcionar informaciones requeridas por el Usuario.</li>
                                    <li>Realizar toda aquella prestación de servicios y/o productos contratados o suscritos por el Usuario.</li>
                                    <li>Proporcionar acceso al Usuario a determinadas funcionalidades del sitio web; o bien realizar todas aquellas actividades conexas que se deriven de la ejecución del contrato/servicio contratado.</li> 
                                </ul>
                                <p><strong>5.- Ejercicio de derechos</strong></p>
                                <p>En todo caso, podrá ejercitar los derechos de información, acceso, rectificación, supresión, limitación del tratamiento, portabilidad de datos y oposición, dirigiendo escrito, acompañado de copia del Documento Nacional de Identidad o documento equivalente, al email <a href="mailto:info@grupoptm.org">info@grupoptm.org</a> indicando (en “Asunto”) el derecho que desea ejercer.</p>
                                <p>También se le informa de que tiene derecho a retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
                                <p>Así mismo, se le informa de que puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>
                                <p>En el caso de España, la Agencia Española de Protección de datos pone a su disposición la posibilidad de tramitar la reclamación a través de su página web, que se podrá realizar mediante certificado digital o en soporte papel, siguiendo los trámites marcados en el siguiente enlace:</p>
                                <p><a href="https://sedeagpd.gob.es/sede-electronica-web/vistas/formReclamacionDerechos/reclamacionDerechos.jsf" target="_blank">https://sedeagpd.gob.es/sede-electronica-web/vistas/formReclamacionDerechos/reclamacionDerechos.jsf</a></p>
                            </div>
                       
                        </Modal.Description>
                    </Modal.Content> 
                </Modal>
            </footer>
        );
    }
}

export default Footer;