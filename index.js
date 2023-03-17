// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(task = "go to the office") {
    return (`This Monday, I will ${task}.`)
}
function wrapAdjective(adjective, message = `You are`){
    return function (special){
        return `${message} ${adjective}${special}${adjective}!`
}}