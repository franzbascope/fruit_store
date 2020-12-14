export default (props) => {
  // attributes
  const { name, price, features, image, cart } = props;
  // actions
  const { addToCart, removeFromCart, addQuantity, decreaseQuantity } = props;
  return (
    <div class="col">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 fw-normal">{name}</h4>
        </div>
        <div class="card-body">
          <img
            src={image}
            alt="frutaImagen"
            style={{ height: 100, margin: 10 }}
          />
          <h1 class="card-title pricing-card-title">${price}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            {features.map((feature) => {
              return <li>{feature}</li>;
            })}
          </ul>
          <button
            onClick={() => {
              addToCart(props.name);
            }}
            type="button"
            class="w-100 btn btn-lg btn-outline-primary"
          >
            Add to Cart
          </button>
          <h1>{cart ? "Cart" : "sin agregar"}</h1>
        </div>
      </div>
    </div>
  );
};
