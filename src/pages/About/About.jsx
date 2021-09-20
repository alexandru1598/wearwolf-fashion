import React from 'react';
import Layout from '../../components/Layout/Layout';
import './About.css';

function About() {
    return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h1 className="text-center mb-5">About this project</h1>

                    <div className="content text-left">
                        <p> <strong>Wearwolf Fashion</strong> is an online clothing store for men. </p>
                        <p>It was built using ReactJs, React Router, Redux, Redux Thunk, Firebase and Bootstrap.</p>
                        <h2 className="mt-5">Functionalities:</h2>
                        <p>On click, each item on the site will redirect the user to that specific item's page.</p>
                        <p>The Login button allows the user to sign in with Google or Facebook, through Firebase.</p>
                        <p>
                            The cart and heart buttons allow the user to see the products from the cart and from the favorites list. 
                            Also, the user can see how many different products he has added to favorites or in the cart without
                            having to access the pages.
                        </p>
                        <p>
                            The home page contains the list of categories for the products. After clicking on a category the user will be redirected
                            to a new page with products. The products come from a local JSON file. Each product in the Products List has an "Add to cart"
                            button and a "Heart" button. If the user clicks on a product he will be redirected to that specific Product Page, where
                            the user can see different details of the product and add it to the cart or to the favorites list.
                        </p>
                        <p>
                            On the cart page , the user can see the products he added to the cart and can delete them.
                            On the favorites page, the user can see the products he added to favorites and can delete them or add them to cart.
                        </p>

                    </div>
                </div>
            </Layout>
    );
}

export default About;