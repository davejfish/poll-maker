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
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function newPoll(question, answerA, answerB) {
    state.poll = {
        question,
        answerA,
        answerB,
    };
}