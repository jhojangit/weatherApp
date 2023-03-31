import React from 'react'

const ErrorPermission = () => {
  return (
    <div className="card_error">
        <h3>Debes aceptar los permisos de geolocalización para usar esta aplicación.</h3>
        <br/>
        <h3>puedes configurarlo dando clic <a href="https://support.google.com/chrome/answer/142065?hl=es&co=GENIE.Platform%3DAndroid" target="_blank" rel="noopener noreferrer">aquí 👀</a>
</h3>
    </div>
  )
}

export default ErrorPermission