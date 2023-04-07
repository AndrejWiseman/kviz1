import * as React from "react"
import '../assets/css/main.css'
import '../assets/css/pocetna.scss'

import Layout from '../components/Layout'

import { Link } from 'gatsby'


// import Quiz from "../components/Quiz"

// import QuizPage from "../components/Test"

// import Pocetna from '../components/Pocetna'




export default function Home() {
  return (
    <Layout>
      

      <div className="box">

        <Link to='/kviz' className="link-pocetni">
          Kviz
        </Link>

        <Link to='/igre' className="link-pocetni">
          Igre
        </Link>
      </div>




    </Layout>
  )
}



// https://flagcdn.com/rs.svg
// export default (n = 5) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))