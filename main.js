const correctAnswers = ['C','B','A','D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index])
    {
      score += 25;
    }
  })

  // showing result on the page with animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').innerText = `${output}%`;
    if(output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
  
  result.classList.remove('d-none');
  scrollTo(0,0);

  e.preventDefault();
})