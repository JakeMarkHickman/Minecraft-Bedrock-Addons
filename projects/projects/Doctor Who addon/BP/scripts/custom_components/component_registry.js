import { events as vortexManipulator } from "./item_components/vortex_manipulator"
import { events as chameleonArch } from "./item_components/chameleon_arch"

function registerItemComponents(registry) {
    registry.registerCustomComponent("who_craft:vortex_manipulator", vortexManipulator);
    registry.registerCustomComponent("who_craft:chameleon_arch", chameleonArch);
}

function registerBlockComponents(register) {

}

export { registerItemComponents, registerBlockComponents }
