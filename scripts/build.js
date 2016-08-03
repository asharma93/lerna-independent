var fs = require('fs');
var stream = fs.createWriteStream("./index.js");
var config = require('./../webpack.config.js');

var projectsArray = Object.keys(config.entry);


stream.once('open', function() {
    projectsArray.forEach(function(project) {
        stream.write('export ' + project.capitalizeFirstLetter() + ' from ' + "'./" + project + ".bundle.js';\n");
    });
    stream.end();
});

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};