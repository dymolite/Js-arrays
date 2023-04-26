var elem = ['Ruslan', true, 2, 'Emil', 'Sahib'];

Array.prototype.removeElem = function (elem) {
    for (i = 0; i < this.length; i++) {

        if (this[i] === elem) {

            for (var j = i; j < this.length - 1; j++) {
                this[j] = this[j + 1];
            }

            return this.length = this.length - 1;
        }
    }
}

elem.removeElem('Emil');

console.log(elem)

