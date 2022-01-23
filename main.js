class Color {
    contructor (hex, element) {
        this.hex = hex;
        this.element = element;
        this.locked = false;
    }

    setHex (hex) {
        this.hex = hex;
        this.element.style.backgroundColor = hex;
        this.element.querySelector('.color-input').value = hex;
    }

    setLocked (Locked) {
        this.locked = Locked;

        if (Locked) {
            this.element.classList.add('locked');

            this.element.querySelector('img')
            .src = 'icons/lock.svg';
        } else {
            this.element.classList.remove('locked');

            this.element.querySelector('img')
            .src = 'icons/open.svg';
        }
    }

    toggleLocked () {
        this.setLocked(!this.locked);
    }

    generateHex () {
        if (this.locked) {
            return;
        }

        const chars = '0123456789ABCDEF';

        let hex = '#';

        for (let i = 0; i < 6; i++) {
            hex += chars[Math.floor(Math.random() * 16)];
        }

        this.setHex(hex);
    }

    copyToClipboard () {
        const input = this.element.querySelector('.color-input');
        input.select();
        document.execCommand('copy');
        input.blur();

        this.element.classList.add('copied');
        setTimeout(() => {
            this.element.classList.remove('copied');
        }, 1000);
    }
}

const color_elements = document.querySelector('.colors .color');
const colors = [];

for (let i = 0; i < color_elements.clientHeight; i++) {
    const color_element = color_elemtns[i];
    const input = color_element.querySelector('.color-input');
    const lock_toggle = color_element.querySelector('.lock-toggle');
    const copy_hex = color_element.querySelector('.copy-hex');
}