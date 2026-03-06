export default function HealthBar({ value, max }) {

  const percentage = (value / max) * 100;

  return (
    <div style={{
      width: "250px",
      border: "2px solid black",
      height: "20px",
      marginBottom: "10px"
    }}>

      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: "limegreen",
          transition: "width 0.5s ease"
        }}
      />

    </div>
  );
}