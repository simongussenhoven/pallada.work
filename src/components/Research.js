import AnchorLink from "react-anchor-link-smooth-scroll"
import FadeIn from "react-fade-in"
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
export default function Research (){
    return(
        <FadeIn>
            <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-1">Onderzoek</h1>
                <h2>Belangrijke tekst</h2>
                <AnchorLink href='#heritage'>
                    <button class="btn btn-outline-danger">Lees meer</button>
                </AnchorLink>
            </div>
        </header>
        <section id="heritage" className="p-2 text-center high d-flex">
            <div className="container my-auto">
            <h2 className="display-3">Erfgoed ontwikkeling en advies</h2>
            <p className="p-md-5">Sinds 2020 werk ik zelfstandig als (gedelegeerd) ontwikkelaar en adviseur, na ervaring opgedaan te hebben als onderzoeker aan de TU Delft, het NRP en de Erfgoedfabriek, en als ontwikkelaar bij MeyerBergman Erfgoed Groep (MBEG). Momenteel werk ik voor MBEG aan de herbestemming van Paleis Soestdijk en ben ik adviseur voor (tijdelijke) culturele programmering. </p>
            <p>Via COUP-Collective werk ik aan de gebedshuizenvisie voor Hilversum. Daarnaast ben ik mede-organisator bij het platform ‘De Kerkvernieuwers’ en draag ik mijn steentje bij als bestuurslid van de stichtingen ‘Urban Heritage’ en ‘Week van het lege gebouw’. Mijn hart ligt bij erfgoed, in welke vorm dan ook. Het is mijn doel om middels mijn werkzame leven leegstaande plekken en gebouwen weer nieuw leven in te blazen; verloren verhalen over te brengen en erfgoed weer geliefd te maken bij een groot publiek.</p>
            <Link to="/onderzoek/" className="my-5"><Button variant="outline-secondary">Lees meer</Button></Link>
            </div>      
        </section>
        <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-1">Onderzoek</h1>
                <h2>Belangrijke tekst</h2>
                <AnchorLink href='#heritage'>
                    <button class="btn btn-outline-danger">Lees meer</button>
                </AnchorLink>
            </div>
        </header>
        </FadeIn>
    )
}