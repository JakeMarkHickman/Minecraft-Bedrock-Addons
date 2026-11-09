import { world } from "@minecraft/server";

export function GetCorrectedTimeOfDay() {
    return (world.getTimeOfDay() + 6000);
}

export function GetCorrectedDay() {
    const ticks = GetCorrectedTimeOfDay();
    const baseDay = world.getDay();

    return ticks < 24000 ? baseDay : baseDay + 1;
}

export function ConvertTo24Hour(ticks) {
    let totalMinutes = Math.floor((ticks / 24000) * 1440);
    let hours = CalculateHours(totalMinutes);
    let minutes = CalculateMinutes(totalMinutes);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function ConvertTo12Hour(ticks) {
    let totalMinutes = Math.floor((ticks / 24000) * 1440);
    let hours = CalculateHours(totalMinutes);
    let minutes = CalculateMinutes(totalMinutes);

    let suffix = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
}

function CalculateHours(totalMinutes) {
    return Math.floor(totalMinutes / 60)
}

function CalculateMinutes(totalMinutes) {
    return totalMinutes % 60
}