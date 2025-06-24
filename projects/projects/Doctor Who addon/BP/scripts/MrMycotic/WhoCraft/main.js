import { world, system } from '@minecraft/server'
import { RegisterItemComponent } from "Dependencies/MrMycoticUtilities/Includes/ComponentRegistry"
import { vortexManipulator } from "./custom_components/item_components/vortex_manipulator"
import { chameleonArch } from "./custom_components/item_components/chameleon_arch"

RegisterItemComponent("who_craft:vortex_manipulator", vortexManipulator);
RegisterItemComponent("who_craft:chameleon_arch", chameleonArch);

world.afterEvents.entityHurt.subscribe((event) => {
    const { hurtEntity, damageSource } = event;

    if (damageSource.cause == "entityAttack" && damageSource.damagingEntity) {
        let attackingEnt = damageSource.damagingEntity;

        if (attackingEnt.typeId == "who_craft:weeping_angel") {
            let xValue = Math.floor(Math.random() * 100);
            let zValue = Math.floor(Math.random() * 100);

            const availableDimensions = [];

            availableDimensions[0] = "minecraft:overworld";
            availableDimensions[1] = "minecraft:nether";
            //availableDimensions[2] = "who_craft:classic";
            //availableDimensions[3] = "who_craft:cave_game";

            let dimensionValue = Math.floor(Math.random() * availableDimensions.length);

            hurtEntity.teleport(
                {
                    x: hurtEntity.location.x + xValue,
                    y: hurtEntity.location.y,
                    z: hurtEntity.location.z + zValue
                },
                {
                    checkForBlocks: true,
                    dimension: world.getDimension(availableDimensions[dimensionValue])
                });
        }
    }
})