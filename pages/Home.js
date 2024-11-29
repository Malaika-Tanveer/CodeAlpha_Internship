import React from 'react';
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg'
import "../styles/HomeStyle.css"
function Home() {
    return (
        <Layout>
            <div className='home' style={{backgroundImage:`url(${Banner})`}}>
                <div className='headerContainer'>
                <h1>The Savory Spoon</h1>
                <p>"Maza Hr Lamahy Ka !"</p>
                
            <Link to='/menu' style={{textDecoration:'none'}}>
            <button style={{display:'block'}}>
                ORDER NOW
            </button>
            
            </Link>
            </div>
            </div>
        </Layout>
    )
}

export default Home
