export default function PullBox(props) {
    const poll = props.poll;
    
    const div = document.createElement('div');
    div.classList.add('poll');

    const span1 = document.createElement('span');
    span1.classList.add('question');
    span1.textContent = poll.question;

    const span2 = document.createElement('span');
    span2.classList.add('answer-a');
    span2.textContent = poll.answerA;

    const span3 = document.createElement('span');
    span3.classList.add('answer-b');
    span3.textContent = poll.answerB;

    div.append(span1, span2, span3);

    return div;
}