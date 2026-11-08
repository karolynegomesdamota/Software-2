let number_candidates = prompt("Enter number of candidates: ")

let all_candidates = [];
let name_candidate;


for (let i = 0; i < number_candidates; i++) {
    name_candidate = prompt("Enter the name of the candidate " + [i+1] + ":")
    all_candidates.push({name: name_candidate, votes: 0});
};

let number_voters = prompt("Enter number of voters: ")
let who_they_vote;

for (let i = 0; i < number_voters; i++) {
    who_they_vote = prompt("Voter number " + [i+1] + ". Please, enter the name of the candidate you vote: ")

    for (let j = 0; j < all_candidates.length; j++) {
        if (who_they_vote === all_candidates[j].name) {
            all_candidates[j].votes += 1;
    };
    };
};

all_candidates.sort((a, b) => {
    return b.votes - a.votes;
});

console.log("The winner is " + all_candidates[0].name + " with " + all_candidates[0].votes + " votes.");
console.log("Results: ");
for (let i = 0; i < all_candidates.length; i++){
    console.log(all_candidates[i].name + ": " + all_candidates[i].votes + " votes")
}