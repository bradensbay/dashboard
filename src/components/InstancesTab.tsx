import React from 'react';
import { Card } from './Card';
import { Server, Play, Square, MoreVertical, Cpu, HardDrive, Wifi } from 'lucide-react';

interface Instance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'starting' | 'stopping';
  type: string;
  cpu: string;
  memory: string;
  storage: string;
  ipAddress: string;
}

// Mock data - in real app this would come from API
const mockInstances: Instance[] = [
  {
    id: '1',
    name: 'web-server-01',
    status: 'running',
    type: 't3.medium',
    cpu: '2 vCPUs',
    memory: '4 GB',
    storage: '20 GB SSD',
    ipAddress: '192.168.1.100'
  },
  {
    id: '2',
    name: 'database-server',
    status: 'running',
    type: 't3.large',
    cpu: '2 vCPUs',
    memory: '8 GB',
    storage: '100 GB SSD',
    ipAddress: '192.168.1.101'
  },
  {
    id: '3',
    name: 'cache-server',
    status: 'stopped',
    type: 't3.small',
    cpu: '1 vCPU',
    memory: '2 GB',
    storage: '10 GB SSD',
    ipAddress: '192.168.1.102'
  },
  {
    id: '4',
    name: 'backup-server',
    status: 'starting',
    type: 't3.medium',
    cpu: '2 vCPUs',
    memory: '4 GB',
    storage: '50 GB SSD',
    ipAddress: '192.168.1.103'
  }
];

const getStatusColor = (status: Instance['status']) => {
  switch (status) {
    case 'running':
      return 'text-green-600 bg-green-100';
    case 'stopped':
      return 'text-red-600 bg-red-100';
    case 'starting':
    case 'stopping':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getStatusIcon = (status: Instance['status']) => {
  switch (status) {
    case 'running':
      return <Play className="w-3 h-3" />;
    case 'stopped':
      return <Square className="w-3 h-3" />;
    default:
      return <div className="w-3 h-3 rounded-full bg-current animate-pulse" />;
  }
};

export const InstancesTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Instances</h2>
          <p className="text-gray-600">Manage your server instances</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Create Instance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInstances.map((instance) => (
          <Card
            key={instance.id}
            title={instance.name}
            description={instance.type}
            actions={
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-4 h-4" />
              </button>
            }
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(instance.status)}`}>
                  {getStatusIcon(instance.status)}
                  {instance.status}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Cpu className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">CPU:</span>
                  <span className="font-medium">{instance.cpu}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <HardDrive className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Memory:</span>
                  <span className="font-medium">{instance.memory}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Server className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{instance.storage}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Wifi className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">IP:</span>
                  <span className="font-medium font-mono">{instance.ipAddress}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                  {instance.status === 'running' ? 'Stop' : 'Start'}
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
