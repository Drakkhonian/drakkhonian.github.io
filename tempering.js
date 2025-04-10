function initialize_tempering(){
    document.getElementById("workshop_selections").innerHTML = "Tempering Inititalized";
};

var instr_init_button = document.getElementById("tempering_initializer");
if (instr_init_button.addEventListener){
    instr_init_button.addEventListener("click",initialize_tempering,false);
}
else if (instr_init_button.attachEvent){
    instr_init_button.attachEvent("onclick",initialize_tempering);
};