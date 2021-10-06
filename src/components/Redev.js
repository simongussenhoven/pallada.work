import AnchorLink from 'react-anchor-link-smooth-scroll'

import {Button} from 'react-bootstrap'
const Redev = () => {
    return(
        <>
            <header className="jumbotron jumbotron-fluid min-vh-100">
                <div className="container p-5">
                    <h1 className="display-1">Herontwikkeling en transformatie</h1>

                    <AnchorLink href='#heritage'>
                        <button className="btn btn-outline-danger">Lees meer</button>
                    </AnchorLink>
                </div>
            </header>
            <section id="heritage" className="text-center d-flex flex-column-reverse min-vh-100 border-bottom">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Paleis Soestdijk</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6 text-md-left">
                            <p>De komende jaren zullen de gebouwen op landgoed Paleis Soestdijk grondig gerenoveerd worden en klaargemaakt voor de nieuwe bestemming als landingsplek voor innovatief en ondernemend Nederland.</p>
                            <p>Paleis Soestdijk wordt een onafhankelijk podium voor de kroonjuwelen van de Nederlandse maak- en kennisindustrie en worden de successen van innoverend Nederland gevierd. Op gelaagde en interactieve wijze wordt in het paleis en het omringende park het beste dat Nederland te bieden heeft gepresenteerd op het gebied van water, agricultuur & voeding, energie en gezondheid.</p>
                            <p>Meer weten over de toekomstplannen van Paleis Soestdijk? </p>
                            <div className="w-100 text-center text-md-left">
                                <a target="_blank" rel="noreferrer" href="https://www.paleissoestdijk.nl/"><Button variant="outline-primary">Lees meer</Button></a>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6">
                            <img className="img-fluid" alt="soestdijk" src="../images/paleis-soestdijk.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="heritage" className="p-2 text-center d-flex flex-column min-vh-100 border-bottom text-white bg-dark">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Landgoed Voorlei</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6">
                            <img className="img-fluid" alt="voorlei" src="../images/landgoed-voorlei.jpg"></img>
                            <p><small>Afbeelding via hetkrantje-online</small></p>
                        </div>
                        <div className="col col-12 col-md-6 text-md-left">
                            <p>Het terrein van de voormalige GGZ-instelling Schakenbosch wordt hoogwaardig en duurzaam herontwikkeld tot een aantrekkelijke woonomgeving in het groen: Landgoed Voorlei.</p>
                            <p>In 2018 is het Stedenbouwkundig Ontwerp ontwikkeld voor het Landgoed van ongeveer dertig hectare. Dit landgoed is verdeeld in 7 deelgebieden met elk een eigen sfeer. Hiervoor is met 7 gerenommeerde architectenbureaus gewerkt aan het Schetsontwerp van de woningen, binnen het Stedenbouwkundig ontwerp van Stedenbouwkundig ontwerpbureau West8.</p>
                            <p>Afgelopen 9 maart heeft de gemeenteraad het bestemmingsplan voor Landgoed Voorlei vastgesteld. Hiermee is er groen licht om het voormalige GGZ-terrein te ontwikkelen tot een gevarieerde woonlocatie in het groen met een openbaar park en zorg- en maatschappelijke voorzieningen.</p>
                            <p>Nieuwsgierig naar de plannen en de huidige stand van zaken? Meld je dan aan voor de nieuwsbrief van Landgoed Voorlei.</p>
                            <div className="w-100 text-center text-md-left">
                                <a href="https://www.voorlei.nl/"><Button variant="outline-primary">Lees meer</Button></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="heritage" className="text-center d-flex flex-column min-vh-100 border-bottom">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-3">Houtzagerij Gennep</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6 text-md-left">
                            <p>Op één van de mooiste plekjes van Noord-Limburg werkt de gemeente Gennep samen met de MeyerBergman Erfgoed Groep en SDK aan de herontwikkeling van een braakliggend terrein met voormalige brandweerkazerne. Het gebied grenst aan de oude Gennepermolen en een wandelpromenade langs de Niers.</p>
                            <p>Het stedenbouwkundig plan ‘De Houtzagerij’, afkomstig van diederendirrix architecten, is gebouwd op de historie en de bestaande waarden van het terrein en schetst tegelijkertijd een aantrekkelijk toekomstbeeld: De Genneperhuisweg wordt een schakelpunt van binnenstad naar natuur, van reuring naar rust. Met ruimte voor hoogwaardige woningen, een restauratieve of commerciële functie met terras aan de Niers en aantrekkelijke pleintjes, wandelroutes en uitzichtpunten. Met deze ontwikkeling wordt de entree van Gennep herdefinieerd; een plek waar nieuw en oud samenkomen. </p>
                            <div className="w-100 text-center text-md-left">
                                <a href="https://www.paleissoestdijk.nl/"><Button variant="outline-primary">Lees meer</Button></a>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6">
                            <img className="img-fluid" alt="gennep" src="../images/houtzagerij-gennep.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="heritage" className="p-2 text-center d-flex flex-column min-vh-100 border-bottom text-white bg-dark">
                <div className="container my-auto">
                    <div className="row py-5">
                        <div className="col col-12 my-auto">
                            <h2 className="display-4">Herbestemming ensemble voormalig Pompstation (planvorming)</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-md-6">
                            <img className="img-fluid" alt="voorlei" src="../images/landgoed-voorlei.jpg"></img>
                            <p><small>Afbeelding via hetkrantje-online</small></p>
                        </div>
                        <div className="col col-12 col-md-6 text-md-left">
                            <p>Plan voor duurzame transformatie van de bestaande gebouwen naar maximaal 8 wooneenheden. Voor liefhebbers met een wens uniek te wonen temidden van prachtige groene omgeving. Er is mogelijkheid tot bedrijf aan huis, werkplaats, B&B, atelier of studio. Het plan van REIN is passend bij de omgeving, en heeft veel aandacht voor het bestaande ensemble.</p>
                            <p>Er wordt gewerkt met circulair en lokaal materiaal (isolatie, inbouw). Daarnaast wordt er een innovatief grijswatersysteem toegepast waardoor de geschiedenis van de plek levend blijft. De bostuin grenzend aan spoor werkt mede als buffer voor de geluidsbelasting maar ook als voedselvoorziening en ter verhoging van de natuurwaarden en biodiversiteit. Tevens dient het afval als brandstof voor de biovergister. Toekomstige bewoners werken in gezamenlijk eigenaarschap aan het beheer en onderhoud van de locatie</p>
                            <div className="w-100 text-center text-md-left">
                                <a href="https://www.voorlei.nl/"><Button variant="outline-primary">Lees meer</Button></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Redev