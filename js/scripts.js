{
    console.log("Cześć wszystkim!");

    const calculateResult = (money, currency) => {
        const EUR = 4.72;
        const USD = 4.37;
        const GBP = 5.39;

        switch (currency) {

            case "EUR":
                return money / EUR;

            case "USD":
                return money / USD;

            case "GBP":
                return money / GBP;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const moneyElement = document.querySelector(".js-money");

        const money = +moneyElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(money, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}