const Login = () => {
  return (
    <div class="uk-section">
      <div class="auth-form">
        <div class="uk-card uk-card-default">
          <div class="form-header">
            <h2>Sign In</h2>
            <p>Welcome back! Please sign in to your account.</p>
          </div>
          
          <form class="uk-form-stacked">
            <div class="uk-margin">
              <label class="uk-form-label" for="email">Email</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            
            <div class="uk-margin">
              <label class="uk-form-label" for="password">Password</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="password" type="password" placeholder="Enter your password" />
              </div>
            </div>
            
            <div class="uk-margin">
              <button class="uk-button uk-button-primary uk-width-1-1">Sign In</button>
            </div>
          </form>
          
          <div class="form-footer">
            <p>Don't have an account? <a href="/register">Sign up here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login 