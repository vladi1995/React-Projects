import { url } from "../utils/util";

export const getAllTours = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        
        return result;
    } catch (error) {
        return error;
    }
};