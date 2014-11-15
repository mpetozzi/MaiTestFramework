/*    maiTest
@Version:   0.3
 @Author:   Maicol Petozzi
   @Date:   04 Aug 2014
   @Desc:   Simple Test framework with group test and assert features, running asynchronously.
*/
var version = 0.3;
(function () {

    var queue = [],
        paused = false,
        results;

    this.test = function (name, fn) {
        queue.push(function () {
            results = document.getElementById('results');
            results = assert(true, name).appendChild(
                document.createElement('ul'));
            fn();
        });
        runTest();
    };

    this.pause = function () {
        paused = true;
    };

    this.resume = function () {
        paused = false;
        setTimeout(runTest, 1);
    };

    function runTest() {
        if (!paused && queue.length) {
            queue.shift()();
            if (!paused) {
                resume();
            }
        }
    }

    this.assert = function (value, description) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(description));
        li.className = value ? 'good' : 'bad';
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = 'bad';
        }
        return li;
    };

})();