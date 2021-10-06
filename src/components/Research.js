import AnchorLink from "react-anchor-link-smooth-scroll"
import FadeIn from "react-fade-in"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function Research() {
    return (
        <FadeIn>
           <header class="jumbotron jumbotron-fluid min-vh-100">
                <div class="container">
                    <h1 class="display-3">Onderzoek</h1>
                    <h2>Werkzaamheden</h2>
                    <ul className="py-4">
                        <li>Projectleider Route Religieus Erfgoed Hilversum (Vanuit landelijke aanpak Kerkenvisies, met COUP Collective)</li>
                        <li>Medeauteur van verscheidende onderzoeken aan de TU Delft/AMS Institute </li>
                        <li>Scriptiebegeleider bij Scriptium voor erfgoed/vastgoed gerelateerde afstudeerders </li>
                    </ul>
                    <AnchorLink href='#research'>
                        <button class="btn btn-outline-danger">Lees meer</button>
                    </AnchorLink>
                </div>
            </header>
            <section id="research" className="text-center d-flex flex-column min-vh-100 border-bottom">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Routekaart Religieus Erfgoed Hilversum</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6 text-md-left">
                            <p><strong>Annette Koenders, Lotte Portier, Rosan Pallada, Heleen Achterhuis, Dewi Kuen, Jos Schrijen.</strong></p>
                            <p>De Hilversumse ‘gebedshuizenvisie’ is een vertaling van de landelijke Kerkenvisie. </p>
                            <p>In Hilversum wordt deze visie de Religieuze Routekaart Erfgoed genoemd wordt, omdat alle gebedshuizen erbij betrokken worden. Ik begeleid de gemeente Hilversum in deze visie vanuit COUP en schrijf de visie uit in een (tussen)rapportage. </p>
                            <p>De visie wordt begin 2022 opgeleverd, en zal hier dan te vinden zijn.</p>

                        </div>
                        <div className="col col-12 col-md-6 px-5">
                            <img className="img-fluid" src="../images/hilversum.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="research" className="text-center d-flex flex-column min-vh-100 border-bottom bg-dark text-light">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Amsterdam reloaded </h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col col-12 col-md-6 px-4">
                            <img className="img-fluid" src="../images/ams.png"></img>
                        </div>
                        <div className="col col-12 col-md-6 text-md-left py-4">
                            <p><strong>Hilde Remøy, Darinka Czischke, Rosan Pallada, AMS Institute.</strong></p>
                            <p>Amsterdam Reloaded is een onderzoek naar innovatieve business-, governance-, financierings- en samenwerkingsmodellen om leegstaande erfgoedpanden in Amsterdam te hergebruiken als woningen. De belangrijkste doelstellingen waren het verbeteren van betaalbare woningen, het versterken van de empowerment van gebruikers en gemeenschappen en het verminderen van afval en het gebruik van energie en materialen.</p>
                        </div>     
                    </div>
                </div>
            </section>
            <section id="research" className="text-center d-flex flex-column min-vh-100 border-bottom">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Evaluatie Convenant Aanpak Kantorenleegstand Rotterda</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6 text-md-left">
                            <p><strong>Hilde Remøy, Rosan Pallada, Agnes Franzen, Fred Hobma TU Delft, Faculteit Bouwkunde Management in the Built Environment </strong></p>
                            <p>Een onderzoek naar de behaalde resultaten van het kantoren convenant van de gemeente Rotterdam uit 2011. Vier jaar na de start is onderzocht in hoeverre de doelstellingen van het convenant zijn behaald en in hoeverre de organisatie van de gemeente heeft bijgedragen aan het behalen van de doelen in het proces. De resultaten lieten zien wat goed werkt en waar nog ruimte is voor verbetering. Toekomstige stappen zijn aangegeven om deze verbeteringen te realiseren.</p>
                        </div>
                        <div className="col col-12 col-md-6 px-5">
                            <img className="img-fluid" src="../images/rotterdam.png"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="research" className="text-center d-flex flex-column min-vh-100 border-bottom bg-dark text-light">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-4">Afstudeeronderzoek TU Delft 2017 Faculteit Bouwkunde – Management in the Built Environment </h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col col-12 col-md-6 px-5 d-flex">
                            <img className="img-fluid" src="../images/delft.png"></img>
                        </div>
                        <div className="col col-12 col-md-6 text-md-left pt-5 mt-5">
                            <p><strong>Een onderzoek naar complexe hergebruikprocessen van erfgoedgebouwen, met een focus op de samenwerking tussen alle stakeholders.</strong></p>
                        </div>     
                    </div>
                </div>
            </section>
        </FadeIn>
    )
}