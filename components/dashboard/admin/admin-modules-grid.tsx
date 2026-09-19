'use client';

import React, { useState } from 'react';
import {
  Users,
  Stethoscope,
  Building2,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  AdminStaffSummary,
  AdminServiceSummary,
  DepartmentSummary,
} from '@/lib/mock/admin-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AdminModulesGridProps {
  staffList: AdminStaffSummary[];
  servicesList: AdminServiceSummary[];
  departments: DepartmentSummary[];
  onAddStaffClick: () => void;
  onAddServiceClick: () => void;
}

export function AdminModulesGrid({
  staffList,
  servicesList,
  departments,
  onAddStaffClick,
  onAddServiceClick,
}: AdminModulesGridProps) {
  const [activeTab, setActiveTab] = useState<'STAFF' | 'SERVICES' | 'DEPARTMENTS'>('STAFF');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      
      {/* Module Section Tabs Bar */}
      <div className="bg-white border border-[#e5ddd3] rounded-2xl p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <Button
            size="sm"
            onClick={() => setActiveTab('STAFF')}
            className={`h-9 text-xs font-bold px-4 rounded-xl cursor-pointer ${
              activeTab === 'STAFF'
                ? 'bg-[#8f5323] text-white shadow-xs'
                : 'bg-[#faf7f2] text-[#5f493c] border border-[#d7cec7] hover:bg-amber-50'
            }`}
          >
            <Users className="h-3.5 w-3.5 mr-1.5" />
            User & Staff Directory ({staffList.length})
          </Button>

          <Button
            size="sm"
            onClick={() => setActiveTab('SERVICES')}
            className={`h-9 text-xs font-bold px-4 rounded-xl cursor-pointer ${
              activeTab === 'SERVICES'
                ? 'bg-[#8f5323] text-white shadow-xs'
                : 'bg-[#faf7f2] text-[#5f493c] border border-[#d7cec7] hover:bg-amber-50'
            }`}
          >
            <Stethoscope className="h-3.5 w-3.5 mr-1.5" />
            Services Catalog ({servicesList.length})
          </Button>

          <Button
            size="sm"
            onClick={() => setActiveTab('DEPARTMENTS')}
            className={`h-9 text-xs font-bold px-4 rounded-xl cursor-pointer ${
              activeTab === 'DEPARTMENTS'
                ? 'bg-[#8f5323] text-white shadow-xs'
                : 'bg-[#faf7f2] text-[#5f493c] border border-[#d7cec7] hover:bg-amber-50'
            }`}
          >
            <Building2 className="h-3.5 w-3.5 mr-1.5" />
            Departments & Centers ({departments.length})
          </Button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8f796a]" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search directory..."
            className="pl-9 h-9 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
          />
        </div>
      </div>

      {/* Tab 1: Staff Directory */}
      {activeTab === 'STAFF' && (
        <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
          <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
              <Users className="h-4 w-4 text-[#8f5323]" />
              Clinic Staff & User Role Roster
            </CardTitle>
            <Button
              size="sm"
              onClick={onAddStaffClick}
              className="h-8 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-bold cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5 mr-1" /> Add Staff Member
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f7f4ee] border-b border-[#eee6dc] text-[#4a3428] font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Staff Member</th>
                    <th className="py-3 px-4">Role Level</th>
                    <th className="py-3 px-4">Specialization</th>
                    <th className="py-3 px-4">Branch Center</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3eee7] text-[#2a1d17]">
                  {staffList
                    .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((staff) => (
                      <tr key={staff.id} className="hover:bg-amber-50/30 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#2a1d17]">
                          <div>{staff.name}</div>
                          <div className="text-[11px] text-[#7a6759] font-mono font-normal">{staff.email}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-0.5 rounded-full bg-amber-100 text-[#8f5323] border border-amber-300">
                            <ShieldCheck className="h-3 w-3" /> {staff.role}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-[#4a3428]">
                          {staff.specialization}
                        </td>
                        <td className="py-3.5 px-4 text-[#7a6759]">
                          {staff.branch}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                            <CheckCircle2 className="h-3 w-3" /> {staff.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab 2: Services Catalog */}
      {activeTab === 'SERVICES' && (
        <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
          <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-[#8f5323]" />
              Treatment & Service Catalog Administration
            </CardTitle>
            <Button
              size="sm"
              onClick={onAddServiceClick}
              className="h-8 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-bold cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5 mr-1" /> Add Treatment Service
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f7f4ee] border-b border-[#eee6dc] text-[#4a3428] font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">Treatment Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Standard Fee (₹)</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3eee7] text-[#2a1d17]">
                  {servicesList
                    .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.code.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((srv) => (
                      <tr key={srv.id} className="hover:bg-amber-50/30 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#8f5323]">
                          {srv.code}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#2a1d17]">
                          {srv.name}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-800 border border-stone-200">
                            {srv.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-[#7a6759]">
                          {srv.durationMinutes} min
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#2a1d17]">
                          ₹{srv.priceINR.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                            {srv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab 3: Departments */}
      {activeTab === 'DEPARTMENTS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {departments.map((dept) => (
            <Card key={dept.id} className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-100 text-[#8f5323]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2a1d17] text-sm">{dept.name}</h4>
                    <p className="text-[11px] text-[#7a6759]">Head: {dept.headSpecialist}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-300">
                  {dept.branch}
                </span>
              </div>

              <div className="pt-2 border-t border-[#f3eee7] flex items-center justify-between text-xs text-[#5f493c]">
                <div>Staff Assigned: <strong className="text-[#2a1d17]">{dept.staffCount}</strong></div>
                <div>Active Treatments: <strong className="text-[#8f5323]">{dept.activeServicesCount}</strong></div>
              </div>
            </Card>
          ))}
        </div>
      )}

    </div>
  );
}
