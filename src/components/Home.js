import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { SlotContext } from '../SlotContext';

function Home() {
    const [timeSlot, setTimeSlot] = useState([])
    const {ar,setAr} = useContext(SlotContext)
    
    const nnn = [];
    ar.map(item => (
        nnn.push(item.id.abc)
    ))

    console.log("One", nnn)
    const history = useHistory();

    const goTo = (id) => {
        history.push(`/slot/${id}`)
    }

    const createTimeSlot = (fromTime, toTime) => {
        let startTime = moment(fromTime, 'hh:mm A');
        let endTime = moment(toTime, 'hh:mm A');
        if(endTime.isBefore(startTime)){
        endTime.add(1, 'day');
        }
        let arr = [];
        while(startTime <= endTime){
        arr.push(new moment(startTime).format('hh:mm A'));
        startTime.add(1, 'hour')
        }
        return arr;
    }
    
    useEffect(() => {
        setTimeSlot(createTimeSlot('09:00 AM', '05:00 PM'));
    }, []);
    
    return (
        <div className="App">
            <h1>Book Your Slot</h1>
        {
            timeSlot.map((item, index) => (
                
                <div key={item} className={nnn.includes(item)? "red tab" : "green tab"} onClick={() => goTo(item)}>
                    {timeSlot[index+1] ?  item : null}
                    {timeSlot[index+1] ? '-' + timeSlot[index + 1] : null}        
                </div>
            ))
        }
        </div>
    );

}

export default Home
