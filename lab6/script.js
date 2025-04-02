var count = 1;
function addfunction() {
            var btn = document.createElement("BUTTON");
            btn.innerHTML = `CLICK ME (${count})`;
            btn.setAttribute("id", "btn_" + count++);
            btn.setAttribute("class", "btn btn-outline-danger");
            console.log(btn);
            document.body.appendChild(btn);
        }
 
        function delfunction() {
            if (count > 1) {  // 確保至少保留一個按鈕
                var btn = document.getElementById("btn_" + --count);
                if (btn) {
                    console.log(btn);
                    document.body.removeChild(btn);
                }
            }
        }