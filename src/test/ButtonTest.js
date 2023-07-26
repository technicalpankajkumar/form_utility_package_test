import Button from "../form_utility/fields/Button"

export default function ButtonTest(){

    return (<>
      <Button label="Submit" btnSize="sm" btnColor="success" disabled onClick={()=>console.log("button clickable")}/>&nbsp;&nbsp;
    <Button label="Submit" btnSize="md" btnColor="darkblue"/>&nbsp;&nbsp;
    <Button label="Submit" btnSize="lg" btnColor="warning"/>&nbsp;&nbsp;
    <Button label="SUBMIT FORM DATA" btnSize="xl" btnColor="orange" disabled title="button is disabled" />&nbsp;&nbsp;
    <Button label="Submit"  btnSize="sm" btnColor="danger" />&nbsp;&nbsp;
    <Button label="Submit" btnColor="secondary"/>&nbsp;&nbsp;
    <Button label="Submit" btnColor="success" style={{height:"50px"}}/>&nbsp;&nbsp;
    <Button label="Submit" />&nbsp;&nbsp;
    </>)
}