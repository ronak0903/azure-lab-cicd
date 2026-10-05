import { useState } from 'react';
export default function App() {
  const [n, setN] = useState(0);
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: 80 }}>
      <h1>Hello from Azure Blob Storage + Front Door CDN</h1>
      <p>Deployed by Azure DevOps Pipelines</p>
      <button onClick={() => setN(n + 1)}>Clicked {n} times</button>
    </main>
  );
}
