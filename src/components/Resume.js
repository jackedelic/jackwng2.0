import React from 'react'

const Resume = ({ data: { skillmessage, educations, works, skills } }) => {
  const eduSect = educations.map(edu => {
    let { school, degree, graduated, description } = edu
    return (
      <div key={school}>
        <h3>{school}</h3>
        <p className='info'>
          {degree} <span>&bull;</span> <em className='date'>{graduated}</em>
        </p>
        <p className='description'>{description}</p>
      </div>
    )
  })
  const workSect = works.map(work => {
    let { company, title, years, description } = work
    return (
      <div key={company}>
        <h3>{company}</h3>
        <p className='info'>
          {title} <span>&bull;</span> <em className='date'>{years}</em>
        </p>
        <p>{description}</p>
      </div>
    )
  })
  const skillSec = skills.map(skill => {
    let { classname, name, level } = skill
    let className = 'bar-expand '
    return (
      <li key={name}>
        <span className={className} data-classname={classname}></span>{' '}
        <em>{name}</em>
      </li>
    )
  })

  const bars = document.getElementsByClassName('bar-expand')
  document.addEventListener('scroll', () => {
    for (let i = 0; i < bars.length; i++) {
      let bar = bars[i]
      let classname = bar.dataset.classname
      if (bar.getBoundingClientRect().y < 0.9 * window.innerHeight) {
        bar.classList.add(classname)
      }
    }
  })

  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>{eduSect}</div>
          </div>
        </div>
      </div>

      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className='nine columns main-col'>{workSect}</div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <p>{skillmessage}</p>
          <div className='bars'>
            <ul className='skills'>{skillSec}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Resume.defaultProps = {
  data: {
    skillmessage:
      'These are some of the skills I am comfortable with or have used before. My goal is to gain mastery on the familiar few and pick up unfamiliar technologies, one step at a time.',
    educations: [
      {
        school: 'National University of Singapore',
        degree: 'Bachelor of Science in Computer Science',
        graduated: 'Expected May 2021',
        description:
          'I specialize in Software Engineering. My core CS classes include software projects (and principles), algorithms, theory of computation, databases, networking, operating systems, artificial intelligence etc.'
      }
    ],
    works: [
      {
        company: 'SP Digital (Singapore Power)',
        title: 'Software Engineer',
        years: 'May 2019 - Oct 2019',
        description:
          'I worked primarily on the frontend of the web application used by the SP Digital mobile app. I implemented its UI graphics and designs created by the design team. I refactored the codebase using page rendering engine - Jekyll and then Hugo, which significantly improves the rendering of the web pages.'
      },
      {
        company: 'ID Tech',
        title: 'Coding Instructor',
        years: 'May 2018 - July 2018',
        description:
          'I conducted coding lessons in the coding summer camp which spanned 7 weeks. The skills taught in the classes include web building, desktop game/app (Java) and programming fundamentals in C++ and Python.'
      }
    ],
    skills: [
      {
        classname: 'js',
        name: 'Javascript/ES6',
        level: '80%'
      },
      {
        classname: 'git',
        name: 'Git',
        level: '80%'
      },
      {
        classname: 'react',
        name: 'ReactJs',
        level: '75%'
      },
      {
        classname: 'html',
        name: 'HTML5',
        level: '70%'
      },
      {
        classname: 'css',
        name: 'CSS/Sass',
        level: '65%'
      },
      {
        classname: 'mongodb',
        name: 'MongoDB',
        level: '65%'
      },
      {
        classname: 'postgres',
        name: 'PostgresQL',
        level: '50%'
      },
      {
        classname: 'java',
        name: 'Java',
        level: '55%'
      },
      {
        classname: 'spring',
        name: 'Spring/SpringBoot',
        level: '40%'
      },
      {
        classname: 'cpp',
        name: 'C++',
        level: '40%'
      },
      {
        classname: 'python',
        name: 'Python',
        level: '40%'
      }
    ]
  }
}

export default Resume
