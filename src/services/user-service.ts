import create from "./http-service";

export interface UserData {
  id: number;
  name: string;
}


export default create('/users');