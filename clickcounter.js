function clickCounter() {
        if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                        localStorage.clickcount = 0;
                }
                results.innerHTML = localStorage.clickcount;
        } else {
                results.innerHTML = "Sorry, your browser does not support web storage...";
        }
}
