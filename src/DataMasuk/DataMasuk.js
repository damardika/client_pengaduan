import React, { Component } from 'react';

class DataMasuk extends Component {
   render() {
      return (
         <div class="container">
         <h2>Data Masuk Pengaduan</h2>
                                       
         <div class="table-responsive">          
         <table class="table">
           <thead>
             <tr>
               <th>NO </th>
               <th>Nama</th>
               <th>No Telfon</th>
               <th>Alamat kejadian</th>
               <th>jam  </th>
               <th>Data Kejadian</th>
               
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>1</td>
               <td>Ahh</td>
               <td>0895488484848</td>
               <td>jl pancoran 2</td>
               <td>13:00</td>
               <td>Ada Maliing sendal</td>
            
             </tr>
           </tbody>
         </table>
         </div>
       </div>
         
         
      ); 
    }
   }


export default DataMasuk;