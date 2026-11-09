import { showVortexManipulatorUi } from "MrMycotic/WhoCraft/ui/action_form/vortex_manipulator_action_form"

export const vortexManipulator = {
    onUse: ({ source }) => {
        showVortexManipulatorUi(source);
    }
}