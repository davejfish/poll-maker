import PullBox from './PollBox.js';

export default function createPollDisplay(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    // return ({ game }) => {
    return ({ poll }) => {
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
        root.innerHTML = '';
        const pullBox = PullBox({ poll });
        root.append(pullBox);
    };
}