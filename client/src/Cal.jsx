import React, { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';
function Cal(props) {
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability
  })
  return (


    <div className='calpage'>

  


      <Calendar />
    </div>
  );
}
 
export default Cal;
