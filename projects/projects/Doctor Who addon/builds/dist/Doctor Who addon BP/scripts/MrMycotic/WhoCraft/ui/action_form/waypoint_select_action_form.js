import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui"
import { createWaypointCreateUi } from "MrMycotic/WhoCraft/ui/modal_form/waypoint_create_modal_form"

function createWaypointSelectUi(player) {
    let ui = new ActionFormData()
        .title("Waypoints")
        .button("Create Waypoint");

    ui.show(player).then(result => {
        if (result.selection == 0)
            createWaypointCreateUi(player);
    })
}

export { createWaypointSelectUi }