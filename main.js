const counter = function () {
    const btns = document.querySelectorAll('.btn-counter');

    btns.forEach(btn => {
            btn.addEventListener('click', function () {
                    const direction = this.dataset.direction;
                    const inp = this.parentElement.querySelector('.display');
                    const currentValue = +inp.value;
                    let newValue;

                    if (direction === 'plus') {
                        newValue = currentValue + 1;
                    } else {
                        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
                    }
                    inp.value = newValue;
                })
        }
    )
}
counter();