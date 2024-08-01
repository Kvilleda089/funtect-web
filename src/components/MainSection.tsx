import React from "react";
import '../styles/MainSection.css'

const MainSection: React.FC = () =>{
    return(
        <section className="section-main">
            <div>
                <h2>Help to reclaim you life and freedom</h2>
                <p>We know how large objects will act, but things on a small scale.</p>
                <button className="button-quote-now">Get Quote Now</button>
                <button className="button-more">Learn More</button>
            </div>
        </section>
    );
};

export default MainSection;