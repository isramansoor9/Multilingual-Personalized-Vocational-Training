"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Lock,
  Target,
} from "lucide-react";

type SectionType = "theory" | "practical";

interface Subtopic {
  id: string;
  title: string;
}

interface Topic {
  id: string;
  title: string;
  theory: Subtopic[];
  practical: Subtopic[];
}

interface FlatSubtopic extends Subtopic {
  topicId: string;
  topicTitle: string;
  globalIndex: number;
  section: SectionType;
}

// Course 2 curriculum (from Course_2 array)
const topics: Topic[] = [
  {
    id: "1",
    title: "Introduction to Auto Electrician Basics",
    theory: [
      { id: "1.1", title: "Safety Precautions general and auto electrician shop Firefighting, First aid, Environmental protection, Reasons for workshop accidents Possible causes of accidents in workshop and their safety precautions" },
      { id: "1.2", title: "First aid" },
      { id: "1.3", title: "Environmental protection" },
      { id: "1.4", title: "Reasons for workshop accidents, Possible causes of accidents in workshop and their safety precautions" },
      { id: "1.5", title: "Introduction to hand tools & equipment used in auto electrician" },
      { id: "1.6", title: "Measuring tools (vernier caliper, feeler gauge)" },
      { id: "1.7", title: "Introduction to Auto motive four stroke engine" },
      { id: "1.8", title: "Basic electricity. (Atomic structure of matter and electricity)" },
      { id: "1.9", title: "Conductor, insulator, semi conductor" },
      { id: "1.10", title: "Current, voltage and resistance" },
      { id: "1.11", title: "Ohm's law" },
      { id: "1.12", title: "Symbols used in electrical wiring" },
      { id: "1.13", title: "Series and parallel circuits" },
      { id: "1.14", title: "Electric circuit problems" },
      { id: "1.15", title: "Magnet, magnetism and electromagnet" },
      { id: "1.16", title: "Relays, solenoid, printed, circuits, circuit breaker," },
      { id: "1.17", title: "fuse, types of bulb, terminals and switches." },
      { id: "1.18", title: "Diodes and transistors" },
      { id: "1.19", title: "PNP & NPN type semiconductor's" },
      { id: "1.20", title: "Thermistor" },
      { id: "1.21", title: "Logic Gates" },
      { id: "1.22", title: "Sensors and actuators" },
      { id: "1.23", title: "Purpose, Construction and types of battery" },
      { id: "1.24", title: "Charging and discharging of battery" },
      { id: "1.25", title: "Battery rating" },
    ],
    practical: [
      { id: "P1.1", title: "Use of fire extinguisher" },
      { id: "P1.2", title: "Measurement with vernier caliper" },
      { id: "P1.3", title: "Measurement with wire gauge" },
      { id: "P1.4", title: "Soldering (eye joint, lap joint, T Joint)" },
      { id: "P1.5", title: "Use of Multimeter" },
      { id: "P1.6", title: "Crimp connecting" },
      { id: "P1.7", title: "Making test lamp" },
      { id: "P1.8", title: "Studying characteristics of magnets" },
      { id: "P1.9", title: "Interpret wiring diagram and color coding" },
      { id: "P1.10", title: "Making Series and parallel circuits" },
      { id: "P1.11", title: "Check fuse, switch, diode, and transistor" },
      { id: "P1.12", title: "Prepare full wave rectifier" },
      { id: "P1.13", title: "Make Different Logic gate circuits" },
      { id: "P1.14", title: "Checking different ICs" },
      { id: "P1.15", title: "Identify parts of four stroke engine Identification of battery parts" },
      { id: "P1.16", title: "Cleaning and topping up" },
      { id: "P1.17", title: "Checking specific gravity" },
      { id: "P1.18", title: "Battery charging" },
      { id: "P1.19", title: "Preparation of electrolyte" },
      { id: "P1.20", title: "Light load test" },
      { id: "P1.21", title: "Trouble shooting (under charging & overcharging)" },
    ],
  },
  {
    id: "2",
    title: "Starting System of Vehicle",
    theory: [
      { id: "2.1", title: "Describe the Purpose, Principle and Construction of starter motor" },
      { id: "2.2", title: "Operation of solenoid switch and motor" },
      { id: "2.3", title: "Neutral safety switch" },
    ],
    practical: [
      { id: "P2.1", title: "Wiring up starting circuit" },
      { id: "P2.2", title: "Dismantling, checking of starter motor" },
      { id: "P2.3", title: "Starter motor components, assembling, performance checking" },
      { id: "P2.4", title: "Trouble shooting their possible causes and remedies of starting system" },
    ],
  },
  {
    id: "3",
    title: "Charging System of Vehicle",
    theory: [
      { id: "3.1", title: "Purpose, circuit diagram and Function of Charging Systems" },
      { id: "3.2", title: "Function, construction and operation of alternator" },
      { id: "3.3", title: "Construction and operation of double point voltage regulator" },
      { id: "3.4", title: "Electronic regulators" },
    ],
    practical: [
      { id: "P3.1", title: "Wiring up Charging circuit on wiring board" },
      { id: "P3.2", title: "Charging system inspection & diagnosing" },
      { id: "P3.3", title: "Adjusting alternator belt tension" },
      { id: "P3.4", title: "dismantling, checking and inspection, assembling, of Alternator" },
      { id: "P3.5", title: "Checking output of alternator" },
      { id: "P3.6", title: "Replacing carbon brush" },
      { id: "P3.7", title: "Trouble shooting their possible causes and remedies of charging system" },
    ],
  },
  {
    id: "4",
    title: "Ignition System of Vehicle",
    theory: [
      { id: "4.1", title: "Purpose & types of ignition system" },
      { id: "4.2", title: "Construction of conventional ignition system" },
      { id: "4.3", title: "Ignition switch, Ignition coil, Distributor, Spark plug and its types" },
      { id: "4.4", title: "Capacitor discharge ignition" },
      { id: "4.5", title: "Pickup coil type ignition" },
      { id: "4.6", title: "Multiple coil and distribute less ignition" },
      { id: "4.7", title: "Firing order" },
      { id: "4.8", title: "Ignition timing" },
    ],
    practical: [
      { id: "P4.1", title: "Wiring of conventional ignition system" },
      { id: "P4.2", title: "Replacing C.B points" },
      { id: "P4.3", title: "Setting ignition timing" },
      { id: "P4.4", title: "Use of timing light" },
      { id: "P4.5", title: "Checking of ignition system" },
      { id: "P4.6", title: "Components as ignition coil" },
      { id: "P4.7", title: "Condenser advance mechanism" },
      { id: "P4.8", title: "Servicing of spark plug" },
      { id: "P4.9", title: "Checking & wiring up CDI system components" },
      { id: "P4.10", title: "Trouble shooting their possible causes and remedies of ignition system" },
    ],
  },
  {
    id: "5",
    title: "Wiring Circuits and Accessories",
    theory: [
      { id: "5.1", title: "Purpose and construction of Horn circuit, Head lamps circuit, other lights" },
      { id: "5.2", title: "Wind shield wipers/washers circuit" },
      { id: "5.3", title: "Power windows" },
      { id: "5.4", title: "Electric power steering" },
      { id: "5.5", title: "Instrument panel gauges, meters, indicators" },
      { id: "5.6", title: "Introduction to EFI system components (Sensors, ECM & Actuators)" },
      { id: "5.7", title: "Introduction to electronic engine controls" },
    ],
    practical: [
      { id: "P5.1", title: "Wiring up Head lamp circuit" },
      { id: "P5.2", title: "Replacing fuses, switches and blubs" },
      { id: "P5.3", title: "Head lamp aiming" },
      { id: "P5.4", title: "Wiring up Parking light circuit" },
      { id: "P5.5", title: "Wiring up Indicator circuit & Hazard warning circuit" },
      { id: "P5.6", title: "Wiring up Brake & backup light circuit" },
      { id: "P5.7", title: "Wiring up Door and roof light circuit" },
      { id: "P5.8", title: "Wiring up Horn circuit" },
      { id: "P5.9", title: "Wiring up wind shield wiper and washer circuit" },
      { id: "P5.10", title: "Glow plug circuit and checking" },
      { id: "P5.11", title: "Wiring up gauge circuits (Fuel, Temperature, oil pressure)" },
      { id: "P5.12", title: "Parts identification and finding resistance of EFI components" },
      { id: "P5.13", title: "Removing & refitting of different sensors & vales used in EFI system" },
      { id: "P5.14", title: "Dismantling, Servicing & Reassembling different sensors & valves of EFI System" },
      { id: "P5.15", title: "Removing, Servicing & refitting EFI fuel feed pump" },
      { id: "P5.16", title: "Fault diagnosing in EFI System of different vehicles" },
    ],
  },
  {
    id: "6",
    title: "Vehicle Air Conditioning and Heating System",
    theory: [
      { id: "6.1", title: "Ventilating, Heating, Dehumidifying and Defrosting function of vehicle" },
      { id: "6.2", title: "Components & the working principle of Air conditioner(AC)" },
      { id: "6.3", title: "Working of thermostats switch & Compressor clutch of AC" },
      { id: "6.4", title: "Gas charging of compressor" },
      { id: "6.5", title: "Automatic temperature control" },
      { id: "6.6", title: "Trouble shooting its possible causes and their remedies of Heating system" },
      { id: "6.7", title: "Trouble shooting its possible causes and their remedies of Air conditioner" },
    ],
    practical: [
      { id: "P6.1", title: "Removing inspecting & installation of AC compressor" },
      { id: "P6.2", title: "Servicing of Air conditioner" },
      { id: "P6.3", title: "Gas charging of Air conditioner" },
      { id: "P6.4", title: "Servicing of Vehicle Heater" },
    ],
  },
  {
    id: "7",
    title: "Hybrid & Electric Vehicles",
    theory: [
      { id: "7.1", title: "Introduction to hybrid and electric vehicles" },
      { id: "7.2", title: "Types of Hybrid systems" },
      { id: "7.3", title: "Degree of hybridization" },
      { id: "7.4", title: "Charging system & Hybrid vehicle drive train" },
      { id: "7.5", title: "Plug in hybrid and electric vehicles" },
    ],
    practical: [
      { id: "P7.1", title: "Parts identification of hybrid vehicle" },
      { id: "P7.2", title: "Identification of hybrid vehicle electronic controls" },
      { id: "P7.3", title: "Parts identification of electric vehicle" },
    ],
  },
];

