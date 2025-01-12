import { showVortexManipulatorUi } from "ui/action_form/vortex_manipulator_action_form"

export const events = {
    onUse: ({ source }) => {
        showVortexManipulatorUi(source);
    }
}