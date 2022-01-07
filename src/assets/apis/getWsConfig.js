
import axios from "axios";
import { TR_BASE_URL, WS_BASE_URL, HTTP_BASE_URL, TECH_ANA_URL, baseUrl } from "../data/apiLinks"
export default function getWsConfig() {
  console.log(TR_BASE_URL);
  let Http_config = {
    method: "post",
    url: `${HTTP_BASE_URL}/account/appProperties/getAccountProperties`,
    headers: {
      "Content-type": "application/json",
      module: "uat-account",
      rpcType: "http",
      method: "/account/appProperties/getAccountProperties",
      httpMethod: "post",
      trace: "h5_" + new Date().toGMTString(),
      // 發送後才可以取 token
      Authorization: "",
    },
    data: {
      head: {
        appKey: "yz352001"
      },
      data: {
        login_name: "Guest",
        password: ""
      },
    },
  };
  // return new Promise({

  // })
  const { login_name, password } = Http_config.data.data

  let config = axios(Http_config)
    .then((res) => {
      const Ws_config = {
        url: WS_BASE_URL,
        trace: "h5_" + new Date().getTime(),
        version_code: 1,
        device: "h5",
        head: {
          server: "yz",
          msgType: "login",
          sendTime: new Date().getTime(),
          Authorization: res.headers.authorization,
          lang: "zh-TW",
        },
        content: {
          appKey: res.data.data.transBaseConfigVo.appKey,
          clientIp: res.data.data.clientIp,
          company_id: res.data.data.toKenCompanyInfoVo.companyId,
          login_name: login_name,
          password: password,
          user_type: 1,
        },
      }
      // console.log(Ws_config);
      return Ws_config;
    }).catch(() => {
      console.log("error");
    });
  return config
}