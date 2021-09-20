import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/CartActions';
import { addToFavorites, removeFromFavorites } from '../../redux/Favorites/FavoritesActions';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);

        let currentProduct;

        categoryValues.forEach((category) => {
            const findResult = category.items.find((product) => {
                return product.id === Number(productId);
            });
            if (findResult) {
                currentProduct = findResult;
            }
        });

        this.setState({product: currentProduct});
    }

    render() {
        const { product } = this.state;
        const { favoritesProducts, addToFavorites, removeFromFavorites} = this.props;

        return (
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <div className="buttons-div d-flex flex-column">
                                <button
                                    className="btn btn-dark mb-3 font-weight-bold"
                                    onClick={() => {
                                        this.props.addToCart({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image
                                            }
                                        })
                                    }}
                                >
                                    Add to cart
                                </button>
                                {
                                    favoritesProducts.find(favoriteProduct => favoriteProduct.id === product.id)
                                    ?<button  className="btn btn-dark mb-4 font-weight-bold"
                                        onClick={() => removeFromFavorites({id: product.id})}
                                        >
                                        Remove from Favorites
                                    </button>
                                    :<button  className="btn btn-dark mb-4 font-weight-bold"
                                        onClick={() => addToFavorites({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image
                                            }
                                        })}
                                        >
                                        Add to Favorites
                                    </button>
                                }
                            </div>
                            <p><span className="font-weight-bold">Size</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Color</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Description:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoritesProducts: state.favorites.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (product) => dispatch(removeFromFavorites(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);