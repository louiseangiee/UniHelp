import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";



const BigCalendar = (uni) => {
    //console.log(uni.uni)
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
    const getEvents = (uni) => {
        var event = []
        if (uni.uni === "nus") {
            console.log(uni.uni)
            event = [
                {
                    title: "Application Closing Date",
                    start: new Date(2023, 0, 31),
                    end: new Date(2023, 0, 31),

                }
            ]
        }

        if (uni.uni === "ntu") {
            console.log(uni.uni)
            event = [
                {
                    title: "Application Closing Date",
                    start: new Date(2023, 1, 21),
                    end: new Date(2023, 1, 21),

                }
            ]
        }

        if (uni.uni === "smu") {
            console.log(uni.uni)
            event = [
                {
                    title: "Application Closing Date",
                    start: new Date(2023, 2, 19),
                    end: new Date(2023, 2, 19),

                }
            ]
        }
        console.log(event)

        return event;
    }
    const events = getEvents(uni);

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

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

    console.log(allEvents)
    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    )
}

export default BigCalendar;