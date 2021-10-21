import React, { useState } from "react";
import CalendarTemplate from 'availability-calendar-react';

const TeacherAvailability = () => {
    const [availability, setAvailability] = useState([])
    const Calendar = CalendarTemplate({
        availability,
        setAvailability,
        startTime: "11:00",
        endTime: "20:00"
    })
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <img src="http://lorempixel.com/400/200/sports" className="rounded mx-auto d-block" alt="..."></img>
                    <p>Jose Miguel Reyes</p>

                    <div className="grid d-flex justify-content-evenly">
                        <button type="button" class="g-col-4 btn btn-danger">Edit Info</button>
                        <button type="button" class="g-col-4 btn btn-danger">Request's</button>
                        <button type="button" class="g-col-4 btn btn-danger">Contact Us</button>
                    </div>
                </div>

                <div className="col-md-8">
                    <Calendar />
                </div>
            </div>
        </>
    )
}

export default TeacherAvailability;