import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui"
import { createInformationUi } from "MrMycotic/WhoCraft/ui/message_form/information_message_form"
import { createWaypointSelectUi } from "MrMycotic/WhoCraft/ui/action_form/waypoint_select_action_form"
import { showLocationSelectionUi } from "MrMycotic/WhoCraft/ui/modal_form/location_selection_modal_form"


function showVortexManipulatorUi(player) {
    const ui = new ActionFormData()
        .title("Vortex Manipulator")
        .button("Information")
        .button("Waypoints")
        .button("Location selection")

    ui.show(player).then(result => {
        if (!result.canceled) {
            switch (result.selection) {
                case 0:
                    createInformationUi(player, player);
                    break;

                case 1:
                    createWaypointSelectUi(player);
                    break;

                case 2:
                    let blackList = ["minecraft:the_end"];
                    showLocationSelectionUi(player, player, blackList);
                    break;
            }
        }
    })
}

export { showVortexManipulatorUi }