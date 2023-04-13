const nameBuy = document.querySelector(".namebuy");
const emailBuy = document.querySelector(".emailbuy");
const phoneBuy = document.querySelector(".phonebuy");
const addressBuy = document.querySelector(".addressbuy");
const dateOrder = document.querySelector(".dateorder");
const payMent = document.querySelector(".payment");
const sendMail = document.querySelector(".sendmail");

const receiver = document.querySelector(".receiver");
const nameReceive = document.querySelector(".namereceive");
const emailReceive = document.querySelector(".emailreceive");
const phoneReceive = document.querySelector(".phonereceive");
const addressReceive = document.querySelector(".addressreceive");
const subMit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const reInput = document.querySelector("form");

nameBuy.oninput = () => {
    nameBuy.value = nameBuy.value.toUpperCase();
    console.log(nameBuy.value);
};

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateDate(date) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(date);
}

function validatePhone(phoneNumber) {
    var regex = /(0\d{9,10})|(84\d{8,9})/;
    return regex.test(phoneNumber);
}

emailBuy.addEventListener("blur", () => {
    if (!validateEmail(emailBuy.value)) {
        alert("vui lòng nhập vào email hợp lệ");
    }
});

emailReceive.onblur = () => {
    if (!validateEmail(emailReceive.value)) {
        alert("vui lòng nhập vào email hợp lệ");
    }
};

phoneBuy.onblur = () => {
    if (!validatePhone(phoneBuy.value)) {
        alert("vui lòng nhập vào số điện thoại hợp lệ");
    }
};

phoneReceive.onblur = () => {
    if (!validatePhone(phoneReceive.value)) {
        alert("vui lòng nhập vào số điện thoại hợp lệ");
    }
};

dateOrder.onblur = () => {
    if (!validateDate(dateOrder.value)) {
        alert("Ngày đặt không hợp lệ! Vui lòng nhập đúng định dạng dd-mm-yyyy.");
    }
};

receiver.onclick = () => {
    if (
        receiver.checked &&
        nameBuy.value != "" &&
        emailBuy.value != "" &&
        phoneBuy.value != "" &&
        addressBuy.value != "" &&
        dateOrder.value != "" &&
        payMent.value != ""
    ) {
        nameReceive.value = nameBuy.value;
        emailReceive.value = emailBuy.value;
        phoneReceive.value = phoneBuy.value;
        addressReceive.value = addressBuy.value;
        nameReceive.value = nameBuy.value;
    } else {
        nameReceive.value = "";
        emailReceive.value = "";
        phoneReceive.value = "";
        addressReceive.value = "";
        nameReceive.value = "";
    }
};

subMit.onclick = () => {
    if (
        nameBuy.value === "" ||
        emailBuy.value === "" ||
        phoneBuy.value === "" ||
        addressBuy.value === "" ||
        dateOrder.value === "" ||
        payMent.value === ""
    ) {
        alert("Vui lòng nhập đầy đủ thông tin người mua!");
        return false;
    }
    if (sendMail.checked && receiver.checked) {
        alert("Đặt hàng thành công, email đã giửi tói cho quý khách");
    } else {
        alert("Đặt hàng thành công");
    }
};

reset.onclick = () => {
    reInput.reset();
};
