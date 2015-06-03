var classes = require('classes'),
    events = require('event');

module.exports = function(options) {
    options = options || {};

    var countedList,
        list;

    var refresh = function() {
        var length = list.matchingItems.length,
            counterContainers = document.getElementsByClassName(options.countClass || "count");

        for (var i = 0 ; i < counterContainers.length ; ++i) {
            counterContainers[i].innerHTML = length;
        }
    };

    return {
        init: function(parentList) {
            list = parentList;
            list.on('updated', refresh);
            refresh();
        },
        name: options.name || "counter"
    };
};
