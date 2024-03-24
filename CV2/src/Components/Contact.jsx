import helloPic from '../assets/hello-5458998_640.png'

export default function Contact() {
    return (
        <>
            <main>
                <h1>CONTACT</h1>
                <section className="contact">
                    <a href="mailto:quynh88@hotmail.com">
                        <img
                            src= {helloPic}
                            alt="Bricks saying hello"
                            className="hello"
                        />
                    </a>
                    <p>I'm based in Stockholm, just send me a message.</p>
                    <p>It will be mighty fine to hear from you.</p>
                    <p>
                        Until then: <span className="best">All the best!</span>
                    </p>
                </section>
            </main>

        </>
    )
}