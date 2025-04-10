function initialize_logic_block(){
    document.getElementById("workshop_selections").innerHTML = "Logic Block Inititalized";
};

var instr_init_button = document.getElementById("logic_block_initializer");
if (instr_init_button.addEventListener){
    instr_init_button.addEventListener("click",initialize_logic_block,false);
}
else if (instr_init_button.attachEvent){
    instr_init_button.attachEvent("onclick",initialize_logic_block);
};