describe("Jasmine Matchers", function () {
  it('allows for === and deep equality', function() {
    expect(1 + 3).toBe(4);
    expect([1, 2, 4]).toEqual([1, 2, 4]);
  });
})
