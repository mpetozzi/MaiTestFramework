/*    maiTest
@Version:   0.2
 @Author:   Maicol Petozzi
   @Date:   04 Aug 2014
   @Desc:   Simple Test framework with group test and assert features.
*/
(function () {
    this.version = 0.2;
    var currentContainerAsserts;

    this.assert = function (value, description) {
        var li = createEntry(description);
        if (value === false) {
            li.className = 'bad';
            currentContainerAsserts.parentNode.className = 'bad';
        }
        currentContainerAsserts.appendChild(li);
    }

    this.test = function (description, fn) {
        var li = createEntry(description);
        document.getElementById('results').appendChild(li);
        var ul = document.createElement('ul');
        li.appendChild(ul);
        currentContainerAsserts = ul;
        fn();
    }

    function createEntry(description) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(description));
        li.className = 'good';
        return li;
    }
})();