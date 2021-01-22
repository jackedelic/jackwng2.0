import React from 'react'

const Footer = ({ data: { social } }) => {
  const socSec = social.map(site => {
    let { name, url, classname } = site
    return (
      <li key={name}>
        <a href={url} rel='noopener noreferrer' target='_blank'>
          <i className={classname}></i>
        </a>
      </li>
    )
  })
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>{socSec}</ul>
          <ul className='copyright'>
            <li>&copy; Copyright 2021 Jack Wong</li>
            <li>
              Design by{' '}
              <a href='http://www.styleshout.com/' title='Styleshout'>
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a href='#home' title='Back to Top' className='smoothscroll'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  data: {
    social: [
      {
        name: 'github',
        url: 'https://github.com/jackedelic',
        classname: 'fa fa-github'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jack-wong-nus/',
        classname: 'fa fa-linkedin'
      }
    ]
  }
}

export default Footer
