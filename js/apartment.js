const tab_1 = document.getElementById("tab_1");
const tab_2 = document.getElementById("tab_2");

const tabClick = (event) => {
    const img_1 = document.getElementById('plan_1');
    const img_2 = document.getElementById('plan_2');

    if (event.target.id === 'tab_1') {
        img_1.hidden = false;
        img_2.hidden = true;
    }
    else {
        img_1.hidden = true;
        img_2.hidden = false;
    }
}

tab_1.addEventListener("click", tabClick);
tab_2.addEventListener("click", tabClick);
