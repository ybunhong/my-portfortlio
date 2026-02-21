import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: 24}}>
      <h1 style={{fontSize: 72, margin: 0}}>404</h1>
      <p style={{fontSize: 20, margin: '12px 0'}}>Page not found.</p>
      <Link to="/" style={{color: '#1976d2'}}>Go back home</Link>
    </div>
  );
}
