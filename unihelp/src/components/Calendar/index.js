import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";

const BigCalendar = ({ uni }) => {
    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });
    console.log(uni)
    const getEvents = (uni) => {
            const events = [
                {
                    title: "Application Closing Date",
                    start: new Date(2023, 0, 31),
                    end: new Date(2023, 0, 31),

                },
                {
                    title: "Winter Break",
                    start: new Date(2022, 11, 2),
                    end: new Date(2023, 0, 8)
                }
                 
            ]
           
        
        console.log(events)
        return events;
        }
    //const [allEvents, setAllEvents] = useState([])
    
    const events = getEvents(uni);

    //AllEvents(events)
    /*
    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {
            
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("CLASH");
                break;
            }

        }


        setAllEvents([...allEvents, newEvent]);
    };
    */
    return (
        <div className="Cal">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height:"50vh", width:"50vw"}}
            />
        </div>
    )
}

export default BigCalendar;