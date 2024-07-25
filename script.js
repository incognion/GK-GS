function checkAnswer(question, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    const resultDiv = document.getElementById(`${question}-result`);
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === correctAnswer) {
            resultDiv.textContent = 'सही उत्तर!';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'गलत उत्तर। सही उत्तर है: ' + correctAnswer.toUpperCase();
            resultDiv.style.color = 'red';
        }
    } else {
        resultDiv.textContent = 'कृपया एक विकल्प चुनें।';
        resultDiv.style.color = 'orange';
    }
}