import { system } from '@minecraft/server'

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

export const RegisterComponent = (identifier, system) => {
    ItemIdentifiers.push(identifier)
    ItemSystems.push(system);

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

system.beforeEvents.startup.subscribe(
    ({ itemComponentRegistry, blockComponentRegistry }) => {

        console.log(`Registering ${BlockIdentifiers.length} block components`);

        registerItemComponents(itemComponentRegistry);
        registerBlockComponents(blockComponentRegistry);
    }
)