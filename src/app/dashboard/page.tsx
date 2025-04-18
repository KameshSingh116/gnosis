'use client'

import { MainSidebar } from '@/components/dashboard/main-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/dashboard/ui/sidebar'
import React from 'react'
import DashboardPage from './dashboard'
import LearningChart from '@/components/LearningChart'

const Page = () => {
  return (
    <>
    <SidebarProvider>
    <div className="flex min-h-screen">
        <MainSidebar />
        <div className="flex-1">
        <div className="border-b">
            <div className="flex h-16 items-center gap-4 px-4">
            <SidebarTrigger />
            <div className="font-semibold">Dashboard</div>
            </div>
        </div>
        {/* {children} */}
        <div className="min-h-screen bg-[#1B1E3D] p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#2A2E4D] rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Learning Progress</h2>
                <LearningChart />
              </div>
              
              <div className="bg-[#2A2E4D] rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {/* Add recent activity items here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </SidebarProvider>
    </>
  )
}

export default Page