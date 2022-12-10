import ucabGoApi from "../../src/api/ucabGoApi";


describe('Tests in UcabGoApi', () => {
    test('Should have the default config', () => {
        
        expect(ucabGoApi.defaults.baseURL).toBe( process.env.VITE_API_URL);
        
    });

    test('should have the x-token in the header of all the petitions', async() => { 
        const token = "ABC-123-XYZ";
        localStorage.setItem("token", token);
        const res = await ucabGoApi
          .get("/auth")
          .then((res) => res)
          .catch((res) => res);
        expect(res.config.headers["x-token"]).toBe(token);
        
    })
})