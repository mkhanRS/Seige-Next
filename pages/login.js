import LoginLeft from '../components/pages/login/LoginLeft';
import LoginRight from '../components/pages/login/LoginRight';

const Login = () => {
  return (
    <div style={{ position: "relative", minHeight: "calc(100vh - var(--size-nav))" }}>
      <div className="container flow">

        <div className="columns" style={{ "--gap": "1rem", height: "820px" }}>
          <div className="left__wrapper">
            <LoginLeft />
            {/* <span className='login__footer'>© 2022 Saige-QA. All rights reserved.</span> */}
          </div>
          <div className="right__wrapper">
            <LoginRight />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login