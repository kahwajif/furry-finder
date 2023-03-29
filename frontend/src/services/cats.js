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
    // added type to make the service more generic in the future in order to include dogs too.
    getQuizResults(answers, type) {
        // the database requires grooming levels-> low, medium, high
        let dict = {
            //size
            question1: { 0: "small", 1: "medium", 2: "large" },
            //coat length
            question2: { 0: "short", 1: "semi-long", 2: "long", 3: "hairless" },
            //grooming
            question3: { 0: "minimal", 1: "low", 2: "medium", 3: "high" },
            //playfulness
            question4: { 0: "low", 1: "medium", 2: "high" },
            //vocalization
            question5: { 0: "low", 1: "medium", 2: "high" },
        }
        console.log(answers)
        let answer1 = `${answers[0].answer < 3 ? "length=" + dict.question1[answers[0].answer] : ""}`;
        let answer2 = `${answers[2].answer < 4 ? "&coat=" + dict.question2[answers[2].answer] : ""}`;
        let answer5 = `&talkative=${dict.question5[answers[4].answer]}`;
        let query = answer1 + answer2 + answer5;
        console.log(query)
        return http.get(`${type === "cat-breeds" ? "cats" : "dogs"}?page=${0}&${query}`);
    }
}

export default new CatsDataService();