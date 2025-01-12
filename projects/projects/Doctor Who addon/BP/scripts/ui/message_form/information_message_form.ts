import { world } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";
import { showVortexManipulatorUi } from "ui/action_form/vortex_manipulator_action_form"

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

function getDay() {
    let numDay = world.getDay();

    let day = "";

    switch (numDay % 7) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    }

    return day;
}

function getTime() {
    return world.getTimeOfDay()
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

    messageText[0] = "Location: " + getCurrentLocation(entityToUse);
    messageText[1] = "Dimension: " + getCurrentDimension(entityToUse);
    messageText[2] = "Day: " + getDay();
    messageText[3] = "Time: " + getTime();
    messageText[4] = "Moon Phase: " + getMoonPhase();


    let ui = new MessageFormData()
        .title("Information")
        .body(formatText(messageText))
        .button1("Close");

    ui.show(player);
}

export { createInformationUi }