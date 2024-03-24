import studyGif from '../assets/study-3735.gif'
import myEducation from '../assets/educationData.json'

export default function Education() {
    return (
        <>
            <main>
                <h1>EDUCATION</h1>
                <section className="education">
                    <div className="col1">

                        {
                            myEducation.education.map(e => {
                                return (
                                    <article>
                                        <h3>{e.school} | {e.education}</h3>
                                        <p className="date">{e.date}</p>
                                    </article>
                                )
                            })
                        }
                    </div>
                    <div className="col2">
                        <img src={studyGif} alt=" Studying boy gif" />
                    </div>
                </section>
            </main>

        </>
    )
}