export default function createPollVoter(root, {
    handleUpVote,
    handleDownVote,
    handleEndPoll,
}) {
    // reference DOM
    const [aVotes, bVotes] = root.querySelectorAll('span');
    const [upVoteA, downVoteA, upVoteB, downVoteB, endPoll] = root.querySelectorAll('button');

    // event listeners
    upVoteA.addEventListener('click', () => {
        handleUpVote('A');
    });
    downVoteA.addEventListener('click', () => {
        handleDownVote('A');
    });
    upVoteB.addEventListener('click', () => {
        handleUpVote('B');
    });
    downVoteB.addEventListener('click', () => {
        handleDownVote('B');
    });
    endPoll.addEventListener('click', () => {
        handleEndPoll();
    });

    // should return its component render function
    // return ({ game }) => {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        aVotes.textContent = poll.votesA;
        bVotes.textContent = poll.votesB;
    };

}

