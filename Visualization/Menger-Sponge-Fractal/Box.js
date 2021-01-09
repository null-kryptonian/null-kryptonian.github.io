class BoxClass {
    constructor(x, y, z, r_) {
        this.pos = new p5.Vector(x, y, z);
        this.r = r_;
    }

    generate() {
        var boxes = []
        for (var x = -1; x < 2; x++) {
            for (var y = -1; y < 2; y++) {
                for (var z = -1; z < 2; z++) {
                    var sum = abs(x) + abs(y) + abs(z);
                    if (sum > 1) {
                        var newRadius = this.r / 3;
                        var boxObj = new BoxClass(this.pos.x + x * newRadius, this.pos.y + y * newRadius, this.pos.z + z * newRadius, newRadius);
                        append(boxes, boxObj);
                    }
                }
            }
        }
        return boxes;
    }

    showBoxes() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        noStroke();
        fill(255);
        box(this.r);
        pop();
    }
}