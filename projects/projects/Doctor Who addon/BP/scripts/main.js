import { world, system } from '@minecraft/server'
import { registerItemComponents, registerBlockComponents } from "custom_components/component_registry"

world.beforeEvents.worldInitialize.subscribe(
    ({ itemComponentRegistry, blockComponentRegistry }) => {
        registerItemComponents(itemComponentRegistry);
        registerBlockComponents(blockComponentRegistry);
    }
)

world.afterEvents.entityHurt.subscribe((event) => {
    const { hurtEnt, damageSource } = event;

    if (damageSource.cause == "entityAttack" && damageSource.damagingEntity) {
        let attackingEnt = damageSource.damagingEntity;

        if (attackingEnt.typeId == "who_craft:weeping_angel") {
            console.warn("hurt by weeping angel")
        }
    }
})