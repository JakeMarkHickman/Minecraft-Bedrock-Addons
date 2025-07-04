import { RegisterBlockComponent } from "Dependencies/MrMycoticUtilities/Includes/ComponentRegistry";
import { AddDayOfWeek, AddMonth } from "Dependencies/MrMycoticUtilities/Includes/Time"
import { AnalogTime, DigitalTime, Calendrical, AtomClock } from "MrMycotic/Aeon/Components"

RegisterBlockComponent("aeon:analog", AnalogTime);
RegisterBlockComponent("aeon:digital", DigitalTime);
RegisterBlockComponent("aeon:calendar", Calendrical);
RegisterBlockComponent("aeon:atom_clock", AtomClock);