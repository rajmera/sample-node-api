'use strict';

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

// exports.list_all_tasks = function(req, res) {
//     inventory.find({}, function(err, fruit) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(fruit);    
//     });
// };

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
exports.list_all_tasks = function(req, res) {
    res.json(inventory.find(findCherries)); 
};