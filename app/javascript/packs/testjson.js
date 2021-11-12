 import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

let greeting;
function Data(props) {
  return <><p>Дата на сервере {props.date}</p>
<p>Время на сервере {props.time}</p>
<p>Время суток на сервере {props.timeofDay}</p></>;
}


fetch('http://13.53.184.93:3000/current_day?date=true&time=true&timeOfday=true')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

      console.log('data', data)
 
 
const element = <Data date={data.date} time={data.time} timeofDay={data.timeofDay}/>;

ReactDOM.render(
element,
  document.getElementById('datetime'));
  })






