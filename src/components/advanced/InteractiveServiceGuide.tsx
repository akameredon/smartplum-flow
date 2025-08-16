import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronRight, ChevronLeft, AlertTriangle, CheckCircle2, 
  X, Wrench, Camera, Phone, MapPin, Clock, Star 
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  action: string;
  warning?: string;
  image?: string;
  videoUrl?: string;
}

const serviceGuides = {
  'emergency-shutoff': {
    title: 'Emergency Water Shutoff',
    description: 'Learn how to quickly shut off your water in an emergency',
    difficulty: 'Easy',
    duration: '2 minutes',
    steps: [
      {
        id: 1,
        title: 'Locate the Main Water Valve',
        description: 'Find your main water shutoff valve, usually located near the water meter or where the main line enters your home.',
        action: 'Look for a wheel-style valve or lever-style ball valve.',
        warning: 'Make sure you know this location before an emergency happens!'
      },
      {
        id: 2,
        title: 'Turn Off the Water',
        description: 'Turn the valve clockwise (righty tighty) until it stops turning.',
        action: 'For lever valves, turn 90 degrees perpendicular to the pipe.',
        warning: 'Don\'t over-tighten as this can damage the valve.'
      },
      {
        id: 3,
        title: 'Test the Shutoff',
        description: 'Turn on a faucet to verify water flow has stopped.',
        action: 'Water should stop flowing within 30 seconds.',
        warning: 'If water continues to flow, contact SmartPlum immediately!'
      }
    ]
  },
  'unclog-drain': {
    title: 'Unclog a Drain',
    description: 'Simple steps to clear most drain blockages yourself',
    difficulty: 'Easy',
    duration: '15 minutes',
    steps: [
      {
        id: 1,
        title: 'Remove Visible Debris',
        description: 'Take out any hair, soap, or debris you can see at the drain opening.',
        action: 'Use gloves and tweezers to pull out blockages.',
        warning: 'Never use your bare hands - wear protective gloves.'
      },
      {
        id: 2,
        title: 'Try Hot Water Flush',
        description: 'Pour very hot (not boiling) water down the drain to dissolve soap and grease.',
        action: 'Use about 2 cups of hot water, pour slowly.',
        warning: 'Avoid boiling water on PVC pipes as it can cause damage.'
      },
      {
        id: 3,
        title: 'Use Baking Soda and Vinegar',
        description: 'Pour 1/2 cup baking soda, then 1/2 cup vinegar down the drain.',
        action: 'Cover drain for 15 minutes, then flush with hot water.',
        warning: 'This method is safe for all pipe types.'
      },
      {
        id: 4,
        title: 'Try a Plunger',
        description: 'Use a cup plunger to create suction and dislodge the blockage.',
        action: 'Ensure good seal around drain and plunge vigorously.',
        warning: 'If this doesn\'t work, it\'s time to call a professional.'
      }
    ]
  },
  'water-heater-pilot': {
    title: 'Relight Water Heater Pilot',
    description: 'Safely relight your gas water heater pilot light',
    difficulty: 'Medium',
    duration: '10 minutes',
    steps: [
      {
        id: 1,
        title: 'Safety First',
        description: 'Turn off the gas supply and wait 5 minutes for any gas to dissipate.',
        action: 'Locate the gas control valve and turn to "OFF" position.',
        warning: 'If you smell gas, leave immediately and call the gas company!'
      },
      {
        id: 2,
        title: 'Access the Pilot Light',
        description: 'Remove the access panel to reach the pilot light assembly.',
        action: 'Look for the pilot light, thermocouple, and gas control valve.',
        warning: 'Use a flashlight - never use matches or lighters to see.'
      },
      {
        id: 3,
        title: 'Light the Pilot',
        description: 'Turn gas control to "PILOT" and hold down while lighting.',
        action: 'Use a long lighter to ignite the pilot while pressing the reset button.',
        warning: 'Hold the reset button for 30 seconds after pilot lights.'
      },
      {
        id: 4,
        title: 'Test and Restore',
        description: 'Release the reset button and turn control to desired temperature.',
        action: 'Pilot should stay lit. Replace access panel.',
        warning: 'If pilot won\'t stay lit, call SmartPlum - you may need a new thermocouple.'
      }
    ]
  }
};

export const InteractiveServiceGuide = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleSelectGuide = (guideKey: string) => {
    setSelectedGuide(guideKey);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const handleNextStep = () => {
    if (selectedGuide) {
      const guide = serviceGuides[selectedGuide as keyof typeof serviceGuides];
      if (currentStep < guide.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateProgress = () => {
    if (!selectedGuide) return 0;
    const guide = serviceGuides[selectedGuide as keyof typeof serviceGuides];
    return ((currentStep + 1) / guide.steps.length) * 100;
  };

  if (!selectedGuide) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Interactive Service Guides</h1>
          <p className="text-muted-foreground">
            Step-by-step guides to handle common plumbing issues yourself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(serviceGuides).map(([key, guide]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="cursor-pointer h-full hover:shadow-medium transition-all"
                onClick={() => handleSelectGuide(key)}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    <Badge variant={guide.difficulty === 'Easy' ? 'default' : 'secondary'}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {guide.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <ChevronRight className="w-4 h-4" />
                      {guide.steps.length} steps
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-red-800">Emergency Situations</h3>
            </div>
            <p className="text-red-700 mb-4">
              If you're dealing with a major leak, gas smell, or any situation you're unsure about, 
              don't attempt DIY repairs. Call our emergency line immediately.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Emergency: (555) 123-4567
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const guide = serviceGuides[selectedGuide as keyof typeof serviceGuides];
  const currentStepData = guide.steps[currentStep];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => setSelectedGuide(null)}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Guides
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{guide.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline">{guide.difficulty}</Badge>
            <span>{guide.duration}</span>
            <span>Step {currentStep + 1} of {guide.steps.length}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Math.round(calculateProgress())}% complete</span>
            </div>
            <Progress value={calculateProgress()} />
          </div>
        </CardContent>
      </Card>

      {/* Current Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="min-h-[400px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  Step {currentStep + 1}: {currentStepData.title}
                </CardTitle>
                <Button
                  variant={completedSteps.includes(currentStepData.id) ? "default" : "outline"}
                  onClick={() => handleStepComplete(currentStepData.id)}
                >
                  {completedSteps.includes(currentStepData.id) ? (
                    <><CheckCircle2 className="w-4 h-4 mr-2" />Completed</>
                  ) : (
                    <>Mark Complete</>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg">{currentStepData.description}</div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">What to do:</h4>
                <p className="text-blue-700">{currentStepData.action}</p>
              </div>

              {currentStepData.warning && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Important:</h4>
                      <p className="text-yellow-700">{currentStepData.warning}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder for step image/video */}
              <div className="bg-muted rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Visual guide coming soon</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous Step
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" className="text-red-600 border-red-200">
            <Phone className="w-4 h-4 mr-2" />
            Need Help?
          </Button>
          
          {currentStep === guide.steps.length - 1 ? (
            <Button className="btn-hero">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Guide Complete!
            </Button>
          ) : (
            <Button onClick={handleNextStep}>
              Next Step
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Still Need Professional Help?</h3>
            <p className="text-muted-foreground">
              If these steps don't solve your problem or you're not comfortable proceeding, 
              our certified technicians are ready to help.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="btn-hero">
                <Phone className="w-4 h-4 mr-2" />
                Call SmartPlum
              </Button>
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Schedule Service
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};