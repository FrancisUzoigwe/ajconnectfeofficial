import axios from "axios";

const url: string = "https://connectbe.onrender.com/api";

export const postApi = async (userID: string, data: any) => {
  try {
    const config: any = {
      "content-type": "multi-part/formdata",
    };

    return await axios
      .post(`${url}/${userID}/post`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log("This is the error:", error);
  }
};

export const readAllpostApi = async () => {
  try {
    return await axios.get(`${url}/all-posts`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log("This is the error:", error);
  }
};
