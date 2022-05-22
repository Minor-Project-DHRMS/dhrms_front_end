
const calculateAge = (DOB) => {
    var today = new Date();
    var birthDate = new Date(DOB); 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    // console.log(age_now);
    return age_now;
  
};

export { calculateAge };
