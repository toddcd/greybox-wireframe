function startQuiz() {
    $('.start-screen').on('click', '.start-button', function (event) {
        $('.start-screen').remove();
        $('.question-score').css('visibility', 'visible');
        $('.questionChoices').css('display', 'block');
        $('.questionChoices').html(`
           <form id="question-form">
               <h2>How many bicycles should one person own?</h2>
               <fieldset>
                  <label class="answerOption">
                   <input type="radio" value="1" name="choice" required>
                   <span>1</span>
                 </label>
                 <label class="answerOption">
                   <input type="radio" value="3" name="choice" required>
                   <span>3</span>
                 </label>
                 <label class="answerOption">
                   <input type="radio" value="5" name="choice" required>
                   <span>5</span>
                 </label>
                 <label class="answerOption">
                   <input type="radio" value="N + 1" name="choice" required>
                   <span>N + 1</span>
                 </label>
               </fieldset>
               <div class="submitButton-div">
                <button type="submit" class="submitButton">Submit</button>
               </div>
           </form>
        `);
    });
}

function createQuiz() {
    startQuiz();
}

$(createQuiz);


