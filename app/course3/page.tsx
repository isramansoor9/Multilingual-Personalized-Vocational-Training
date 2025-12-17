"use client";

import { useState } from "react";
import { BookOpen, Clock, Calendar, Globe, TrendingUp, Target, CheckCircle, Award, BarChart, Brain, Zap, Users } from "lucide-react";

export default function Course3() {
  const [activeTab, setActiveTab] = useState("overview");

  const courseModules = [
    { no: 1, component: "Workshop Practice", theory: 17, practical: 170, total: 187 },
    { no: 2, component: "Internal Combustion Engine", theory: 7, practical: 28, total: 35 },
    { no: 3, component: "Basic Electricity/Electronics", theory: 21, practical: 120, total: 141 },
    { no: 4, component: "Storage Battery", theory: 7, practical: 25, total: 32 },
    { no: 5, component: "Self-Starter", theory: 14, practical: 100, total: 114 },
    { no: 6, component: "Ignition System", theory: 14, practical: 130, total: 144 },
    { no: 7, component: "Technical Drawing-I", theory: 20, practical: 40, total: 60 },
    { no: 8, component: "Technical Mathematics-I", theory: 20, practical: 0, total: 20 },
    { no: 9, component: "Industrial tour", theory: 0, practical: 7, total: 7 },
    { no: 10, component: "Functional English", theory: 20, practical: 20, total: 40 },
    { no: 11, component: "Work Ethics", theory: 20, practical: 0, total: 20 },
    { no: 12, component: "Charging Circuit/ Voltage Regulator", theory: 10, practical: 60, total: 70 },
    { no: 13, component: "Wiring Circuits & Accessories", theory: 34, practical: 210, total: 244 },
    { no: 14, component: "Electronically Controlled vehicle systems and sensors", theory: 21, practical: 183, total: 204 },
    { no: 15, component: "Heating, Ventilating and Air Conditioning system", theory: 15, practical: 120, total: 135 },
    { no: 16, component: "Technical Drawing-II", theory: 20, practical: 40, total: 60 },
    { no: 17, component: "Technical Mathematics-II", theory: 20, practical: 0, total: 20 },
    { no: 18, component: "Industrial tour (2nd Semester)", theory: 0, practical: 7, total: 7 },
    { no: 19, component: "Functional English (2nd Semester)", theory: 20, practical: 20, total: 40 },
    { no: 20, component: "Work Ethics (2nd Semester)", theory: 20, practical: 0, total: 20 },
  ];

  const bloomsLevels = [
    { level: "Remember", description: "Recall basic concepts and terminology", icon: <BookOpen className="w-8 h-8" /> },
    { level: "Understand", description: "Explain ideas and concepts", icon: <Brain className="w-8 h-8" /> },
    { level: "Apply", description: "Use knowledge in practical situations", icon: <CheckCircle className="w-8 h-8" /> },
    { level: "Analyze", description: "Break down and examine components", icon: <BarChart className="w-8 h-8" /> },
    { level: "Evaluate", description: "Justify decisions and troubleshoot", icon: <Target className="w-8 h-8" /> },
    { level: "Create", description: "Design and build electrical systems", icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold">Teachus</span>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Back to Dashboard
          </button>
        </div>
      </nav>

        {/* Hero Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto text-gray-600">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c3bebb]/20 rounded-full mb-6 text-gray-800">
                <Target className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Skilled Technician Course</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Auto Electrician <br/><span className="text-[#968e8a]">G-III Level</span>
                <span className="block text-gray-500 text-xl font-medium mt-2">Course 3 (1-Year Duration)</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As automotive technology evolves with electronics and rapid model changes, specialized auto electricians are more in demand than ever. This curriculum bridges theoretical concepts with intensive practical application.
              </p>

              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group shadow-lg shadow-black/20">
                Enroll Now
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-[#f4f3f2] rounded-xl p-8 border border-[#c3bebb]/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b border-[#c3bebb] pb-2">Curriculum Salients</h3>
              
              <div className="space-y-4">
                {[
                    { icon: <TrendingUp/>, label: "Entry Level", val: "Matric" },
                    { icon: <Calendar/>, label: "Total Duration", val: "1 Year (2 Semesters)" },
                    { icon: <Globe/>, label: "Instruction Medium", val: "Urdu / English" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#c3bebb]">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </div>
                        <span className="font-bold text-gray-900">{item.val}</span>
                    </div>
                ))}

                <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#c3bebb]">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">Total Training Hours</span>
                  </div>
                  <div className="ml-8 grid grid-cols-2 gap-2 text-sm">
                    <p className="bg-[#c3bebb]/10 p-2 rounded text-center"><strong className="text-gray-900">1600</strong> Total</p>
                    <p className="bg-[#c3bebb]/10 p-2 rounded text-center"><strong className="text-gray-900">40</strong> Weekly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Tabs Section */}
      <section className="px-6 py-8 max-w-7xl mx-auto text-gray-600">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-4 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeTab === "overview"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Course Modules
            </button>
            <button
              onClick={() => setActiveTab("assessment")}
              className={`px-6 py-4 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeTab === "assessment"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Assessment System
            </button>
            <button
              onClick={() => setActiveTab("personalization")}
              className={`px-6 py-4 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeTab === "personalization"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Personalized Learning
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Course Modules Tab */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Table of Contents</h2>
                <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Note:</strong> This course is divided into 2 semesters. Modules 1-11 are covered in Semester 1, and modules 12-20 are covered in Semester 2.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left p-4 font-semibold text-gray-900">Sr. No.</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Course Component</th>
                        <th className="text-center p-4 font-semibold text-gray-900">Theory (Hours)</th>
                        <th className="text-center p-4 font-semibold text-gray-900">Practical (Hours)</th>
                        <th className="text-center p-4 font-semibold text-gray-900">Total (Hours)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseModules.map((module, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${index === 11 ? 'border-t-2 border-gray-300' : ''}`}
                        >
                          <td className="p-4 text-gray-900">{module.no}</td>
                          <td className="p-4 font-medium text-gray-900">{module.component}</td>
                          <td className="p-4 text-center text-gray-900">{module.theory}</td>
                          <td className="p-4 text-center text-gray-900">{module.practical}</td>
                          <td className="p-4 text-center font-semibold text-gray-900">{module.total}</td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50 font-bold">
                        <td className="p-4 text-gray-900" colSpan={2}>Total</td>
                        <td className="p-4 text-center text-gray-900">320</td>
                        <td className="p-4 text-center text-gray-900">1280</td>
                        <td className="p-4 text-center text-gray-900">1600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Assessment System Tab */}
            {activeTab === "assessment" && (
              <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Intelligent Assessment System</h2>
                <p className="text-gray-600 text-lg">
                Our AI-powered assessment system uses Enhanced Bloom's Taxonomy to evaluate and adapt to your learning progress in real-time.
                </p>
              </div>

              {/* Bloom's Taxonomy Levels */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Enhanced Bloom's Taxonomy Levels</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bloomsLevels.map((item, index) => (
                  <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                  <div className="text-gray-900 mb-3">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{item.level}</h4>
                  <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
                </div>
              </div>

              {/* Adaptive Quiz System */}
                <div className="bg-gradient-to-br from-[#c3bebb] to-gray-100 text-gray-900 rounded-2xl p-8 mb-8 border border-gray-300">
                  <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-[#c3bebb]" />
                  <h3 className="text-2xl font-bold text-gray-900">Adaptive Quiz System</h3>
                  </div>

                  <div className="space-y-6">
                  <div className="bg-[#c3bebb]   backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-900">
                  <CheckCircle className="w-5 h-5 text-[#c3bebb]" />
                  Progress Monitoring Through Quizzes
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                  Your progress is continuously monitored through adaptive quizzes that adjust difficulty based on your performance. Each quiz evaluates your understanding across all six levels of Enhanced Bloom's Taxonomy.
                  </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#c3bebb] border border-[#c3bebb] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">✓</span> Easy Level
                  </h5>
                  <p className="text-sm text-gray-700">
                    Focuses on <strong>Remember</strong> and <strong>Understand</strong> levels. Tests basic knowledge and comprehension.
                  </p>
                  </div>

                  <div className="bg-[#c3bebb] border border-[#c3bebb] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">◆</span> Medium Level
                  </h5>
                  <p className="text-sm text-gray-700">
                    Emphasizes <strong>Apply</strong> and <strong>Analyze</strong> levels. Evaluates practical application and problem-solving.
                  </p>
                  </div>

                  <div className="bg-[#c3bebb] border border-[#c3bebb] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">★</span> Hard Level
                  </h5>
                  <p className="text-sm text-gray-700">
                    Targets <strong>Evaluate</strong> and <strong>Create</strong> levels. Challenges advanced critical thinking and innovation.
                  </p>
                  </div>
                  </div>
                  </div>
                </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-xl p-8 text-gray-600">
                <h3 className="text-2xl text-black font-bold mb-6">How the System Works</h3>
                <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  1
                  </div>
                  <div>
                  <h4 className="font-bold text-black text-lg mb-2">Initial Assessment</h4>
                  <p className="text-black">
                    Begin with a diagnostic quiz to establish your baseline understanding across all Bloom's Taxonomy levels.
                  </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12  bg-black text-white rounded-full flex items-center justify-center font-bold">
                  2
                  </div>
                  <div>
                  <h4 className="font-bold  text-black text-lg mb-2">Adaptive Difficulty</h4>
                  <p className="text-black">
                    Based on your answers, the system automatically adjusts question difficulty (easy, medium, hard) to match your learning level.
                  </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  3
                  </div>
                  <div>
                  <h4 className="font-bold text-black text-lg mb-2">Continuous Evaluation</h4>
                  <p className="text-black">
                    Regular quizzes throughout each module track your progress and identify areas requiring additional focus.
                  </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  4
                  </div>
                  <div>
                  <h4 className="font-bold text-black text-lg mb-2">Intelligent Feedback</h4>
                  <p className="text-black">
                    Receive detailed explanations and recommendations based on your performance, guiding you toward mastery.
                  </p>
                  </div>
                </div>
                </div>
              </div>
              </div>
            )}

            {/* Personalized Learning Tab */}
            {activeTab === "personalization" && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Personalized Learning Experience</h2>
                  <p className="text-gray-600 text-lg">
                    Every learner is unique. Our AI-powered system personalizes each subtopic within the course modules based on your individual performance and learning style.
                  </p>
                </div>

                {/* Personalization Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">AI-Driven Content Adaptation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system analyzes your quiz responses across all Bloom's Taxonomy levels and automatically adjusts the complexity, examples, and explanations for each subtopic to match your comprehension level.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Targeted Subtopic Focus</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you struggle with specific subtopics (e.g., "Battery Charging" within the Battery module), the system provides additional resources, simplified explanations, and practice questions tailored to strengthen that area.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Progressive Difficulty Scaling</h3>
                    <p className="text-gray-600 leading-relaxed">
                      As you demonstrate mastery in easier questions, the system gradually introduces more challenging content, ensuring you're always learning at the optimal difficulty level for growth.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Multilingual Personalization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Content is personalized not just by difficulty but also by your preferred language (Urdu or English), ensuring maximum comprehension and comfort during learning.
                    </p>
                  </div>
                </div>

                {/* How Personalization Works */}
                <div className="bg-gradient-to-r from-[#c3bebb] to-[#cbbfb7] text-gray-900 rounded-2xl p-8 mb-8 border border-gray-300">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">How Subtopic Personalization Works</h3>

                  <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">📊</span> Performance Analysis
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                    After each quiz, the AI analyzes your answers to identify:
                    </p>
                    <ul className="mt-3 ml-6 space-y-2 text-gray-700">
                    <li>• Which subtopics you excel in</li>
                    <li>• Which Bloom's Taxonomy levels need reinforcement</li>
                    <li>• Your learning pace and preferred content format</li>
                    <li>• Common misconceptions or knowledge gaps</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">🎯</span> Dynamic Content Generation
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                    For each course component (Battery, Starting System, etc.), subtopics are dynamically personalized:
                    </p>
                    <div className="mt-4 space-y-3">
                    <div className="bg-gray-200/50 rounded-lg p-4">
                      <p className="font-semibold mb-1 text-gray-900">If you score well (Easy → Medium)</p>
                      <p className="text-sm text-gray-700">Content advances to more complex applications and analysis</p>
                    </div>
                    <div className="bg-gray-200/50 rounded-lg p-4">
                      <p className="font-semibold mb-1 text-gray-900">If you struggle (Medium → Easy)</p>
                      <p className="text-sm text-gray-700">System provides foundational reviews with more examples</p>
                    </div>
                    <div className="bg-gray-200/50 rounded-lg p-4">
                      <p className="font-semibold mb-1 text-gray-900">If you master concepts (Medium → Hard)</p>
                      <p className="text-sm text-gray-700">Advanced challenges and real-world problem-solving scenarios</p>
                    </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900">
                    <span className="text-2xl">🔄</span> Continuous Adaptation
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                    The personalization engine continuously learns from your interactions, updating your learning path in real-time. As you progress through modules, your personalized profile becomes more accurate, delivering increasingly relevant content.
                    </p>
                  </div>
                  </div>
                </div>


                {/* Example Scenario */}
                <div className="bg-linear-to-br from-black-50 to-black-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Example: Personalized Learning Journey</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                        M1
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Module: Battery System</h4>
                        <p className="text-gray-600 text-sm">
                          <strong>Subtopics:</strong> Battery Types, Charging Methods, Maintenance, Troubleshooting
                        </p>
                      </div>
                    </div>

                    <div className="ml-14 space-y-3 border-l-2 border-gray-300 pl-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm font-semibold mb-1">Quiz Result: 85% on Battery Types (Easy)</p>
                        <p className="text-xs text-gray-600">✅ System Action: Advance to Medium difficulty for this subtopic</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm font-semibold mb-1">Quiz Result: 60% on Charging Methods (Medium)</p>
                        <p className="text-xs text-gray-600">⚠️ System Action: Provide additional Easy-level content with more examples</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm font-semibold mb-1">Next Quiz: Personalized Mix</p>
                        <p className="text-xs text-gray-600">🎯 Battery Types (Medium), Charging Methods (Easy with scaffolding)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="px-6 py-16 max-w-7xl mx-auto ">
        <div className="bg-gradient-to-r text-white rounded-2xl p-12 text-center" style={{ backgroundImage: "linear-gradient(to right, #c3bebb, #cbbfb7)" }}>
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className=" text-lg mb-8 max-w-2xl mx-auto text-white">
        Begin your personalized learning experience with AI-powered assessments and adaptive content tailored just for you.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        Enroll in Course 3
          </button>
        </div>
      </section> */}
      <section className="px-6 py-16 max-w-7xl mx-auto ">
         <div className="bg-[#c3bebb] text-black rounded-3xl p-12 text-center shadow-2xl shadow-[#c3bebb]/40 relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
           <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
           <h2 className="text-4xl font-bold mb-4">Start Your Technical Career</h2>
           <p className="text-lg mb-8 max-w-2xl mx-auto font-medium opacity-80">
             Join the course designed for the modern automotive world. 80% practical training, 100% focused on your success.
           </p>
           <button className="bg-black text-white px-12 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
             Enroll in Course 3 Today
           </button>
         </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12" style={{ backgroundColor: "#c3bebb" }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black-400">© 2025-26 Teachus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


// J#H$tTM!8cQ!g7T








