export const fetchMessage = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello from Promise!"), 2000);
    });
};
