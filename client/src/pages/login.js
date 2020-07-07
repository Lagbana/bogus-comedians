import React from 'react'

const Login = () => {
    return (
     <div style={{
         margin: '8%',
         textAlign: 'center'
     }}>
      <button
        className="ui teal button"
        onClick={() => window.open("http://localhost:8080/v1/api/auth/github/", "_self")}
      >
        Login With Github
      </button>
      </div>
    );
}

export default Login