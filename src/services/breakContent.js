export const breakContent = (content) => {
    if(content.length > 100) {
        let newContent = content.slice(0,100);
        return newContent;
    }
    return content;
}