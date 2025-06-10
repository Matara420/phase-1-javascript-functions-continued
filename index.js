// code your solution here
function appendOutput(message) {
    console.log(message);
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
appendOutput(saturdayFun());
appendOutput(saturdayFun('hike'));


const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};
appendOutput(mondayWork());
appendOutput(mondayWork('learn JavaScript'));


function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const encouragingPromptFunction = wrapAdjective("!!!");
appendOutput(encouragingPromptFunction("amazing"));
appendOutput(wrapAdjective("%")("a dedicated programmer"));
