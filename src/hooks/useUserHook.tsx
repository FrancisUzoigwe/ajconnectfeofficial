import { useQuery } from "@tanstack/react-query";
import { viewUserApi } from "../apis/AuthApi";
import { useSelector } from "react-redux";
import { readAllpostApi } from "../apis/PostApi";

export const useViewOne = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => viewUserApi(user),
  });
  return { data, isLoading };
};

export const useViewPostOne = (id:string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["postUser", {id: id}],
    queryFn: () => viewUserApi(id),
  });
  return { data, isLoading };
};

export const useReadAllPost = () => {
  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: readAllpostApi,
  });

  return { post };
};
