import axios from 'axios';

const endpoint = "http://172.255.152.115:8081/employment-applications";
export default class EmployeeApplicationService {

  static fetch(offset, limit) {

    return axios.get(endpoint + "?offset=" + offset + "&limit=" + limit).then(
        response => {
          return Promise.resolve(response.data);
        });
  }

}