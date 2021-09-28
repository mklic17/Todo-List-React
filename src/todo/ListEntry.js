import React from 'react'
import './todo.css'
import 'font-awesome/css/font-awesome.css'



export default function ListEntry({title, description, createdBy, createdDate, complete, dateCompleted}) {
    if(complete === true) {
        let dateToComplete = (dateCompleted - createdDate)/(1000);
        return (
            <div id="listStyling">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>{ createdBy }</p>
                <p>{ createdDate }</p>
                <p>Completed <i class="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago </p>
            </div>
        )
    } else {
        return (
            <div id="listStyling">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>{createdBy}</p>
                <p>{createdDate}</p>
                <p>Not Completed <i class="fa fa-times" id="redFont"></i></p>
            </div>
        )
    }
   
}