import * as React from "react"
import '../../assets/css/kviz-stranica.scss'
import Layout from '../../components/Layout'

import SEO from '../../components/SEO'

import { Link } from 'gatsby'


export default function Home() {
    return (
      <Layout>
        
        <SEO title="Igre" />
  
          <div className="kvizovi">
  
            <h2>Izaberi igru i zabavi se!</h2>
  
  
            <Link to='/igre/broj' className="zastave">Pogodi broj</Link>
          </div>
  
      </Layout>
    )
  }