function buildFlatList(data: Topic[]): FlatSubtopic[] {
  const list: FlatSubtopic[] = [];
  let index = 0;

  data.forEach((topic) => {
    topic.theory.forEach((sub) => {
      list.push({
        ...sub,
        topicId: topic.id,
        topicTitle: topic.title,
        globalIndex: index++,
        section: "theory",
      });
    });
    topic.practical.forEach((sub) => {
      list.push({
        ...sub,
        topicId: topic.id,
        topicTitle: topic.title,
        globalIndex: index++,
        section: "practical",
      });
    });
  });

  return list;
}

export default function Course2LearnPage() {
  const router = useRouter();

  const flatSubtopics = useMemo(() => buildFlatList(topics), []);

  // Unlock / completion state (placeholder logic for now)
  const [maxUnlockedIndex, setMaxUnlockedIndex] = useState<number>(0);
  const [completed, setCompleted] = useState<Set<number>>(() => new Set());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Topic & section dropdown states
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    topics.forEach((t, i) => {
      initial[t.id] = i === 0; // open first topic by default
    });
    return initial;
  });

  const [openTheory, setOpenTheory] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    topics.forEach((t, i) => {
      initial[t.id] = i === 0; // open first topic's theory
    });
    return initial;
  });

  const [openPractical, setOpenPractical] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!flatSubtopics.length) return;

    setCompleted((prev) => {
      if (prev.has(currentIndex)) return prev;
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });

    setMaxUnlockedIndex((prev) => {
      if (currentIndex === prev && prev < flatSubtopics.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, [currentIndex, flatSubtopics.length]);

  const isLocked = (index: number): boolean => index > maxUnlockedIndex;

  const toggleTopic = (id: string) => {
    setOpenTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTheory = (id: string) => {
    setOpenTheory((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePractical = (id: string) => {
    setOpenPractical((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation (same feel as course2) */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Course 2</p>
              <p className="text-sm font-bold text-gray-900">Auto Electrician Curriculum</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/course2")}
            className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Overview
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 pt-12 pb-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Target className="w-5 h-5 text-gray-700" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
            Structured Learning Path
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Course 2 – Curriculum Explorer
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
          Browse the full Auto Electrician (6-Month) curriculum. Start with the topic names,
          then expand each topic to reveal theory and practical subtopics. Only the first
          subtopic is unlocked at the beginning; subsequent subtopics unlock as you progress.
        </p>
      </header>

      {/* Main content: accordion-style topics */}
      <main className="px-6 pb-16 max-w-7xl mx-auto">
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <BookOpen className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Topics Overview</h2>
          </div>

          <div className="space-y-4">
            {topics.map((topic) => {
              const open = openTopics[topic.id];

              return (
                <div
                  key={topic.id}
                  className="border border-gray-200 rounded-xl bg-gray-50/80 overflow-hidden transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Topic header (dropdown trigger) */}
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full flex items-center justify-between px-4 py-3 md:px-5 md:py-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                        Topic {topic.id}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-gray-900">
                        {topic.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Topic body */}
                  {open && (
                    <div className="px-4 pb-4 md:px-5 md:pb-5 space-y-3 bg-gray-50">
                      {/* Theory dropdown */}
                      <div className="border border-gray-200 rounded-lg bg-white/70">
                        <button
                          type="button"
                          onClick={() => toggleTheory(topic.id)}
                          className="w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
                              Theory
                            </span>
                            <span className="text-[11px] text-gray-400">
                              {topic.theory.length} subtopics
                            </span>
                          </div>
                          {openTheory[topic.id] ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                        </button>

                        {openTheory[topic.id] && (
                          <ul className="px-3 pb-2 md:px-4 md:pb-3 space-y-1.5">
                            {topic.theory.map((sub, index) => {
                              const flat = flatSubtopics.find(
                                (f) =>
                                  f.id === sub.id &&
                                  f.topicId === topic.id &&
                                  f.section === "theory"
                              );
                              if (!flat) return null;

                              const locked = isLocked(flat.globalIndex);
                              const done = completed.has(flat.globalIndex);
                              const isCurrent = currentIndex === flat.globalIndex;

                              const label = `T${topic.id}.${index + 1}`;

                              let textClass = "flex-1 truncate text-sm";
                              if (locked) textClass += " text-gray-400";
                              else if (isCurrent) textClass += " text-gray-900 font-semibold";
                              else textClass += " text-gray-700";

                              return (
                                <li key={sub.id}>
                                  <button
                                    type="button"
                                    disabled={locked}
                                    onClick={() => !locked && setCurrentIndex(flat.globalIndex)}
                                    className={`w-full flex items-center gap-2 rounded-md px-2 py-1 text-left transition-colors ${
                                      locked
                                        ? "cursor-not-allowed bg-white"
                                        : "cursor-pointer hover:bg-gray-100"
                                    }`}
                                  >
                                    <span className="text-[10px] font-mono font-semibold text-gray-500 w-16">
                                      {label}
                                    </span>
                                    <span className={textClass}>{sub.title}</span>
                                    <span className="flex-shrink-0">
                                      {done && !locked && (
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                      )}
                                      {!done && locked && (
                                        <Lock className="w-3.5 h-3.5 text-gray-300" />
                                      )}
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>

                      {/* Practical dropdown */}
                      <div className="border border-gray-200 rounded-lg bg-white/70">
                        <button
                          type="button"
                          onClick={() => togglePractical(topic.id)}
                          className="w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
                              Practical
                            </span>
                            <span className="text-[11px] text-gray-400">
                              {topic.practical.length} subtopics
                            </span>
                          </div>
                          {openPractical[topic.id] ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                        </button>

                        {openPractical[topic.id] && (
                          <ul className="px-3 pb-2 md:px-4 md:pb-3 space-y-1.5">
                            {topic.practical.map((sub, index) => {
                              const flat = flatSubtopics.find(
                                (f) =>
                                  f.id === sub.id &&
                                  f.topicId === topic.id &&
                                  f.section === "practical"
                              );
                              if (!flat) return null;

                              const locked = isLocked(flat.globalIndex);
                              const done = completed.has(flat.globalIndex);
                              const isCurrent = currentIndex === flat.globalIndex;

                              const label = `P${topic.id}.${index + 1}`;

                              let textClass = "flex-1 truncate text-sm";
                              if (locked) textClass += " text-gray-400";
                              else if (isCurrent) textClass += " text-gray-900 font-semibold";
                              else textClass += " text-gray-700";

                              return (
                                <li key={sub.id}>
                                  <button
                                    type="button"
                                    disabled={locked}
                                    onClick={() => !locked && setCurrentIndex(flat.globalIndex)}
                                    className={`w-full flex items-center gap-2 rounded-md px-2 py-1 text-left transition-colors ${
                                      locked
                                        ? "cursor-not-allowed bg-white"
                                        : "cursor-pointer hover:bg-gray-100"
                                    }`}
                                  >
                                    <span className="text-[10px] font-mono font-semibold text-gray-500 w-16">
                                      {label}
                                    </span>
                                    <span className={textClass}>{sub.title}</span>
                                    <span className="flex-shrink-0">
                                      {done && !locked && (
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                      )}
                                      {!done && locked && (
                                        <Lock className="w-3.5 h-3.5 text-gray-300" />
                                      )}
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

