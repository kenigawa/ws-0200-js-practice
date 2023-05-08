/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = array.length - 1; j > i; j--) {
      // 左の値が右より大きい場合、要素の位置を入れ替える
      if(array[j] < array[j - 1]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for(let i = 1; i < array.length; i++) {
    // 挿入したい値
    let tmp = array[i];
    let j = i;
    for(; j > 0; j--) {
      // 一番左の値から順に挿入したい値を比較
      if(array[j - 1] > tmp) {
        // 右にずらす
        array[j] = array[j - 1]; 
      } else {
        break;
      }
    }
    // 正しい位置に移動した後、挿入したい値を挿入
    array[j] = tmp;
  }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
  // 要素が1個以下の場合
  if(arr.length <= 1) return arr;

  // 中央の添字
  let middle = Math.floor(arr.length / 2);
  // 左から中央までの配列
  let left = arr.slice(0, middle);
  // 中央から右までの配列
  let right = arr.slice(middle);

  return arr = merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // 結合後の配列
  let result = [];
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    // 左の要素が右の要素より小さい場合
    if(left[i] < right[j]) {
      result.push(left[i++]);
    // 右の要素が左の要素以上の場合
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i).concat(right.slice(j)));
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
  let pivot = a[Math.floor((start + end) / 2)];
  let left = start;
  let right = end;

  // グループ分けの処理 -> pivotより小さいものを左、大きいものを右に集める
  while(true) {
    // leftの値がpivotより小さい場合、leftを右に動かす -> rightのグループに移動させたい場所で止まる
    while(a[left] < pivot) {
      left++;
    }
    // rightの値がpivotより大きい場合、rightを左に動かす -> leftのグループに移動させたい場所で止まる
    while(pivot < a[right]) {
      right--;
    }
    // leftとrightがぶつかったらグループ分けの処理をストップ（入れ替え不要な状態）
    if(right <= left) {
      break;
    } else { 
      // leftとrightがぶつかっていない場合、leftとrightを入れ替える
      // 入れ替えの次の値から再開するため、leftを右に、rightを左に1つ移動させる
      let tmp = a[left];
      a[left] = a[right];
      a[right] = tmp;
      left++;
      right--;
    }
  }

  // 左側に分割できる値がある場合
  if(start < left - 1) {
    quickSort(a, start, left - 1);
  }
  // 右側に分割できる値がある場合
  if(right + 1 < end) {
    quickSort(a, right + 1, end);
  }

  return a
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
