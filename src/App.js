import React from 'react'
import './theme/theme.css'
import Section from './theme/Section'
import Footer from './theme/Footer'
import Header from './theme/Header'

 


const App = () => {

   const show = (e) => {
    console.log(e)
    return e ;
   }
  return (
   <>
   <main>
    <Header/>
    <Section fname={'Govind'} lname={'Singh'} show1={show}/>
    <Footer/>

   </main>
   </>
  )
}

export default App