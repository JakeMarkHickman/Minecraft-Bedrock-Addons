import { world, DimensionTypes } from "@minecraft/server"
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui"

function isBannedDimension(dimensionBlacklist, dimensionToCheckId) {
    let banned = false;

    for (let bannedDimension of dimensionBlacklist) {
        if (bannedDimension == dimensionToCheckId) {
            banned = true;
        }
    }

    return banned;
}

function isCurrentDimension(entityToCheck, dimensionToCheckId) {
    let isCurrent = false;

    if (entityToCheck.dimension.id == dimensionToCheckId)
        isCurrent = true;

    return isCurrent;
}

function showDimensionSelector(player, entityToEffect, dimensionBlacklist, isVortexManipulator) {
    const dimensionSelectorUi = new ActionFormData()
        .title("Dimension selector");

    const availableDimensions = [];
    let iterations = 0;

    for (let dimension of DimensionTypes.getAll()) {

        let dimensionId = dimension.typeId;

        if (isCurrentDimension(entityToEffect, dimensionId))
            continue;

        if (isBannedDimension(dimensionBlacklist, dimensionId))
            continue;

        availableDimensions[iterations] = dimensionId;
        iterations++;

        let str = dimensionId.split(":").pop(); // remove anything before : (minecraft:nether -> nether)
        str = str.replace("_", " "); // replace _ with spaces

        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // Capitalise every word
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        str = splitStr.join(' ');

        dimensionSelectorUi.button(str);
    }

    dimensionSelectorUi.show(player).then((result: ActionFormResponse) => {
        if (!result.canceled) {
            if (isVortexManipulator) {
                entityToEffect.runCommand("effect @s blindness 3 355 false");
                //Play animation
            }
            entityToEffect.teleport(
                {
                    x: entityToEffect.location.x,
                    y: entityToEffect.location.y,
                    z: entityToEffect.location.z
                },
                {
                    checkForBlocks: true,
                    dimension: world.getDimension(availableDimensions[result.selection])
                })
        }
    });
}

export { showDimensionSelector };