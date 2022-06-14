import state, {
    initialize,
    newPoll,
    // import dispatch functions
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