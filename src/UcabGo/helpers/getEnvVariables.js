

export const getEnvVariables = () => {
    import.meta.env.VITE_API_URL;

    return {
        ...import.meta.env
    }
}