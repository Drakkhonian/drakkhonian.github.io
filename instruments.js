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
    document.getElementById("workshop_selections").innerHTML = "Instruments Inititalized"
};