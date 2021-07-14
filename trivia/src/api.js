import axios from 'axios'

export function getCategoryList() {
    return axios.get('https://opentdb.com/api_category.php')
    .then(res => res.data.trivia_categories)
}