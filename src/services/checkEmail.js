export const checkEmail = (email) => {
        const reg = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;      
        if (!reg.test(email)) {
          return false;
        } else {
          return true;
        }
}