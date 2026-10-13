'use client';
import { useState } from 'react';

export default function SaaSdashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [logs] = useState([
    { id: 1, server: 'prod-aws-us-east-1', event: 'User alice logged in successfully', hash: '8f92c...4e1', status: 'Normal', time: '13:05:00' },
    { id: 2, server: 'db-cluster-node-2', event: 'ALERT: Failed SSH login attempt (Count: 5)', hash: '3a11b...9c8', status: 'Threat', time: '13:05:12' },
    { id: 3, server: 'prod-aws-us-east-1', event: 'Unauthorized root privilege escalation attempt', hash: 'e457f...1a2', status: 'Threat', time: '13:06:40' },
  ]);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold text-lg tracking-wide">AegisLogs AI</span>
          </div>
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'overview' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              📊 Fleet Overview
            </button>
            <button 
              onClick={() => setActiveTab('logs')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'logs' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              📜 Immutable Log Stream
            </button>
            <button 
              onClick={() => setActiveTab('blockchain')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'blockchain' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              ⛓️ Blockchain Proofs
            </button>
          </nav>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
          <p className="text-xs text-slate-400">Subscription Plan</p>
          <p className="text-sm font-bold text-cyan-400 mt-0.5">Enterprise Tier ($99/mo)</p>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Protected Servers</span>
            <span className="font-semibold text-white">4 / 10</span>
          </div>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Security Operations Center</h1>
            <p className="text-sm text-slate-400 mt-1">Real-time immutable server logging and AI threat defense.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ● Polygon Amoy Synced
            </span>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-sm text-slate-400">Active Agents Monitored</p>
                <p className="text-3xl font-bold mt-2 text-white">4 Servers</p>
                <span className="text-xs text-emerald-400 mt-2 inline-block">100% Online & Reporting</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-sm text-slate-400">AI Threats Blocked (24h)</p>
                <p className="text-3xl font-bold mt-2 text-rose-400">12 Incidents</p>
                <span className="text-xs text-rose-400 mt-2 inline-block">Zero data tampering detected</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-sm text-slate-400">Latest Merkle Anchor</p>
                <p className="text-xl font-mono font-bold mt-2 text-purple-400 truncate">0x4f89...c192</p>
                <span className="text-xs text-purple-400 mt-2 inline-block">Anchored 2 mins ago</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Live Threat & Event Stream</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase">
                      <th className="py-3 px-4">Server</th>
                      <th className="py-3 px-4">Event Description</th>
                      <th className="py-3 px-4">Cryptographic Hash</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-sm">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-800/40">
                        <td className="py-3 px-4 font-medium text-slate-300">{log.server}</td>
                        <td className="py-3 px-4 text-slate-300">{log.event}</td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-400">{log.hash}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${log.status === 'Threat' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'}`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{log.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Full Immutable Audit Log Ledger</h2>
            <p className="text-sm text-slate-400 mb-4">Every log line is chained to its predecessor. Any deletion or modification on the target server breaks the cryptographic sequence instantly.</p>
            <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-emerald-400 border border-slate-800 space-y-2">
              <p>[0x000...000] GENESIS_BLOCK_INIT</p>
              <p>[8f92c...4e1] User alice logged in successfully -- PREV_HASH: 000...</p>
              <p>[3a11b...9c8] ALERT: Failed SSH login attempt (Count: 5) -- PREV_HASH: 8f92c...</p>
              <p>[e457f...1a2] Unauthorized root privilege escalation attempt -- PREV_HASH: 3a11b...</p>
            </div>
          </div>
        )}

        {activeTab === 'blockchain' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Polygon Amoy Blockchain Verification</h2>
            <p className="text-sm text-slate-400 mb-6">Merkle roots are batched and anchored on-chain every 100 log entries to guarantee tamper-proof audit trails for compliance and forensics.</p>
            <div className="border border-purple-500/30 bg-purple-950/10 p-5 rounded-xl space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Smart Contract Address:</span>
                <span className="font-mono text-purple-300">0x71C...83a9 (Polygon Amoy)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Anchored Batches:</span>
                <span className="font-semibold text-white">1,428 Batches</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Verification Status:</span>
                <span className="text-emerald-400 font-semibold">100% Verified Valid</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}