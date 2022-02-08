import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i class="fab fa-google" />
            <i class="fab fa-facebook-square" />
            <i class="fab fa-linkedin" />
            <i class="fab fa-twitter-square" />
            <i class="fab fa-apple" />
          </div>
          <p className="divider">
            <span>OR</span>
          </p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Login</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i class="fas fa-toggle-on" />
          <i class="fas fa-toggle-off" />
        </div>
      </div>
    </div>
  );
}

export default App;
