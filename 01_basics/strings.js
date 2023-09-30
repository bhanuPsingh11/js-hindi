const name = "rahul"
const repoCount= 8

// console.log(name+" "+repoCount+" smart");
// console.log(`my name is ${name} and repo count is ${repoCount}`);


const hellName = new String("hell-Name-cat")

// console.log(hellName.charAt(0));

// console.log(hellName.indexOf("e"));



// var str = "hellName";
// var indices = [];
// for(var i=0; i<str.length;i++) {
//     if (str[i] === "e") indices.push(i);
// }

// console.log(str);
// console.log(indices);

// const htmlURL = "   https://turbo-fiesta-qr9wgwwxjxpf9pxv.github.dev/   "
// // console.log(htmlURL.trim());
// console.log(htmlURL.replace("-","$"));
// console.log(htmlURL.trim());
// console.log(hellName.split("-"));
// console.log(htmlURL.includes("hello"));


const htmlURL = "   https://turbo-fiesta-qr9wgwwxjxpf9pxv.github.dev/";

// Create a regular expression with the global flag to match all occurrences of "-"
const hyphenRegex = /-/g;

// Use the replace method with the regular expression to replace all hyphens with "$"
const newURL = htmlURL.replace(hyphenRegex, "$");

console.log(newURL);

const fName =  "B-h-a-n-u";

console.log(fName.replaceAll("-", "$"));
