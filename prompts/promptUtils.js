// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating educational flashcards for any topic.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate 5 educational flashcards for the topic: ${input}. Each flashcard should have a clear question and a concise, factual answer.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_flashcards",
      description: "Generate educational flashcards for a given topic.",
      parameters: {
        type: "object",
        properties: {
          flashcards: {
            type: "array",
            items: {
              type: "object",
              properties: {
                question: {
                  type: "string",
                  description: "The question for the flashcard.",
                },
                answer: {
                  type: "string",
                  description: "The answer for the flashcard.",
                },
              },
              required: ["question", "answer"],
            },
          },
        },
        required: ["flashcards"],
      },
    },
  ];
}