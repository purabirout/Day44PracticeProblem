class EmployeePayrollData{
    //getter and setter
    get id(){return this._id;}
    set id(id){
        this._id;
    }
    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect!';
    }
    get profilePic(){return this._ProfilePic;}
    setprofilePic(profilePic){
        this._ProfilePic = profilePic;
    }
    get gender(){return this._gender;}
    set gender(gender){
        this._gender = gender;
    }
    get department(){return this._department}
    set department(department){
        this._department = department;
    }
    get salary(){return this._salary;}
    set salary(salary){
        this._salary = salary;
    }
    get note(){return this._note;}
    set note(note){
        this._note = note;
    }
    get startDate(){return this._startDate;}
    set startDate(startDate){
        this._startDate = startDate;
    }
//method//
toString(){
    const options = {year:'numeric',month: 'long', day: 'numeric'};
    const empDate = !this.startDate ? "undefined":
    this.startDate.toLocaleDateString("en-US", options);
    return "id="+this.id+",name='"+this.name +",gender='" +this.gender+",profilePic='"+this.profilePic+",department="+this.department+",salary=" +this.salary+",startDate="+empDate+",note="+this.note;
}

window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.ariaValueMax.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
});
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
const save = ()=>{
    try{
        let EmployeePayrollData = createEmployeePayroll;
    }catch(e){
        return;
    }
}
const createEmployeePayroll = ()=>{
    let employeepayrollData = new EmployeePayrollData();
    try{
        employeepayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeepayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeepayrollData.gender = getSelectedValues('[name=genger]').pop();
    employeepayrollData.department = getSelectedValues('[name=department]').pop();
    employeepayrollData.salary = getInputValueById('#salary');
    employeepayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputById('#month')+" "+
                getInputValueById('#year');
    employeepayrollData.date = Date.parse(date);
    alert(employeepayrollData.toString());
    return employeepayrollData;
}
const getSelectedValues = (prorpertyValue)=>{
    let allItems = document.querySelectorAll(prorpertyValue);
    let selItems = [];
    allItems.forEach(item=>{
        if(item.checked)selItems.push(item.value);
    });
    return selItems;
}
const getInputValueById = (id)=>{
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id)=>{
    let value = document.getElementById(id).value;
    return value;
}
const save = ()=>{
    try{
        let employeepayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeepayrollData);
    }catch(e){
        return;
    }
}

function createAndUpdateStorage(employeepayrollData){
    let employeepayrollList = JSON.parse(localStorage.getItem("EmployeeRollList"));
    if(employeepayrollList != undefined){
        employeepayrollList.push(employeepayrollData);
    }else{
        employeepayrollList = [employeepayrollData]
    }
    alert(employeepayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeepayrollList))
}
const resetForm = ()=>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2021');
}
const unsetSelectedValues = (prorpertyValue) => {
    let allItems = document.querySelectorAll(prorpertyValue);
    allItems.forEach(item=>{
        item.checked = false;
    });
}
const setTextValue = (id,value)=>{
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id,value)=>{
    const element = document.querySelector(id);
    element.value = value;
}




    }
