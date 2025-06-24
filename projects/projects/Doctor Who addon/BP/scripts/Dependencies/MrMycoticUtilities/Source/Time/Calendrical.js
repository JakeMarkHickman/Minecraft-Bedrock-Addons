export const DayOfWeek = [];

export const AddDayOfWeek = (name) => {
    DayOfWeek.push(name);
}

export function GetDayOfWeek(day) {
    return DayOfWeek[day % DayOfWeek.length];
}

export const Months = [];
export const DaysInMonth = [];

export let DaysOfYear = 0;

export const AddMonth = (name, days) => {
    Months.push(name);
    DaysInMonth.push(days);

    DaysOfYear += days;
}

export function GetMonth(day) {

    let currentDay = day % DaysOfYear;
    let dayCounter = 0;

    for (let i = 0; i < DaysInMonth.length; i++) {
        dayCounter += DaysInMonth[i];
        if (currentDay < dayCounter) {
            return Months[i];
        }
    }

    return "Unknown Month";
}

export function GetDayOfMonth(day) {
    let currentDay = day % DaysOfYear;
    let dayCounter = 0;

    for (let i = 0; i < DaysInMonth.length; i++) {
        dayCounter += DaysInMonth[i]; //59
        if (currentDay < dayCounter) {
            let dayOfmonth = dayCounter - currentDay; //-7
            dayOfmonth = (DaysInMonth[i] - dayOfmonth) + 1;
            return dayOfmonth.toString();
        }
    }

    return "Unknown Day";
}

export function GetYear(day) {
    let year = Math.floor(day / DaysOfYear);

    return year;
}