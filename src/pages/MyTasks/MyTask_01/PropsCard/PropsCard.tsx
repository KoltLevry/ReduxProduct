import { CardProps } from "./types";

function PropsCard(
    // В PropsCard ти не вказав типи для title і description у деструктуризації.
    {
        title = "Some title", 
        description
    }
: CardProps) {
    return (
        <div>
        <h1>{title}</h1>
        {description && <h2>{description}</h2>}
        </div>
    );
}

export default PropsCard;
