import FadeIn from 'react-fade-in';
export default function Contact () {
    return (
       <FadeIn>
            <header>
            <h1 className="display-3">Contact</h1>
            <form>
                <label>
                    <input type="text"></input>
                </label>
            </form>
        </header>
       </FadeIn>
    )
}