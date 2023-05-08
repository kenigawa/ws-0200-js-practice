
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  sum += n;
  if(n <= 0) {
    return sum;
  }
  return sumSequence(n - 1, sum);
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci (num) {
  if(num === 0) {
    return [];
  }
  if(num === 1) {
    return [1];
  }
  if(num === 2) {
    return [1, 1];
  }
  // numの1つ前までのリストを取得
  const list = fibonacci(num - 1);
  // リスト全量を取得し、リストの最後の1つ前と2つ前を合計して最後の値を取得する
  return [...list, list[list.length - 1] + list[list.length - 2]];
}

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {
  // childrenがない場合
  if(!node.children || node.children.length === 0) {
    return node.size;
  }

  let childrenSize = 0;
  for(let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    childrenSize += fileSize(child);
  }
  return childrenSize;
}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
