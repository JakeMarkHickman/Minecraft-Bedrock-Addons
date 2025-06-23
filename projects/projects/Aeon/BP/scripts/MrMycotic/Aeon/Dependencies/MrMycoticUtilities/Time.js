import { world } from "@minecraft/server";

export function GetCorrectedTimeOfDay() {
    return (world.getTimeOfDay() + 6000);
}

export function GetCorrectedDay() {
    const ticks = getCorrectedTimeOfDay();
    const baseDay = world.getDay();

    return ticks < 24000 ? baseDay : baseDay + 1;
}