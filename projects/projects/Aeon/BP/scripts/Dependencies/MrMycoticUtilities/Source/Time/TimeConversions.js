import { world } from "@minecraft/server";

/*
    This corrects the ingame ticks by 6 hours

    Changes sunrise from 12 AM to 6 AM 
*/
export function GetCorrectedTimeOfDay() {
    return (world.getTimeOfDay() + 6000);
}

/*
    This corrects the day

    the day now correctly changes at 12 AM like real life
*/
export function GetCorrectedDay() {
    const ticks = GetCorrectedTimeOfDay();
    const baseDay = world.getDay();

    return ticks < 24000 ? baseDay : baseDay + 1;
}

/*
    This Converts the ingame ticks into 24 hour time
*/
export function ConvertTo24Hour(ticks) {
    let totalMinutes = Math.floor((ticks / 24000) * 1440);
    let hours = CalculateHours(totalMinutes);
    let minutes = CalculateMinutes(totalMinutes);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

/*
    This Converts the ingame ticks into 12 hour time
*/
export function ConvertTo12Hour(ticks) {
    let totalMinutes = Math.floor((ticks / 24000) * 1440);
    let hours = CalculateHours(totalMinutes);
    let minutes = CalculateMinutes(totalMinutes);

    let suffix = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
}

/*
    This Converts the ingame ticks into real time

    NOTE:
    this is game ticks in to real time meaning that it will change with "Set Time" or sleeping in a bed
*/
export function ConvertToRealTime() {
    let totalSeconds = Math.floor(world.getAbsoluteTime() / 20);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
}

/*
    This Converts the ingame ticks into real time hours

    NOTE:
    this is game ticks in to real time meaning that it will change with "Set Time" or sleeping in a bed
*/
function CalculateHours(totalMinutes) {
    return Math.floor(totalMinutes / 60)
}

/*
    This Converts the ingame ticks into real time minutes

    NOTE:
    this is game ticks in to real time meaning that it will change with "Set Time" or sleeping in a bed
*/
function CalculateMinutes(totalMinutes) {
    return totalMinutes % 60
}