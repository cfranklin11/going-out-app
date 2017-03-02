class HelloWorld extends React.Component {
  handleClick() {
    $.get({
      url: '/api/restaurants/locations',
      credentials: 'same-origin',
      data: {
        locations: { query: 'melbourne' },
      },
    }, (data) => {
      console.log(data)
    });
  }

  render () {
    return (
      <div>
        <button type="button" onClick={ this.handleClick.bind(this) }>Click Me</button>
      </div>
    );
  }
}
