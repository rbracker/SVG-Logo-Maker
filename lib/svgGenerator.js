function generateSVG(shape, color, text) {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
            <g opacity="0.8">
                ${shape.render(color, text)}
            </g>
        </svg>
    `;
}

module.exports = generateSVG;