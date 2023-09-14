export const compareAndFilter = (genArray, compareArray) => {
    return genArray.reduce((accum, item) => {
        if (!compareArray.includes(item)) {
            accum.push(item);
        }
        return accum;
    }, []);
};
//# sourceMappingURL=array.js.map