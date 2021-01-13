import React from 'react'

const Header = ({
  data: {
    name,
    occupation,
    description,
    address: { city },
    social
  }
}) => {
  const networks = social?.map(network => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ))
  return (
    <header
      id='home'
      style={{
        background: `#161415 url('${process.env.PUBLIC_URL}/images/header-background.jpg') no-repeat top center`
      }}
    >
      <nav id='nav-wrap'>
        <a href='#nav-wrap' className='mobile-btn' title='Show navigation'>
          Show navigation
        </a>
        <a href='#home' className='mobile-btn' title='Hide navigation'>
          Hide navigation
        </a>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a href='#home' className='smoothscroll'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='smoothscroll'>
              About
            </a>
          </li>
          <li>
            <a href='#resume' className='smoothscroll'>
              Resume
            </a>
          </li>
          <li>
            <a href='#work' className='smoothscroll'>
              Work
            </a>
          </li>
          <li>
            <a href='#quotes' className='smoothscroll'>
              Quotes
            </a>
          </li>
          <li>
            <a href='#contact' className='smoothscroll'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>I'm {name}</h1>
          <h3>
            I am a {city}-based <span>{occupation}</span>. {description}
          </h3>
          <hr />
          <ul className='social'>{networks}</ul>
        </div>
      </div>
      <p className='scrolldown'>
        <a href='#about' className='smoothscroll'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  )
}

Header.defaultProps = {
  data: {
    name: 'Jack Wong',
    occupation: 'Computer Science student',
    description: 'I am fascinated with web app technologies.',
    address: { city: 'Singapore' }
  }
}

export default Header
