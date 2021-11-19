window.onload = function() {
    var regtel = /^09[0-9]{2}[0-9]{6}$/;
    var tel = document.querySelector('#tel');
    var regmsg = /\d{4}/;
    var msg = document.querySelector('#msg');
    var regpsw = /\d{6,16}/;
    var psw = document.querySelector('#psw');
    var surepsd = document.querySelector('#surepsd');
    regexp(tel, regtel);
    regexp(msg, regmsg);
    regexp(psw, regpsw);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>格式正確';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正確,重新輸入';
            }
        }
    }
    surepsd.onblur = function() {
        if (this.value == psw.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>密碼一致';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不一致,重新輸入';
        }
    }
}