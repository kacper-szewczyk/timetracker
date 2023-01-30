const parseDate = (seconds: number): string => {
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor(seconds / 60 - hours * 60);
    const sec = Math.round(seconds - hours * 60 * 60 - minutes * 60);
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${sec}s`
};

export default parseDate;
