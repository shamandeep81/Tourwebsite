import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home';
import Card from './components/Card';
const App = () => {
  return (
    <div className="wrapper">

      <NavBar />

      <Home />
      <h3 className='willvisit'><i className='required'> Required</i> to Visit</h3>

      <div className="card-container">

        <img className="blueSea" src="https://images.pexels.com/photos/12311999/pexels-photo-12311999.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />

        <Card className="cardstyle"
          img={"https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={<div><h5>store</h5> <a href="">Susam Media</a> <br />4 people <br /> 10 people</div>}
        />

        <Card className="cardstyle"
          img={"https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={<div>Store <a href="">Susam Media</a> <br />4 people <br /> 10 people</div>}
        />


        <Card className="cardstyle"
          img={"https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&w=600"}
          title={<div>Store <a href="">Susam Media</a> <br />4 people <br /> 10 people</div>}
        />

      </div>

    </div>

  )
}

export default App;