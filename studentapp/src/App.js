import { Component } from "react";
import Data from "./Data";
import "./App.css";
class App extends Component {
  constructor() {
    super()
    this.state = {
      studentList: Data,
      branchList: ["CS", "IT", "EC", "AI/ML"],
    }
  }
  addStudent = () => {
    let rollNo = Number(this.rollInput.value);
    let name = this.nameInput.value;
    let branch = this.branchInput.value;
    let contact = Number(this.contactInput.value);
    let newStudent = { rollNo,name,contact,branch };
    //     this.state.studentList.map((student,index)=>{
    //       if(student===newStudent){
    //         window.alert("Already Exist");
    //       }
    //       else{
    // this.setState({studentList:[...this.state.studentList,newStudent]});
    //       }
    //     })
    if (!rollNo || !name || !contact || !branch) {
      window.alert("Plz fill all fields.");
      return;
    }

    // let exist = false;
    // for (let student of this.state.studentList) {
    //   if (student.rollNo === roll && student.name === name && student.contact===contact && student.branch===branch) {
    //     exist = true;
    //     break;
    //   }
    // }
    // if (exist) {
    //   window.alert("Student already exists");
    //   return;
    // }
    // this.setState({studentList:[...this.state.studentList,newStudent]});

    // const check = this.state.studentList.some(student => student.rollNo === roll && student.name === name && student.contact === contact && student.branch === branch);

    let check = this.state.studentList.some(student => student.rollNo === rollNo);
    if (check) {
      window.alert("Student already exists");
      
    }
    else {
      this.setState({ studentList: [...this.state.studentList, newStudent] });
    }
  }

  render() {
    return <>
      <div className="bg-info-subtle p-2 text-center text-black md-12">
        <span style={{ fontWeight: "bolder" }}>Student App</span>
      </div>

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={(rollObject) => this.rollInput = rollObject} id="roll" type="text" placeholder="Enter student roll number" className="form-control" />
          </div>

          <div className="col-md-6">
            <input ref={(nameObject) => this.nameInput = nameObject} type="text" placeholder="Enter Student Name" className="form-control" />
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-md-6">
            <input ref={(contactObject) => this.contactInput = contactObject} type="text" placeholder="Enter contact number" className="form-control" />
          </div>

          <div className="col-md-6">
            <select ref={(branchObject) => this.branchInput = branchObject} className="form-control">
              <option value={""}>Select branch</option>
              {this.state.branchList.map((branch, index) => { return <option key={index} value={branch}>{branch}</option> })}
            </select>

          </div>
        </div>


        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button onClick={this.addStudent} className="bn btn-success">Add</button>
          </div>
        </div>


        <div></div>
      </div>



      <div className="container mt-3">
        <table className="table  table-hover table-borderless">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.map((student, index) => {
              return <tr key={index}>
                {/* {this.state.studentList.filter((student)=>{return student.branch == this.state.defaultBranch || this.state.defaultBranch=="All"}).map((student,index)=>{return <tr key={index}> */}
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.contact}</td>
                <td>
                  <button className="btn btn-outline-danger">Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

    </>
  }
}
export default App;


