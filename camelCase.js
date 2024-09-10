export function camelCase(str) {

        return str.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
    }