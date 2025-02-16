// file: /components/ResponseDisplay.js

const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Generating flashcards...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    // Check if the data contains flashcards
    if (data.result.flashcards) {
      content = (
        <div className="flashcards-container">
          {data.result.flashcards.map((flashcard, index) => (
            <div key={index} className="flashcard">
              <h3>Question {index + 1}:</h3>
              <p>{flashcard.question}</p>
              <h3>Answer:</h3>
              <p>{flashcard.answer}</p>
            </div>
          ))}
        </div>
      );
    } else {
      content = "No flashcards found.";
    }
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;