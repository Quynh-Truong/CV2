import bearPic from '../assets/bear-3189349_640.png'

export default function About() {
    return (
        <>
            <main className="content">
                <section className="col1">
                    <h1>
                        HELLO, I'M <span className="quynh">QUYNH</span>
                    </h1>
                    <p>
                        I am the type of person, who likes learning new things. Staying curious
                        about people, and the workings of the world, is what keeps me trotting
                        this Earth. And now, I am giving it my best at Fullstack .NET.
                    </p>
                </section>
                <section className="col2">
                    <img
                        src={bearPic}
                        alt="Waving bear"
                        id="darkToggleMode"
                        className="bear-toggle"
                    />
                </section>
            </main>

        </>
    )
}