import { RegisterItemComponent, RegisterBlockComponent } from "MrMycotic/Aeon/Dependencies/MrMycoticUtilities/ComponentRegistry";
import { GetCorrectedTimeOfDay } from "MrMycotic/Aeon/Dependencies/MrMycoticUtilities/Time"

const GetTime = {
    onPlayerInteract(event) {
        console.error(GetCorrectedTimeOfDay());
    }
};

RegisterBlockComponent("aeon:time", GetTime);