// Asinxron funktsiya  va  millisekundlardagi  fn vaqtni hisobga olgan holda,  kiritish funktsiyasining yangi cheklangan versiyasini qaytaring. cheklangan vaqt  funksiyasiga berilgan argumentlarni oladi  .tfn

// Vaqt cheklangan funksiya quyidagi qoidalarga amal qilishi kerak:

// Agar ish fnmillisekundlar ichida tugallansa t, vaqt chegaralangan funksiya natija bilan hal qilinishi kerak.
// Agar bajarilish fnvaqt chegarasidan oshib ketgan bo'lsa, cheklangan vaqt funksiyasi satr bilan rad etilishi kerak "Time Limit Exceeded".
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// let timeLimit = function(fn, t) {
// 	return async function(...args) {
//         const originalFnPromise = fn(...args);

//         const timeoutPromise = new Promise((_, reject) => {
//             setTimeout(() => {
//                 reject('Time Limit Exceeded')
//             }, t);
//         })

//         return Promise.race([originalFnPromise, timeoutPromise]);
//     }
// };

// /**
//  * @param {number[][]} fruits
//  * @param {number} startPos
//  * @param {number} k
//  * @return {number}
//  */
let maxTotalFruits = function (fruits, startPos, k) {
  let n = fruits.length;
  let l = 0;
  let r = 0;
  let res = 0;
  let sum = 0;

  for (; r < n; ++r) {
    sum += fruits[r][1];
    while (
      l <= r &&
      k <
        fruits[r][0] -
          fruits[l][0] +
          Math.min(
            Math.abs(startPos - fruits[l][0]),
            Math.abs(startPos - fruits[r][0]),
          )
    ) {
      sum -= fruits[l][1];
      ++l;
    }

    res = Math.max(res, sum);
  }

  return res;
};
