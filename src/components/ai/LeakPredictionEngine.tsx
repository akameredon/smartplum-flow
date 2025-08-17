import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Droplets, AlertTriangle, TrendingUp, Zap } from 'lucide-react';

interface LeakPrediction {
  location: string;
  probability: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timeframe: string;
  cost_estimate: number;
  preventive_action: string;
  confidence: number;
}

interface IoTSensorData {
  id: string;
  location: string;
  moisture_level: number;
  pressure: number;
  flow_rate: number;
  temperature: number;
  vibration: number;
  last_updated: string;
}

const LeakPredictionEngine: React.FC = () => {
  const [predictions, setPredictions] = useState<LeakPrediction[]>([]);
  const [sensorData, setSensorData] = useState<IoTSensorData[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [totalSavings, setTotalSavings] = useState(0);

  // Simulate AI-powered leak prediction algorithm
  const generatePredictions = (): LeakPrediction[] => {
    const locations = ['Kitchen Sink', 'Main Water Line', 'Bathroom', 'Basement', 'Water Heater', 'Outdoor Pipes'];
    const predictions: LeakPrediction[] = [];

    locations.forEach(location => {
      const probability = Math.random() * 100;
      const severity = 
        probability > 80 ? 'critical' :
        probability > 60 ? 'high' :
        probability > 40 ? 'medium' : 'low';
      
      predictions.push({
        location,
        probability: Math.round(probability),
        severity,
        timeframe: probability > 70 ? '1-7 days' : probability > 50 ? '1-4 weeks' : '1-6 months',
        cost_estimate: Math.round((probability / 100) * 5000 + 200),
        preventive_action: `Install smart sensor and schedule ${severity === 'critical' ? 'immediate' : 'preventive'} maintenance`,
        confidence: Math.round(85 + Math.random() * 15)
      });
    });

    return predictions.sort((a, b) => b.probability - a.probability);
  };

  // Simulate IoT sensor data
  const generateSensorData = (): IoTSensorData[] => {
    return [
      {
        id: 'sensor-001',
        location: 'Kitchen Sink',
        moisture_level: 15.2,
        pressure: 65.8,
        flow_rate: 2.3,
        temperature: 68.5,
        vibration: 0.12,
        last_updated: new Date().toISOString()
      },
      {
        id: 'sensor-002',
        location: 'Main Water Line',
        moisture_level: 89.7, // High moisture - potential leak
        pressure: 45.2, // Low pressure - concern
        flow_rate: 5.8,
        temperature: 72.1,
        vibration: 0.45,
        last_updated: new Date().toISOString()
      },
      {
        id: 'sensor-003',
        location: 'Bathroom',
        moisture_level: 25.1,
        pressure: 58.3,
        flow_rate: 1.9,
        temperature: 71.2,
        vibration: 0.08,
        last_updated: new Date().toISOString()
      }
    ];
  };

  const runAIAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newPredictions = generatePredictions();
    const newSensorData = generateSensorData();
    
    setPredictions(newPredictions);
    setSensorData(newSensorData);
    
    // Calculate potential savings
    const totalPotentialCost = newPredictions.reduce((sum, pred) => sum + pred.cost_estimate, 0);
    setTotalSavings(Math.round(totalPotentialCost * 0.7)); // 70% savings through prevention
    
    setIsAnalyzing(false);
  };

  useEffect(() => {
    runAIAnalysis();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSensorStatus = (moisture: number, pressure: number) => {
    if (moisture > 80 || pressure < 50) return 'critical';
    if (moisture > 60 || pressure < 60) return 'warning';
    return 'normal';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <div>
              <CardTitle className="text-2xl text-blue-900">AI Leak Prediction Engine</CardTitle>
              <CardDescription className="text-blue-700">
                Advanced machine learning algorithms analyzing your plumbing system 24/7
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">${totalSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Potential Savings</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">{predictions.length}</div>
              <div className="text-sm text-gray-600">Areas Monitored</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600">99.2%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time IoT Sensors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Real-time IoT Sensor Network
          </CardTitle>
          <CardDescription>Live monitoring from smart sensors throughout your property</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sensorData.map((sensor) => {
              const status = getSensorStatus(sensor.moisture_level, sensor.pressure);
              return (
                <Card key={sensor.id} className={`${status === 'critical' ? 'border-red-500' : status === 'warning' ? 'border-yellow-500' : 'border-green-500'}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{sensor.location}</CardTitle>
                    <Badge variant={status === 'critical' ? 'destructive' : status === 'warning' ? 'secondary' : 'default'}>
                      {status.toUpperCase()}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Moisture:</span>
                        <span className={sensor.moisture_level > 80 ? 'text-red-600 font-bold' : ''}>{sensor.moisture_level}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pressure:</span>
                        <span className={sensor.pressure < 50 ? 'text-red-600 font-bold' : ''}>{sensor.pressure} PSI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Flow Rate:</span>
                        <span>{sensor.flow_rate} GPM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperature:</span>
                        <span>{sensor.temperature}°F</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Predictive Analytics Dashboard
          </CardTitle>
          <CardDescription>AI-generated insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictions.slice(0, 4).map((prediction, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <h4 className="font-semibold">{prediction.location}</h4>
                      <Badge className={getSeverityColor(prediction.severity)}>
                        {prediction.severity.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Risk Level</div>
                        <div className="flex items-center gap-2">
                          <Progress value={prediction.probability} className="flex-1" />
                          <span className="font-semibold">{prediction.probability}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-gray-600">Timeframe</div>
                        <div className="font-semibold">{prediction.timeframe}</div>
                      </div>
                      
                      <div>
                        <div className="text-gray-600">Estimated Cost</div>
                        <div className="font-semibold text-red-600">${prediction.cost_estimate.toLocaleString()}</div>
                      </div>
                      
                      <div>
                        <div className="text-gray-600">Confidence</div>
                        <div className="font-semibold text-green-600">{prediction.confidence}%</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>AI Recommendation:</strong> {prediction.preventive_action}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 flex gap-4">
            <Button onClick={runAIAnalysis} disabled={isAnalyzing} className="flex-1">
              {isAnalyzing ? 'Analyzing...' : 'Run New Analysis'}
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Preventive Maintenance
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Critical Alert */}
      {predictions.some(p => p.severity === 'critical') && (
        <Alert className="border-red-500 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-800">
            <strong>CRITICAL ALERT:</strong> High-risk leak detected! Immediate professional inspection recommended.
            Our AI has identified areas requiring urgent attention to prevent costly water damage.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default LeakPredictionEngine;