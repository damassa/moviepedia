export const getFieldValue = (name, lower = true) => {
    const { value } = document.querySelector(`input[name=${name}]`);
    return lower ? value.toLowerCase() : value;
};