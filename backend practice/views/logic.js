window.addEventListener('DOMContentLoaded', () => {
    const initial_pos = 300;
    var head_position = initial_pos;
    const snakehead = document.querySelector('.snake_head');


    document.addEventListener('keyup', () => snake_mover(Event));

    const snake_mover = (event) => {
        console.log('hi');
        switch (event) {
            case 'ArrowUp':
                console.log('hi');
                clearid = setInterval(() => {

                    if (head_position == 680) {
                        clearInterval(clearid);

                    }
                    snakehead.style.bottom = head_position + "px";
                    head_position++;

                }, 10);

            case 'keydown':

            case 'keyleft':

            case 'keyright':

        }

    }

});