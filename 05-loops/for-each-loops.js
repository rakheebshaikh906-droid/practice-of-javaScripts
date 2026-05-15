//+++++++++++++++ for each loops +++++++++++++++++++++++++++++++

//for each loops 
/* we used this in array many times they are very usefull*/

//example

let coding = ['java', 'phython', 'js', 'c', 'c++'];

coding.forEach(function (val) {
    console.log(val);
});

//using arrow function
coding.forEach((val) => {
    console.log(val);
});

// forEach using objects


const coding = [

    {
        languageName: "JavaScript",
        languageFile: "js"
    },

    {
        languageName: "Java",
        languageFile: "java"
    },

    {
        languageName: "Python",
        languageFile: "py"
    }

];

// Normal function

coding.forEach(function (item) {

    console.log(item);

});

// Access specific object values

coding.forEach(function (item) {

    console.log(item.languageName);

});


