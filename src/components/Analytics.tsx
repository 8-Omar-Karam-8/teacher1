import React, { useState } from 'react';
import { Calendar, Download, TrendingUp, Users, Play, Clock, Eye, MessageSquare } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';

const analyticsData = [
  { date: '2025-01-01', views: 1200, watchTime: 480, engagement: 78, students: 45 },
  { date: '2025-01-02', views: 1350, watchTime: 520, engagement: 82, students: 48 },
  { date: '2025-01-03', views: 1100, watchTime: 440, engagement: 75, students: 42 },
  { date: '2025-01-04', views: 1600, watchTime: 640, engagement: 85, students: 52 },
  { date: '2025-01-05', views: 1800, watchTime: 720, engagement: 88, students: 58 },
  { date: '2025-01-06', views: 1450, watchTime: 580, engagement: 80, students: 50 },
  { date: '2025-01-07', views: 1900, watchTime: 760, engagement: 92, students: 62 },
];

const deviceData = [
  { name: 'Desktop', value: 45, color: '#8B5CF6' },
  { name: 'Mobile', value: 35, color: '#EC4899' },
  { name: 'Tablet', value: 20, color: '#06B6D4' },
];

const geographyData = [
  { country: 'United States', students: 342, percentage: 28 },
  { country: 'United Kingdom', students: 198, percentage: 16 },
  { country: 'Canada', students: 156, percentage: 13 },
  { country: 'Australia', students: 134, percentage: 11 },
  { country: 'Germany', students: 98, percentage: 8 },
  { country: 'Others', students: 319, percentage: 24 },
];

const retentionData = [
  { week: 'Week 1', retention: 100 },
  { week: 'Week 2', retention: 85 },
  { week: 'Week 3', retention: 72 },
  { week: 'Week 4', retention: 68 },
  { week: 'Week 5', retention: 65 },
  { week: 'Week 6', retention: 62 },
  { week: 'Week 7', retention: 58 },
  { week: 'Week 8', retention: 55 },
];

export function Analytics() {
  const [dateRange, setDateRange] = useState('7d');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Analytics</h1>
          <p className="text-slate-400">Track your course performance and student engagement</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-slate-100"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">10.4K</div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Watch Time</CardTitle>
                  <Clock className="h-4 w-4 text-purple-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">4,140h</div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">+8.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Avg Engagement</CardTitle>
                  <MessageSquare className="h-4 w-4 text-pink-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">82%</div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">+5.1%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Active Students</CardTitle>
                  <Users className="h-4 w-4 text-cyan-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">357</div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">+15.3%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-100">Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Area 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#8B5CF6" 
                      fill="#8B5CF6"
                      fillOpacity={0.3}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="watchTime" 
                      stroke="#EC4899" 
                      fill="#EC4899"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Student Retention */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-100">Student Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={retentionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="week" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Line 
                        type="monotone" 
                        dataKey="retention" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Device Usage */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-100">Device Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {deviceData.map((item, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-3 h-3 rounded-full mx-auto mb-1" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-slate-400">{item.name}</span>
                      <div className="text-sm font-medium text-slate-300">{item.value}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          {/* Geography */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-100">Student Geography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geographyData.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-slate-600 rounded"></div>
                      <span className="text-slate-100">{country.country}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-violet-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${country.percentage}%` }}
                        />
                      </div>
                      <span className="text-slate-300 w-12 text-right">{country.students}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">$24,580</div>
                <div className="text-xs text-green-400">+18.2% vs last month</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Avg Revenue per Student</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">$68.85</div>
                <div className="text-xs text-green-400">+5.4% vs last month</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">12.4%</div>
                <div className="text-xs text-green-400">+2.1% vs last month</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}