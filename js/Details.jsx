var React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div style={{textAligh: 'left'}} className="container">
        <header className="header">
          <h1></h1>
        </header>
      </div>
    )
  }
}

const { object } = React.PropTypes
Details.propTypes = {
  params: object
}

module.exports = Details
