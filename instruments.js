// import { primaries, primaries_names, coin_list } from "./structures.js";

const element_list =["Wisp",
    "Shade",
    "Dryad",
    "Aura",
    "Salamander",
    "Gnome",
    "Jinn",
    "Undine",
];

const area_type =["Circle",
    "Donut",
    "Fan",
    "Line",
    "Random",
    "Sphere",
    "Control"
];

const target_type =["Fire",
    "Lock"
];

const attack_shape_map = [[10, 11, 10, 10, 6, 12, 13, 12],
[11, 11, 10, 7, 6, 7, 13, 13],
[10, 10, 4, 4, 7, 12, 6, 12],
[10, 4, 10, 6, 4, 6, 8, 12],
[0, 4, 5, 5, 4, 9, 6, 12],
[0, 4, 0, 8, 4, 2, 8, 8],
[1, 1, 4, 4, 9, 8, 3, 3],
[0, 1, 0, 0, 2, 2, 3, 2]];

function initialize_instruments(){
    document.getElementById("workshop_selections").innerHTML = "";
    var element_area = document.createElement('div');
    element_area.id = "instrument_element_selection";
    element_area.className = "type_space";
    document.getElementById("workshop_selections").appendChild(element_area);
    for (let element_index = 0; element_index < element_list.length; element_index++) {
        const current_element = element_list[element_index];
        var element_space = document.createElement('div');
        element_space.id = current_element + "_instrument_area";
        element_space.className = "family_space";
        document.getElementById("instrument_element_selection").appendChild(element_space);
        var element_checkbox = document.createElement('input');
        element_checkbox.id = current_element + "_intrument_checkbox";
        element_checkbox.className = "select";
        document.getElementById(element_space.id).appendChild(element_checkbox);
        document.getElementById(element_space.id).innerHTML += current_element;
    }
};

var instr_init_button = document.getElementById("instrument_initializer");
if (instr_init_button.addEventListener){
    instr_init_button.addEventListener("click",initialize_instruments,false);
}
else if (instr_init_button.attachEvent){
    instr_init_button.attachEvent("onclick",initialize_instruments);
};