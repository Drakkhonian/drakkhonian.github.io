function initialize_forge(){
    document.getElementById("workshop_selections").innerHTML = "Forge Inititalized";
};

var instr_init_button = document.getElementById("forge_initializer");
if (instr_init_button.addEventListener){
    instr_init_button.addEventListener("click",initialize_forge,false);
}
else if (instr_init_button.attachEvent){
    instr_init_button.attachEvent("onclick",initialize_forge);
};