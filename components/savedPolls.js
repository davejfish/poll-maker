export default function createPolls(root) {
    // reference the DOM
    const container = root.querySelector('.previous-polls');

    
    

    // should return its component render function
    // return ({ polls }) => {
    return ({ polls }) => {

        container.innerHTML = '';

        for (const poll of polls) {
            const pullsHistory = document.createElement('div');
            pullsHistory.classList.add('polls-container');

            const span1 = document.createElement('span');
            span1.classList.add('poll-result-question');
            span1.textContent = poll.question;

            const span2 = document.createElement('span');
            span2.classList.add('poll-result-A');
            span2.textContent = poll.answerA;

            const span3 = document.createElement('span');
            span3.classList.add('poll-result-B');
            span3.textContent = poll.answerB;

            const span4 = document.createElement('span');
            span4.classList.add('votes-A');
            span4.textContent = poll.votesA;

            const span5 = document.createElement('span');
            span5.classList.add('votes-B');
            span5.textContent = poll.votesB;

            pullsHistory.append(span1, span2, span3, span4, span5);
            container.append(pullsHistory);
        }
    };
}