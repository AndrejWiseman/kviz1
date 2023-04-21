import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/error.scss'


const Error = () => {

    return (
        <Layout>
            <div className="error-box">
                <div className="error-text">
                    <h1 >404</h1>
                    <h2>Page not found</h2>
                </div>
            </div>
        </Layout>
    )
}

export default Error
