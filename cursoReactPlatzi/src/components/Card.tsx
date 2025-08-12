type CardProps = {
    title: string;
    description: string;
};

const Card = ({title, description}:CardProps) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card;