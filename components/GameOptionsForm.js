export default function GameOtionsForm({ questions }) {
  return (
    <form>
      {questions.map(question => (
        <fieldset>
          <legend>{question.label}</legend>
          {
            question.options.map(({ value, label, id }) => (
              <>
                <label>
                  <input 
                    type="radio" 
                    id={id} 
                    name="game_questions" 
                    value={value}
                  />
                  {label}
                </label>
                <br />
              </>
            ))
          }
        </fieldset>))
      }
    </form>
  );
}