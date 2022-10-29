

export const getDay = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    
    return month+"/"+day+"/"+year;
}