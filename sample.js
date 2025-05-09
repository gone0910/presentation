// sample.js

/**
 * 간단한 유틸리티 함수 모음
 * - 숫자 배열의 평균을 구하는 함수
 * - 주어진 문자열을 대문자로 변환하는 함수
 * - 배열을 랜덤하게 섞는 함수
 */

/**
 * 숫자 배열의 평균을 계산한다.
 * @param {number[]} numbers - 숫자로 구성된 배열
 * @returns {number} 평균값
 */
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('유효한 숫자 배열을 입력하세요.');
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
  
  /**
   * 문자열을 대문자로 변환한다.
   * @param {string} text - 입력 문자열
   * @returns {string} 대문자로 변환된 문자열
   */
  function toUpperCase(text) {
    if (typeof text !== 'string') {
      throw new Error('문자열을 입력하세요.');
    }
    return text.toUpperCase();
  }
  
  /**
   * 배열을 랜덤하게 섞는다.
   * @param {Array} array - 입력 배열
   * @returns {Array} 섞인 배열
   */
  function shuffleArray(array) {
    if (!Array.isArray(array)) {
      throw new Error('배열을 입력하세요.');
    }
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  
  // 예시 실행 (테스트용)
  console.log('평균 계산:', calculateAverage([10, 20, 30, 40])); // 25
  console.log('대문자 변환:', toUpperCase('sample text')); // SAMPLE TEXT
  console.log('배열 셔플:', shuffleArray([1, 2, 3, 4, 5]));
  