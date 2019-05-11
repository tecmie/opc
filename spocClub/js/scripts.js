it("has_linked_stylesheet", function () {
    //Failure message:
    //have you linked your stylesheet to your index.html file?
    expect("link").toHaveAttr('href', 'styles.css');
})

it("all_divs_added", function () {
    //Failure message:
    //Have you added all necessary divs to your HTML file?
    expect(document.getElementsByTagName("div")[3].getAttribute("id")).toEqual('about');
})

it("about_div_styled", function () {
    //Failure message:
    //Have you styled all your divs appropriately? Most especially the about div
    expect("#banner>a>h4").toHaveCss({"border": "2px soild white", "width": "20%", "text-align": "center"})
})

it("table_styling1", function () {
    //Failure message:
    //Have you styled the table appropriately? Check every individual step
    expect("#activities>th").toHaveCss({"padding-top": "12px", "text-align": "left"});
})

it("table_styling", function () {
    //Failure message:
    //Have ensure that the styling for your table data is accurate
    expect("#activities>tr:nth-child()").toHaveCss({"background-color": "rgba(0, 0, 0, 0.5)"});
})