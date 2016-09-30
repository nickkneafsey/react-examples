const React = require('react')
const ShowCard = (props) => (
  <div className="show-card">
    <img src={`public/img/posters/${props.poster}`} className="show-card-img" />
    <div className="show-card-text">
      <h3 className="show-card-title">{props.title}</h3>
      <h4 className="show-card-year">({props.year})</h4>
      <p className="show-card-description">{props.description}</p>
    </div>
  </div>
)

// This helps with debugging

const { string } = React.PropTypes
// same as const string = React.PropTypes.string

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired
}
// isRequired is optional

module.exports = ShowCard
