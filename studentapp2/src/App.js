import { useRef, useState } from "react";
import Data from "./component/Data";

function App() {

  const [studentList, setStudentList] = useState(Data);
  const [branchList, setBranchList] = useState(["CS", "EC", "IT", "AI/DS", "MECH"]);
  const [defaultBranch, setDefaultBranch] = useState("All");
   const [error, setError] = useState("")

  let nameref = useRef(null);
  let rollref = useRef(null);
  let branchref = useRef(null);
  let contactref = useRef(null);

  const handlesubmit = (event) => {
    event.preventDefault();
    let roll = rollref.current.value;
    let name = nameref.current.value;
    let branch = branchref.current.value;
    let contact = contactref.current.value;

    
    let newStudent = { roll, name, branch, contact };

    setStudentList([...studentList, newStudent]);

  }

  const removeStudent = (roll) => {
    if (window.confirm("Do you want to delete it?")) {
      const updatedList = studentList.filter((student) => student.roll !== roll);
      setStudentList(updatedList);
    }
  };

  return <>
    <div className="bg-info-subtle p-2 text-center text-black md-12">
      <span style={{ fontWeight: "bolder" }}>Student App</span>
    </div>

    <form onClick={handlesubmit}>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={rollref} id="roll" type="text" placeholder="Enter student roll number" className="form-control" />
          </div>

          <div className="col-md-6">
            <input ref={nameref} type="text" placeholder="Enter Student Name" className="form-control" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <input ref={contactref} type="text" placeholder="Enter contact number" className="form-control" />
          </div>

          <div className="col-md-6">
            <select ref={branchref} className="form-control">
              <option value={""}>Select branch</option>
              {branchList.map((branch, index) => { return <option key={index} value={branch}>{branch}</option> })}
            </select>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button className="bn btn-success">Add</button>
          </div>

          <div className="col-md-6">
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("CS")}>CS({studentList.filter((student) => student.branch === "CS").length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("EC")}>EC({studentList.filter((student) => student.branch === "EC").length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("IT")}>IT({studentList.filter((student) => student.branch === "IT").length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("AI/DS")}>AI/DS({studentList.filter((student) => student.branch === "AI/DS").length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("MECH")}>MECH({studentList.filter((student) => student.branch === "MECH").length})</button>
          <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("All")}>All</button>
          </div>
        </div>
        </div>
    </form>

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
          {studentList.filter((student) => { return student.branch == defaultBranch || defaultBranch == "All" }).map((student, index) => {
            return <tr key={index}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td>
                <button onClick={()=>removeStudent(student.roll)} className="btn btn-outline-danger">Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    </>
}
export default App;

