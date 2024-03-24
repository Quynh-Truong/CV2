import myExperience from '../assets/experienceData.json'
import glassesPic from '../assets/eye-glasses-310236_1280.png'

export default function Experience() {
    return (
        <>
            <main>
                <h1>EXPERIENCE</h1>
                <section className="experience">

                    <div className="col1">
                        {
                            /*  slice cuts from index 0 to the middle of list, and the key says where the list is split */
                            myExperience.experience.slice(0, Math.ceil(myExperience.experience.length / 2)).map((e, index) => (
                                <article key={index}>
                                    <h3>{e.workplace} | {e.role}</h3>
                                    <p className="date">{e.date}</p>
                                    <p>{e.description}</p>
                                </article>
                            ))
                        }

                    </div>
                    <div className="col2">
                        {
                            myExperience.experience.slice(Math.ceil(myExperience.experience.length / 2)).map((e, index) => (
                                <article key={index}>
                                    <h3>{e.workplace} | {e.role}</h3>
                                    <p className="date">{e.date}</p>
                                    <p>{e.description}</p>
                                </article>
                            ))
                        }

                        <img
                            src={glassesPic}
                            alt="Glasses"
                            className="glasses"
                        />

                    </div>
                </section>
            </main>

        </>
    )
}