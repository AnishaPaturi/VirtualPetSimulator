export default function BattleLog({log}){

  return(
    <div style={{
      marginTop:20,
      border:"1px solid gray",
      padding:10,
      width:400,
      height:150,
      overflow:"auto"
    }}>

      <h3>Game Log</h3>

      {log.map((entry,i)=>(
        <p key={i}>{entry}</p>
      ))}

    </div>
  );

}