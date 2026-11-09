import { showVortexManipulatorUi } from "MrMycotic/echos_of_gallifrey/ui/action_form/vortex_manipulator_action_form"

export const vortexManipulator = {
    onUse: ({ source }) => {
        showVortexManipulatorUi(source);
    }
}