import React from 'react'
import { Link } from 'gatsby'

import AppLayout from '../components/AppLayout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <AppLayout>
    <SEO title="" />
    <h1>Hi people</h1>

    <Link to="/page-2/">Go to page 2</Link>
  </AppLayout>
)

export default IndexPage
