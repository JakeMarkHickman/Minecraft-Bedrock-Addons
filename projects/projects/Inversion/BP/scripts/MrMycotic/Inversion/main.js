import { RegisterItemComponent, RegisterBlockComponent } from "Dependencies/MrMycoticUtilities/Includes/ComponentRegistry";
import { world } from '@minecraft/server'

const Invert = {
    onUse(event) {
        const player = event.source;

        if (!event.source.hasTag("Inverted")) {
            player.addTag("Inverted");
            //player.addEffect("minecraft:blindness", 120, { amplifier: 255, showParticles: false });
            player.runCommand("fog @s push inversion:inversion_fog inversion_fog");
        }
        else {
            player.removeTag("Inverted");
            player.runCommand("fog @s remove inversion_fog");
        }
    }
}

const EnterPortal = {
    onStepOn(event) {
        const source = event.entity;
        if (source.typeId == "minecraft:player") {
            const player = source;

            player.playSound("portal.travel");

            if (!player.hasTag("Inverted")) {
                player.addTag("Inverted");
                //player.addEffect("minecraft:blindness", 120, { amplifier: 255, showParticles: false });
                player.runCommand("fog @s push inversion:inversion_fog inversion_fog");
            }
            else {
                player.removeTag("Inverted");
                player.runCommand("fog @s remove inversion_fog");
            }
        }
    }
}

RegisterItemComponent("inversion:invert", Invert);
RegisterBlockComponent("inversion:portal", EnterPortal);

//let clientSystem = null;

//function initialize() {
//    clientSystem = client.registerSystem(0, 0);
//    clientSystem.initialize = () => {
//        const player = clientSystem.getLocalPlayer();
//        if (player) {
//            console.log("Got local player:", player);
//        }
//    };
//}

//initialize();