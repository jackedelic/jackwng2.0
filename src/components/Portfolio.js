import React from 'react'

const Portfolio = ({ data: { projects } }) => {
  const projectSec = projects?.map(project => {
    let img = `${process.env.PUBLIC_URL}/images/portfolio/` + project.image

    return (
      <div key={project.title} className='columns portfolio-item'>
        <div className='item-wrap'>
          <a href={project.url} title={project.title}>
            <img src={img} alt={project.title} />
            <div
              className='overlay'
              style={{
                background: `url('${process.env.PUBLIC_URL}/images/overlay-bg.png') repeat`
              }}
            >
              <div className='portfolio-item-meta'>
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
              <div className='link-icon'>
                <i className='fa fa-link'></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  })
  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check out some of my projects</h1>
          <div
            id='portfolio-wrapper'
            className='bgrid-halves s-bgrid-thirds cf'
          >
            {projectSec}
          </div>
        </div>
      </div>
    </section>
  )
}

Portfolio.defaultProps = {
  data: {
    projects: [
      {
        image: 'cloudshop-thumbnail.png',
        title: 'CloudShop',
        category: 'E-commerce Website | Personal project',
        url: 'http://cloudshop-env.ap-southeast-1.elasticbeanstalk.com/'
      },
      {
        image: 'devbook-thumbnail.png',
        title: 'Devbook',
        category: 'Social Networking Website | Personal project',
        url: 'http://devbook.ap-southeast-1.elasticbeanstalk.com/'
      },
      {
        image: 'sambl-thumbnail.png',
        title: 'Sambl',
        category: 'Food Delivery Project | Partnered project',
        url: 'https://jackedelic.github.io/sambl/'
      },
      {
        image: 'medium-thumbnail.png',
        title: 'Sambl',
        category: 'Medium blog posts | Personal blog',
        url: 'https://medium.com/@jackwong_60367'
      }
    ]
  }
}
export default Portfolio
