import "./SkillCard.css";

const SkillCard = ({ icon: Icon, iconAltText, title, description }) => {


    return (
        <section className="skill-card">
            <header>
                <Icon size={40} className="skill-icon" />
            </header>
            <main>
                <h3 className="skill-title">{title}</h3>
                <p className="skill-description">{description}</p>
            </main>
        </section>
    );
}

export default SkillCard;