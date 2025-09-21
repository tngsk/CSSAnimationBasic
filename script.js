// CSS Animation 教材用 JavaScript
// 最小限のクリック処理のみ

document.addEventListener("DOMContentLoaded", function () {
  const square = document.getElementById("animatedSquare");

  // クリックイベントでアニメーションを実行
  square.addEventListener("click", function () {
    // 既存のアニメーションクラスを削除
    square.classList.remove("animate");

    // 強制的にリフローを発生させる（アニメーションをリセット）
    square.offsetHeight;

    // アニメーションクラスを追加
    square.classList.add("animate");
  });

  // アニメーション終了後にクラスを削除（再実行可能にする）
  square.addEventListener("animationend", function () {
    square.classList.remove("animate");
  });
});
