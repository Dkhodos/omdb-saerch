interface Object {
    [key: string]: any
}

export default function newObject(object: Object) {
    const obj: Object = {};

    for (const [k, v] of Object.entries(object)) {
        if (v) {
            obj[k] = v;
        }
    }

    return obj;
}