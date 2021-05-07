export const sortRandomAnswerArray = (arr) => {
  const option = ["A", "B", "C", "D"];
  const sortedAnswer = arr.sort(() => {
    return Math.random() - 0.5;
  });
  return sortedAnswer.map((el, index) => {
    return { ...el, option: option[index] };
  });
};
