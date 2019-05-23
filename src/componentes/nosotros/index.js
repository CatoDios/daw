import React from 'react';
import {
    Card, CardText, CardBody,CardTitle,
    CardImg, Row, Col, Container
} from 'reactstrap';
import logo from '../../img/sanmarcos.png';

const nosotros =()=>{
    return (
            <div className="perfil-contenedor">
                <div class="nosotros">
                    <div class="colunm">
                        {/* <CardImg src={logo} alt="Card image cap" /> */}
                        <div class="text">
                            <CardTitle className="text-capitalize">Nosotros</CardTitle>
                            <CardText className="text-justify">La idea del presente proyecto surge con el fin de ayudar en la preparación de los postulantes a la Universidad Nacional Mayor de San Marcos, al implementar una aplicación web educativa que entrena a los estudiantes a través de rondas de preguntas de exámenes de admisión pasados.
                                                                La aplicación se realiza con el objetivo de brindar un servicio óptimo para los usuarios que interactúan con la plataforma, dando la oportunidad a mejorar sus conocimientos en asignaturas relacionadas al examen de admisión de la UNMSM. A través de esta aplicación queremos aprovechar que los jóvenes postulantes tienen destreza y afinidad en el uso de dispositivos como laptops, computadoras y celulares para que de esta manera puedan estudiar en un entorno interactivo y competitivo. 
                            </CardText>
                        </div>
                    </div>
                    <div class="colunm">
                        
                    </div>
                </div>
                {/* <Row className="justify-content-center">
                    <Col sm={12}>
                        <div class="row">
                            <Col sm={6}>
                                <CardImg src={logo} alt="Card image cap" />
                            </Col>
                            <Col sm={6}>
                                <CardBody className="text-center">
                                    <CardTitle className="text-capitalize">Nosotros</CardTitle>
                                    <CardText className="text-justify">La idea del presente proyecto surge con el fin de ayudar en la preparación de los postulantes a la Universidad Nacional Mayor de San Marcos, al implementar una aplicación web educativa que entrena a los estudiantes a través de rondas de preguntas de exámenes de admisión pasados.
                                                                        La aplicación se realiza con el objetivo de brindar un servicio óptimo para los usuarios que interactúan con la plataforma, dando la oportunidad a mejorar sus conocimientos en asignaturas relacionadas al examen de admisión de la UNMSM. A través de esta aplicación queremos aprovechar que los jóvenes postulantes tienen destreza y afinidad en el uso de dispositivos como laptops, computadoras y celulares para que de esta manera puedan estudiar en un entorno interactivo y competitivo. 
                                    </CardText>
                                </CardBody>
                            </Col>                           
                        </div>
                    </Col>
                </Row> */}
            </div>
    )
}

export default nosotros;