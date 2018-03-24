import axios from 'axios';

const endpoint = "http://172.255.152.115:8081/employment-applications";
export default class EmployeeApplicationService {

  static fetch(offset = 0, limit = 10, filter) {

    return axios.get(endpoint + "?offset=" + offset + "&limit=" + limit
        + (filter
        !== undefined ? "&" + Object.keys(filter).map(
            key => key + "=" + filter[key]).join("&") : "")).then(
        response => response.data);
  }

  static create(application) {
    return axios.post(endpoint, application);
  }

  static updatePersonalInformation(applicationId, personalInformation) {

    return axios.put(endpoint + "/" + applicationId + "/personal-info",
        personalInformation);
  }

  static updateEducation(applicationId, education) {

    return axios.put(endpoint + "/" + applicationId + "/education", education);
  }

  static updateWorkingExperience(applicationId, workingExperience) {

    return axios.put(endpoint + "/" + applicationId + "/working-experience",
        workingExperience);
  }

  static getPersonalInformation(applicationId, personalInformation) {

    return axios.get(endpoint + "/" + applicationId + "/personal-info").then(
        response => response.data);
  }

  static getEducation(applicationId, education) {

    return axios.get(endpoint + "/" + applicationId + "/education").then(
        response => response.data);
  }

  static getWorkingExperience(applicationId, workingExperience) {

    return axios.get(endpoint + "/" + applicationId
        + "/working-experience").then(
        response => response.data);
  }

  static get(applicationId) {

    return axios.get(endpoint + "/" + applicationId).then(
        response => response.data);
  }
}