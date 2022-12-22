/**
 * 大文字と小文字を入れ替えるメソッド
 * @param text string
 * @returns string
 */
export const swapCase = (text: string) => {
  return text
    .split('')
    .map((letter) => {
      const upper = letter.toUpperCase();
      return letter === upper ? letter.toLowerCase() : upper;
    })
    .join('');
};
