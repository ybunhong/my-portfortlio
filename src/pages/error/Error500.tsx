import { Link } from "react-router-dom";

export default function Error500() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: 24}}>
      <h1 style={{fontSize: 72, margin: 0}}>500</h1>
      <p style={{fontSize: 20, margin: '12px 0'}}>Something went wrong on our end.</p>
      <div style={{display: 'flex', gap: 12}}>
        <button onClick={() => window.location.reload()} style={{padding: '8px 12px'}}>Reload</button>
        <Link to="/" style={{alignSelf: 'center', color: '#1976d2'}}>Go to home</Link>
      </div>
    </div>
  );
}
