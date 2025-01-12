import { ModalFormData } from "@minecraft/server-ui";

function createWaypointCreateUi(player) {
    let ui = new ModalFormData()
        .title("Create Waypoint");

    ui.show(player);
}

export { createWaypointCreateUi }