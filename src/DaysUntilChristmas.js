import React from "react";

export const DaysUntilChristmas = () => {
  function daysUntilChristmasCounter() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25); // December is month 11
    const millisecondsInDay = 1000 * 60 * 60 * 24;

    // If Christmas has already passed this year, calculate for the next year
    if (today > christmas) {
      christmas.setFullYear(currentYear + 1);
    }

    const daysRemaining = Math.ceil((christmas - today) / millisecondsInDay);
    return daysRemaining;
  }

  // console.log("Days until Christmas:", daysUntilChristmasCounter());

  return (
    <div>
      <h2 className="Days-until-christmas-h2">
        {daysUntilChristmasCounter()} Days Until Christmas
      </h2>
    </div>
  );
};
