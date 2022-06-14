export default function createNewPoll(root, { handleNewPoll }) {
    // reference DOM
    const form = root.querySelector('form');
    // event listeners
    form.addEventListener('submit', (e) => {
        // don't navigate away from this page!
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(formData.get('poll-question'), formData.get('poll-answer-A'), formData.get('poll-answer-B'));

        form.reset();
    });
    // should return its component render function
    // return ({ data }) => {
    return ({ poll }) => {

        if (poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}