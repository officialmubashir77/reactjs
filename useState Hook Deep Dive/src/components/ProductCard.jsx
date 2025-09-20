const ProductCard = ({ title, description, price , imgSrc }) => {
    return (
        <div className="product">
            <div className="img-wrapper">
                <img src={imgSrc} alt={title} />
            </div>
            <h1>{title}</h1>
            <p>{price}</p>
            <span>{description}</span>
        </div>
    );
};

export default ProductCard;