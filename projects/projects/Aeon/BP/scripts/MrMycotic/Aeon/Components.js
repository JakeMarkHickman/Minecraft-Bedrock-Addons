import { GetCorrectedTimeOfDay, ConvertTo24Hour, ConvertTo12Hour, GetDayOfWeek, GetCorrectedDay, GetMonth, GetDayOfMonth, GetYear, ConvertToRealTime } from "Dependencies/MrMycoticUtilities/Includes/Time"

export const GetTime = {
    onPlayerInteract(event) {
        //event.player.sendMessage(ConvertTo24Hour(GetCorrectedTimeOfDay()));
        event.player.onScreenDisplay.setActionBar(ConvertTo24Hour(GetCorrectedTimeOfDay()));
    }
};

export const Calendrical = {
    onPlayerInteract(event) {
        event.player.onScreenDisplay.setActionBar(`${GetDayOfWeek(GetCorrectedDay())} ${GetDayOfMonth(GetCorrectedDay())} ${GetMonth(GetCorrectedDay())} ${GetYear(GetCorrectedDay())}`);
    }
}

export const AtomClock = {
    onPlayerInteract(event) {
        let value = ConvertToRealTime();

        event.player.onScreenDisplay.setActionBar(value.days + "d : " + value.hours + "h : " + value.minutes + "m : " + value.seconds + "s");
    }
}