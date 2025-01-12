import React, { useEffect, useState } from 'react';

const ServerList: React.FC = () => {
  const [servers, setServers] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching server data
    setServers(['play.hypixel.net', 'mc.example.com']);
  }, []);

  return (
    <div>
      <h3>Minecraft Servers</h3>
      <ul>
        {servers.map((server, index) => (
          <li key={index}>{server}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;