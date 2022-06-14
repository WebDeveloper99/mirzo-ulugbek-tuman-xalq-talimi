import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='XUSH KELIBSIZ' title="Mirzo Ulug'bek Tumani Xalq Ta'limi Vazirlig Muassasalari Faoliyatini Metodik Ta'minlash Va tashkil Etish Bo'limining Axborot Tizimi Sahifasiga" />
            <p>Bu yerda siz uzingizga kerakli ta'lim tizimidagi axborotlarni olishingiz mumkun.</p>
            <div className='button'>
              <button className='primary-btn'>
                Boshlash <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Kurslar  <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
