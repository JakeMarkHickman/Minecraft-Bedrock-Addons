import { world, system } from "@minecraft/server";
import { getPlayerTardisIds } from "MrMycotic/echos_of_gallifrey/functionality/TardisOwnership";

const TARDIS_ENTITY_ID = "echos_of_gallifrey:tardis";
const INTERIOR_DIMENSION = "echos_of_gallifrey:tardis";
const GRID_SPACING = 1000; // blocks between each interior

export const tardisExit = {
    onPlayerInteract: ({ player }) => {
        const raw = world.getDynamicProperty(`tardis:exteriorLocation`) as string | undefined;
        if (!raw) {
            player.sendMessage("§cNo exit point saved.");
            return;
        }

        const loc = JSON.parse(raw);

        system.run(() => {
            player.teleport(
                { x: loc.x, y: loc.y, z: loc.z },
                { dimension: world.getDimension(loc.dimension) }
            );
            player.sendMessage("§bMaterialising...");
        });
    }
}