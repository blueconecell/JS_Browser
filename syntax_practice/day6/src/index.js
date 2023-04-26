const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();

  const thisYear = date.getFullYear();
  const holyDay = new Date(thisYear, 11, 24);

  // If today is past Christmas
  if (holyDay - date <= 0) {
    clockTitle.innerText = "올해 크리스마스 이브는 지났어요...😥😥😥";
  } else {
    const dayDiffer = holyDay - date;
    const days = parseInt(dayDiffer / (24 * 60 * 60 * 1000), 10);
    const H = parseInt(dayDiffer / (60 * 60 * 1000), 10) % 24;
    const M = parseInt(dayDiffer / (60 * 1000), 10) % 60;
    const S = parseInt(dayDiffer / 1000, 10) % 60;

    clockTitle.innerText = `${days}d  ${H}h ${M}m ${S}s`;
  }
}

getClock();
setInterval(getClock, 1000);
