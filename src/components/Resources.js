import reachlogo from "../reachlogo.png"
import hotlinelogo from "../hotlinelogo.png"

export default function Resources () {


    return (
        <div className="resources-container">
            <section className="help-article">
                <h3>Unsure if you've been assaulted?</h3>
                <a href="https://au.reachout.com/articles/sexual-assault#2"><img src={reachlogo} alt="" /></a>
            </section>
            <section className="help-article">
                <h3>For additional support, reach out here</h3>
                <a href="https://www.sacl.com.au/"><img src={hotlinelogo} alt="" /></a>
            </section>
        </div>


    )
}