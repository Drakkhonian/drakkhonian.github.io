import { primaries, primaries_names, coin_list } from "./structures.js";

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


function generate_button_clicked(){
    document.getElementById("results").innerHTML = "element check 3";
    for (let element_index = 0; element_index <element_list.length; element_index++){
        const current_element = element_list[element_index];

        if (getElementById(current_element + "_intrument_checkbox").checked)
            document.getElementById("results").innerHTML = current_element;
    }
}

function initialize_instruments(){
    document.getElementById("workshop_selections").innerHTML = "";

    var element_area = document.createElement('div');
    element_area.id = "instrument_element_selection";
    element_area.className = "family_space";
    document.getElementById("workshop_selections").appendChild(element_area);

    for (let element_index = 0; element_index < element_list.length; element_index++) {
        const current_element = element_list[element_index];

        var element_space = document.createElement('div');
        element_space.id = current_element + "_instrument_area";
        element_space.className = "family_boxes";
        document.getElementById("instrument_element_selection").appendChild(element_space);

        var element_checkbox = document.createElement('input');
        element_checkbox.id = current_element + "_intrument_checkbox";
        element_checkbox.type = "checkbox";
        element_checkbox.className = "select";
        document.getElementById(element_space.id).appendChild(element_checkbox);

        document.getElementById(element_space.id).innerHTML += current_element;
    };

    var magic_type_area = document.createElement('div');
    magic_type_area.id = "instrument_magic_type_selection";
    magic_type_area.className = "family_space";
    document.getElementById("workshop_selections").appendChild(magic_type_area);

    for (let area_type_index = 0; area_type_index < area_type.length; area_type_index++) {
        const area_element = area_type[area_type_index];

        for (let target_type_index = 0; target_type_index < target_type.length; target_type_index++) {
            const target_element = target_type[target_type_index];
            
            var magic_type_space = document.createElement('div');
            magic_type_space.id = area_element + "_" + target_element + "_instrument_area";
            magic_type_space.className = "family_boxes";
            document.getElementById(magic_type_area.id).appendChild(magic_type_space);

            var magic_type_checkbox = document.createElement('input');
            magic_type_checkbox.id = area_element + "_" + target_element + "_instrument_checkbox";
            magic_type_checkbox.type = "checkbox";
            magic_type_checkbox.className = "select";
            document.getElementById(magic_type_space.id).appendChild(magic_type_checkbox);

            document.getElementById(magic_type_space.id).innerHTML += area_element + " " + target_element;

        };
        
    };

    var calculate_button = document.createElement("button");
    calculate_button.id = "instrument_calculate_button";
    calculate_button.innerHTML = "generate instruments";
    document.getElementById("workshop_selections").appendChild(calculate_button);

    if (calculate_button.addEventListener){
        calculate_button.addEventListener("click",generate_button_clicked,false);
    }
    else if (calculate_button.attachEvent){
        calculate_button.attachEvent("onclick",generate_button_clicked);
};

};

var instr_init_button = document.getElementById("instrument_initializer");
if (instr_init_button.addEventListener){
    instr_init_button.addEventListener("click",initialize_instruments,false);
}
else if (instr_init_button.attachEvent){
    instr_init_button.attachEvent("onclick",initialize_instruments);
};