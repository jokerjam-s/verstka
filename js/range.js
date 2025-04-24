let cost_object = 0;
let credit_term = 0;
let first_payment = 0;
let percentage = 7;

$(document).ready(function(){
    calculation();
});


$("#calc_cost").ionRangeSlider({
    skin: "round",
    from: 10000,
    min: 50000,
    max: 500000,
    step: 1000,
    grid: false,
    postfix: 'руб.',
    onStart: function (data) {
        cost_object = data.from;
        const obj = document.getElementById("cost_object");
        obj.textContent = Intl.NumberFormat('ru-RU').format(cost_object) + ' руб.';
    },

    onChange: function (data) {
        cost_object = data.from;
        if(first_payment > cost_object){
            cost_object = first_payment;
        }
        const obj = document.getElementById("cost_object");
        obj.textContent = Intl.NumberFormat('ru-RU').format(cost_object) + ' руб.';
        calculation();
    }
});


$("#calc_vznos").ionRangeSlider({
    skin: "round",
    from: 10000,
    min: 5000,
    max: 500000,
    step: 1000,
    grid: false,

    onStart: function (data) {
        first_payment = data.from;
        const obj = document.getElementById("first_payment");
        obj.textContent = Intl.NumberFormat('ru-RU').format(first_payment) + ' руб.';
    },

    onChange: function (data) {
        first_payment = data.from;
        if(first_payment > cost_object){
            first_payment = cost_object;
        }

        const obj = document.getElementById("first_payment");
        obj.textContent = Intl.NumberFormat('ru-RU').format(first_payment) + ' руб.';
        calculation();
    }
});

$("#calc_term").ionRangeSlider({
    skin: "round",
    from: 5,
    min: 1,
    max: 20,
    step: 1,
    grid: false,

    onStart: function (data) {
        credit_term = data.from;
        const obj = document.getElementById("credit_term");
        obj.textContent = Intl.NumberFormat('ru-RU').format(credit_term) + ' лет';
    },

    onChange: function (data) {
        credit_term = data.from;
        const obj = document.getElementById("credit_term");
        obj.textContent = Intl.NumberFormat('ru-RU').format(credit_term) +
            ((credit_term === 1) ? ' год' : ((credit_term < 5) ? ' года' : ' лет'));
        calculation();
    }

});

const calculation = () => {
    const info = document.getElementById("month-payment-info");
    const cost = (cost_object - first_payment) / credit_term / 12;

    info.textContent = Intl.NumberFormat('ru-RU').format(cost + cost * percentage /100) + ' руб.';
}