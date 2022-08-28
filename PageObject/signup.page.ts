import { expect, Locator, Page } from '@playwright/test';

export class SignUpPage {
readonly url ="https://apply.homage.sg/";

readonly page: Page;
readonly firstName: Locator;
readonly LastName: Locator;
readonly email:Locator;
readonly phoneNumber:Locator;
readonly dateofbirth:Locator;
readonly nationality:Locator;
readonly foreignerOption:Locator;
readonly SingaporeOption: Locator;
readonly countryOfOriginBtn:Locator;
readonly countryOfOrigin:Locator;
readonly optionCountryOfOrigin:Locator;
readonly rolesprofessionalhealthcareYes:Locator;
readonly rolesprofessionalhealthcareNo:Locator;
readonly  rolesApplyToYou :Locator;
readonly experience :Locator;
readonly rolesApplyTo : Locator;

readonly jobOpportunitiesHomeCare :Locator;
readonly jobOpportunitiesFacilityBasedCare :Locator;
readonly jobOpportunitiesCovidAssignmentCare :Locator;
readonly jobOpportunitiesInterimCare :Locator;

readonly engagementTypesFreelance: Locator;
readonly engagementTypesShortTermContract: Locator;
readonly engagementTypesFullTime: Locator;
readonly backgroundCheckYes: Locator;
readonly backgroundCheckNo: Locator;
readonly referredbyafriend : Locator;

readonly howdidyouhearaboutthisjob : Locator; 
readonly optionSocialmedia : Locator;

readonly iUnderstandthatanelectronicsignature: Locator ;
readonly submitApplication: Locator; 

readonly successfulMeassage: Locator ;
readonly thankYouMeassage: Locator; 

constructor(page: Page) {

this.page = page;

this.firstName = page.locator('text=First NameFirst Name >> input[type="text"]');

this.LastName = page.locator('text=Last NameLast Name >> input[type="text"]');

this.email= page.locator('input[type="email"]');

this.phoneNumber= page.locator('input[name="phone"]');

this.dateofbirth = page.locator('[placeholder="DD\\/MM\\/YYYY"]');

this.nationality= page.locator('div[id="nationality"]');

this.foreignerOption= page.locator('text=Foreigner');

this.SingaporeOption = page.locator('text=Singapore Citizen');

this.countryOfOriginBtn =page.locator('button[title="Open"]');

this.countryOfOrigin =page.locator('#country_of_origin');

this.optionCountryOfOrigin= page.locator('text=India');

this.rolesprofessionalhealthcareYes = page.locator('text=Yes');

this.experience = page.locator('xpath=//h3[contains(text(),"Less than 1")]/parent::button');

this.rolesApplyTo = page.locator('xpath=//span[contains(text(),"Therapy")]//parent::h3/parent::div/parent::button');


this.rolesprofessionalhealthcareNo = page.locator('text=No');

this.rolesApplyToYou = page.locator('button:has-text("Caregiver*availabe for Home Care, Facility-Based Care and Interim Care Services")');

this.jobOpportunitiesHomeCare= page.locator('button:has-text("Home CarePersonal care provided in the individual home where the client is livin")');
this.jobOpportunitiesFacilityBasedCare= page.locator('xpath=//b[contains(text(),"Facility-Based Care")]/parent::div/parent::button');
this.jobOpportunitiesCovidAssignmentCare= page.locator('xpath=//b[contains(text(),"Covid Assignments")]/parent::div/parent::button');
this.jobOpportunitiesInterimCare= page.locator('xpath=//b[contains(text(),"Interim Care Services")]/parent::div/parent::button');

this.engagementTypesFreelance=  page.locator('button:has-text("FreelanceDeliver care on a flexible basis, no minimum commitment and earn by the")');
this.engagementTypesShortTermContract=  page.locator('button:has-text("Short-Term ContractFixed or flexible schedule on a 3/6 months basis at hospitals")');
this.engagementTypesFullTime=  page.locator('button:has-text("Full-TimeWork full-time at Homage or at one of our hospitals or community health")');

this.backgroundCheckNo = page.locator('text=No').nth(2);
this.backgroundCheckYes = page.locator('xpath=//span[contains(text(),"Background Check")]//following::button[contains(text(),"Yes")]');

this.referredbyafriend = page.locator('[placeholder="Referral Code \\(optional\\)"]');

this.howdidyouhearaboutthisjob = page.locator('text=Select One');

this.optionSocialmedia = page.locator('li[data-value="Social media (Facebook, Instagram)"]');

this.iUnderstandthatanelectronicsignature = page.locator('.h > i');

this.submitApplication = page.locator('text=Submit Application');

this.successfulMeassage= page.locator('text=Your application has been submitted!');

this.thankYouMeassage = page.locator('text=Thank you for your interest in joining Homage. We will get back to you with the ');

}

async goto(){
await this.page.goto(this.url);
}

// await this.productsMenu.waitFor({state:"visible"});


async enterBasicDetails(fName : String,lName : String,emailId : String,mobile : String,national : String){

    await this.firstName.click();
    await this.firstName.fill(fName.toString()); 
    await this.firstName.press('Tab');  
    await this.LastName.fill(lName.toString());
    await this.email.click();
    await this.email.fill(emailId.toString());  
    await this.phoneNumber.fill(mobile.toString());  
    await this.dateofbirth.fill('28/08/1995'); 
    await this.nationality.click();
    
    if(national.toString() === "Foreigner")
    {
      
    await this.foreignerOption.click();
    await this.countryOfOriginBtn.click();
    await this.countryOfOrigin.waitFor({state:"visible"});
    await this.countryOfOrigin.fill('India');
    await this.countryOfOrigin.press('Enter');  
    }
    else if( national.toString() === "Singapore Citizen")
    {
        await this.SingaporeOption.click();
    }
    
}

async selectRoles(option : String){
    
    if(option.toString() === "NO")
    {
        await  this.rolesprofessionalhealthcareNo.first().click();
        await  this.rolesApplyToYou.click();
    }
    else
    {
        await  this.rolesprofessionalhealthcareYes.first().click();
        await this.experience.first().click();
        await this.rolesApplyTo.click();
    }
}


async selectJobOpportunities(option : String){
    
    if(option.toString() === "Home Care")
    {
        await this.jobOpportunitiesHomeCare.click();
    }
    else if(option.toString() === "Facility-Based Care")
    {
        this.jobOpportunitiesFacilityBasedCare.click();
    }
    else if(option.toString() === "Covid Assignments")
    {
        this.jobOpportunitiesCovidAssignmentCare.click();
    }
    else if(option.toString() === "Interim Care Services")
    {
        await this.jobOpportunitiesInterimCare.click();
    }
    
   
}

async selectEngagmentTypes(option : String){

    await this.engagementTypesFullTime.scrollIntoViewIfNeeded();

   if(option.toString() === "Freelance")
    {
        console.log('selcted engagementTypesFreelance');
        this.engagementTypesFreelance.waitFor({state:"visible"});
        this.engagementTypesFreelance.click();
    }
    else if(option.toString() === "Short-Term Contract")
    {
        console.log('selcted engagementTypesShortTermContract');
        this.engagementTypesShortTermContract.waitFor({state:"visible"});
        this.engagementTypesShortTermContract.click();
    }
    else if(option.toString() === "Full-Time")
    {
        console.log('selcted engagementTypesFullTime');
        this.engagementTypesFullTime.waitFor({state:"visible"});
        await this.engagementTypesFullTime.click();
        
    }  
}

async selectBackgroundCheck(option : String){
    
    if(option.toString() === "NO")
    {
        await  this.backgroundCheckNo.click();
    }
    else
    {
        await this.backgroundCheckYes.click();
    }
}

async referalCode(code : String){
    
   
    await  this.referredbyafriend.fill(code.toString()) ;

}



async selectDeclaration(){

    await  this.howdidyouhearaboutthisjob.click(); 
    await this.optionSocialmedia.click();

    
}

async submitApp()
{
    await  this.iUnderstandthatanelectronicsignature.click();    
    await this.submitApplication.click(); 
}

async verifySuccesfullMeassage()
{   

    await this.successfulMeassage.click();
    await this.thankYouMeassage.click();
}


}