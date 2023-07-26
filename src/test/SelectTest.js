import Select from "../form_utility/fields/Select";

export function SelectTest(){

    return (<>
      <Select options={[{value:"hi",label:"Hi"},{value:'hy',label:"HY"}]} width={'spand'}/>
      <Select options={[{value:"hi",label:"Hi"},{value:'hy',label:"HY"}]} width={'fixed'}/>
    </>)
}