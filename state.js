// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];

    // state.poll = {
    //     question: 'cats or dogs',
    //     answerA: 'cats',
    //     answerB: 'dogs',
    // };
    state.poll = null;
    state.polls = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function newPoll(question, answerA, answerB) {
    state.poll = {
        question: question,
        answerA: answerA,
        answerB: answerB,
        votesA: 0,
        votesB: 0,
    };
}

export function upVote(team) {
    if (team === 'A') {
        state.poll.votesA++;
    }
    if (team === 'B') {
        state.poll.votesB++;
    }
}

export function downVote(team) {
    if (team === 'A') {
        if (state.poll.votesA === 0) return;
        state.poll.votesA--;
    }
    if (team === 'B') {
        if (state.poll.votesB === 0) return;
        state.poll.votesB--;
    }
}

export function endPoll() {
    state.polls.push(state.poll);
    state.poll = null;
}