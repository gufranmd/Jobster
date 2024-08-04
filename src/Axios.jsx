import axios from "axios";
const CustomFetch=axios.create({
    baseURL:'https://jobtify-prod.herokuapp.com/api/v1/toolkit',
});

export default CustomFetch;