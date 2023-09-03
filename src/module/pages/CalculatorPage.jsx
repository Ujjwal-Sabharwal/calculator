import React, { useState } from 'react'
import { Message } from '../components/Message'
import { Button } from '../components/Button'

export const CalculatorPage = () => {
   const [count,setvalue]=useState('');
   const result=(value)=>{
      console.log(value)
      if(value==='AC'){
         setvalue('')
      }
      else if(value==='='){
         setvalue(eval(count))
      }
      else{
         setvalue(count+value)
      }
   }
  return (
    <div class="container text-center pt-4">
      <Message value='CALCULTOR' class='success'/>
  <div class="row">
    <div class="col">
    </div>
    <div class="col border gap-5">
      <div class='row border'>
      <Message value='calculator' calval={count}/>
      </div>
      <div class='row mt-3'>
         <div class="col">
            <Button value='(' classname='secondary' fn={result}/>
         </div>
         <div class="col">
            <Button value=')' classname='secondary' fn={result}/>
         </div>
         <div class="col">
            <Button value='%' classname='secondary' fn={result}/>
         </div>
         <div class="col">
            <Button value='AC' classname='secondary' fn={result}/>
         </div>
      </div>
      <div class='row mt-3'>
         <div class="col">
            <Button value='7' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='8' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='9' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='/' classname='secondary' fn={result}/>
         </div>
      </div>
      <div class='row mt-3'>
         <div class="col">
            <Button value='4' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='5' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='6' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='*' classname='secondary' fn={result}/>
         </div>
      </div>
      <div class='row mt-3'>
         <div class="col">
            <Button value='1' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='2' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='3' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='-' classname='secondary' fn={result}/>
         </div>
      </div>
      <div class='row mt-3'>
         <div class="col">
            <Button value='0' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='.' classname='dark' fn={result}/>
         </div>
         <div class="col">
            <Button value='=' classname='primary' fn={result}/>
         </div>
         <div class="col">
            <Button value='+' classname='secondary' fn={result}/>
         </div>
      </div>
    </div>
    <div class="col">
    </div>
  </div>
</div>
  );
}
