import React, { useState } from 'react';
import './Contact.css';
import { db } from './firebase';
import Button from 'react-bootstrap/Button'
const Contact = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [watch , setWatch] = useState("");

  const [loader,setLoader] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoader(true)

    db.collection('contacts').add({
     name:name,
     email:email,
     message:message,
     watch:watch,
    })
    .then(() => {
      alert('เราได้รับรายงานของท่าน')
      setLoader(false)
    })
    .catch(error => {
      alert(error.message);
      setLoader(false);
    });

    setName("");
    setEmail("");
    setMessage("");
    setWatch("");
  };
  return (
  <form className="form" on onSubmit=
  {handleSubmit}> 
  
    <h1>รายงานปัญหา</h1>


    <label>ชื่อ-นามสกุล</label>
    <input placeholder ="โปรดระบุชื่อ"
    required 
    value={name}
    onChange={(e) => setName(e.target.value) }
    />

    <label>อีเมล</label>
    <input placeholder ="โปรดระบุอีเมล"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value) }
    />

    <label class="Watch">กรุณาเลือกตู้น้ำ</label>
    <select class="Watch"
      required
      value={watch}
      onChange={(e) => setWatch(e.target.value) }>
      <option value="" disabled selected>กรุณาเลือกตู้น้ำ</option> 
      <optgroup label="ชั้น 2">
        <option value="ตู้กดน้ำข้างหน้าห้อง Self AccessLearning CenterFacculty of Engineering"
        >ตู้กดน้ำข้างหน้าห้อง Self AccessLearning CenterFacculty of Engineering</option>
      </optgroup>

      <optgroup label="ชั้น 3">
        <option value="ตู้กดน้ำหน้าห้องน้ำชาย 300-5"
        >ตู้กดน้ำหน้าห้องน้ำชาย 300-5
        </option>

        <option value="ตู้กดน้ำข้างหน้าห้อง 316 "
        >ตู้กดน้ำข้างหน้าห้อง 316
        </option>

        <option value="ตู้กดน้ำข้างขวาห้อง 326"
        >ตู้กดน้ำข้างขวาห้อง 326
        </option>
      </optgroup>


      <optgroup label="ชั้น 4">
        <option value="ตู้กดน้ำข้างหน้าห้อง วศ.419"
        >ตู้กดน้ำข้างหน้าห้อง วศ.419</option>
      </optgroup>


      <optgroup label="ชั้น 5">
        <option value="ตู้กดน้ำหน้าห้องน้ำซ้ายมือห้อง 509"
        >ตู้กดน้ำหน้าห้องน้ำซ้ายมือห้อง 509</option>

        <option value="ตู้กดน้ำหน้าห้อง505/2"
        >ตู้กดน้ำหน้าห้อง505/2</option>

        <option value="ตู้กดน้ำหน้าห้อง502"
        >ตู้กดน้ำหน้าห้อง502</option>
      </optgroup>

      <optgroup label="ชั้น 6">
        <option value="ตู้กดน้ำหน้าห้อง502"
        >ตู้กดน้ำหน้าห้อง502</option>

        <option value="ตู้กดน้ำหน้าห้อง502"
        >ตู้กดน้ำหน้าห้อง502</option>

        <option value="ตู้กดน้ำหน้าห้อง 608"
        >ตู้กดน้ำหน้าห้อง 608</option>

      </optgroup>

      <optgroup label="ชั้น 7">
        <option value="ตู้กดน้ำหน้าห้องวศ.709 หน่วยโสดทัศนูปกรณ์"
        >ตู้กดน้ำหน้าห้องวศ.709 หน่วยโสดทัศนูปกรณ์</option>
      </optgroup>
      
    </select>

    <label>เหตุผล</label>
    <textarea 
      placeholder = "โปรดระบุเหตุผล"
      required
      value={message}
      onChange={(e) => setMessage(e.target.value) }
    ></textarea>


    <Button type="submit" style={{background : loader
    ? "#ccc" : "rgb(0, 81, 255)"}}>
      รายงานปัญหา</Button>



  </form>
  );
};
export default Contact;