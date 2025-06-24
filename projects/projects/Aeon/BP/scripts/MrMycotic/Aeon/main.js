import { RegisterBlockComponent } from "Dependencies/MrMycoticUtilities/Includes/ComponentRegistry";
import { AddDayOfWeek, AddMonth } from "Dependencies/MrMycoticUtilities/Includes/Time"
import { GetTime, Calendrical, AtomClock } from "MrMycotic/Aeon/Components"

AddDayOfWeek("Sunday");
AddDayOfWeek("Monday");
AddDayOfWeek("Tuesday");
AddDayOfWeek("Wednesday");
AddDayOfWeek("Thursday");
AddDayOfWeek("Friday");
AddDayOfWeek("Saturday");

AddMonth("January", 31);
AddMonth("Febuary", 28);
AddMonth("March", 31);
AddMonth("April", 30);
AddMonth("May", 31);
AddMonth("June", 30);
AddMonth("July", 31);
AddMonth("August", 31);
AddMonth("September", 30);
AddMonth("October", 31);
AddMonth("November", 30);
AddMonth("December", 31);

RegisterBlockComponent("aeon:clock", GetTime);
RegisterBlockComponent("aeon:calendar", Calendrical);
RegisterBlockComponent("aeon:atom_clock", AtomClock);