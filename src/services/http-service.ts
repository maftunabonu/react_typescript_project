import apiClient from "./api-client";

interface param{
    id: number;
}

class httpsService{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>(){
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
          signal: controller.signal})
        return {request, cancel: ()=> controller.abort()}
    }
    delete(id: number){
        return apiClient.delete(this.endpoint + "/" + id)
    }
    add<T>(entity: T){
        return apiClient.post(this.endpoint + "/" + entity)
    }
    update<T extends param>(entity: T){
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new httpsService(endpoint);
export default create;