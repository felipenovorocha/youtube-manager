import axios from "axios";
import { googleApi } from "../constantes";

export const formatarQueryParams = (params: Object[]): string => {
  let queryParams!: string;

  params.forEach((param) => {
    if (params.indexOf(param) != params.length - 1) {
      queryParams += `${param}&`;
    }
  });
  return queryParams;
};

export const formatarUri = (params: Object[]): string => {
  let uri: string = `${googleApi.BASE_URL}/${googleApi.scopes.youtube}/${
    googleApi.VERSION
  }?${formatarQueryParams(params)}`;

  return uri;
};

const client = axios.create({
    baseURL:formatarUri([{ key: googleApi.KEY }]),
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
