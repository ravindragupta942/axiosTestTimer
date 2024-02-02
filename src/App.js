import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from "axios";

function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    // axios.get(`${baseURL}/101`).then((response) => {
    //   console.log('check response.data', response.data);
    // });
  },[]);

  const [name, setName] = useState(''); 
  const [score, setScore] = useState(''); 
  const [time, setTime] = useState(''); 
  let intervalId = useRef(null);

  const handleInput = (data) => {
    const checkName = data.target.name;
    if(checkName === 'name'){
      setName(data.target.value);
    } else if(checkName === 'score'){
      setScore(data.target.value);
    } else {
      setTime(data.target.value);
    }
  }

  const submitFn = () => {
      const data = {
        "userId": name,
        "title": time,
        "body": 'kuch na'
      };
      axios
      .post(baseURL, data)
      .then((response) => {
        console.log('----------', response.data);
      });
  }


  const startFn = () => {
    const sec = 1;
    intervalId.current = setInterval(() => {
      setTime(sec++);
    },1000);
  }

  const endFn = () => {
    clearInterval(intervalId.current);
    console.log('time ===', time);
  }

  return (
    <div className="App">
      <h1>Student Form</h1>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={(event) => handleInput(event)} />
      </div>
      <div>
        <label>Score</label>
        <input type="text" name="score" onChange={(event) => handleInput(event)}/>
      </div>
      <div>
        <label>Time Taken</label>
        <input type="text" name="time" onChange={(event) => handleInput(event)}/>
      </div>
      <div>
        <button type="button" onClick={() => submitFn()}>Submit</button>
      </div>
      <div>
        <button type="button" onClick={() => startFn()}>Start {time}</button>
      </div>
      <div>
        <button type="button" onClick={() => endFn()}>End</button>
      </div>
    </div>
  );
}

export default App;
