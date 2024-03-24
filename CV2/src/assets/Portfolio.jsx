import React, { useState, useEffect } from 'react'
import laptopPic from '../assets/laptop-2298286_1280.png'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
/* import 'bootstrap/dist/css/bootstrap.min.css' - do not like this css*/
import {ClimbingBoxLoader} from 'react-spinners'

export default function Portfolio() {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.github.com/users/Quynh-Truong/repos'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const sortedRepos = data.filter(repo => {
                    return repo.private == false
                })

                setRepos(sortedRepos)
                setIsLoading(false)
            })
    }, [])


    if(isLoading) {
        return <ClimbingBoxLoader
        color="#22685a"
        size={16}
      />
    }

    return (
        <div>
            <h1>PORTFOLIO</h1>
            <main>
                <section className="portfolio">
                    {
                        repos.map(repo => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={laptopPic} style={{ width: '18rem' }} />
                                <Card.Body>
                                    <Card.Title>
                                        <h3>Project name:</h3>
                                        <p>{repo.name}</p>
                                    </Card.Title>
                                    <Card.Text>
                                        {/*                                     <h3>Language:</h3> */}
                                        {/*                                     <p>{repo.language}</p> */}
                                        <h3>Description:</h3>
                                        <p>{repo.description}</p>
                                    </Card.Text>
                                    <Button variant="secondary"><Card.Link href={repo.html_url}>Go to repository</Card.Link></Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}