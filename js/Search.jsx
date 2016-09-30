const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = () => (
  <div className="container">
    <div className="shows">
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

// {...show} is the same as saying poster=show.poster actor=show.actor etc

module.exports = Search
