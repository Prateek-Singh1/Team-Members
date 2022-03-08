import React, { useState } from "react";
import "./Login.css";
import NewMember from "./NewMember";
import "./Signup.css";
import Checkbox from "./Checkbox";
import Delete from "./images/delete.png";

const records = [
  {
    name: "Wayne Rooney",
    Company: "DC United",
    Status: "Active",
    LastUpdate: "7/07/2017",
    Notes: "ManUtd Highest Scorer",
  },
  {
    name: "Ryan Giggs",
    Company: "Manchester United",
    Status: "Closed",
    LastUpdate: "3/08/2011",
    Notes: "Most matches played",
  },
  {
    name: "Zlatan Ibrahimovic",
    Company: "LA Galaxy",
    Status: "Active",
    LastUpdate: "3/09/2018",
    Notes: "I am 'ZLATAN'",
  },
];

const Login = () => {
  const [flag, setFlag] = useState(false);
  const [enteredname, setEnteredName] = useState("");
  const [enteredComapny, setEnteredCompany] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");

  const [data, setdata] = useState(records);

  const changeName = (event) => {
    setEnteredName(event.target.value);
  };

  const changeCompany = (event) => {
    setEnteredCompany(event.target.value);
  };

  const changeStatus = (event) => {
    setEnteredStatus(event.target.value);
  };

  const changeNotes = (event) => {
    setEnteredNotes(event.target.value);
  };

  //--------- Adding new item to table----------------

  const submitForm = (event) => {
    event.preventDefault();

    setdata([
      ...data,
      {
        name: enteredname,
        Company: enteredComapny,
        Status: enteredStatus,
        LastUpdate: "7/07/2017",
        Notes: enteredNotes,
      },
    ]);
    console.log(data);
    setFlag(false);
  };

  const activeHandler = () => {
    let sortdata = data.sort((a, b) => {
      return a.Status - b.Status;
    });
    setdata(sortdata);
  };

  // ------Deleting Row from table----------------

  const removeData = (id) => {
    const del = [...data];
    del.splice(id, 1);
    setdata(del);
  };

  return (
    <>
      <main>
        <div className="mainContainer">
          <div className="header">
            <h1>Team Members</h1>
            <button className="addMembers" onClick={() => setFlag(true)}>
              Add Members <span className="plus">+</span>
            </button>
          </div>

          <div className="selector">
            <Checkbox />
            <select>
              <option value="selectAll">Status</option>
              <option value="">Active</option>
              <option value="selectAll">Closed</option>
            </select>
          </div>
          <div>
            <table>
              <tr>
                <th className="table-chk-box">
                  <input type="checkbox" className="table-chk-box" />
                </th>
                <th>Name</th>
                <th>Company</th>
                <th>Status</th>
                <th>Last Update</th>
                <th>Notes</th>
                <th></th>
              </tr>
              {data.map((val, id) => {
                return (
                  <tr>
                    <td className="table-chk-box">
                      <input type="checkbox" className="table-chk-box" />
                    </td>
                    <td>{val.name}</td>
                    <td>{val.Company}</td>
                    <td>{val.Status}</td>
                    <td>{val.LastUpdate}</td>
                    <td>{val.Notes}</td>
                    <td>
                      <img src={Delete} onClick={() => removeData(id)} />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <NewMember trigger={flag} setTrigger={setFlag}>
          <div className="box">
            <form onSubmit={submitForm}>
              <h2>Add members</h2>
              <label for="name">Name</label>
              <br />
              <input type="text" className="name" onChange={changeName} />
              <br />
              <label for="name">Company</label>
              <br />
              <input type="text" className="company" onChange={changeCompany} />
              <br />
              <label for="name">Status</label>
              <br />
              <input type="text" className="status" onChange={changeStatus} />
              <br />
              <label for="name">Notes</label>
              <br />
              <input type="text" className="notes" onChange={changeNotes} />
              <br />
              <div className="buttons">
                <button className="cancel" onClick={() => setFlag(false)}>
                  Cancel
                </button>

                <button type="submit" className="save" value="save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </NewMember>
      </main>
    </>
  );
};

export default Login;
