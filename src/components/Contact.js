import ContactForm from './Helpers/ContactForm'

export default function Contact() {
    return (
        <>
            <header className="text-center py-5">
                <h1 className="display-3">Contact</h1>
                <p>Heb je een vraag of opmerking? Vul onderstaand contactformulier in.</p>
            </header>
            <ContactForm/>
        </>
    )
}