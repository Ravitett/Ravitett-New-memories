import React from 'react'

const Header = () => {
    return (
        <header className="container-fluid bg-dark text-white p-2 mb-2">

        <div className="container">
          <div className="row d-flex justify-content-between align-content-center">
  
            <div className="col d-flex align-items-center justify-content-start">
              <p id="welcome"></p>
            </div>
  
            <div className="col text-center">
              <h1>זכרונות</h1>
              <p>שתף את הסיפור שלך</p>
            </div>
  
            <div className="col d-flex align-items-center justify-content-end">
              <button className="btn btn-outline-light" id="loginBtn" >התחברות/הרשמה</button>
              <button className="btn btn-outline-light" id="logoutBtn" >יציאה</button>
            </div>
  
          </div>      
        </div>
      </header>
    )
}

export default Header
