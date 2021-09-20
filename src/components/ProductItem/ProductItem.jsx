import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/CartActions';
import { addToFavorites, removeFromFavorites } from '../../redux/Favorites/FavoritesActions';
import { ReactComponent as EmptyHeart } from '../../assets/icons/emptyheart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/fullheart.svg';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {name, price, currency, image, id, addToCart, addToFavorites, removeFromFavorites, favoritesProducts} = props;
    
    return(
        <div className="product-item col-12 col-md-4 col-sm-6 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center h-100">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <div className="d-flex">
                <button
                    className="btn btn-outline-dark"
                    onClick={() => addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                    Add to cart
                </button>
                {
                    favoritesProducts.find(favoriteProduct => favoriteProduct.id === id)
                    ?<span
                        onClick={() => removeFromFavorites({id})}
                        >
                        <FullHeart className="ml-3"/>
                    </span>
                    :<span
                        onClick={() => addToFavorites({
                            product: {
                                id,
                                name,
                                price,
                                currency,
                                image
                            }
                        })}
                        >
                        <EmptyHeart className="ml-3"/>
                    </span>
                }

            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favoritesProducts: state.favorites.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (product) => dispatch(removeFromFavorites(product))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);