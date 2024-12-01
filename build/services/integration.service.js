"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarUri = exports.formatarQueryParams = void 0;
const axios_1 = __importDefault(require("axios"));
const constantes_1 = require("../constantes");
const formatarQueryParams = (params) => {
    let queryParams;
    params.forEach((param) => {
        Object. -
            let;
        paramStringify = JSON.stringify(param);
        if (params.indexOf(param) != params.length - 1) {
            queryParams += ` ${Objec}&`;
        }
        else {
            queryParams += `${paramStringify}`;
        }
    });
    return queryParams;
};
exports.formatarQueryParams = formatarQueryParams;
const formatarUri = (params) => {
    let uri = `${constantes_1.googleApi.BASE_URL}/${constantes_1.googleApi.scopes.youtube}/${constantes_1.googleApi.VERSION}?${(0, exports.formatarQueryParams)(params)}`;
    return uri;
};
exports.formatarUri = formatarUri;
const client = axios_1.default.create({
    baseURL: (0, exports.formatarUri)([{ key: constantes_1.googleApi.KEY }]),
});
// (async () => {
//   const config: AxiosRequestConfig = {
//     headers: {
//       Accept: "application/vnd.github+json",
//     } as RawAxiosRequestHeaders,
//   };
//   const queryString: string = `q=${encodeURIComponent(
//     "followers:>=60000"
//   )}&sort=followers&order=desc`;
//   try {
//     const searchResponse: AxiosResponse = await client.get(
//       `/search/users?${queryString}`,
//       config
//     );
//     const foundUsers: githubFoundUser[] = searchResponse.data.items;
//     const username: string = foundUsers[0].login;
//     const userResponse: AxiosResponse = await client.get(
//       `/users/${username}`,
//       config
//     );
//     const user: githubUser = userResponse.data;
//     const followersCount = user.followers;
//     console.log(
//       `The most followed user on GitHub is "${username}" with ${followersCount} followers.`
//     );
//   } catch (err) {
//     console.log(err);
//   }
// })
// ();
