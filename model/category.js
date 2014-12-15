var fs = require('fs');

exports.list = function(){
    var cats = JSON.parse(fs.readFileSync("../export/categories.json"));
    return cats;
}
