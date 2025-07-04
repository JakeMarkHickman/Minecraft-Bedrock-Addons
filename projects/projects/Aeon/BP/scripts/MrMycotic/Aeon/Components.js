import { GetCorrectedTimeOfDay, ConvertTo24Hour, ConvertTo12Hour, GetDayOfWeek, GetCorrectedDay, GetMonth, GetDayOfMonth, GetYear, ConvertToRealTime } from "Dependencies/MrMycoticUtilities/Includes/Time"
import { showCalendarUi } from "./UI/CalendarUI"


export const AnalogTime = {
    onPlayerInteract(event) {
        //event.player.sendMessage(ConvertTo24Hour(GetCorrectedTimeOfDay()));
        event.player.onScreenDisplay.setActionBar(ConvertTo12Hour(GetCorrectedTimeOfDay()));
    }
};

export const DigitalTime = {
    onPlayerInteract(event) {
        //event.player.sendMessage(ConvertTo24Hour(GetCorrectedTimeOfDay()));
        event.player.onScreenDisplay.setActionBar(ConvertTo24Hour(GetCorrectedTimeOfDay()));
    }
};

export const Calendrical = {
    onPlayerInteract(event) {
        if (event.player.isSneaking) {
            showCalendarUi(event.player)
        }
        else {
            event.player.onScreenDisplay.setActionBar(`${GetDayOfWeek(GetCorrectedDay())} ${GetDayOfMonth(GetCorrectedDay())} ${GetMonth(GetCorrectedDay())} ${GetYear(GetCorrectedDay())}`);
        }
    }
}

export const AtomClock = {
    onPlayerInteract(event) {
        let value = ConvertToRealTime();

        event.player.onScreenDisplay.setActionBar(value.days + "d : " + value.hours + "h : " + value.minutes + "m : " + value.seconds + "s");
    }
}