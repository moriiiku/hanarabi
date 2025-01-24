document.addEventListener("DOMContentLoaded", () => {
    const visitorCountElement = document.getElementById("visitorCount");

    // ローカルストレージから訪問者数を取得
    let visitorCount = localStorage.getItem("visitorCount");

    if (!visitorCount) {
        // 初回訪問の場合
        visitorCount = 1;
    } else {
        // カウントを増やす
        visitorCount = parseInt(visitorCount) + 1;
    }

    // 更新された訪問者数をローカルストレージに保存
    localStorage.setItem("visitorCount", visitorCount);

    // 表示を更新
    visitorCountElement.textContent = visitorCount;
});
