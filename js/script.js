//タブ切り替え//
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".rings__tab__button");
    const tabPanels = document.querySelectorAll(".rings__panel__item");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // クリックされたボタンのaria-controls属性の値を取得
        const targetPanelId = button.getAttribute("aria-controls");

        // すべてのタブパネルを非表示にする
        tabPanels.forEach((panel) => {
          panel.setAttribute("hidden", "true");
        });

        // クリックされたタブボタンに対応するタブパネルを表示
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
          targetPanel.removeAttribute("hidden");
        }

        // すべてのタブボタンのaria-selected属性をfalseに設定
        tabButtons.forEach((btn) => {
          btn.setAttribute("aria-selected", "false");
        });

        // クリックされたタブボタンのaria-selected属性をtrueに設定
        button.setAttribute("aria-selected", "true");
      });
    });
  });

  button.addEventListener("click", () => {
    header.classList.toggle("is-open");
    document.body.classList.toggle("is-fixed");
  });  