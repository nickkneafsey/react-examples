const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object } = React.PropTypes

// if you use class use constructor instead of getInitialState

// class Search extends React.Component{
//   constructor(props) {
//     super(props)
//
//     this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
//   }
// }

const Search = React.createClass({
  getInitialState (props) {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  render () {
    return (
      <div className="container">
        <Header handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} showSearch />
        <div className="shows">
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// {...show} is the same as saying poster=show.poster actor=show.actor etc

module.exports = Search
