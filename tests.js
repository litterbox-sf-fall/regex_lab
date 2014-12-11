var expect = require("chai").expect;
var regex = require("./regex.js");

describe("Regular Expressions", function () {

  it("should find all the files containing 'one'", function () {
    expect("one.html").to.match(regex.one);
    expect("one.js").to.match(regex.one);
    expect("one.json").to.match(regex.one);
    expect("myonefavorite.js").to.match(regex.one);
    expect("neo.js").to.not.match(regex.one);
    expect("o.ne").to.not.match(regex.one);
  });

  it("should find all filenames starting with 'o'", function () {
    expect("oyster.html").to.match(regex.o);
    expect("olive.js").to.match(regex.o);
    expect("foil.html").to.not.match(regex.o);
    expect("fail.js").to.not.match(regex.o);
  });

  it("should find all js files", function () {
    expect("file.js").to.match(regex.js);
    expect("file.json").to.not.match(regex.js);
    expect("js.txt").to.not.match(regex.js);
  });

  it("should find all js and json files", function () {
    expect("file.js").to.match(regex.jsAndJson);
    expect("file.json").to.match(regex.jsAndJson);
    expect("file.jsx").to.not.match(regex.jsAndJson);
  });

  it("should find all html (but not .erb) files", function () {
    expect("file.html").to.match(regex.htmlEnd);
    expect("file.html.erb").to.not.match(regex.htmlEnd);
    expect("html.txt").to.not.match(regex.htmlEnd);
  });
});
