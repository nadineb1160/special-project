import React, {useState, useEffect} from "react";
import API from "../../Utils/API"

var moment = require('moment');


function EventCard(props) {
 

    const deleteEvent = (event) => {
        let deleteConfirm = window.confirm("Are you sure you want to delete this record?")
        if(deleteConfirm){
            API.deleteEvent(event).then(res => {
                if(res.data === 1){
                    window.location.reload();
                }
            })
        }
    }


    return (

        <div id={props.id} className="collapse show" aria-labelledby={props.labelledby} data-parent={"#accordionExample"}>

            <div className="card-body">
                <div className="card mx-auto" style={{ maxWidth: "50rem", border: "solid 1px " + props.data.color, borderLeft: "solid 8px" + props.data.color, opacity: ".8" }}>
                    <div className="card-header text-dark" style={{ borderBottom: "solid 1px " + props.data.color }} >
                        <div className="row">
                            <div className="col-md-10">
                                <h5 className="float-left" style={{ color: props.data.color, fontWeight: "800" }}>{props.data.Event.name}</h5>
                            </div>
                            <div className="col-md-2 mb-2 float-right">
                                {props.data.mask ? <span className="mr-2" role="img" aria-label="face with medical mask">😷</span> : null}
                                {props.data.sixFeet ? <span className="mr-2" role="img" aria-label="footprints">👣</span> : null}
                                {props.data.outside ? <span role="img" aria-label="national-park">🏞</span> : null}
                            </div>

                        </div>
                    </div>
                    <div>
                    <button className="float-right select-button" id={`delete-${props.data.id}`}  value={props.data.id} onClick={e => deleteEvent(props.data.id)}><i className="far fa-trash-alt pt-2 px-2 dark-purple"></i></button>
                    <a href={(`/activities/${props.data.id}`)} type="button" className="float-right select-button" id={`update-${props.data.id}`} value={props.data.id} onClick={e => console.log("edit")}><i className="fas fa-edit float-right pt-2 px-2 dark-purple"></i></a>
                    </div>

                    <div className="card-body" style={{ fontSize: "larger" }}>
                        <div className="row">
                            <div className="col-md-1 text-sm-left text-md-center">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="col-md-11">
                                <h6 className="float-left text-sm-left text-md-center">{moment.utc(props.data.startDate).format("MMM DD")}, {props.data.startTime.split(":")[0] > 12 ? `${props.data.startTime.split(":")[0]-12}:${props.data.startTime.split(":")[1]} PM` : `${props.data.startTime.split(":")[0]}:${props.data.startTime.split(":")[1]} AM`} - {moment.utc(props.data.endDate).format("MMM DD")}, {props.data.endTime.split(":")[0] > 12 ? `${props.data.endTime.split(":")[0]-12}:${props.data.endTime.split(":")[1]} PM` : `${props.data.endTime.split(":")[0]}:${props.data.endTime.split(":")[1]} AM`}</h6>
                            </div>
                            
                        </div>

                        <div className="row" style={{ fontSize: "larger" }}>
                            <div className="col-md-1 text-sm-left text-md-center">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col-md-11">
                                <h6 className="float-left text-sm-left text-md-center">{props.data.Event.location}</h6>
                            </div>
                        </div>

                        <div className="row" style={{ fontSize: "larger" }}>
                            <div className="col-md-1 text-sm-left text-md-center">
                                <i className="far fa-sticky-note"></i>
                            </div>
                            <div className="col-md-11">
                                 <h6 className="float-left text-sm-left text-md-center">{props.data.notes.length > 0 ? props.data.notes : "n/a"}</h6>
                            </div>
                        </div>

                        <div className="row" style={{ fontSize: "larger" }}>
                            <div className="col-md-1 text-sm-left text-md-center">
                                <i className="fas fa-users"></i> 
                            </div>
                            <div className="col-md-11">
                                <h6 className="float-left text-sm-left text-md-center">{props.data.contacts.length > 0 ? props.data.contacts : "none" }</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventCard;