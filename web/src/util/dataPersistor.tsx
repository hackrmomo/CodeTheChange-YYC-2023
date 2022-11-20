import { IUser } from "../models/User";
import { createContext, useEffect, useContext, useState } from "react"
import axios, { AxiosInstance } from "axios";

export const DataContext = createContext<IData>({} as IData);

export const DataProvider = DataContext.Provider;

export const InternalDataRefresh = (props: { children: React.ReactNode }) => {
  const { axios, token, setUser, clearUser } = useContext(DataContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refresh = async () => {
    if (token) {
      // refresh token
      setIsRefreshing(true);
      const { data, status } = await axios.post("http://localhost:3000/users/refresh");
      if (status === 200) {
        setUser(data.user, data.token.split(" ")[1]);
      } else {
        clearUser();
      }
      setIsRefreshing(false);
    }
  };


  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>
    {isRefreshing ? <div>Refreshing...</div> : props.children}
  </>;
}

export interface IData {
  // data
  token?: string;
  user?: IUser;
  axios: typeof axios | AxiosInstance;

  // functions
  setUser: (user: IUser, token: string) => void;
  clearUser: () => void;
}

export let data: IData = {
  token: localStorage.getItem("token") || undefined,
  axios: localStorage.getItem("token") ? axios.create({ headers: { "authorization": localStorage.getItem("token") } }) : axios,

  setUser: (user: IUser, token: string) => {
    data.user = user;
    data.token = `Bearer ${token}`;
    localStorage.setItem("token", `Bearer ${token}`);
  },

  clearUser: () => {
    data.user = undefined;
    data.token = undefined;
    localStorage.removeItem("token");
  }
}