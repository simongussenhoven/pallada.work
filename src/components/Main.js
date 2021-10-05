import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'
const Main = () => {
    return(
        <FadeIn>
            <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-1">Rosan Pallada</h1>
                <h2>Erfgoed Ontwikkelaar</h2>
                <AnchorLink href='#heritage'>
                    <button class="btn btn-outline-danger">Lees meer</button>
                </AnchorLink>
            </div>
        </header>
        <section id="heritage" className="p-5 text-center high d-flex">
            <div className="container my-auto">
            <h2 className="display-3">Erfgoed ontwikkeling en advies</h2>
            <p className="p-md-5">Sinds 2020 werk ik zelfstandig als (gedelegeerd) ontwikkelaar en adviseur, na ervaring opgedaan te hebben als onderzoeker aan de TU Delft, het NRP en de Erfgoedfabriek, en als ontwikkelaar bij MeyerBergman Erfgoed Groep (MBEG). Momenteel werk ik voor MBEG aan de herbestemming van Paleis Soestdijk en ben ik adviseur voor (tijdelijke) culturele programmering. </p>
            <p>Via COUP-Collective werk ik aan de gebedshuizenvisie voor Hilversum. Daarnaast ben ik mede-organisator bij het platform ‘De Kerkvernieuwers’ en draag ik mijn steentje bij als bestuurslid van de stichtingen ‘Urban Heritage’ en ‘Week van het lege gebouw’. Mijn hart ligt bij erfgoed, in welke vorm dan ook. Het is mijn doel om middels mijn werkzame leven leegstaande plekken en gebouwen weer nieuw leven in te blazen; verloren verhalen over te brengen en erfgoed weer geliefd te maken bij een groot publiek.</p>
            <Link to="/onderzoek/" className="my-5"><Button variant="outline-secondary">Lees meer</Button></Link>
            </div>      
        </section>
        <div class="jumbotron jumbotron-fluid text-center d-flex">
            <div class="container my-auto">
                <h1 class="display-2">Over mij</h1>
                <p>Mijn hart ligt bij erfgoed, in welke vorm dan ook. Het is mijn doel om middels mijn werkzame leven leegstaande plekken en gebouwen weer nieuw leven in te blazen; verloren verhalen over te brengen en erfgoed weer geliefd te maken bij een groot publiek. Dit doe ik graag in samenwerking met gelijkgestemden: Erfgoedliefhebbers met een intrinsieke motivatie en een gedegen moraal kompas.</p>
                <p>Sinds 2020 werk ik zelfstandig als (gedelegeerd) ontwikkelaar en adviseur, na ervaring opgedaan te hebben als onderzoeker aan de TU Delft, het NRP en de Erfgoedfabriek, en als ontwikkelaar bij MeyerBergman Erfgoed Groep. Momenteel ben ik parttime in dienst bij MBEG voor de herbestemming van Paleis Soestdijk. Met een leuke club erfgoedliefhebbers heb ik in 2019 het platform ‘De Kerkvernieuwers’ opgezet. Ook werk ik via COUP-collective aan de gebedshuizenvisie voor Hilversum. Daarnaast neem ik zitting in het bestuur van de stichtingen ‘Urban Heritage’ en ‘Week van het lege gebouw’. Ik heb een bachelor in Bouwkunde (TU Delft)</p>
            </div>
        </div>
        <section id="redev vh-100">
            <div className="container">
            <h1 className="display-4 py-md-5">Herontwikkeling en transformatie</h1>
            <p className="py-2"> Herontwikkeling en/of transformatie geeft bestaande gebouwen een nieuw leven. Dit zorgt niet alleen voor het voortbestaan van karakteristiek vastgoed en de bijbehorende herinneringen en verhalen, maar ook voor hergebruik van bestaand materiaal. Bij nieuwbouw dient dit materiaal gedolven te worden, bij sloop gaat er veel waarde van het materiaal verloren; zelfs wanneer er wordt gerecycled . Zo zit er in gebouwen, net als in bomen, een hoop CO2 opgeslagen. Behoud van onze gebouwen is dus goed voor onze cultuur en natuur.</p>
            <p className="py-2">Hergebruik is per definitie duurzaam, maar de mate van duurzaamheid hangt ook af van de juiste keuzes op energetisch, materieel en sociaal gebied. Deze keuzes moeten goed op elkaar afgestemd zijn om een win-win situatie te kunnen creëren. Daarvoor dient integraal naar de plek en het vastgoed gekeken te worden, met voldoende know-how van alle expertises. </p>
            <p className="py-2">Zoekt u hulp bij het duurzaam herontwikkelen of transformeren van uw vastgoed of weet u een leuk project? Neem dan contact op!</p>
            <h3>Referentieprojecten</h3>
            <div className="d-flex flex-row">
            
            </div>
            <ul>
                <li>Landgoed Paleis Soestdijk, Baarn</li>
                <li>Landgoed Voorlei, Leidschenda</li>
                <li>De Houtzagerij, Gennep </li>
                <li>Waterzuivering, Soest (planvorming)</li>
            </ul>
            </div>
            <div className="w-100 text-center p-4">
            <Link to="/onderzoek/"><Button variant="outline-secondary">Lees meer</Button></Link>
            </div>
        </section>
        </FadeIn>
    )
}
export default Main