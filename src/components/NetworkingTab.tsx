import React from 'react';
import { Card } from './Card';
import { 
  Network, 
  Shield, 
  Globe, 
  Router, 
  Zap, 
  Lock, 
  Settings, 
  Monitor,
  ChevronRight 
} from 'lucide-react';

interface NetworkingAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'active' | 'inactive' | 'pending';
  actionText: string;
}

const networkingActions: NetworkingAction[] = [
  {
    id: '1',
    title: 'Load Balancer',
    description: 'Distribute incoming traffic across multiple instances',
    icon: <Network className="w-6 h-6" />,
    status: 'active',
    actionText: 'Configure'
  },
  {
    id: '2',
    title: 'VPN Gateway',
    description: 'Secure remote access to your network infrastructure',
    icon: <Shield className="w-6 h-6" />,
    status: 'active',
    actionText: 'Manage'
  },
  {
    id: '3',
    title: 'DNS Management',
    description: 'Configure domain name resolution and routing',
    icon: <Globe className="w-6 h-6" />,
    status: 'active',
    actionText: 'Edit Records'
  },
  {
    id: '4',
    title: 'Firewall Rules',
    description: 'Control inbound and outbound network traffic',
    icon: <Lock className="w-6 h-6" />,
    status: 'active',
    actionText: 'Update Rules'
  },
  {
    id: '5',
    title: 'CDN Configuration',
    description: 'Content delivery network for faster global access',
    icon: <Zap className="w-6 h-6" />,
    status: 'inactive',
    actionText: 'Enable CDN'
  },
  {
    id: '6',
    title: 'Network Monitoring',
    description: 'Real-time monitoring of network performance',
    icon: <Monitor className="w-6 h-6" />,
    status: 'active',
    actionText: 'View Metrics'
  },
  {
    id: '7',
    title: 'Subnet Management',
    description: 'Configure and manage network subnets',
    icon: <Router className="w-6 h-6" />,
    status: 'active',
    actionText: 'Manage Subnets'
  },
  {
    id: '8',
    title: 'API Gateway',
    description: 'Manage API endpoints and routing',
    icon: <Settings className="w-6 h-6" />,
    status: 'pending',
    actionText: 'Setup Gateway'
  }
];

const getStatusColor = (status: NetworkingAction['status']) => {
  switch (status) {
    case 'active':
      return 'text-green-600 bg-green-100';
    case 'inactive':
      return 'text-gray-600 bg-gray-100';
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusText = (status: NetworkingAction['status']) => {
  switch (status) {
    case 'active':
      return 'Active';
    case 'inactive':
      return 'Inactive';
    case 'pending':
      return 'Pending';
    default:
      return 'Unknown';
  }
};

export const NetworkingTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Networking</h2>
          <p className="text-gray-600">Manage your network infrastructure and services</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Service
        </button>
      </div>

      {/* Network Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Network className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Services</p>
              <p className="text-xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Services</p>
              <p className="text-xl font-semibold text-gray-900">6</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Monitor className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Setup</p>
              <p className="text-xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Networking Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkingActions.map((action) => (
          <Card key={action.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{action.title}</h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
                      {getStatusText(action.status)}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {action.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  {action.actionText}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card
        title="Quick Actions"
        description="Common networking tasks"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Network className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Network Scan</span>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Security Audit</span>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Monitor className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Performance Test</span>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Bulk Configure</span>
          </button>
        </div>
      </Card>
    </div>
  );
};
