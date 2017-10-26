describe('The greetedNames function', function() {

        it("should return Hello Ayabulela when english is selected", function() {
                assert.equal(greetedNames('Ayabulela', 'english'), "Hello, Ayabulela");
        });

        it("should return Molo Ayabulela when xhosa is selected", function() {
                assert.equal(greetedNames('Ayabulela', 'xhosa'), 'Molo, Ayabulela');
        });
        it("should return Hallo davids when afrikaans is selected", function() {
                assert.equal(greetedNames('davids', 'afrikaans'), 'Halo, davids');
        });
});



describe('The clickCounter function', function() {
        it("should add value when  a new name is greeted", function() {
                assert.equal(1, clickCounter());
        });
});


describe('The clearReset function', function() {
        it('should start from 0 when the reset button is clicked', function() {
                assert.equal(clearReset(), undefined);
        })
})
