import React from 'react';
import { Card } from './Card';
import { User, Mail, Key, Bell, Shield, CreditCard } from 'lucide-react';

export const AccountTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
        <p className="text-gray-600">Manage your account preferences and settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <Card
          title="Profile Information"
          description="Update your personal details"
          actions={
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Edit
            </button>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Administrator</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Email:</span>
                <span className="text-sm font-medium">john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Role:</span>
                <span className="text-sm font-medium">Administrator</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card
          title="Security Settings"
          description="Manage your security preferences"
          actions={
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Configure
            </button>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Key className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Two-Factor Authentication</span>
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                Enabled
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Session Timeout</span>
              </div>
              <span className="text-sm font-medium">30 minutes</span>
            </div>
            
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Change Password
            </button>
          </div>
        </Card>

        {/* Billing Information */}
        <Card
          title="Billing Information"
          description="Manage your billing details and subscription"
          actions={
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Manage
            </button>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Current Plan</span>
              </div>
              <span className="text-sm font-medium">Pro Plan</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Monthly Cost</span>
              <span className="text-sm font-medium">$99.00</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Next Billing</span>
              <span className="text-sm font-medium">Aug 2, 2025</span>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Usage & Billing
              </button>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card
          title="Notification Settings"
          description="Control how you receive notifications"
          actions={
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Update
            </button>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Email Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Push Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">SMS Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
