

export const getTime = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    let hours = new Date().getHours();
    const min = new Date().getMinutes();
    let meridiem = "AM";
    if (hours > 12) {
    hours -= 12;
    meridiem = "PM";
    }
    return month+"/"+day+"/"+year+". "+ hours + ":" + min + " " + meridiem;
}