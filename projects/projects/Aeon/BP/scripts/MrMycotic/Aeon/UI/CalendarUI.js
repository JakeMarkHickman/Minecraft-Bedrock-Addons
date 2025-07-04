import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { GetDaysOfWeek, GetMonths, GetDaysInMonth, GetDaysOfYear, CalculateDaysOfYear, SaveCalendarData } from "Dependencies/MrMycoticUtilities/Includes/Time"

function showModifyWeekdays(player) {
    const ui = new ActionFormData()
        .title("Calendar")

    let daysOfWeek = GetDaysOfWeek().length

    let information = "There is " + daysOfWeek;
    let infoCheck = daysOfWeek > 1 ? " days" : " day";
    information = information + infoCheck + " in a week"

    ui.body(information);

    for (let day of GetDaysOfWeek()) {
        ui.button(day);
    }

    ui.button("Add Day")

    ui.show(player).then(result => {
        if (!result.canceled) {
            if (result.selection > daysOfWeek - 1) {
                showModifyDay(player, result.selection);
            }
            else {
                showDayData(player, result.selection);
            }
        }
    })
}

function showDayData(player, day) {
    const Days = GetDaysOfWeek()

    const ui = new ActionFormData()
        .title("Calendar")
        .body(Days[day])
        .button("Modify " + Days[day])
        .button("Delete " + Days[day])

    ui.show(player).then(result => {
        if (!result.canceled) {
            switch (result.selection) {
                case 0:
                    showModifyDay(player, day);
                    break;

                case 1:
                    Days.splice(day, 1);
                    Save();
                    break;
            }
        }
    })
}

function showModifyDay(player, day) {
    const Days = GetDaysOfWeek();

    const ui = new ModalFormData()
        .title("Calendar")
        //.label("Modifying the Month of " + Months[month])
        .textField("Name of day: ", day < Days.length ? Days[day] : "Day name")
        .submitButton("Submit")

    ui.show(player).then(result => {
        if (!result.canceled) {

            Days[day] = result.formValues[0];
            Save();
        }
    })
}

function showModifyMonths(player) {
    const ui = new ActionFormData()
        .title("Calendar")

    let daysOfYear = GetDaysOfYear();
    let monthsOfYear = GetMonths().length;

    let information = "There is " + daysOfYear;
    let infoCheck = daysOfYear > 1 ? " days" : " day";
    information = information + infoCheck + " in a year"

    ui.body(information);

    for (let month of GetMonths()) {
        ui.button(month);
    }

    ui.button("Add Month");

    ui.show(player).then(result => {
        if (!result.canceled) {
            if (result.selection > monthsOfYear - 1) {
                showModifyMonth(player, result.selection);
            }
            else {
                showMonthData(player, result.selection);
            }
        }
    })
}

function showMonthData(player, month) {

    const Months = GetMonths();
    const Days = GetDaysInMonth();

    let infoCheck = Days.length > 1 ? " days" : " day";

    const ui = new ActionFormData()
        .title("Calendar")
        .body(Months[month] + " has " + Days[month] + infoCheck)
        .button("Modify " + Months[month])
        .button("Delete " + Months[month])

    ui.show(player).then(result => {
        if (!result.canceled) {
            switch (result.selection) {
                case 0:
                    showModifyMonth(player, month);
                    break;

                case 1:
                    Months.splice(month, 1);
                    Days.splice(month, 1);
                    Save();
                    break;
            }
        }
    })
}

function showModifyMonth(player, month) {

    const Months = GetMonths();
    const Days = GetDaysInMonth();

    const ui = new ModalFormData()
        .title("Calendar")
        //.label("Modifying the Month of " + Months[month])
        .textField("Name of month: ", month < Months.length ? Months[month] : "Month name")
        .textField("Days in month: ", month < Months.length ? Days[month].toString() : "Number of days in month")
        .submitButton("Submit")

    ui.show(player).then(result => {
        if (!result.canceled) {

            Months[month] = result.formValues[0];
            Days[month] = parseInt(result.formValues[1]) < 1 ? 1 : parseInt(result.formValues[1]);
            Save();
        }
    })
}


function showCalendarUi(player) {
    const ui = new ActionFormData()
        .title("Calendar")
        .button("Modify Weekdays")
        .button("Modify Months")
        .button("Add Events")

    ui.show(player).then(result => {
        if (!result.canceled) {
            switch (result.selection) {
                case 0:
                    showModifyWeekdays(player, player);
                    break;

                case 1:
                    showModifyMonths(player);
                    break;

                case 2:
                    //let blackList = ["minecraft:the_end"];
                    //showLocationSelectionUi(player, player, blackList);
                    break;
            }
        }
    })
}

function Save() {
    CalculateDaysOfYear();
    SaveCalendarData();
}

export { showCalendarUi }
