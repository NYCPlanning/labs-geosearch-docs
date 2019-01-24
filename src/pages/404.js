import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"


const NotFoundPage = () => (
  <Layout>
    <div className="page">
      <h1>Sorry, but the page you are looking for has not been found. </h1>
      <p className="lead">Try checking the URL for errors or return to the <Link to="/">homepage</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
