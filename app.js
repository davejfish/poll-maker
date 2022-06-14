// import utilities

// import component creators
import createNewPoll from './components/newPoll.js';
import createPollDisplay from './components/pollDisplay.js';
import createPollVoter from './components/PollVoter.js';
// import state and dispatch functions
import state, { newPoll, upVote, downVote, endPoll } from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const PollVoter = createPollVoter(document.querySelector('#poll-tracker'), {
    handleUpVote: (team) => {
        upVote(team);
        display();
    },
    handleDownVote: (team) => {
        downVote(team);
        display();
    },
    handleEndPoll: () => {
        endPoll();
        display();
    },
});

const PollDisplay = createPollDisplay(document.querySelector('#poll'));

const NewPoll = createNewPoll(document.querySelector('#create-poll'), {
    handleNewPoll: (question, answerA, answerB) => {
        newPoll(question, answerA, answerB);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PollDisplay({ poll: state.poll });
    PollVoter({ poll: state.poll });
    NewPoll({ poll: state.poll });
}

// Call display on page load
display();
