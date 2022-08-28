import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pageObject/signup.page';

test('Homeage SignUp', async ({ page }) => {
 
  const signup = new SignUpPage(page);

  await signup.goto();
   await signup.enterBasicDetails("fName12031","lName12301","emailid120341@gail.com","85869568","Foreigner");
   await signup.selectRoles("NO");
  await signup.selectJobOpportunities("Home Care");
  await signup.selectEngagmentTypes("Full-Time");
  await signup.selectEngagmentTypes("Freelance");
  await signup.selectBackgroundCheck("NO");  
  await signup.referalCode('RFTGY456');
  await signup.selectDeclaration(); 
  
  await signup.submitApp();  
  await signup.verifySuccesfullMeassage();
  
  
 });

test('Homeage SignUp2', async ({ page }) => {
 
  const signup = new SignUpPage(page);

  await signup.goto();
  await signup.enterBasicDetails("fName20230","lName20302","emailid34002@gail.com","88869568","Singapore Citizen");
   await signup.selectRoles("Yes");
   await signup.selectJobOpportunities("Home Care");
  await signup.selectJobOpportunities("Facility-Based Care");  
  await signup.selectEngagmentTypes("Freelance");
  await signup.selectEngagmentTypes("Short-Term Contract");
  await signup.selectBackgroundCheck("NO");  
  await signup.referalCode('RFTGY456');
  await signup.selectDeclaration(); 
  
  await signup.submitApp();  
  await signup.verifySuccesfullMeassage();
  

});


test('Homeage SignUp3', async ({ page }) => {
 
  const signup = new SignUpPage(page);

  await signup.goto();
  await signup.enterBasicDetails("fName04303","lName43003","emailid34003@gail.com","87769568","Singapore Citizen");
   await signup.selectRoles("Yes");
  await signup.selectJobOpportunities("Covid Assignments");
  await signup.selectJobOpportunities("Facility-Based Care");
  await signup.selectEngagmentTypes("Short-Term Contract");
  await signup.selectEngagmentTypes("Full-Time");
  await signup.selectBackgroundCheck("YES");  
  await signup.referalCode('RFTGY456');
  await signup.selectDeclaration(); 
  
  await signup.submitApp();  
  await signup.verifySuccesfullMeassage();
  

});