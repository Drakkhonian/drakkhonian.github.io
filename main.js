import { primaries, primaries_names, secondaries, secondaries_names } from "./structures.js";
//document.getElementById("inventory").innerHTML = "<div id="+"metal_boxes"+"></div>";
//document.getElementById("metal_boxes").innerText = metal_list

//metals = document.createElement('div');
//metals.id = "metals_boxes2";
//metals.innerHTML = metal_list;

for (let family_index = 0; family_index < primaries.length; family_index++) {
    const family_element = primaries[family_index];
    var family_name  = primaries_names[family_index];
    console.log(primaries)
    family_area = document.createElement('div');
    family_area.id = family_name + "_space";
    family_area.className = "family_space";
    document.getElementById("primary").appendChild(family_area);
    family_title = document.createElement('div');
    family_title.id = family_name + "_title";
    family_title.innerHTML = family_name;
    document.getElementById(family_area.id).appendChild(family_title);
    family_boxes = document.createElement('div');
    family_boxes.id = family_name + "_boxes";
    family_boxes.className = "family_boxes";
    document.getElementById(family_area.id).appendChild(family_boxes);
    for (let material_index = 0; material_index < family_element.length; material_index++) {
        const material_element = family_element[material_index];
        material_area = document.createElement('div');
        material_area.id = material_element + "_id";
        document.getElementById(family_boxes.id).appendChild(material_area)
        material_checkbox = document.createElement('input');
        material_checkbox.id = material_element + "_checkbox";
        material_checkbox.type = 'checkbox';
        material_checkbox.className = "select";
        document.getElementById(material_area.id).appendChild(material_checkbox);
        material_amount = document.createElement('input');
        material_amount.id = material_element + "_amount";
        material_amount.type = 'number';
        material_amount.value = 0;
        material_amount.max = 100;
        material_amount.min = 0;
        material_amount.className = "qnty";
        document.getElementById(material_area.id).appendChild(material_amount);
        material_area.innerHTML += material_element;
    }
}
for (let family_index = 0; family_index < primaries.length; family_index++) {
    const family_element = secondaries[family_index];
    var family_name  = secondaries_names[family_index]
    family_area = document.createElement('div');
    family_area.id = family_name + "_space";
    family_area.className = "family_space";
    document.getElementById("secondary").appendChild(family_area);
    family_title = document.createElement('div');
    family_title.id = family_name + "_title";
    family_title.innerHTML = family_name;
    document.getElementById(family_area.id).appendChild(family_title);
    family_boxes = document.createElement('div');
    family_boxes.id = family_name + "_boxes";
    family_boxes.className = "family_boxes";
    document.getElementById(family_area.id).appendChild(family_boxes);
    for (let material_index = 0; material_index < family_element.length; material_index++) {
        const material_element = family_element[material_index];
        material_area = document.createElement('div');
        material_area.id = material_element + "_id";
        material_area.className = "family_boxes"
        document.getElementById(family_boxes.id).appendChild(material_area)
        material_checkbox = document.createElement('input');
        material_checkbox.id = material_element + "_checkbox";
        material_checkbox.type = 'checkbox';
        material_checkbox.className = "select";
        document.getElementById(material_area.id).appendChild(material_checkbox);
        material_amount = document.createElement('input');
        material_amount.id = material_element + "_amount";
        material_amount.type = 'number';
        material_amount.value = 0;
        material_amount.max = 100;
        material_amount.min = 0;
        material_amount.className = "qnty";
        document.getElementById(material_area.id).appendChild(material_amount);
        material_area.innerHTML += material_element;
    }
}

//document.getElementById("inventory").appendChild(metals);
