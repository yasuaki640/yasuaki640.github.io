import "glottologist";

let glot = new Glottologist();

glot.import("src/lang.json").then(() => {
    glot.render();
});