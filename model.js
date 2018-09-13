const fs = require('fs');

fs.readFile('polls.json', 'utf8', function (err, data) {
    if(err)
	console.log(err)
	// error handling
	//
    let allPolls = JSON.parse(data);
    console.log(allPolls.length+" polls")
    let senatePolls = getCategoryPolls(allPolls, "senate")
    let texasPolls = getStatePolls(senatePolls, "Texas")
    console.log(texasPolls[1])
    averagePolls(texasPolls)
});


function getCategoryPolls(polls, type) {
	let categoryPolls = [];
	for(let i = 0; i < polls.length; i++) {
		if(polls[i].type === type) {
			categoryPolls.push(polls[i])
		}
	}
	return categoryPolls;
}

function getStatePolls(polls, state) {
	let statePolls = [];
	for(let i = 0; i < polls.length; i++) {
		if(polls[i].state === state) {
			statePolls.push(polls[i])
		}
	}
	return statePolls;
}

function modelPolls(polls, ratings) {
	
}
//simple average of polls
function averagePolls(polls) {
	let votes = [{choice: "filler"}];
	for(let i = 0; i < polls.length; i++) {
		console.log(i)
		let sampleSize = polls[i].sampleSize
		for(let j = 0; j < polls[i].answers.length; j++) {
			console.log(j)
			let isNew = true;
			for(let k = 0; k < votes.length; k++) {
				console.log(votes)
				if(polls[i].answers[j].choice === votes[k].choice) {
					votes[k].number += (sampleSize * (0.01 * Number(polls[i].answers[j].pct)))
					isNew = false;
				}

			}
			if (isNew){
					votes.push({choice: polls[i].answers[j].choice, number: sampleSize * (0.01 * Number(polls[i].answers[j].pct))})
				}
		
		}
	}
	console.log(votes)
	return votes;
}

function weightPoll(poll, rating) {
	let predictive = rating["Predictive Plus-Minus2"];
	let meanBias = rating["Mean-Reverted Bias"];
	
	//apply mean bias to polling
}
