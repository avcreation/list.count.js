describe('Default settings', function() {
    var list,
        itemHTML,
        count;

    before(function() {
        list = new List('list', {
            valueNames: ['name'],
            plugins: [
                ListCount({})
            ]
        }, fixture.all);

        count = $('.count');
    });

    after(function() {
        fixture.removeList();
    });

    it('should have default settings', function() {
        expect(count.html() == 18);
    });


    it('should have length equal to 17', function() {
        list.remove('name', 'gun');
        expect(count.html() == 17);
    });
});
