window.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const textarea = document.getElementById('textarea');
    const wrapperTextarea = document.querySelector('.block__form-textarea');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');
    const resetInput = document.querySelector('.block__form-reset');
    const addOptions = document.querySelector('.block__form-addOptions');
    const btnOptions = document.querySelectorAll('.block__form-option');
    const wrapperCounter = document.querySelector('.block__form-counter');
    const textError = document.querySelector('.block__form-textError');
    const wrapperSelect = document.querySelector('.block__form-select');
    const selectMenu = document.querySelector('.block__form-select__menu');
    const selectSvg = document.querySelector('.block__form-select__svg');
    let counter = document.getElementById('counter');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.querySelector('.block__form');
    const modal = document.querySelector('.modal');
    const modalText = document.querySelector('.modal__content');
    const body = document.querySelector('body');
    const errorSubmit = document.getElementById('textError');

    form.addEventListener('input', () => {
        if (inputText.value.length > 0 && textarea.value.length > 0) {
            submitBtn.classList.remove('btnGray');
            submitBtn.style.color = 'white';
            submitBtn.style.backgroundColor = "#3ca9f0";
        } else {
            submitBtn.classList.add('btnGray');
            submitBtn.style.color = '';
            submitBtn.style.backgroundColor = "";
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (inputText.value.length > 0 && textarea.value.length > 0) {
            body.style.overflow = 'hidden';
            modal.style.display = 'block';
            modalText.textContent = 'Отправлено!';
            setTimeout(() => {
                body.style.overflow = '';
                modal.style.display = '';
                modalText.textContent = '';
            }, 2000);
        } else {
            errorSubmit.style.display = 'block';
            setTimeout(() => {
                errorSubmit.style.display = '';
            }, 2000);
        }
        
    });
    

    const inputTextActive = () => {
        title1.classList.add('block__form-title__active');
        inputText.classList.add('block__form-input__active');
        resetInput.classList.add('block__form-reset__active');
    }

    inputText.addEventListener('input', () => {
        if (inputText.value.length > 0) {
            inputTextActive();
        } else {
            title1.classList.remove('block__form-title__active');
            inputText.classList.remove('block__form-input__active');
            resetInput.classList.remove('block__form-reset__active');
        }
        console.log(inputText.value);
    });

    resetInput.addEventListener('click', () => {
        inputText.value = '';
        title1.classList.remove('block__form-title__active');
        inputText.classList.remove('block__form-input__active');
        resetInput.classList.remove('block__form-reset__active');
    });

    wrapperSelect.addEventListener('click', () => {
        title2.classList.add('block__form-title__active');
        wrapperSelect.classList.add('block__form-select__active');
        selectMenu.classList.toggle('hide');
        selectSvg.classList.toggle('rotate');
    });

    addOptions.addEventListener('click', () => {
        btnOptions.forEach(item => {
            item.classList.remove('hide');
        });
    });

    textarea.addEventListener('input', () => {
        counter.innerHTML = textarea.value.length;
        if (textarea.value.length > 0) {
            title3.classList.add('block__form-title__active');
            wrapperTextarea.classList.add('block__form-textarea__active');
            wrapperCounter.classList.add('block__form-counter__active');
        } else {
            title3.classList.remove('block__form-title__active');
            wrapperTextarea.classList.remove('block__form-textarea__active');
            wrapperCounter.classList.remove('block__form-counter__active');
        }

        if (textarea.value.length > 200) {
            title3.style.color = '#EF5579';
            textarea.style.border = '1px solid #EF5579';
            wrapperCounter.style.color = '#EF5579';
            textError.style.display = 'block';
        } else {
            title3.style.color = '';
            textarea.style.border = '';
            wrapperCounter.style.color = '';
            textError.style.display = '';
        }
    });

    const selectTitle = document.querySelector('.block__form-select__title');
    const numberSelect1 = document.getElementById('numberSelect1');
    const numberSelect2 = document.getElementById('numberSelect2');
    const numberSelect3 = document.getElementById('numberSelect3');
    const numberSelect4 = document.getElementById('numberSelect4');
    const numberSelect5 = document.getElementById('numberSelect5');
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const number3 = document.getElementById('number3');
    const number4 = document.getElementById('number4');
    const number5 = document.getElementById('number5');
    const checkBox1 = document.getElementById('checkBox1');
    const checkBox2 = document.getElementById('checkBox2');
    const checkBox3 = document.getElementById('checkBox3');
    const checkBox4 = document.getElementById('checkBox4');
    const checkBox5 = document.getElementById('checkBox5');

    number1.style.fontWeight = 'bold';

    numberSelect1.addEventListener('click', () => {
        number2.style.fontWeight = '';
        checkBox2.classList.add('hide');
        selectTitle.textContent = '1';
        checkBox1.classList.remove('hide');
        number1.style.fontWeight = 'bold';
        checkBox4.classList.add('hide');
        number4.style.fontWeight = '';
        checkBox5.classList.add('hide');
        number5.style.fontWeight = '';
        selectMenu.classList.add('hide');
        selectSvg.classList.remove('rotate');
    });

    numberSelect2.addEventListener('click', () => {
        number2.style.fontWeight = 'bold';
        checkBox2.classList.remove('hide');
        selectTitle.textContent = '2';
        checkBox1.classList.add('hide');
        number1.style.fontWeight = '';
        number3.style.fontWeight = '';
        checkBox3.classList.add('hide');
        checkBox4.classList.add('hide');
        number4.style.fontWeight = '';
        checkBox5.classList.add('hide');
        number5.style.fontWeight = '';
        selectMenu.classList.add('hide');
        selectSvg.classList.remove('rotate');
    });
    
    numberSelect3.addEventListener('click', () => {
        number3.style.fontWeight = 'bold';
        checkBox3.classList.remove('hide');
        selectTitle.textContent = '3';
        checkBox1.classList.add('hide');
        number1.style.fontWeight = '';
        checkBox2.classList.add('hide');
        number2.style.fontWeight = '';
        checkBox4.classList.add('hide');
        number4.style.fontWeight = '';
        checkBox5.classList.add('hide');
        number5.style.fontWeight = '';
        selectMenu.classList.add('hide');
        selectSvg.classList.remove('rotate');
    });

    numberSelect4.addEventListener('click', () => {
        number4.style.fontWeight = 'bold';
        checkBox4.classList.remove('hide');
        selectTitle.textContent = '4';
        checkBox1.classList.add('hide');
        number1.style.fontWeight = '';
        checkBox2.classList.add('hide');
        number2.style.fontWeight = '';
        checkBox3.classList.add('hide');
        number3.style.fontWeight = '';
        checkBox5.classList.add('hide');
        number5.style.fontWeight = '';
        selectMenu.classList.add('hide');
        selectSvg.classList.remove('rotate');
    });

    numberSelect5.addEventListener('click', () => {
        number5.style.fontWeight = 'bold';
        checkBox5.classList.remove('hide');
        selectTitle.textContent = '5';
        checkBox1.classList.add('hide');
        number1.style.fontWeight = '';
        checkBox2.classList.add('hide');
        number2.style.fontWeight = '';
        checkBox3.classList.add('hide');
        number3.style.fontWeight = '';
        checkBox4.classList.add('hide');
        number4.style.fontWeight = '';
        selectMenu.classList.add('hide');
        selectSvg.classList.remove('rotate');
    });

    const optionBtn1 = document.getElementById('optionBtn1');
    const optionBtn2 = document.getElementById('optionBtn2');
    const optionBtn3 = document.getElementById('optionBtn3');
    const optionBtn4 = document.getElementById('optionBtn4');
    const optionBtn5 = document.getElementById('optionBtn5');
    const optionBtn6 = document.getElementById('optionBtn6');
    const optionBtn7 = document.getElementById('optionBtn7');
    const optionBtn8 = document.getElementById('optionBtn8');
    const optionBtn9 = document.getElementById('optionBtn9');
    const optionBtn10 = document.getElementById('optionBtn10');
    const optionBtn11 = document.getElementById('optionBtn11');
    const optionBtn12 = document.getElementById('optionBtn12');
    const optionBtn13 = document.getElementById('optionBtn13');
    const optionBtn14 = document.getElementById('optionBtn14');
    const optionBtn15 = document.getElementById('optionBtn15');
    const optionBtn16 = document.getElementById('optionBtn16');

    optionBtn1.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Генетика';
        inputTextActive();
    });
    optionBtn2.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Анатомия человека';
        inputTextActive();
    });
    optionBtn3.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Вулканы';
        inputTextActive();
    });
    optionBtn4.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Зимние виды спорта';
        inputTextActive();
    });
    optionBtn5.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Радуга';
        inputTextActive();
    });
    optionBtn6.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Индийская культура';
        inputTextActive();
    });
    optionBtn7.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Радуга';
        inputTextActive();
    });
    optionBtn8.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Пеший туризм';
        inputTextActive();
    });
    optionBtn9.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Философия';
        inputTextActive();
    });
    optionBtn10.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Вселенная';
        inputTextActive();
    });
    optionBtn11.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Здоровые привычки';
        inputTextActive();
    });
    optionBtn12.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Бабочки';
        inputTextActive();
    });
    optionBtn13.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Белые медведи';
        inputTextActive();
    });
    optionBtn14.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Экономика';
        inputTextActive();
    });
    optionBtn15.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Финансовая грамотность';
        inputTextActive();
    });
    optionBtn16.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.value = 'Фотосинтез';
        inputTextActive();
    });

    
});