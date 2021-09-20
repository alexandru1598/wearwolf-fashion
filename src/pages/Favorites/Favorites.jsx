import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ReactComponent as Close} from '../../assets/icons/close.svg';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../../redux/Favorites/FavoritesActions';
import { addToCart } from '../../redux/Cart/CartActions';
import './Favorites.css';

function Favorites(props) {
    const {favoritesProducts, addToCart, removeFromFavorites} = props;

    return (
        <Layout>
            <div className="favorites-page content-min-height container-fluid container-min-max-width
                d-flex justify-content-center align-items-center">
                {
                    favoritesProducts.length
                    ? <div className="container">
                        <div className="row">
                            {
                                favoritesProducts.map(favoriteProduct => {
                                    return <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center" 
                                                key={favoriteProduct.id}>
                                            <div className="pb-0 d-flex flex-column position-relative">
                                                <div className="fav-item d-flex flex-column align-items-center h-100">
                                                    <img src={favoriteProduct.image} alt="Produs" className="w-100"/>
                                                    <p className="mt-3 align-items-center">{ favoriteProduct.name }</p>
                                                    <p className="w-25">{ favoriteProduct.price } 
                                                        <span className = "ml-1">{favoriteProduct.currency}</span>
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn btn-dark mb-4 font-weight-bold"
                                                    onClick={() => addToCart({
                                                        product: {
                                                            id: favoriteProduct.id,
                                                            name: favoriteProduct.name,
                                                            price: favoriteProduct.price,
                                                            currency: favoriteProduct.currency,
                                                            image: favoriteProduct.image
                                                        }
                                                    })}
                                                >
                                                    Add to cart
                                                </button>

                                                <span 
                                                    onClick={() => removeFromFavorites(favoriteProduct)}
                                                    className="delete p-3"
                                                >
                                                    <Close/>
                                                </span>
                                            </div>
 
                                        </div>
                                })
                            }
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3 align-items-center">Your favorite product list is empty!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Back to home</button></Link>
                    </div> 
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        favoritesProducts: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
