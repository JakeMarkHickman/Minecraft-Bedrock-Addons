import { world, DimensionTypes, TicksPerSecond } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

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

function showLocationSelectionUi(player, entityToEffect, dimensionBlacklist) {
    const ui = new ModalFormData()
        .title("Location Selection")
        .textField("X:", "X Location")
        .textField("Y:", "Y Location")
        .textField("Z:", "Z Location");

    const availableDimensionsId = [];
    const availableDimensions = [];
    let iterations = 0;
    let currentDimension;

    for (let dimension of DimensionTypes.getAll()) {
        let dimensionId = dimension.typeId;

        if (isCurrentDimension(entityToEffect, dimensionId))
            currentDimension = iterations;

        if (isBannedDimension(dimensionBlacklist, dimensionId))
            continue;


        let str = dimensionId.split(":").pop(); // remove anything before : (minecraft:nether -> nether)
        str = str.replace("_", " "); // replace _ with spaces

        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // Capitalise every word
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        str = splitStr.join(' ');

        availableDimensionsId[iterations] = dimensionId;
        availableDimensions[iterations] = str;
        iterations++;
    }

    ui.dropdown("Dimension: ", availableDimensions, currentDimension);

    ui.show(player).then(formData => {

        if (formData.canceled)
            return;

        let [xValue, yValue, zValue, dimensionIndex] = formData.formValues

        if (xValue != "") {
            xValue = Number(xValue) + 0.5;
        }
        else {
            xValue = entityToEffect.location.x;
        }

        if (yValue != "") {
            yValue = Number(yValue);
        }
        else {
            yValue = entityToEffect.location.y;
        }

        if (zValue != "") {
            zValue = Number(zValue) + 0.5;
        }
        else {
            zValue = entityToEffect.location.z;
        }

        if (entityToEffect == player) {
            entityToEffect.addEffect("blindness", TicksPerSecond * 2);
            entityToEffect.addEffect("weakness", TicksPerSecond * 30);
        }

        entityToEffect.teleport(
            {
                x: xValue,
                y: yValue,
                z: zValue
            },
            {
                checkForBlocks: true,
                dimension: world.getDimension(availableDimensionsId[dimensionIndex])
            })
    });
}

export { showLocationSelectionUi }