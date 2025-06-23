import { world } from '@minecraft/server'

export const ItemIdentifiers = [];
export const ItemSystems = [];

export const BlockIdentifiers = [];
export const BlockSystems = [];

export const RegisterItemComponent = (identifier, system) => {
    ItemIdentifiers.push(identifier)
    ItemSystems.push(system);
}

export const RegisterBlockComponent = (identifier, system) => {
    BlockIdentifiers.push(identifier)
    BlockSystems.push(system);
}

function registerItemComponents(registry) {
    for (let i = 0; i < ItemIdentifiers.length; i++) {
        registry.registerCustomComponent(ItemIdentifiers[i], ItemSystems[i]);
    }
}

function registerBlockComponents(registry) {
    for (let i = 0; i < BlockIdentifiers.length; i++) {
        registry.registerCustomComponent(BlockIdentifiers[i], BlockSystems[i]);
    }
}

world.beforeEvents.worldInitialize.subscribe(
    ({ itemComponentRegistry, blockComponentRegistry }) => {
        registerItemComponents(itemComponentRegistry);
        registerBlockComponents(blockComponentRegistry);
    }
)