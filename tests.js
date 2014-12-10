var expect = require("chai").expect;
var regex = require("./regex.js");

describe("Regular Expressions", function () {

  // Declare variable for storing a list of files.
  var files;

  // Function that takes a regular expression as a
  // parameter and returns the list of files that
  // match it.
  var find = function (regex) {
    return files.filter(function (aFile) {
      return regex.test(aFile);
    });
  };

  // Reset the list of files before each test so that
  // we are sure we're working with a clean slate.
  beforeEach(function () {
    files = [
      "one.js",
      "one.json",
      "one.html",
      "one.html.erb",
      "two.js",
      "two.json",
      "two.html",
      "two.html.erb",
      "other.jsx"
    ];
  });

  it("should find all the files containing 'one'", function () {
    expect(find(regex.one)).to.eql(["one.js", "one.json", "one.html", "one.html.erb"]);
    expect("one.html").to.match(regex.one);
    expect("one.js").to.match(regex.one);
    expect("one.json").to.match(regex.one);
    expect("myonefavorite.js").to.match(regex.one);
    expect("neo.js").to.not.match(regex.one);
    expect("o.ne").to.not.match(regex.one);
  });

  it("should find all filenames starting with 'o'", function () {
    expect(find(regex.o)).to.eql(["one.js", "one.json", "one.html", "one.html.erb", "other.jsx"]);
    expect("oyster.html").to.match(regex.o);
    expect("olive.js").to.match(regex.o);
    expect("foil.html").to.not.match(regex.o);
    expect("fail.js").to.not.match(regex.o);
  });

  it("should find all js files", function () {
    expect(find(regex.js)).to.eql(["one.js", "two.js"]);
    expect("file.js").to.match(regex.js);
    expect("file.json").to.not.match(regex.js);
    expect("js.txt").to.not.match(regex.js);
  });

  it("should find all js and json files", function () {
    expect(find(regex.jsAndJson)).to.eql(["one.js", "one.json", "two.js", "two.json"]);
    expect("file.js").to.match(regex.jsAndJson);
    expect("file.json").to.match(regex.jsAndJson);
    expect("file.jsx").to.not.match(regex.jsAndJson);
  });

  it("should find all html (but not .erb) files", function () {
    expect(find(regex.htmlEnd)).to.eql(["one.html", "two.html"]);
    expect("file.html").to.match(regex.htmlEnd);
    expect("file.html.erb").to.not.match(regex.htmlEnd);
    expect("html.txt").to.not.match(regex.htmlEnd);
  });
});
