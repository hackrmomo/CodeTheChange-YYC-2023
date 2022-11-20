import { IUser } from "../models/User";
import { createContext, useEffect, useContext, useState } from "react"
import axios, { AxiosInstance } from "axios";
import { ITag } from "../models/Tag";

export const DataContext = createContext<IData>({} as IData);

export const DataProvider = DataContext.Provider;

export const InternalDataRefresh = (props: { children: React.ReactNode }) => {
  const { axios, token, setUser, clearUser, getTags,  } = useContext(DataContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refresh = async () => {
    setIsRefreshing(true);
    if (token) {
      // refresh token
      const { data, status } = await axios.post("http://localhost:3000/users/refresh");
      if (status === 200) {
        setUser(data.user, data.token.split(" ")[1]);
      } else {
        clearUser();
      }
    }
    
    // refresh tags
    await getTags();
    setIsRefreshing(false);
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
  tags?: ITag[];
  searchTags?: ITag[];

  // functions
  setUser: (user: IUser, token: string) => void;
  clearUser: () => void;

  searchForTags: (search: string) => Promise<void>;
  addTag: (tag: ITag) => Promise<void>;
  getTags: () => Promise<void>;
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
  },

  searchForTags: async (search: string) => {
    const { data:result } = await data.axios.get(`http://localhost:3000/tags/search/${search}`);
    data.searchTags = result.tags;
  },

  addTag: async (tag: ITag) => {
    await data.axios.post(`http://localhost:3000/tags/add`, tag);
    await data.getTags();
  },

  getTags: async () => {
    const { data:result } = await data.axios.get(`http://localhost:3000/tags/all`);
    data.tags = result.tags;
  }
}