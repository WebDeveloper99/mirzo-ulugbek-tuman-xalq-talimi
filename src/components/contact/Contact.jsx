import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back/>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Muloqat</h1>
            <p>Biz har qanday taklifga yoki shunchaki suhbatlashishga tayyormiz</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADRESS:</h4>
                <p>Mirzo Ulug'bek tumani</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> xalqtalim@muassasa.com</p>
              </div>
              <div className='box'>
                <h4>telefon:</h4>
                <p> + 99899 123 45 67</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>Xabarni yuborish</button>
            </form>

            <h3>Bizni ijtimoiy tarmoqlarda kuzatib borish</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
