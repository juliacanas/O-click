'use strict';

const faqQuestionsElements = document.querySelectorAll('.faq-question');
const faqQuestions = [...faqQuestionsElements];

const toggleFaqs = (event) => {
  //console.dir(event.currentTarget);
  const article = event.currentTarget.parentElement; //el pare del header es l'article. Cridem al pare de l'element que rep l'event
  article.classList.toggle('toggle-faq-on');//toogle(si esta ho treu, si no esta ho posa) El que? La classe nova
}

faqQuestions.forEach(question => {
  question.addEventListener('click', toggleFaqs);
})



