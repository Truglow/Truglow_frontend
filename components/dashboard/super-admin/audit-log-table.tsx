'use me';
'use client';

import React, { useState } from 'react';
import { Search, ShieldAlert, Filter, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SystemAuditLogItem } from '@/lib/mock/super-admin-data';

interface AuditLogTableProps {
  logs: SystemAuditLogItem[];
}

export function AuditLogTable({ logs }: AuditLogTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'ALL' | 'SECURITY' | 'WARN' | 'INFO'>('ALL');

  const filteredLogs = logs.filter((item) => {
    const matchesSearch =
      item.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ipAddress.includes(searchTerm);

    const matchesSeverity = severityFilter === 'ALL' || item.severity === severityFilter;

    return matchesSearch && matchesSeverity;
  });

  const getSeverityBadge = (severity: SystemAuditLogItem['severity']) => {
    switch (severity) {
      case 'SECURITY':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            SECURITY
          </span>
        );
      case 'WARN':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-900 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
            WARNING
          </span>
        );
      case 'INFO':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
            INFO
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#e5ddd3] p-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#2a1d17] tracking-tight">System & Security Audit Log</h2>
          <p className="text-xs text-stone-500 mt-1">
            Immutably tracked administrative actions, authentication attempts, and authorization evaluations
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search component, event, actor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#e5ddd3] bg-[#f7f4ee]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8f5323]/20 focus:border-[#8f5323] transition-all"
            />
          </div>

          {/* Severity Filter */}
          <div className="flex items-center gap-1 bg-[#f7f4ee]/70 border border-[#e5ddd3] rounded-xl p-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-stone-500 ml-1.5" />
            <button
              onClick={() => setSeverityFilter('ALL')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                severityFilter === 'ALL'
                  ? 'bg-white text-[#2a1d17] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSeverityFilter('SECURITY')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                severityFilter === 'SECURITY'
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setSeverityFilter('WARN')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                severityFilter === 'WARN'
                  ? 'bg-rose-100 text-rose-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Warning
            </button>
            <button
              onClick={() => setSeverityFilter('INFO')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                severityFilter === 'INFO'
                  ? 'bg-white text-[#2a1d17] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Info
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-[#e5ddd3]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f7f4ee] border-b border-[#e5ddd3] text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Level</th>
              <th className="py-3 px-4">Component & Event</th>
              <th className="py-3 px-4">Actor</th>
              <th className="py-3 px-4">IP Address</th>
              <th className="py-3 px-4 text-right">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-xs text-stone-700">
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-stone-500">
                  No matching system audit log entries found.
                </td>
              </tr>
            ) : (
              filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-[#f7f4ee]/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-[11px] text-stone-500 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">{getSeverityBadge(log.severity)}</td>
                  <td className="py-3.5 px-4 max-w-md">
                    <div className="font-semibold text-[#2a1d17]">{log.component}</div>
                    <div className="text-stone-600 mt-0.5 leading-normal">{log.event}</div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-stone-800 whitespace-nowrap">{log.actor}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-stone-500 whitespace-nowrap">
                    {log.ipAddress}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    {log.result === 'Pass' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Pass
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <AlertTriangle className="w-3 h-3" /> Blocked
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
