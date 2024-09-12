import { useEffect, useState } from 'react'
import './App.css'
import { getTimeStep } from './totp/getTimeStep'
import { makeSecretKey } from './totp/makeSecretKey'
import { makeURL } from './totp/makeURL'
import { makeOTP } from './totp/makeOTP'
import QRCode from 'react-qr-code'

function App() {
  const [timeStep, setTimeStep] = useState(getTimeStep())
  const [secret, setSecret] = useState(makeSecretKey())
  const [otp, setOtp] = useState('')

  useEffect(() => {
    makeOTP(secret).then((otp) => setOtp(otp))
  }, [secret, timeStep])

  useEffect(() => {
    const updateTimeStep = () => {
      setTimeStep(getTimeStep())
    }
    const update = () => {
      updateTimeStep()
      requestAnimationFrame(update)
    }
    update()
  }, [])


  return (
    <>
      <h1>TOTP</h1>
      <div className="card">
        <button onClick={() => setSecret(makeSecretKey())}>
          refresh secret
        </button>
        <p>
          time step: {timeStep}
        </p>
        <p>
          secret: {secret}
        </p>
        <p>
          url: {makeURL({ secret, issuer: 'hello', name: 'john' })}
        </p>
        <p>
          <QRCode value={makeURL({ secret, issuer: 'hello', name: 'john' })} size={200} />
        </p>
        <p>
          OTP: {otp}
        </p>
      </div>
    </>
  )
}

export default App
