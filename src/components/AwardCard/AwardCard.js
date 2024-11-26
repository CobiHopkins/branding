import "./AwardCard.css";
/**
 * 
 * @param {string} title - The title of the award received.
 * @param {string} date - The date the award was received.
 * @param {string} provider - The provider of the award. Name of the course, college, or person.
 * @param {string} description - A description of the award. Reason for receiving the award or anything else relevant.
 * 
 */

const AwardCard = ({title, date, provider, description}) => {


    return (
        <section className="award-card txt-white">
            <h2 className="light-h2">{title}</h2>
            <h3 className="txt-gold txt-wlight">{date} - ({provider})</h3>
            <p>{description}</p>
        </section>
    );
}

export default AwardCard;