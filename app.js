// import utilities

// import component creators
import createNewPoll from './components/newPoll.js';
// import state and dispatch functions
import state, { newPoll } from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const NewPoll = createNewPoll(document.querySelector('#create-poll'), {
    handleNewPoll: (question, answerA, answerB) => {
        newPoll(question, answerA, answerB);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    NewPoll({ poll: state.poll });
}

// Call display on page load
display();
