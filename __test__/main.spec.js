const add = require('../index');

describe('pos', () => {
    var inputs;

    beforeEach(() => {
        inputs = [
            {
                "id": "0001", 
                "name" : "Coca Cola", 
                "price": 3
            },
            {
                "id": "0002", 
                "name" : "Diet Coke", 
                "price": 4
            },
            {
                "id": "0003", 
                "name" : "Pepsi-Cola", 
                "price": 5
            },
            {
                "id": "0004", 
                "name" : "Mountain Dew", 
                "price": 6
            },
            {
                "id": "0005", 
                "name" : "Dr Pepper", 
                "price": 7
            },
            {
                "id": "0006", 
                "name" : "Sprite", 
                "price": 8
            },
            {
                "id": "0007", 
                "name" : "Diet Pepsi", 
                "price": 9
            },
            {
                "id": "0008", 
                "name" : "Diet Mountain Dew", 
                "price": 10
            },
            {
                "id": "0009", 
                "name" : "Diet Dr Pepper", 
                "price": 11
            },
            {
                "id": "0010", 
                "name" : "Fanta",
                "price": 12
            }
            
        ];
    });

    it ('should check item in database', () => {
        const barcode = ['0001', '0003', '0005', '0003'];
        const result = add.checkItemInDatabase(inputs, barcode);
        const expected = "Receipt\n"+
        "------------------------------------------------------------\n"+
        "Coca Cola      3\t1\n"+
        "Pepsi-Cola     5\t2\n"+
        "Dr Pepper      7\t1\n"+
        "------------------------------------------------------------\n"+
        "Price: 20";
        console.log(expected)
        console.log(result);
        expect(result).toBe(expected);
    });
});