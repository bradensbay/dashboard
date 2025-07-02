import React, { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import { InstancesTab } from './InstancesTab';
import { AccountTab } from './AccountTab';
import { NetworkingTab } from './NetworkingTab';
import { Server, User, Network } from 'lucide-react';

type TabType = 'instances' | 'account' | 'networking';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('instances');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'instances':
        return <InstancesTab />;
      case 'account':
        return <AccountTab />;
      case 'networking':
        return <NetworkingTab />;
      default:
        return <InstancesTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <Tabs>
          <Tab
            label="Instances"
            isActive={activeTab === 'instances'}
            onClick={() => setActiveTab('instances')}
            icon={<Server className="w-4 h-4" />}
          />
          <Tab
            label="Account"
            isActive={activeTab === 'account'}
            onClick={() => setActiveTab('account')}
            icon={<User className="w-4 h-4" />}
          />
          <Tab
            label="Networking"
            isActive={activeTab === 'networking'}
            onClick={() => setActiveTab('networking')}
            icon={<Network className="w-4 h-4" />}
          />
        </Tabs>

        {/* Tab Content */}
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};
