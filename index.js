'use strict';

function checkItemInDatabase(inputs, barcode){
    const filteredList = inputs.filter(inputs_list=>barcode.includes(inputs_list.id));
    let item_count = countItem(barcode);
    let count = 0; 
    let answer = 0; 
    let result = [];
    let finalResult = "";
    let tab = "\t";
    filteredList.forEach(each_item => {
        if (each_item.id == Object.keys(item_count)[count]) {
            finalResult = each_item.name.padEnd(15, ' ') + each_item.price + tab + Object.values(item_count)[count]; 
            answer += each_item.price*Object.values(item_count)[count]; 
            count++; 
            result+= finalResult.trim();
            result+="\n";            
        }
       
    });
    const output_string = "Receipt\n"+
    "------------------------------------------------------------\n"+
    result + 
    "------------------------------------------------------------\n"+
    "Price: " + answer;
     
    return output_string;
}
module.exports = {
    checkItemInDatabase: checkItemInDatabase    
};

function countItem(barcode) {
    let item_count = {};    
    barcode.forEach((item)=>{
        item_count[item] = item_count[item] + 1 || 1
    });
    return item_count; 
}
