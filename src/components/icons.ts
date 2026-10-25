// Single registry of the icons allowed in content files (keeps content typed: icon: 'Heart').

import { createElement } from 'react'
import {
  Activity, Ambulance, Apple, ArrowDown, ArrowUp, Baby, Ban, Bandage, Bone, BookOpen, Box, Brain, Cable,
  Calculator, CircleCheck, CircleDot, CircleX, ClipboardCheck, ClipboardList, Clock, Droplet, Droplets, Ear, Eye,
  FileText, FlaskConical, Footprints, Gauge, GitBranch, Hand, Heart, HeartPulse, Hospital, Info, Layers, Lightbulb,
  ListChecks, Microscope, Monitor, Package, Pill, Pipette, RefreshCw, Repeat, Route, Ruler, Scale, Scissors,
  ShieldAlert, ShieldCheck, Siren, Sticker, Stethoscope, Syringe, Tag, Target, TestTube, TestTubes, Thermometer,
  Timer, Trash2, TriangleAlert, User, Users, Utensils, Waves, Wind, Workflow, Zap,
  type LucideProps,
} from 'lucide-react'

export const ICONS = {
  Activity, Ambulance, Apple, ArrowDown, ArrowUp, Baby, Ban, Bandage, Bone, BookOpen, Box, Brain, Cable,
  Calculator, CircleCheck, CircleDot, CircleX, ClipboardCheck, ClipboardList, Clock, Droplet, Droplets, Ear, Eye,
  FileText, FlaskConical, Footprints, Gauge, GitBranch, Hand, Heart, HeartPulse, Hospital, Info, Layers, Lightbulb,
  ListChecks, Microscope, Monitor, Package, Pill, Pipette, RefreshCw, Repeat, Route, Ruler, Scale, Scissors,
  ShieldAlert, ShieldCheck, Siren, Sticker, Stethoscope, Syringe, Tag, Target, TestTube, TestTubes, Thermometer,
  Timer, Trash2, TriangleAlert, User, Users, Utensils, Waves, Wind, Workflow, Zap,
} as const

export type IconName = keyof typeof ICONS

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  return createElement(ICONS[name], { strokeWidth: 2.2, 'aria-hidden': true, ...props })
}
