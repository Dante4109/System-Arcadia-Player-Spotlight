import api from '@/services/api'

export default {
    async fetchUser(playerKey) {
        
        try { 
            var baseURL
            if(Number.isInteger(+playerKey)) { baseURL = `?id=${playerKey}` } else { baseURL = `?eamuse=${playerKey}` };   
            const response = await api.get(baseURL)
            return response.data
            
                
            }
            
        catch (e) {
            console.error(e);
            return e.response
        }
    }
}