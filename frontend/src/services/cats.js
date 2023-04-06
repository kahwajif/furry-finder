import http from "../http-common";

//make API calls and return info from API CALLS
class CatsDataService {
    getAll(page = 0) {
        return http.get(`cats?page=${page}`);
    }

    get(id) {
        return http.get(`cats/id/${id}`);
    }

    find(query, by = "breed", page = 0) {
        return http.get(`cats?${by}=${query}&page=${page}`);
    }

    getCatsByQuizResults(answers) {
        // the database requires grooming levels-> low, medium, high
        const dict = {
            //ownership
            question1: { 0: true, 1: false },
            //size
            question2: { 0: "small", 1: "medium", 2: "large" },
            //coat length
            question3: { 0: "short", 1: "semi-long", 2: "long", 3: "hairless" },
            //grooming
            question4: { 0: "low", 1: "medium", 2: "high" },
            //energy
            question5: { 0: "low", 1: "medium", 2: "high" },
            //vocalization
            question6: { 0: "low", 1: "medium", 2: "high" },
        };
        // console.log(answers)
        const { answer: answer1 } = answers[0];
        const { answer: answer2 } = answers[1];
        const { answer: answer3 } = answers[2];
        const { answer: answer4 } = answers[3];
        const { answer: answer5 } = answers[4];
        const { answer: answer6 } = answers[5];

        const query = `${answer1 === 0 ? "first_time_owner=true" : ""}${answer2 < 3 ? "&length=" + dict.question2[answer2] : ""}${answer3 < 4 ? "&coat=" + dict.question3[answer3] : ""}&grooming=${dict.question4[answer4]}&energy=${dict.question5[answer5]}&vocal=${dict.question6[answer6]}`;

        console.log(query)
        return http.get(`cats?page=${0}&${query}`);
    }

    getCatsByFilters(filters) {
        let queryString = '';
        for (const key in filters) {
            if (filters.hasOwnProperty(key)) {
                if (queryString.length > 0) {
                    queryString += '&';
                }
                queryString += `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`;
            }
        }
        console.log(queryString);
        return http.get(`cats?page=${0}&${queryString}`);
    }
}

export default new CatsDataService();