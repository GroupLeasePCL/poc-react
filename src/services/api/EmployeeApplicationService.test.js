import EmployeeApplicationService from "./EmployeeApplicationService";

it('Test application creation', () => {
  expect.assertions(1);
  return EmployeeApplicationService.create(
      {
        firstName: "Jerome",
        lastName: "Meuret",
        birthDate: "1985-07-31",
        email: "jerome.meuret@gmail.com",
        appliedPosition: "Software Architect",
        contactNumber: "0987788787"
      }).then(response => {
    expect(response.status).toBe(201);
  });
});

it('Test update education', () => {
  expect.assertions(1);
  return EmployeeApplicationService.updateEducation(
      'd1cacf87-ad95-41b4-a2ff-e6b300a36d01',
      {
        degree: 'degree',
        university: 'university',
        gpa: 0,
        major: 'major'
      }).then(response => {
    expect(response.status).toBe(200);
  });
});

it('Test update working experience', () => {
  expect.assertions(1);
  return EmployeeApplicationService.updateWorkingExperience(
      'd1cacf87-ad95-41b4-a2ff-e6b300a36d01',
      {
        company: 'GL',
        startDate: '2015-07-01',
        endDate: '2017-03-25',
        role: 'Software engineer',
        responsibility: 'Make coffee'
      }).then(response => {
    expect(response.status).toBe(200);
  });
});

