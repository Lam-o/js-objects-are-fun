const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//new variable with empty object
const learning = {};

learning.topic = "JS";

learning.learningGoals = [
    "Memorize all the syntax",
    "More time",
    "Create great code",
    "Write cool apps"
];
learning.category = "front end development";
learning.topicImportance = "high";

console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1,1);

console.log(learning);

topicElement.innerText = `♻️ I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");

















