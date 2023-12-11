import React, { useState } from "react";

export const DaysUntilChristmas = () => {
  //
  // const [currentDate, setCurrentDate] = useState(getDate());
  const [countDownDateState, setcountDownDateState] = useState(countDown());
  //
  // function getDate() {
  //   const today = new Date();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   const date = today.getDate();
  //   return `${month}/${date}/${year}`;
  // }
  //
  function countDown() {
    //Set the date we're counting down to
    const countDownDate = new Date("Dec 25, 2023, 23:00:00").getTime();
    console.log("This is countDownDate", countDownDate);

    //Get today's date and time
    const now = new Date().getTime();
    console.log("now", now);

    //Find the distance between now and the count down date
    const distance = countDownDate - now;
    console.log("This is distance", distance);

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(
      "Time calculations",
      days +
        "Days " +
        hours +
        "Hours " +
        minutes +
        "Minutes " +
        seconds +
        "Seconds "
    );

    // return `${
    //   days +
    //   " Days " +
    //   hours +
    //   " Hours " +
    //   minutes +
    //   " Minutes " +
    //   seconds +
    //   " Seconds "
    // }`;

    // return `${days}`;
    return days;
  }

  //
  return (
    <div>
      {/* <h2>Christmas Countdown</h2> */}
      {/* <div>
        <h4>Today's Date: {currentDate}</h4>
      </div> */}
      <div>
        {/* <h4>Days Until Christmas: {countDownDateState} </h4> */}
        <h2 className="Days-until-christmas-h2">
          {countDownDateState} Days Until Christmas{" "}
        </h2>
      </div>
    </div>
  );
};
