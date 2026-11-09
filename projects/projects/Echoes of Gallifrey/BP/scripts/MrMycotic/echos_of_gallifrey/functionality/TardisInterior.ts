import { world, Entity, BlockPermutation, system } from "@minecraft/server";

const TARDIS_INTERIOR_KEY = "tardis:interiorSlot";
const INTERIOR_SLOT_COUNTER = "tardis:slotCounter";
const GRID_SPACING = 1000; // blocks between each interior
const INTERIOR_Y = 64;

// --- Assign a slot when a TARDIS is first registered ---

export function assignInteriorSlot(entity: Entity): void {
    // Already has a slot
    if (entity.getDynamicProperty(TARDIS_INTERIOR_KEY) !== undefined) return;

    const counter = (world.getDynamicProperty(INTERIOR_SLOT_COUNTER) as number) ?? 0;

    entity.setDynamicProperty(TARDIS_INTERIOR_KEY, counter);
    world.setDynamicProperty(INTERIOR_SLOT_COUNTER, counter + 1);
}

// --- Get the world position of a TARDIS interior ---

export function getInteriorOrigin(entity: Entity): { x: number, y: number, z: number } | undefined {
    const slot = entity.getDynamicProperty(TARDIS_INTERIOR_KEY) as number | undefined;
    if (slot === undefined) return undefined;

    return {
        x: slot * GRID_SPACING,
        y: INTERIOR_Y,
        z: 0
    };
}

const INTERIOR_SPAWNED_KEY = "tardis:interiorSpawned";
const INTERIOR_DIMENSION = "echos_of_gallifrey:tardis";

export function spawnInteriorIfNeeded(entity: Entity): void {
    if (entity.getDynamicProperty(INTERIOR_SPAWNED_KEY)) return;

    const origin = getInteriorOrigin(entity);
    if (!origin) return;

    const dimension = world.getDimension(INTERIOR_DIMENSION);
    const { x, y, z } = {
        x: origin.x - 5,
        y: origin.y,
        z: origin.z - 1
    };

    system.run(() => {
        // Add ticking area via command
        dimension.runCommand(`tickingarea add ${x} ${y} ${z} ${x} ${y} ${z} tardis_spawn`);

        // Wait for chunk to load
        system.runTimeout(() => {
            world.structureManager.place(
                "mystructure:tardis_interior",
                dimension,
                { x, y, z }
            );
            entity.setDynamicProperty(INTERIOR_SPAWNED_KEY, true);

            // Clean up ticking area
            dimension.runCommand(`tickingarea remove tardis_spawn`);
        }, 60); // 3 seconds
    });
}