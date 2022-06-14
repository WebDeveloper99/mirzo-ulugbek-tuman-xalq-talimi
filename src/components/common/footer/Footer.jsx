import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Kuzatib turing va so'nggi yangilanishlarni oling</h1>
            <span>Yangiliklardan bexabar qolmang !!!</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>MIRZO ULUG'BEK</h1>
            <span>TUMANI XALQ TA'LIMI VAZIRLIGI VEB SAHIFASI</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Xalq Ta'limi Haqida</li>
              <li>Xizmatlar</li>
              <li>Kurslar</li>
              <li>Bloglarimiz</li>
              <li>Kontakt Ma'lumotlar</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Ma'lumotlar</li>
              <li>Jamg'arma</li>
              <li>Kandidantlar</li>
              <li>Hamkorlar</li>
              <li>Etirozlar</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Mirzo Ulug'bek Tumani  
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +9989 123 45 67
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                xalqtalim@muassasa.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Mirzo Ulug'bek tumani xalq ta'limi faoliyatini kuzatib boring <i className='fa fa-heart'></i> ushbu sahifada
        </p>
      </div>
    </>
  )
}

export default Footer
