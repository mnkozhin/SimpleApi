import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import createClass from 'create-react-class';


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDate: true,
        isTime: true,
        istimeofDay: true,
    };
  this.str="";
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
 handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
   ;
   if (this.state.isDate)
   {
    this.str="date=true&"
    console.log('isDate is selected.');   
  }
   else
     {
        this.str="date=false&"
     console.log('isDate is deselected.');   
     }
    if (this.state.isTime)
   {
     this.str=this.str+"time=true&"
     console.log('isTime is selected.');   
  }
   else
     {
      this.str=this.str+"time=false&"
     console.log('isTime is deselected.');   
     }
      if (this.state.istimeofDay)
   { 
     this.str=this.str+"timeOfday=true"
     console.log('istimeofDay is selected.');   
  }
   else
     {
      this.str=this.str+"timeOfday=false"
     console.log('istimeofDay is deselected.');   
     }
     console.log(this.str);     
      fetch('http://13.53.184.93:3000/current_day?'+this.str, {
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json', 
      method: 'GET', 
      mode: 'cors',  
      redirect: 'follow',  
      referrer: 'no-referrer',
 })
.then(function (response) {
    return response.json()
  })
  .then(function (data) {
      console.log('data', data)
 
 
ReactDOM.render(
<><p>Дата на сервере {data.date}</p>
<p>Время на сервере {data.time}</p>
<p>Время суток на сервере {data.timeofDay}</p></>,
  document.getElementById('datetime'));
  })

     
 }
  
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label> Дата
          <input
            name="isDate"
            type="checkbox"
            checked={this.state.isDate}
 onChange={this.handleInputChange} />
        </label>
        <br />
       <label> Время
          <input
            name="isTime"
            type="checkbox"
            checked={this.state.isTime}
            onChange={this.handleInputChange} />
        </label>
        <br />
         <label> Время суток:
          <input
            name="istimeofDay"
            type="checkbox"
            checked={this.state.istimeofDay}
            onChange={this.handleInputChange} />
        </label>
        <br />
         <button className="btn btn-default" type="submit">Узнать</button>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);

