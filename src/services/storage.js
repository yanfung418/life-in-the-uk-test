const INCORRECT_ANSWERS_KEY = 'uk_test_incorrect_answers';

/**
 * Stores unique incorrect answers in LocalStorage.
 * @param {Array} newIncorrect - Array of incorrect answer objects
 */
export const saveIncorrectAnswers = (newIncorrect) => {
  const existingRaw = localStorage.getItem(INCORRECT_ANSWERS_KEY);
  let existing = existingRaw ? JSON.parse(existingRaw) : [];

  newIncorrect.forEach(item => {
    // Check if this question is already in the list to avoid duplicates
    // We use a combination of question text or some unique ID if available
    const exists = existing.some(ext => ext.question === item.question);
    if (!exists) {
      existing.push({
        ...item,
        savedAt: new Date().toISOString()
      });
    }
  });

  localStorage.setItem(INCORRECT_ANSWERS_KEY, JSON.stringify(existing));
};

/**
 * Retrieves all stored incorrect answers.
 * @returns {Array} List of incorrect answers
 */
export const getIncorrectAnswers = () => {
  const raw = localStorage.getItem(INCORRECT_ANSWERS_KEY);
  return raw ? JSON.parse(raw) : [];
};

/**
 * Removes balanced answers from storage.
 * @param {string} questionText - The question text to remove
 */
export const removeIncorrectAnswer = (questionText) => {
  const existing = getIncorrectAnswers();
  const filtered = existing.filter(item => item.question !== questionText);
  localStorage.setItem(INCORRECT_ANSWERS_KEY, JSON.stringify(filtered));
};

/**
 * Clears all incorrect answers.
 */
export const clearIncorrectAnswers = () => {
  localStorage.removeItem(INCORRECT_ANSWERS_KEY);
};
