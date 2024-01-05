class Shape {
    constructor() {
        this.color = "";
        this.text = "";
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    render() {
        throw new Error('render() method must be implemented in child classes');
    }
}

class Square extends Shape {
    render() {
        const textElement = this.text ? `<text x="50" y="50" fill="${this.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="200" height="200" fill="${this.color}" stroke-width="4" />
                    ${textElement}
                </svg>`;
    }
}

class Circle extends Shape {
    render() {
        const textElement = this.text ? `<text x="50" y="50" fill="${this.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="125" cy="125" r="75" fill="${this.color}" stroke-width="4" />
                    ${textElement}
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        const textElement = this.text ? `<text x="50" y="50" fill="${this.color}" font-size="200" text-anchor="middle" dominant-baseline="middle">${this.text}</text>` : '';
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,190 100,10 190,190" fill="${this.color}" stroke-width="4" />
                    ${textElement}
                </svg>`;
    }
}

module.exports = { Square, Circle, Triangle };
