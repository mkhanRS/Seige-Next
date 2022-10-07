const LoginLeft = () => {
  return (
    <div className="form__wrapper" style={{ padding: "1rem", width: "100%" }}>
      <div>
        <span className="login__header">Sign in</span>
      </div>

      <div className="d--f" style={{ "--flow-space": "2rem" }}>

        <form className="login__form" action="">

          <div style={{ marginTop: "0.75rem" }}>
            <label htmlFor="email">E-mail</label>
            <input style={{marginTop: ".5rem"}} className="form__input" type="text" name="email" placeholder="Enter E-mail" />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="password">Password</label>
            <input style={{marginTop: ".5rem"}} className="form__input" type="password" name="password" placeholder="Enter Password" />
          </div>

          <div className="d--f ai--b columns" style={{ marginTop: "2rem" }}>
            <div>
              <input type="checkbox" name="remember" />
              <label style={{ paddingLeft: "0.5rem" }} htmlFor="remember">Remember me</label>
            </div>
            <div className="d--f jc--fe">
              <span className="f__password__text">Forgot Password?</span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <button className="login__btn">Login</button>
          </div>

        </form>

      </div>

      <span className='login__footer'>© 2022 Saige-QA. All rights reserved.</span>

    </div>
  )
}

export default LoginLeft