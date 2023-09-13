
class Figura {
    calcularPerimetro() {}

    calcularArea() {}
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularPerimetro() {
        return 2 * this.radio * Math.PI;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularPerimetro() {
        return this.lado * 4;
    }

    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}

class Rectangulo extends Figura {
    constructor(ladoH, ladoV) {
        super();
        this.ladoH = ladoH;
        this.ladoV = ladoV;
    }

    calcularPerimetro() {
        return 2 * this.ladoH + 2 * this.ladoV;
    }

    calcularArea() {
        return this.ladoH * this.ladoV;
    }
}

class Triangulo extends Figura {
    constructor(lados, base, altura) {
        super();
        this.base = base;
        this.lados = lados;
        this.altura = altura;
    }

    calcularPerimetro() {
        return this.base + this.lados * 2;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

const optionFigure = document.getElementById("optionFigure");
const input_container = document.getElementById("input_container");
const button_calculator = document.getElementById("button_calculator");
const resp_container = document.getElementById("resp_container");

optionFigure.addEventListener("change", () => {
    input_container.innerHTML = " ";

    resp_container.innerHTML = " ";
    const selectedFigure = optionFigure.value;

    if (selectedFigure == "circle") {
        input_container.innerHTML = `
        <label for="radius">Ingresa el radio del circulo:</label><br>
        <input type="text" name="radius" id="radius" class="form">
    `;
    } else if (selectedFigure == "square") {
        input_container.innerHTML = `
        <label for="ladoS">Ingrese un lado del cuadrado:</label><br>
        <input type="text" name="ladoS" id="ladoS" class="form">
        `;
    } else if (selectedFigure == "rectangle") {
        input_container.innerHTML = `
        <label for="BaseR">Ingrese la base del rectangulo</label><br>
        <input type="text" name="BaseR" id="BaseR" class="form">
        <label for="alturaR">Ingrese la altura del rectangulo:</label><br>
        <input type="text" name="alturaR" id="alturaR" class="form">
        `;
    } else if (selectedFigure == "triangle") {
        input_container.innerHTML = `
        <label for="lados">Ingrese la los lados del triangulo</label><br>
        <input type="text" name="lados" id="lados" class="form">
        <label for="baseT">Ingrese la base del triangulo</label><br>
        <input type="text" name="baseT" id="baseT" class="form">
        <label for="alturaT">Ingrese la altura del triangulo:</label><br>
        <input type="text" name="alturaT" id="alturaT" class="form">
        `;
    }
});

button_calculator.addEventListener("click", () => {
    const figureSelect = optionFigure.value;
    const resultElement = document.createElement('p');

    if (figureSelect == "circle") {
        const radius = parseFloat(document.getElementById('radius').value);
        const circle = new Circulo(radius);
        const area = circle.calcularArea();
        const perimetro = circle.calcularPerimetro();
        resultElement.textContent = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    } else if (figureSelect == "square") {
        const ladoS = parseFloat(document.getElementById('ladoS').value);
        const square = new Cuadrado(ladoS);
        const area = square.calcularArea();
        const perimetro = square.calcularPerimetro();
        resultElement.textContent = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    } else if (figureSelect == "rectangle") {
        const baseR = parseFloat(document.getElementById('BaseR').value);
        const alturaR = parseFloat(document.getElementById('alturaR').value);
        const rectangle = new Rectangulo(baseR, alturaR);
        const area = rectangle.calcularArea();
        const perimetro = rectangle.calcularPerimetro();
        resultElement.textContent = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    } else if (figureSelect == "triangle") {
        const baseT = parseFloat(document.getElementById('baseT').value);
        const lados = parseFloat(document.getElementById('lados').value);
        const alturaT = parseFloat(document.getElementById('alturaT').value);
        const triangle = new Triangulo(baseT, lados, alturaT);
        const area = triangle.calcularArea();
        const perimetro = triangle.calcularPerimetro();
        resultElement.textContent = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    }

    resp_container.innerHTML = '';
    resp_container.appendChild(resultElement);
});

