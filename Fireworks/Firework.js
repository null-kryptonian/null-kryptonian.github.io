function Firework() {
    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true)
    this.exploded = false;
    this.particles = [];

    this.done = function () {
        if (this.exploded && this.particles.length == 0) {
            return true;
        } else {
            return false;
        }
    };

    this.update = function (i) {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            this.firework.show();

            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode(i);
            }
        }
        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();

            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    };


    this.explode = function (i) {
        for (var i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particles.push(p);
        }
        // switch (i) {
        //     case 0:
        //         var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
        //         break;
        //     default:
        //         break;
        // }
    };

    this.show = function () {
        if (!this.exploded) {
            this.firework.show()
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    };
}
