import axios from 'axios';

const endpoint = "http://172.255.152.115:8081/employment-applications";
export default class EmployeeApplicationService {

  static fetch(offset, limit) {

    return axios.get(endpoint + "?offset=" + offset + "&limit=" + limit).then(
        response => {
          return Promise.resolve(response.data);
        });
  }

  static create(application) {
    return axios.post(endpoint, application);
  }

  static updatePersonalInformation(applicationId, personalInformation) {

    return axios.put(endpoint + "/" + applicationId + "/personal-info");
  }

  static updateEducation(applicationId, education) {

    return axios.put(endpoint + "/" + applicationId + "/education");
  }

  static updateWorkingExperience(applicationId, workingExperience) {

    return axios.put(endpoint + "/" + applicationId + "/working-experience");
  }

  static getPersonalInformation(applicationId, personalInformation) {

    return axios.get(endpoint + "/" + applicationId + "/personal-info");
  }

  static getEducation(applicationId, education) {

    return axios.get(endpoint + "/" + applicationId + "/education");
  }

  static getWorkingExperience(applicationId, workingExperience) {

    return axios.get(endpoint + "/" + applicationId + "/working-experience");
  }

  static get(applicationId) {

    return axios.get(endpoint + "/" + applicationId).then(
        response => Promise.resolve(response.data));
  }
}