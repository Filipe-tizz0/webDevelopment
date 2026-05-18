function ProductCard(Props) {
    return (
        <div className = "pCard">
            <h2>{Props.name}</h2>
            <p>R$ {Props.preco}</p>
            <button>
                Comprar
            </button>
        </div>
    )
}
export default ProductCard