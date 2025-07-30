import { ParentComponent } from 'solid-js'

const Layout: ParentComponent = (props) => {
  return (
    <div class="app">
      <header class="app-header">
        <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="/">SolidJS + Rust</a>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main class="main-content">
        <div class="uk-container">
          {props.children}
        </div>
      </main>

      <footer class="app-footer">
        <div class="uk-container">
          <div class="uk-grid-match" uk-grid>
            <div class="uk-width-1-2@m">
              <p>&copy; 2024 SolidJS + Rust App. Built with ❤️</p>
            </div>
            <div class="uk-width-1-2@m uk-text-right@m">
              <p>
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a> | 
                <a href="#">Support</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 