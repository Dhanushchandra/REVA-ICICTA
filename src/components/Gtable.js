import React from "react";
import "./style/Date.css"
import HeadShake from 'react-reveal/HeadShake';
import Zoom from 'react-reveal/Zoom';


const Gtable = () => {
    return(
        <>
        <div className="imp-date container">
            <HeadShake>
               <h1>SCHEDULE</h1>  
            </HeadShake>
           
          
           <table class="table date-table">

  <tbody>
  
 
    <Zoom bottom delay={100}>
    <tr >
      <td ><strong>Date and Time</strong>
      </td>
      
      <td><strong>Details of the resource person</strong></td>
    
    </tr>
    </Zoom>
   
     
    <Zoom bottom delay={300}>
    <tr >
       <td  className="GDcolor">02-06-2022;
        <br/>
        9.30 a.m. – 10.30 a.m.
        </td>
    
     
      <td>

      <strong>Chief Guest :</strong><br/> 
      Dr. Rajeev Shorey<br/>
      Chief Executive Officer, University of Queensland – <br/>
       IIT Delhi Academy of Research (UQIDAR), New Delhi
       <br/>
       <br/>
        <strong>Guest of Honor:</strong><br/>
        Dr. Vijay Srinivas Agneeswaran<br/>
        Machine Learning Research Leader<br/>
        Microsoft Corporation, Bangalore<br/>

      </td>
      </tr>
      </Zoom>

    
    <Zoom bottom delay={500}> 
    <tr >
      <td className="GDcolor">
      02-06-2022; <br/>

        11.00 am – 12.30 pm
  
      </td>
      <td>
      <strong>Technical Session – I: </strong><br/>
      <br/>
      Resource Person:<br/>
    
Dr. Vijay Srinivas Agneeswaran<br/>
Machine Learning Research Leader<br/>
Microsoft Corporation, Bangalore<br/>
      </td>
    </tr>
    </Zoom>
    <Zoom bottom delay={500}> 
    <tr >
      <td  className="GDcolor">
      02-06-2022<br/>

        1.30 pm – 3.00 pm
      </td>
      <td>
    <strong>Technical Session – II: </strong><br/>
    <br/>
    Resource Person:<br/>
    Dr. Rajeev Shorey<br/>
    Chief Executive Officer, University of Queensland – <br/>
    IIT Delhi Academy of Research (UQIDAR), New Delhi<br/>
    <br/>
Title of the talk :<br/>
Recent Investigations in Machine Learning and Edge Computing<br/>
      </td>
    </tr>
    </Zoom>
    <Zoom bottom delay={500}> 
    <tr>
      <td className="GDcolor">
      02-06-2022; <br/>
    3.15 pm – 4.30 pm
  
      </td>
      <td>
     <strong>Technical Session – II:  (Online)</strong> <br/>
      <br/>
Resource Person:<br/>

Dr. Ashuthosh Saxena<br/>
Associate Vice-President and Principal Research Scientist<br/>

      </td>
    </tr>
    </Zoom>
  </tbody>
</table>
<br/>
<br/>
<br/>
<hr/>
        </div>
        
        </>
    )
}

export default Gtable