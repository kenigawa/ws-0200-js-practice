/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let cutStr = "";
  let remainingStr = "";

  if(num === 0) {
    return str;
  }
  if(num > 0) {
    cutStr = str.slice(-num);
    remainingStr = str.substring(0, str.length - num);
    return cutStr += remainingStr;
  }
  if(num < 0) {
    cutStr = str.slice(0, -num);
    remainingStr = str.substring(-num);
    return remainingStr += cutStr;
  }
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  removedStr = [...str].filter(el => {
    return "aiueo".includes(el) ? "" : el;
  });
  return removedStr.join("");
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
 return s1.match(new RegExp(s2, "g")).length;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  for(let i = 0; i < str.length; i++) {
    // 前からの文字と後ろからの文字が同じではない場合
    if(str[i] !== str[str.length - i - 1]) {
      return false;
    }  
  }
  return true;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  switch(num) {
    case 1:
      return false;
    case 2:
      return true;
    default:
      for(let i = 2; i < num; i++) {
        // 2以上の数で割り切れるものがないか確認
        if(num % i === 0) return false;
        // 割り切れるものがない場合
        if(i + 1 === num ) return true;
      }
  }
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 4) {
      array[i] = null;
      array[i + 1] = null;
    }
  }
  return array.reduce((acc, el) => acc + el, 0);
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
