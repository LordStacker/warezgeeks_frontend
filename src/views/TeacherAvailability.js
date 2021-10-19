import React, { useState } from "react";
import Calendar from 'react-calendar';

const TeacherAvailability = () => {
    const [value, onChange] = useState(new Date());
    

    return (
        <div className="container">
            <div className="col-md-4">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    );
}

export default TeacherAvailability;