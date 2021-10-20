import AnchorLink from "react-anchor-link-smooth-scroll"

import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Advice () {
    return(
        <>
            <header className="jumbotron jumbotron-fluid min-vh-100">
                <div className="container p-5">
                    <h1 className="display-1">Advies</h1>
                    <h2>Deskundig op het gebied van erfgoed, duurzaamheid, architectuur, planologische processen, financiën en (monumentale) herbestemmings/<br className="d-md-none"/>programmeringsvraagstukken. </h2>
                    <AnchorLink href='#advies'>
                        <button className="btn btn-outline-danger">Lees meer</button>
                    </AnchorLink>
                </div>
            </header>
            <section id="advies" className="text-center d-flex flex-column  min-vh-100 border-bottom">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Referenties</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col col-12 col-md-6 text-left">
                            <ul>
                                <li>Landgoed Paleis Soestdijk te Baarn</li>
                                <li>Voormalig GGZ-terrein Schakenbosch te Leidschendam</li>
                                <li>Voormalige brandweerkazerne te Gennep</li>
                                <li>Voormalige waterzuiveringslocatie Vitens te Soest (planvorming)</li>
                            </ul>
                            <p>Neem contact op als u behoefte heeft aan advies/begeleiding bij:</p>
                            <ul>
                                <li>Het vinden van mogelijk functies binnen het vigerend bestemmingsplan/omgevingsplan</li>
                                <li>Het uitzoeken van mogelijkheden van wijzigen van vigerend bestemmingsplan/omgevingsplan</li>
                                <li>Het begeleiden van een bestemmingsplanwijziging</li>
                                <li>Het vinden van een geschikt programma voor uw vastgoed/locatie</li>
                                <li>Het vinden van de juiste exploitatie partner</li>
                                <li>Het rondrekenen van de Business Case</li>
                                <li>Het vinden van externe financiering en subsidies</li>
                                <li>Duurzaamheidsvraagstukken van uw (leegstaande) vastgoed</li>
                            </ul>
                            <div className="w-100 text-center py-3">
                                <Link to="/contact"><Button variant="outline-secondary">Contact</Button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}