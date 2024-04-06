const removeHTMLTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
};


export default removeHTMLTags