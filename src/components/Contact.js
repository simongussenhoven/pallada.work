export default function Contact() {
    return (
        <>
            <header className="text-center py-5">
                <h1 className="display-3">Contact</h1>
                <p>Heb je een vraag of opmerking? Vul onderstaand contactformulier in.</p>
            </header>
            <section className="bg-dark p-5 text-light">
                <div className="container d-flex justify-content-center">
                    <form className="col-md-6 border rounded shadow p-3 bg-light text-dark">
                        <div className="row py-3">
                            <div className="col-12 col-md-6">
                                <label>Naam</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className=" w-100"></input>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 col-md-6">
                                <label>Emailadres</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="email" className=" w-100"></input>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 col-md-6">
                                <label>Bedrijfsnaam</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="textarea" className=" w-100"></input>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 col-md-6">
                                <label>Bericht</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}