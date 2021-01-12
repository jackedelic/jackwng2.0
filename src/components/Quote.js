import React from 'react'

const Quote = ({ data: { quotes } }) => {
  const quoteSec = quotes?.map(quote => {
    let { text, source } = quote
    return (
      <li key={source}>
        <blockquote>
          <p>{text}</p>
          <cite>{source}</cite>
        </blockquote>
      </li>
    )
  })
  return (
    <section
      id='quotes'
      style={{
        background: `#1f1f1f url(${process.env.PUBLIC_URL}/images/quotes-bg.jpg) no-repeat center center`
      }}
    >
      <div className='text-container'>
        <div className='row'>
          <div className='two columns header-col'>
            <h1>
              <span>Quotes</span>
            </h1>
          </div>
          <div className='columns flex-container'>
            <ul className='slides'>{quoteSec}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Quote.defaultProps = {
  data: {
    quotes: [
      {
        text:
          'Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
        source: 'Yoda - Starwars'
      },
      {
        text: 'Education consists mostly of what we have unlearned.',
        source: 'Mark Twain - Author, writer, cultural icon'
      }
    ]
  }
}

export default Quote
