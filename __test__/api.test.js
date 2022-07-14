test("testing home page", () => {
    const req = {},
        res = { render : jest.fn() };
    home = (req, res) => res.render("home");
    home(req, res);
    expect(res.render).toHaveBeenCalledWith("home");

})