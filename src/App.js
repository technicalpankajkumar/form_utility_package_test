import ButtonTest from "./test/ButtonTest";
import InputTest from "./test/InputTest";
import OneCheckOrRadioTest from "./test/OneCheckOrRadioTest";
import { SelectTest } from "./test/SelectTest";
import TextareaTest from "./test/TextareaTest";
import '../src/form_utility/fields/css/Style.css'

function App() {
  return (
    <div className="App">
       {/*
       <InputTest  />
       <SelectTest />
       <TextareaTest /> */}
       <ButtonTest />
       <OneCheckOrRadioTest />  
    </div>
  );
}

export default App;
