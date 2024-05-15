import React from 'react'
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
// import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function CalendarComp() {
 
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    )
}
