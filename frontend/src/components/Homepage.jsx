import React from 'react';
import MenuH from './MenuH';
import '../css/style.css';

function Homepage() {
  return (
    <div>
      <MenuH />
      <div className="container">
        <div className="content">
        <h1>Jelentkezés</h1>
        
          <input type="text" className="inp" placeholder="Name"/> <br/>
          <input type="email" className="inp" placeholder="Email"/> <br/>
          <input type="text" className="inp" placeholder="Telefonszám"/> <br/>
          <input type="checkbox" className="check"/> <p>Elolvastam és elfogadom az Adatkezelési Tájékoztatót </p>
          <button class="btn">Elküld</button>

        </div>
      

      </div>
     
    </div>
  )
}

export default Homepage
