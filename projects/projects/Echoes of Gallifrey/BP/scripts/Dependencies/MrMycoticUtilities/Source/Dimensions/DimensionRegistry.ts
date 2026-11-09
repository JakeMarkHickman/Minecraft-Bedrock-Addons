import { world, system, StartupEvent, CustomCommand, CommandPermissionLevel, CustomCommandResult, CustomCommandStatus, CustomCommandOrigin, CustomCommandParamType, Player } from "@minecraft/server";

export const DimensionIdentifiers = [];

export const RegisterDimension = (identifier) => {
    DimensionIdentifiers.push(identifier)
}

function CreateDimension(event) {
    for (let i = 0; i < DimensionIdentifiers.length; i++) {
        event.dimensionRegistry.registerCustomDimension(DimensionIdentifiers[i]);
    }
}

function TeleportDimension(origin: CustomCommandOrigin, dimensionID: number): CustomCommandResult {

    system.run(() => {
        const player = origin.sourceEntity;

        if (!player || !(player instanceof Player)) {
            return {
                status: CustomCommandStatus.Failure,
                message: "This command can only be used by a player.",
            };
        }

        player.sendMessage("Teleporting to: " + nameFormat(DimensionIdentifiers[dimensionID]));

        player.teleport(
            {
                x: player.location.x,
                y: player.location.y,
                z: player.location.z
            },
            {
                dimension: world.getDimension(DimensionIdentifiers[dimensionID])
            }
        );
    })

    return { status: CustomCommandStatus.Success };
}

function IdentifyDimensions(origin: CustomCommandOrigin): CustomCommandResult {
    const player = origin.sourceEntity;

    if (!player || !(player instanceof Player)) {
        return {
            status: CustomCommandStatus.Failure,
            message: "This command can only be used by a player.",
        };
    }

    for (let i = 0; i < DimensionIdentifiers.length; i++) {
        player.sendMessage(i + ": " + nameFormat(DimensionIdentifiers[i]));
    }

    return { status: CustomCommandStatus.Success };
}

function CreateDimensionTeleportCommand(event) {

    const teleportCommand: CustomCommand = {
        name: "mycotic:teleportdimension",
        description: "Teleport to custom dimensions",
        permissionLevel: CommandPermissionLevel.Any,
        mandatoryParameters: [{ type: CustomCommandParamType.Integer, name: "dimensionID" }]
    }

    const dimensionId: CustomCommand = {
        name: "mycotic:identifydimension",
        description: "List all custom dimensions",
        permissionLevel: CommandPermissionLevel.Any
    }

    event.customCommandRegistry.registerCommand(dimensionId, IdentifyDimensions);
    event.customCommandRegistry.registerCommand(teleportCommand, TeleportDimension);

}

system.beforeEvents.startup.subscribe((event: StartupEvent) => {
    CreateDimension(event);
    CreateDimensionTeleportCommand(event);
})