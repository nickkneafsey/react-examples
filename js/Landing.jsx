const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className="home-info">
    <h1 className="title">svideoz</h1>
    <input type="text" className="search" placeholder='Search' />
    <Link to='/search' className="browse-all"> or Browse All</Link>
  </div>
)

module.exports = Landing
