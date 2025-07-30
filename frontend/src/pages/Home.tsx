const Home = () => {
  return (
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-text-center">
          <h1 class="uk-heading-primary">Welcome to SolidJS + Rust</h1>
          <p class="uk-text-large">A modern, fast web application built with cutting-edge technologies</p>
          
          <div class="uk-margin-large-top">
            <a href="/login" class="uk-button uk-button-primary uk-button-large uk-margin-right">
              Get Started
            </a>
            <a href="/register" class="uk-button uk-button-default uk-button-large">
              Sign Up
            </a>
          </div>
        </div>

        <div class="uk-margin-xlarge-top">
          <div class="uk-grid-match" uk-grid>
            <div class="uk-width-1-3@m">
              <div class="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>🚀 Fast Performance</h3>
                <p>Built with SolidJS for lightning-fast reactivity and Rust for blazing-fast backend.</p>
              </div>
            </div>
            <div class="uk-width-1-3@m">
              <div class="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>🔒 Secure Authentication</h3>
                <p>Powered by Supabase for secure, scalable user authentication and data management.</p>
              </div>
            </div>
            <div class="uk-width-1-3@m">
              <div class="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>🎨 Modern UI</h3>
                <p>Beautiful, responsive design with UIKit and custom SCSS for the best user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 