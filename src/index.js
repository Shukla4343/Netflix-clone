
import React from 'react';
import ReactDOM from 'react-dom';
import  Card from "./Cards";
import "./index.css";

ReactDOM.render(
    <>

    <h1 className='heading_style'>List of Netflix Shows</h1>
     <Card
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title= "A Netflix Orignal Series"
        sname = 'DARK'
        link="https://www.netflix.com/in/title/80100172"
     /> 
      <Card
        imgsrc="https://wallpapercave.com/dwp1x/wp7418473.jpg"
        title= "A Netflix Orignal Series"
        sname = 'extra curricular'
        link="https://www.netflix.com/in/title/80990668?source=35"
        
     />
    
     <Card
        imgsrc="https://wallpapercave.com/wp/wp4884867.jpg"
        title= "A Netflix Orignal Series"
        sname = 'Stranger Things'
        link="https://www.netflix.com/in/title/80057281"
     />
     
    </>,
    document.getElementById("root")
);







