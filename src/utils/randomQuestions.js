/**
 * Utility to generate random questions for test mode
 */
import { examQuestions } from '../data/exams';

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get all questions from all exams and flatten them into a single array
 */
export function getAllQuestions() {
  const allQuestions = [];
  
  Object.keys(examQuestions).forEach(examId => {
    const questions = examQuestions[examId];
    allQuestions.push(...questions);
  });
  
  return allQuestions;
}

/**
 * Generate a random set of questions
 * @param {number} count - Number of questions to select (default: 24)
 * @returns {Array} - Array of randomly selected questions
 */
export function generateRandomQuestions(count = 24) {
  const allQuestions = getAllQuestions();
  const shuffled = shuffleArray(allQuestions);
  
  // Return the first 'count' questions from the shuffled array
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
