import React, { useState } from 'react'

const Contact = ({
  data: {
    name,
    address: { city },
    phone,
    email
  }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    contactmessage: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch</span>
          </h1>
        </div>
        <div className='ten columns'>
          <p className='lead'>
            Keen to know more? Or you want to share something with me? Let's
            start a conversation :)
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='eight columns'>
          <form name='contactform' id='contact-form' onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  size='35'
                  id='contactName'
                  name='contactName'
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='email'
                  size='35'
                  id='contactEmail'
                  name='contactEmail'
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  size='35'
                  id='contactSubject'
                  name='contactSubject'
                  onChange={e =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  name='contactMessage'
                  id='contactMessage'
                  cols='50'
                  rows='15'
                  onChange={e =>
                    setFormData({ ...formData, contactmessage: e.target.value })
                  }
                ></textarea>
              </div>
              <div>
                <button className='submit'>Submit</button>
                <span id='image-loader'>
                  <img
                    src={process.env.PUBLIC_URL + '/images/loader.gif'}
                    alt=''
                  />
                </span>
              </div>
            </fieldset>
          </form>
          <div id='message-warning'>Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!{' '}
            <br />
          </div>
        </div>
        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Address and Phone</h4>
            <p className='address'>
              {name}
              <br />
              {city} <br />
              <span>{phone}</span>
              <br />
              <span>
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

Contact.defaultProps = {
  data: {
    name: 'Jack Wong',
    email: 'jackwong3101@yahoo.com',
    address: {
      city: 'Singapore'
    }
  }
}

export default Contact
