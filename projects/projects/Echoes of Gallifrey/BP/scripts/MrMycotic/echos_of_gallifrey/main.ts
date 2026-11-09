import { world } from "@minecraft/server";
import { RegisterItemComponent, RegisterBlockComponent } from "Dependencies/MrMycoticUtilities/Includes/ComponentRegistry"
import { RegisterDimension } from "Dependencies/MrMycoticUtilities/Includes/DimensionRegistry"
import { vortexManipulator } from "./custom_components/item_components/vortex_manipulator"
import { chameleonArch } from "./custom_components/item_components/chameleon_arch"
import { tardisExit } from "./custom_components/block_components/tardis_exit_doors"
import "./custom_components/item_components/tardis_key"

RegisterItemComponent("echos_of_gallifrey:vortex_manipulator", vortexManipulator);
RegisterItemComponent("echos_of_gallifrey:chameleon_arch", chameleonArch);

RegisterBlockComponent("echos_of_gallifrey:tardis_exit_door", tardisExit);

RegisterDimension("echos_of_gallifrey:tardis");
RegisterDimension("echos_of_gallifrey:time_vortex");
RegisterDimension("echos_of_gallifrey:cave_game");
RegisterDimension("echos_of_gallifrey:classic");
RegisterDimension("echos_of_gallifrey:legacy");
RegisterDimension("echos_of_gallifrey:legacy_nether");
RegisterDimension("echos_of_gallifrey:legacy_end");
RegisterDimension("echos_of_gallifrey:Gallifrey");
RegisterDimension("echos_of_gallifrey:Skaro");


world.afterEvents.entityHurt.subscribe((event) => {
    const { hurtEntity, damageSource } = event;

    if (damageSource.cause == "entityAttack" && damageSource.damagingEntity) {
        let attackingEnt = damageSource.damagingEntity;

        if (attackingEnt.typeId == "echos_of_gallifrey:weeping_angel") {
            let xValue = Math.floor(Math.random() * 100);
            let zValue = Math.floor(Math.random() * 100);

            const availableDimensions = [];

            availableDimensions[0] = "echos_of_gallifrey:cave_game";
            availableDimensions[1] = "echos_of_gallifrey:classic";
            availableDimensions[2] = "echos_of_gallifrey:legacy";

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