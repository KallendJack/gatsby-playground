import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h1>Index</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}

export default Index
