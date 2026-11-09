import { world, Player, system } from "@minecraft/server";
import { registerTardis, isOwnedBy, getTardisOwner } from "MrMycotic/echos_of_gallifrey/functionality/TardisOwnership";
import { getInteriorOrigin, spawnInteriorIfNeeded } from "MrMycotic/echos_of_gallifrey/functionality/TardisInterior";

const TARDIS_ENTITY_ID = "echos_of_gallifrey:tardis";
const TARDIS_KEY_ID = "echos_of_gallifrey:tardis_key";
const DIMENSION = "echos_of_gallifrey:tardis";

world.afterEvents.playerInteractWithEntity.subscribe(({ player, target }) => {
    if (target.typeId !== TARDIS_ENTITY_ID) return;

    const held = player.getComponent("equippable")?.getEquipment("Mainhand");
    if (held?.typeId !== TARDIS_KEY_ID) return;

    const ownerId = getTardisOwner(target);

    if (ownerId && ownerId !== player.id) {
        player.sendMessage("§cThis TARDIS already belongs to someone else.");
        return;
    }

    if (isOwnedBy(target, player)) {

        player.sendMessage("§bDematerialising...");

        world.setDynamicProperty("tardis:exteriorLocation", JSON.stringify({
            x: target.location.x,
            y: target.location.y,
            z: target.location.z,
            dimension: target.dimension.id
        }));

        system.run(() => {
            const origin = getInteriorOrigin(target);
            if (!origin) return;

            player.teleport({ x: origin.x + 0.5, y: origin.y + 1, z: origin.z + 0.5 }, {
                dimension: world.getDimension(DIMENSION),
                facingLocation: { x: origin.x, y: origin.y + 1, z: origin.z - 10 }
            });
        }); // slightly longer than the 60 tick spawn delay
        return;
    }

    registerTardis(target, player);
    spawnInteriorIfNeeded(target);
    player.sendMessage("§aTARDIS linked! The key hums in your hand...");
});