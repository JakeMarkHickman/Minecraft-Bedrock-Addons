import { world } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";
import { showVortexManipulatorUi } from "MrMycotic/WhoCraft/ui/action_form/vortex_manipulator_action_form"
import { GetCorrectedTimeOfDay, ConvertTo12Hour, GetDayOfWeek, GetCorrectedDay, GetMonth, GetDayOfMonth, GetYear } from "Dependencies/MrMycoticUtilities/Includes/Time"

function getCurrentDimension(entityToUse) {
    let dimension = entityToUse.dimension.id.split(":").pop(); // remove anything before : (minecraft:nether -> nether)
    dimension = dimension.replace("_", " "); // replace _ with spaces

    var splitStr = dimension.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // Capitalise every word
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
}

function getCurrentLocation(entityToUse) {
    let location = "X: " + Math.trunc(entityToUse.location.x) + " Y: " + Math.trunc(entityToUse.location.y) + " Z: " + Math.trunc(entityToUse.location.z);

    return location;
}

function getMoonPhase() {
    let moonPhase = "";

    switch (world.getMoonPhase()) {
        case 0:
            moonPhase = "Full Moon";
            break;

        case 1:
            moonPhase = "Waning Gibbous";
            break;

        case 2:
            moonPhase = "First Quarter";
            break;

        case 3:
            moonPhase = "Waning Crescent";
            break;

        case 4:
            moonPhase = "New Moon";
            break;

        case 5:
            moonPhase = "Waxing Crescent";
            break;

        case 6:
            moonPhase = "Last Quarter";
            break;

        case 7:
            moonPhase = "Waxing Gibbous";
            break;
    }

    return moonPhase;
}


function getTime() {
    let ticks = getCorrectedTimeOfDay() % 24000;

    let totalMinutes = Math.floor((ticks / 24000) * 1440); // 1440 minutes in a day
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function formatText(arrayOfText) {
    let finalText = "";

    for (let line of arrayOfText) {
        finalText = finalText + line + "\n";
    }

    return finalText;
}

function createInformationUi(player, entityToUse) {

    let messageText = []

    let day = GetCorrectedDay();

    messageText[0] = "Location: " + getCurrentLocation(entityToUse);
    messageText[1] = "Dimension: " + getCurrentDimension(entityToUse);
    messageText[2] = "Day: " + GetDayOfWeek(day) + " " + GetDayOfMonth(day) + " " + GetMonth(day) + " " + GetYear(day);
    messageText[3] = "Time: " + ConvertTo12Hour(GetCorrectedTimeOfDay());
    messageText[4] = "Moon Phase: " + getMoonPhase();


    let ui = new MessageFormData()
        .title("Information")
        .body(formatText(messageText))

    ui.show(player);
}

export { createInformationUi }