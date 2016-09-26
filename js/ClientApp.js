var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are cool', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Props errywhere', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are pretty good', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
