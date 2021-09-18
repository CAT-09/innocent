//The first thing is that the way you commented in the file is not the right way to comment in javascript.
//The work in this file was not terminated.
// The first five functions have return statements which makes the variables to be accessed by any fuction.
//The return statement is used whem using var global instead of let which only local.
//function not called.
function tests(test1 = 10, test2 = 5) {
    var greater = test1 > test1 ? test1 : test2;
    //console.log was not put.
    console.log(greater);
    return greater;
    //function had no a closing bracket.
}
tests();

//Below the word cswork wasnt to be anywhere in this fucncton so i moved it out from the brackets.
//function not called.
//Empty lines were deleted to keep my code clean.
//fuction was again assigned as avariable which is wrong.
//cswork was not defined.
//values of variable were put in the brackets and wrongly placed so i re-arranged.
function add() {
    var cswork = 80;
    var tests = 80;
    var answer = cswork + tests;;
    console.log(answer);
    return answer;
}
add();


//fuction was again assigned as avariable which is wrong.
//The bracket was not closing
//function was not called.
//console.log was not put.
function div(a) {
    var avg = (90 / a);
    console.log(avg);
    return avg;
}
div(2);

//function was not called.
//console.log was not put.
function mult(a) {
    var exm = avg() * (a / 100);
    console.log(exm);
    return exm;
}
mult2();

//console.log was not put.
//fucntion was not called.
function exm(a) {
    var fexm = (60 / 100) * a;
    console.log(fexam);
    return fexam;
}
exm(a);


//Dont see any problem apart from the termination.
//since is the last function down not need of putting a return statement.
function fnal() {
    let fmark = exm(75) + crsmark(40);
    console.log(fmark);

}
fnal()