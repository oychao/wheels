export default function (target, name, {
    value: fn,
    configurable,
    enumerable
}) {
    return {
        configurable,
        enumerable,
        value() {
            console.log(target.constructor.name);
            console.warn(`DEPRECATION: ${target.constructor.name}#${name} is deprecated and will not be supported in the future.`);
            fn();
        }
    }
};
