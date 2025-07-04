import { world } from '@minecraft/server'

export const ItemIdentifiers = [];
export const ItemSystems = [];

export const BlockIdentifiers = [];
export const BlockSystems = [];

/*
    This Registers a item component

    Useage:

    RegisterItemComponent("identifier:custom_item_comp", function)
*/
export const RegisterItemComponent = (identifier, system) => {
    ItemIdentifiers.push(identifier)
    ItemSystems.push(system);
}

/*
    This Registers a block component

    Useage:

    RegisterBlockComponent("identifier:custom_block_comp", function)
*/
export const RegisterBlockComponent = (identifier, system) => {
    BlockIdentifiers.push(identifier)
    BlockSystems.push(system);
}

/*
    This Registers a component to Items and Blocks

    Usage:

    RegisterComponent("identifier:custom_comp", function)
*/
export const RegisterComponent = (identifier, system) => {
    ItemIdentifiers.push(identifier)
    ItemSystems.push(system);

    BlockIdentifiers.push(identifier)
    BlockSystems.push(system);
}

/*
    This Registers all Item Components

    Doesnt need to be called
*/
function registerItemComponents(registry) {
    for (let i = 0; i < ItemIdentifiers.length; i++) {
        registry.registerCustomComponent(ItemIdentifiers[i], ItemSystems[i]);
    }
}

/*
    This Registers all Block Components

    Doesnt need to be called
*/
function registerBlockComponents(registry) {
    for (let i = 0; i < BlockIdentifiers.length; i++) {
        registry.registerCustomComponent(BlockIdentifiers[i], BlockSystems[i]);
    }
}

/*
    This sets up the registration of block components and item components

    This doesnt need to be called and automaticly sets up if this file is included
*/
world.beforeEvents.worldInitialize.subscribe(
    ({ itemComponentRegistry, blockComponentRegistry }) => {
        registerItemComponents(itemComponentRegistry);
        registerBlockComponents(blockComponentRegistry);
    }
)