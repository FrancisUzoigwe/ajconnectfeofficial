import axios from "axios";

const url: string = "https://connectbe.onrender.com/api";

export const registerApi = async (data: any) => {
  try {
    // const config: any = {
    //   "content-type": "multi-part/formdata",
    // };

    return await axios.post(`${url}/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log("This is the error:", error);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifiedApi = async (token: string) => {
  try {
    return await axios.patch(`${url}/${token}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const ChangePasswordAPI = async (token: any, data: any) => {
    try {
      return await axios.patch(
        `${url}/${token}/change-password`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

export const forgotApi = async (data: any) => {
  try {
    return await axios.patch(`${url}/forgot-password`, data).then((res: any) => {
      return res.data.data;
    
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewUserApi = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/one-user`).then((res: any) => {
      return res.data.data;
    
    });
  } catch (error) {
    console.log(error);
  }
};

