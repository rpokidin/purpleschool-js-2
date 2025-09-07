document.addEventListener("DOMContentLoaded", () => {

    function ageValidation(dateOfBirthday) {

        const birthday = new Date(dateOfBirthday);
        const currentDay = new Date();
        const targetDay = new Date(currentDay.getFullYear() - 14, currentDay.getMonth(), currentDay.getDate());

        return birthday < targetDay;
    }

    console.log(ageValidation('2022-01-01'));

})