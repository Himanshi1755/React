import { Component } from "react";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      studentdata: {
        name: "",
        email: "",
        password: "",

      }

    }
  }


  submitStudent = () => {
    let name = this.nameInput.value;
    let email = this.emailInput.value;
    let password = this.passwordInput.value;
    let repassword = this.repasswordInput.value;

    this.setState({ name, email, password, repassword });

  }
  render() {
    return <>

      <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-md-6">
            <div className="img1">
              <img src="img1.png"></img>
            </div>
          </div>

          <div className="col-md-6" id="main" >
            <div className="form-box p-4 shadow " >

              <h2>Sign Up</h2>
              <label className="label1">Full Name</label>
              <input id="name" ref={(nameObject) => this.nameInput = nameObject} type="text" placeholder="name" className="form-control mb-2" />
              <label className="label1"  >Email</label>
              <input id="email" ref={(emailObject) => this.emailInput = emailObject} type="email" placeholder="email" className="form-control mb-2" />
              <label className="label1">Password</label>
              <input id="password" ref={(passwordObject) => this.passwordInput = passwordObject} type="Password" placeholder="**********" className="form-control mb-2" />
              <label className="label1">Re-Password</label>
              <input id="repassword" ref={(repasswordObject) => this.repasswordInput = repasswordObject} type="tel" placeholder="**********" className="form-control mb-2" />
              <div className="checkbox">
                <input type="checkbox" className="c1" />
                <span>I agree to the term of the user</span>
              </div>
              <div className="sign">
                <div>
                  <button onClick={this.submitStudent} className="signup mt-3">Sign Up</button>
                </div>
                <div>
                  <button className="signin mt-3">Sign In</button>
                  <i class="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="box">
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
        <p>{this.state.repassword}</p>
      </div>
            </div>
            
          </div>

        </div>
      </div>

      
    </>
  }
}
export default App;


