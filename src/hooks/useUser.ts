import { useEffect, useState } from "react";
import userService, { UserData } from "../services/user-service";
import { AxiosError, CanceledError } from "axios";

const useUser = ()=>{
    const [users, setUsers] = useState<UserData[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<UserData>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return {users, error, isLoading, setUsers, setError};
}

export default useUser;