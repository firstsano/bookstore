export const loadState = (source) => {
    try {
        const serializedState = localStorage.getItem(source);
        if (serializedState == null) {
            return {};
        }
        return JSON.parse(serializedState);
    } catch(e) {
        return {};
    }
}

export const saveState = (source, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(source, serializedState);
    } catch(e) {}
}