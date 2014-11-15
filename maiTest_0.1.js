var tests = [];
var currentTest;
var counter = 0;

this.version = 0.1;

function assert(value, description) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(description));
    li.className = value ? 'good' : 'bad';
    document.getElementById(currentTest.name).appendChild(li);
    if (value == false) {
        currentTest.fail();
    }
    currentTest.addAssert(value, description);
}

function test(description, fn) {
    currentTest = new Test(description);
    tests.push(currentTest);

    var testEl = document.createElement('li');
    currentTest.setElement(testEl);
    testEl.appendChild(document.createTextNode(description));
    document.getElementById('results').appendChild(testEl);

    var testContainerEl = document.createElement('ul');
    testContainerEl.setAttribute('id', currentTest.name);
    testEl.appendChild(testContainerEl);

    fn();
}

function Test(description) {
    this.name = counter++;
    this.desc = description;
    this.asserts = [];
    this.testEl;
    this.setElement = function (element) {
        this.testEl = element;
    }
}
Test.prototype.fail = function () {
    this.testEl.className = 'bad';
}
Test.prototype.addAssert = function (result, description) {
    console.log(description);
    this.asserts.push({
        result: result,
        desc: description
    });
};