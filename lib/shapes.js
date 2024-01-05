class Shape {
    constructor() {
        this.color = "";
        this.textColor = "";
        this.text = "";
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor;
    }

    render() {
        return '';
    }
}

class Square extends Shape {
    render() {
        const textElement = this.text ? `<text x="100" y="130" fill="${this.text.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${textElement}
                </svg>`;
    }
}

class Circle extends Shape {
    render() {
        const textElement = this.text ? `<text x="100" y="130" fill="${this.text.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="125" cy="125" r="75" fill="${this.color}" stroke-width="4" />
                    ${textElement}
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        const textElement = this.text ? `<text x="100" y="130" fill="${this.text.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,190 100,10 190,190" fill="${this.color}" stroke-width="4" />
                    ${textElement}
                </svg>`;
    }
}

module.exports = { Square, Circle, Triangle };
