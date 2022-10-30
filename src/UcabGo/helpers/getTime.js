

export const getTime = () => {
    let hours = new Date().getHours();
    const min = new Date().getMinutes();
    let meridiem = "AM";
    if (hours > 12) {
    hours -= 12;
    meridiem = "PM";
    }

    let colon = ":";
    if ( min < 10) {colon = ": "}
    return hours + colon + min + " " + meridiem;
}