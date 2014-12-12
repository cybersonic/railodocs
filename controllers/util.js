/**
 * Created by Mark.Drew on 12/12/2014.
 */
exports.isApi = function(req){

    var pathParts = req._parsedUrl.pathname.split(".");
    if(pathParts[pathParts.length-1].toLowerCase() == 'json') {
        return true;
    }
    return false;
};


exports.stripJSONSuffix = function(input) {
    input = input.trim().toLowerCase();
    if (input.substr(input.length - 5, 5) == '.json') {
        return input.substring(0, input.length - 5);
    }
    return input;
};

exports.cleanTag = function(dirtyTagName){
    var cleanTagRE = /(cf[a-zA-Z]*)/;
    var cleanTag = dirtyTagName.match(cleanTagRE);
    if (cleanTag === null || cleanTag.length === 0) {
        return undefined;
    }
    return cleanTag[0];
};