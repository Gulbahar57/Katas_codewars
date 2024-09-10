String.prototype.camelCase=function() {

        return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
    }

console.log("gulbaharyahsi".camelCase());