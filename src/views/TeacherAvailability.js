import React, { useState } from "react";
//import CalendarTemplate from 'availability-calendar-react';
import banner from '../img/banner.png';

const TeacherAvailability = () => {
/*    const [availability, setAvailability] = useState([])
    const Calendar = CalendarTemplate({
        availability,
        setAvailability
    })*/
    return (<>
        <div className="row backgroundimg ">
            <div className="col-md-12">
                <img src={banner} className="img-fluid" alt="Responsive image" />
            </div>
        </div>
    </>)
}

export default TeacherAvailability;