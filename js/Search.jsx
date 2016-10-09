const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string, arrayOf } = React.PropTypes
const { connector } = require('./Store')

// if you use class use constructor instead of getInitialState

// class Search extends React.Component{
//   constructor(props) {
//     super(props)
//
//     this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
//   }
// }

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className="container">
        <Header showSearch />
        <div className="shows">
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// {...show} is the same as saying poster=show.poster actor=show.actor etc

module.exports = connector(Search)
