let Shapes = [];

let one = {
    type: "circle",
    colour: "red",
    size: 3,
}

let two = {
    type: "rectangle",
    colour: "blue",
    size: [3, 4],
}

let three = {
    type: "triangle",
    colour: "green",
    size: [2, 5],
}

Shapes.push(one, two, three);

for (shape in Shapes) {
    if (shape.type == "circle") {
        a = (3.14159 * shape.size ^ 2);
        console.log("The area of the circle is " + a);
    }
    else if (shape.type == "rectangle") {
        a = (shape.size[0] * shape.shape[1]);
        console.log("The area of the rectable is " + a);
    }
    else if (shape.type == "triangle") {
        a = ((shape.size[0] * shape.size[1]) / 2);
        console.log("The area of the triangle is " + a);
    }
}


