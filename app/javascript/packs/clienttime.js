import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
console.log("Today's date is "+date);


ReactDOM.render(
<>
<p>Дата на клиенте {date}</p>
<p>Время на клиенте {time}</p></>,
  document.getElementById('clienttime')
);

