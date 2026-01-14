function calculate(){
 let total=0;
 document.querySelectorAll(".score").forEach(s=>{
   total+=Number(s.value);
 });
 let status="Healthy 🌿";
 if(total>=6) status="Moderate Stress ⚠️";
 if(total>=10) status="High Risk 🚨";

 document.getElementById("result").innerText=
   `Score: ${total} | Status: ${status}`;
}
