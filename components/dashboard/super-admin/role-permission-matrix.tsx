'use client';

import React from 'react';
import { ShieldCheck, Check, X, Lock } from 'lucide-react';
import { ROLE_PERMISSION_MATRIX_DATA } from '@/lib/mock/super-admin-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RolePermissionMatrix() {
  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
          <Lock className="h-4 w-4 text-[#8f5323]" />
          Role Capability & Permission Governance Matrix
        </CardTitle>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2a1d17] text-[#fbf9f5] border border-[#4a3428]">
          4 Active Roles • 21 Permissions
        </span>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f7f4ee] border-b border-[#eee6dc] text-[#4a3428] font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Permission Capability</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4 text-center">RECEPTIONIST</th>
                <th className="py-3 px-4 text-center">MANAGER</th>
                <th className="py-3 px-4 text-center">ADMIN</th>
                <th className="py-3 px-4 text-center bg-amber-50/60">SUPER_ADMIN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3eee7] text-[#2a1d17]">
              {ROLE_PERMISSION_MATRIX_DATA.map((item) => (
                <tr key={item.permissionKey} className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-[#2a1d17]">
                    <div>{item.label}</div>
                    <div className="text-[10px] font-mono font-normal text-[#8f796a]">
                      {item.permissionKey}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-800 border border-stone-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.RECEPTIONIST ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 text-stone-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.MANAGER ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 text-stone-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.ADMIN ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 text-stone-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center bg-amber-50/40">
                    <Check className="h-4 w-4 text-[#8f5323] font-bold mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
