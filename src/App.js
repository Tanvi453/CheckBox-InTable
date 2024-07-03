
import './App.css';
import { useState } from 'react';

function App() {

  const [student, setStudent] = useState({ fname: "", age: "", email: "", password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("Students")) || []);

  const [checked, setChecked] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    setData([...data, student]);
    localStorage.setItem("Students", JSON.stringify([...data, student]));

  }

  const checkChange = (e) => {
    if (checked.includes(e.target.value)) {
      setChecked(checked.filter((item) => item !== e.target.value));
    }
    else {
      setChecked([...checked, e.target.value]);
    }
  }
  console.log(checked);

  const checkAll = () => {

    if (checked.length === data?.length) {
      setChecked([]);
    }
    else {
      setChecked(data.map((item) => item.fname));
    }

  }


  return (
    <>

      <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg?size=626&ext=jpg&ga=GA1.1.1395991368.1711843200&semt=ais)", height: "955px", width: "100%", backgroundSize: "cover" }} className='flex flex-col justify-center items-center'>

        <div className='flex flex-col items-center gap-[60px] ml-[35%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor='fname' className='text-2xl font-bold text-[#944d15]'>Full Name:-</label>
            <input type='text' name='fname' id='fname' value={student.fname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#635c37] text-[#3c5517] font-bold'/>
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor='age' className='text-2xl font-bold text-[#944d15]'>Age:-</label>
            <input type='number' name='age' id='age' value={student.age} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#635c37] text-[#3c5517] font-bold'/>
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor='email' className='text-2xl font-bold text-[#944d15]'>E-mail:-</label>
            <input type='email' name='email' id='email' value={student.email} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#635c37] text-[#3c5517] font-bold'/>
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor='password' className='text-2xl font-bold text-[#944d15]'>Password:-</label>
            <input type='password' name='password' id='password' value={student.password} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#635c37] text-[#3c5517] font-bold'/>
          </div>

          <div>
            <button type='submit' onClick={handleSubmit} className='h-[40px] w-[200px] bg-transparent text-[16px] font-bold text-[#944d15] border-[#635c37] border-2 text-[23px] rounded'>Submit</button>
          </div>

        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>

        <table>

          <thead>

            <th>Full Name:</th>
            <th>Age:</th>
            <th>E-mail:</th>
            <th>Password:</th>
            <th>Checkbox:<input type='checkbox' value="all" checked={checked.length === data?.length} onChange={(e) => checkAll(e)} /></th>

          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td><input type='checkbox' value={item.fname} checked={checked.includes(item.fname)} onChange={(e) => checkChange(e)} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>



    </>
  );
}

export default App;
