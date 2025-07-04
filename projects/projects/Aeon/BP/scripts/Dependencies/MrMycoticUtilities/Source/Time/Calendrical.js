import { world } from "@minecraft/server";


const defaultWeekdays = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}

const defaultMonths = {
    months: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

export let DaysOfWeek = [];

export const AddDayOfWeek = (name) => {
    DaysOfWeek.push(name);
}

export function GetDayOfWeek(day) {
    return DaysOfWeek[day % DaysOfWeek.length];
}

export function GetDaysOfWeek() {
    return DaysOfWeek;
}

export let Months = [];
export let DaysInMonth = [];

export let DaysOfYear = 0;

export const AddMonth = (name, days) => {
    Months.push(name);
    DaysInMonth.push(days);

    DaysOfYear += days;
}

/*
    This gets the current month
    
    eg. January
*/
export function GetMonth(day) {

    let currentDay = day % GetDaysOfYear();
    let dayCounter = 0;

    for (let i = 0; i < DaysInMonth.length; i++) {
        dayCounter += DaysInMonth[i];
        if (currentDay < dayCounter) {
            return Months[i];
        }
    }

    return "";
}

/*
    This gets the array months
    
    eg. [January, Feburary, March, ...]
*/
export function GetMonths() {
    return Months;
}

/*
    This gets the days of the month
    
    eg. 31 for january
*/
export function GetDaysInMonth() {
    return DaysInMonth;
}

/*
    This gets the current day of the month
    
    eg. 13th, 27th ect
*/
export function GetDayOfMonth(day) {
    let currentDay = day % GetDaysOfYear();
    let dayCounter = 0;

    for (let i = 0; i < DaysInMonth.length; i++) {
        dayCounter += DaysInMonth[i]; //59
        if (currentDay < dayCounter) {
            let dayOfmonth = dayCounter - currentDay; //-7
            dayOfmonth = (DaysInMonth[i] - dayOfmonth) + 1;
            return dayOfmonth.toString();
        }
    }

    return "";
}

/*
    This gets the year
*/
export function GetYear(day) {
    let year = Math.floor(day / GetDaysOfYear()) + 1;

    return year;
}

/*
    This gets the amount of days in the year
    
    eg. 365 days
*/
export function GetDaysOfYear() {

    if (DaysOfYear > 0) {
        return DaysOfYear;
    }

    return 1;
}

/*
    This Calculates the amount of days in the year
*/
export function CalculateDaysOfYear() {
    let days = 0;

    for (let i = 0; i < DaysInMonth.length; i++) {
        days += DaysInMonth[i];
    }

    DaysOfYear = days;

    return DaysOfYear;
}

/*
    This saves dynamic property of the calendar system
*/
export function SaveCalendarData() {
    world.setDynamicProperty("Weekdays", JSON.stringify(DaysOfWeek));
}

/*
    This creates/gets dynamic property of the calendar system

    This doesnt need to be called and automaticly sets up if this file is included

    this uses the default data
*/
function GetOrCreateNewData() {
    let weekdays = world.getDynamicProperty("Weekdays");
    let months = world.getDynamicProperty("Months");
    let dIM = world.getDynamicProperty("DaysInMonth");

    DaysOfWeek = weekdays ? JSON.parse(weekdays) : (world.setDynamicProperty("Weekdays", JSON.stringify(defaultWeekdays)), defaultWeekdays.days);
    Months = months ? JSON.parse(months) : (world.setDynamicProperty("Months", JSON.stringify(defaultMonths.months)), defaultMonths.months);
    DaysInMonth = dIM ? JSON.parse(dIM) : (world.setDynamicProperty("DaysInMonth", JSON.stringify(defaultMonths.daysOfMonth)), defaultMonths.daysOfMonth);

    CalculateDaysOfYear();
}

GetOrCreateNewData();