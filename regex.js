/*
Assuming we had the following list of files:

      one.js
      one.json
      one.html
      one.html.erb
      two.js
      two.json
      two.html
      two.html.erb
      other.jsx

Create regular expressions below that match certain
subsets of these files.
*/

module.exports = {

  // Match files with "one" anywhere in the file name.
  one: /.*/,

  // Match files that start with the letter "o".
  o: /.*/,

  // Match files ending in ".js". Make sure you don't
  // match files ending in ".json".
  js: /.*/,

  // Match files ending in ".js" or ".json". But not
  // other formats like ".jsx" or ".html".
  jsAndJson: /.*/,

  // Match files ending in ".html" but not those with
  // ".html" elsewhere in their name like "two.html.erb".
  htmlEnd: /.*/
};
