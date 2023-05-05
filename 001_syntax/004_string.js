/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length;
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return str.length % 2 === 0;
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  if(!str) {
    return str;
  }
  return str[0];
}

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  if(!str) {
    return str;
  }

  return str[str.length -1];
}

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  // return str.substr(a - 1, b);

  //for文でも考える
  let after_str = "";
  if(str.length < b) {
    b = str.length;
  }
  for(; a <= b; a++) {
    if(!str) {
      return str;
    }
    after_str += str[a -1]; 
  }
  return after_str;
}

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  // return a.includes(b);
  // return a.indexOf(b) !== -1;

  // for文でも考える
  if(!b) {
    return true;
  }

  let str = "";
  // bを1文字ずつ抽出
  for(let i = 0; i < b.length; i++) {
    // aを1文字ずつ抽出
    for(let j = 0; j < a.length; j++) {
      if(b[i] === a[j] && b[i - 1] === a[j - 1]) {
        str += b[i];
      }
      if(str === b) {
        return true;
      }
    }
  }
  return false;

}


/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for(i = 0; i < str.length; i++) {
    // console.log(str.substr(i, 1));

    // 添字を使用しても考える
    console.log(str[i]);
  }
}


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
