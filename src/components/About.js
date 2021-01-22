import React from 'react'

const About = ({
  data: {
    name,
    image,
    bio,
    address: { city },
    phone,
    email,
    resumedownload
  }
}) => {
  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img src={image} alt="Jack's profile pic" className='profile-pic' />
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{name}</span>
                <br />
                <span>{city}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a href={resumedownload} className='button'>
                  <i className='fa fa-download'></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.defaultProps = {
  data: {
    name: 'Jack Wong',
    image: 'images/',
    bio:
      "I am a Computer Science student who loves building things using codes. I have deep interest in both frontend and backend technologies. I am on a never-ending quest to learning more about web technologies.\
 I am a nocturnal runner, daily. I watch Joe Rogan's podcast.",
    address: {
      city: 'Singapore'
    },
    phone: '+65 81417700',
    email: 'jackwong3101@yahoo.com'
  }
}

export default About
