

class ProductList extends React.Component {
  render() {
    return (
      // <div className='ui unstackable items'>
      <Product />
      <Bdog />
      {/* </div> */}
    );
  }
}
class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
          <a>Fort Knight</a>
          <p>Authentic</p>
        </div>
        <div className='extra'>
          <span>Submitted</span>
          <img className='images/avatar/daniel.jpg' />
          </div>
        </div>
      </div>
    );
  }
}
class Bdog extends React.component {
  render() {
    return (
      <div>
      <h1>bdog</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
