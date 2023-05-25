import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=5fb6b6af9200a303174c78f9afda4cb6'

// export const FetchTrends = () => {
//         return fetch(`${BASE_URL}trending/movie/day?${API_KEY}`)
//                 .then(res => res.json());
// };
export async function FetchTrends() {
       try {
               const response = await axios(`${BASE_URL}trending/movie/day?${API_KEY}`);
               return response.data.results;
       } catch (error) {
               console.log(error);
        };
};

export async function FetchFilm(searchValue) {
        try {
                const response = await axios(`${ BASE_URL }search / movie ? ${ API_KEY } & query=${ searchValue } & include_adult=false & language=en - US & page=1`);
                return response.data.results;
        } catch (error) {
                console.log(error);
                return [];
        }
}








