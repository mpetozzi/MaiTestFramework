window.onload = function () {
    test('First tests', function () {
        assert(true, 'Test passed');
        assert(false, 'Test failed');
    });
    test('Other tests', function () {
        assert(true == true, 'it should be equal');
        assert(false == false, 'it should also be equal');
    });
}

if (version >= 0.3) {
    window.onload = function () {
        test("Async Test #1", function () {
            pause();
            setTimeout(function () {
                assert(true, "First test completed, II");
                resume();
            }, 3000);
            assert(true, "First test completed, I");
        });
        test("Async Test #2", function () {
            pause();
            setTimeout(function () {
                assert(true, "Second test completed");
                resume();
            }, 3000);
        });
    };
}