import React from 'react'

const Contact = () => {
  return (
    <section className='mt-10 mb-20'>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Got a Technical issue? want to send feedback? Let us Know
        </p>
        <form action="#" className='space-y-8'>
          <div>
          <label htmlFor='email' className='form__label'>Your Email</label>
          <input type="email" id="email" placeholder='email' className='form__input mt-1'></input>
          </div> 
          <div>
          <label htmlFor='subject' className='form__label'>Subject</label>
          <input type="text" id="subject" placeholder='Let us Know your Query' className='form__input mt-1'></input>
          </div>     
          <div className='sm:col-span-2'>
          <label htmlFor='message' className='form__label'>Your Message</label>
          <textarea type="text" id="message" placeholder='Leave A Comment' className='form__input mt-1'rows="6"></textarea>
          </div>       
          <button type="submit" className='btn rounded sm:w-fit'>Submit</button> 
        </form>
      </div>
    </section>
  )
}

export default Contact