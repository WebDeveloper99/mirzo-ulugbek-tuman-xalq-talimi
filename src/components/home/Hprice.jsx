import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle="Ta'til Vaqtlarida Ham Vaqtingizni Samarali Qiling" title='Bizning Metodikamizda Yoshlarni Gruhlarga Ajratin Dars Berish Mavjud  ' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
