var MyComponent = React.createClass({
  render: function(){
    return (
        <h1>Hello, cruel world!</h1>
    );
  }
});

React.render(
  <MyComponent/>,
  document.getElementById("example")
);