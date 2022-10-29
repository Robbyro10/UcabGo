

export const getTime = () => {
    let hours = new Date().getHours();
    const min = new Date().getMinutes();
    let meridiem = "AM";
    if (hours > 12) {
    hours -= 12;
    meridiem = "PM";
    }
    return hours + ":" + min + " " + meridiem;
}