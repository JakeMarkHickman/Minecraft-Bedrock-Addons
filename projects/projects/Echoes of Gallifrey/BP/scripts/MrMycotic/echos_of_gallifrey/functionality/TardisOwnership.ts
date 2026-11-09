import { world, Player, Entity } from "@minecraft/server";
import { assignInteriorSlot, spawnInteriorIfNeeded } from "./TardisInterior";

const TARDIS_OWNER_KEY = "tardis:ownerId";
const PLAYER_TARDIS_KEY = "tardis:tardisIds";

// --- Registration ---

export function registerTardis(entity: Entity, player: Player): void {
    const tardisId = entity.id;

    entity.setDynamicProperty(TARDIS_OWNER_KEY, player.id);
    assignInteriorSlot(entity);
    spawnInteriorIfNeeded(entity);

    const existing = getPlayerTardisIds(player);
    if (!existing.includes(tardisId)) {
        existing.push(tardisId);
        world.setDynamicProperty(`${PLAYER_TARDIS_KEY}:${player.id}`, JSON.stringify(existing));
    }
}

// --- Lookup ---

export function getPlayerTardisIds(player: Player): string[] {
    const raw = world.getDynamicProperty(`${PLAYER_TARDIS_KEY}:${player.id}`);
    return raw ? JSON.parse(raw as string) : [];
}

export function getTardisOwner(entity: Entity): string | undefined {
    return entity.getDynamicProperty(TARDIS_OWNER_KEY) as string | undefined;
}

export function isOwnedBy(entity: Entity, player: Player): boolean {
    return getTardisOwner(entity) === player.id;
}

// --- Removal ---

export function unregisterTardis(entity: Entity, player: Player): void {
    const tardisId = entity.id;
    const existing = getPlayerTardisIds(player);
    const updated = existing.filter(id => id !== tardisId);
    world.setDynamicProperty(`${PLAYER_TARDIS_KEY}:${player.id}`, JSON.stringify(updated));
    entity.setDynamicProperty(TARDIS_OWNER_KEY, undefined);
}