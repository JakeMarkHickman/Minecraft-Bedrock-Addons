import { TicksPerSecond, EntityHealthComponent, EntityComponentTypes } from "@minecraft/server";

export const events = {
    onCompleteUse: ({ source }) => {
        //let health = source.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
        if (source.hasTag("time_lord")) {
            source.removeTag("time_lord");
            console.warn("Player is no longer a Time Lord");
            source.addEffect("blindness", TicksPerSecond * 5);
            source.addEffect("slowness", TicksPerSecond * 30);
        }
        else {
            source.addTag("time_lord");
            console.warn("Player is now a Time Lord");
            source.addEffect("regeneration", TicksPerSecond * 5);
        }
    }
}

