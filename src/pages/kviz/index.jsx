import * as React from "react"
import '../../assets/css/kviz-stranica.scss'
import Layout from '../../components/Layout'

import SEO from '../../components/SEO'

import { Link } from 'gatsby'


// import Quiz from "../components/Quiz"

// import QuizPage from "../../components/Test"

// import Pocetna from '../components/Pocetna'




export default function Home() {
  return (
    <Layout>
      <SEO title="Kvizovi" />

        <div className="kvizovi">

          <h2>Izaberi kviz i zabavi se!</h2>


          <Link to='/kviz/zastava' className="zastave">Zastave</Link>

          

          <Link to='/kviz/grad' className="zastave">Glavni gradovi</Link>
        </div>

      



    </Layout>
  )
}