const addZero = (i) => {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
export const getDate = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    return today.getDate() + "." + month + "." + today.getFullYear() + ". " + addZero(today.getHours()) + ":" + addZero(today.getMinutes())
}

