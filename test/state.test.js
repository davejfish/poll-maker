import state, {
    initialize,
    // import dispatch functions
    newPoll,
    upVote,
    downVote,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the first state test...', (expect) => {
    // what is the initial expected state?

    // use the action

    // what should the state be now?


    // remove this line when starting your test
    expect.deepEqual(state.poll, null);
});

test('setting state from a input', (expect) => {
    // what is the initial expected state?
    expect.equal(state.poll, null);
    // use the action
    newPoll('cats or dogs', 'cats', 'dogs');
    const newState = state.poll;
    // what should the state be now?
    expect.deepEqual(state.poll, newState);
});

test('adds a vote to A or B', (expect) => {
    // what is the initial expected state?
    expect.equal(state.poll, null);

    // use the action
    newPoll('cats or dogs', 'cats', 'dogs');
    upVote('A');
    // what should the state be now
    let currentState = state.poll;
    expect.deepEqual(state.poll, currentState);

    upVote('B');
    currentState = state.poll;
    expect.deepEqual(state.poll, currentState);
});

test('takes away a vote from A or B', (expect) => {
    expect.equal(state.poll, null);

    newPoll('cats or dogs', 'cats', 'dogs');
    downVote('A');
    expect.deepEqual(state.poll, {
        question: 'cats or dogs',
        answerA: 'cats',
        answerB: 'dogs',
        votesA: 0,
        votesB: 0,
    });

    upVote('A');
    upVote('A');
    downVote('A');
    expect.deepEqual(state.poll, {
        question: 'cats or dogs',
        answerA: 'cats',
        answerB: 'dogs',
        votesA: 1,
        votesB: 0,
    });

    downVote('B');
    expect.deepEqual(state.poll, {
        question: 'cats or dogs',
        answerA: 'cats',
        answerB: 'dogs',
        votesA: 1,
        votesB: 0,
    });

    upVote('B');
    upVote('B');
    downVote('B');
    expect.deepEqual(state.poll, {
        question: 'cats or dogs',
        answerA: 'cats',
        answerB: 'dogs',
        votesA: 1,
        votesB: 1,
    });
});