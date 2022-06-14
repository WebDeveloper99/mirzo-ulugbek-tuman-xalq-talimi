import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
