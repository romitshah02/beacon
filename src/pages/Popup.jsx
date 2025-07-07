import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  HelpCircle, 
  User, 
  BookOpen, 
  Globe, 
  Volume2, 
  Palette, 
  Star,
  ChevronRight,
  Play,
  Pause,
  Square,
  Type,
  Eye,
  Languages,
  Mic,
  Save,
  Loader2,
  Sparkles,
  Zap,
  Moon,
  Sun,
  Monitor,
  FileText,
  Bookmark,
  Share2,
  Download,
  Upload,
  Trash2,
  Edit3,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Lock,
  Unlock,
  Bell,
  BellOff,
  Shield,
  ShieldOff,
  Database,
  Cloud,
  Wifi,
  WifiOff,
  Smartphone,
  Tablet,
  Monitor as Desktop,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import ReadingToolsPanel from '../components/ReadingToolsPanel';
import TranslationPanel from '../components/TranslationPanel';
import TTSPanel from '../components/TTSPanel';
import LayoutPanel from '../components/LayoutPanel';
import HighlightsPanel from '../components/HighlightsPanel';
import PreferencesPanel from '../components/PreferencesPanel';
import "./Popup.css";

// Enhanced tab configuration with sub-menus
const tabs = [
  { 
    id: 'reading', 
    label: 'Reading Tools', 
    icon: BookOpen,
    subMenus: [
      { id: 'dyslexia', label: 'Dyslexia Font', icon: Type, description: 'Use OpenDyslexic font' },
      { id: 'focus', label: 'Line Focus', icon: Eye, description: 'Highlight current line' },
      { id: 'spacing', label: 'Text Spacing', icon: Zap, description: 'Adjust word and letter spacing' },
      { id: 'themes', label: 'Color Themes', icon: Palette, description: 'Choose reading themes' },
      { id: 'simplify', label: 'Text Simplification', icon: Sparkles, description: 'Simplify complex text' }
    ]
  },
  { 
    id: 'translation', 
    label: 'Translation', 
    icon: Globe,
    subMenus: [
      { id: 'live', label: 'Live Translation', icon: Wifi, description: 'Auto-translate selected text' },
      { id: 'manual', label: 'Manual Translation', icon: Edit3, description: 'Translate specific text' },
      { id: 'languages', label: 'Language Settings', icon: Languages, description: 'Configure languages' }
    ]
  },
  { 
    id: 'tts', 
    label: 'Text-to-Speech', 
    icon: Volume2,
    subMenus: [
      { id: 'playback', label: 'Playback Controls', icon: Play, description: 'Control TTS playback' },
      { id: 'voice', label: 'Voice Settings', icon: Mic, description: 'Choose voice and speed' },
      { id: 'highlighting', label: 'Word Highlighting', icon: Eye, description: 'Highlight words as spoken' }
    ]
  },
  { 
    id: 'layout', 
    label: 'Layout & Font', 
    icon: Palette,
    subMenus: [
      { id: 'fonts', label: 'Font Selection', icon: Type, description: 'Choose reading fonts' },
      { id: 'sizing', label: 'Font Sizing', icon: ZoomIn, description: 'Adjust font size' },
      { id: 'display', label: 'Display Options', icon: Monitor, description: 'Screen and layout settings' }
    ]
  },
  { 
    id: 'highlights', 
    label: 'Saved Highlights', 
    icon: Star,
    subMenus: [
      { id: 'view', label: 'View Highlights', icon: Bookmark, description: 'Browse saved highlights' },
      { id: 'export', label: 'Export Data', icon: Download, description: 'Export highlights and notes' },
      { id: 'manage', label: 'Manage Data', icon: Edit3, description: 'Edit and organize highlights' }
    ]
  },
  { 
    id: 'preferences', 
    label: 'Preferences', 
    icon: Settings,
    subMenus: [
      { id: 'general', label: 'General Settings', icon: Settings, description: 'Basic preferences' },
      { id: 'privacy', label: 'Privacy & Security', icon: Shield, description: 'Privacy and security settings' },
      { id: 'sync', label: 'Sync & Backup', icon: Cloud, description: 'Data synchronization' },
      { id: 'accessibility', label: 'Accessibility', icon: Eye, description: 'Accessibility features' }
    ]
  },
];

export default function Popup() {
  const [activeTab, setActiveTab] = useState('reading');
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [settings, setSettings] = useState({
    // Reading tools
    dyslexiaFont: false,
    textSimplification: false,
    lineFocusMode: false,
    wordSpacing: 1.2,
    letterSpacing: 1.1,
    colorTheme: 'light',
    
    // Translation
    sourceLanguage: 'auto',
    targetLanguage: 'en',
    liveTranslation: false,
    
    // TTS
    ttsEnabled: false,
    ttsSpeed: 1.0,
    ttsVoice: 'default',
    wordHighlighting: true,
    
    // Layout
    selectedFont: 'lexend',
    fontSize: 16,
    
    // General
    autoSave: true,
    privacyMode: false,
    
    // New settings for additional features
    darkMode: false,
    autoSync: true,
    notifications: true,
    dataRetention: 30,
    exportFormat: 'json',
    highlightColor: '#ffeb3b',
    readingProgress: true,
    pageBreaks: false,
    marginSize: 'medium',
    lineHeight: 1.5,
    paragraphSpacing: 1.2,
    textAlignment: 'left',
    readingMode: 'scroll',
    zoomLevel: 100,
    contrastMode: false,
    reduceMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    voiceCommands: false,
    gestureControls: false,
    autoScroll: false,
    scrollSpeed: 1,
    bookmarkSync: true,
    readingStats: true,
    distractionFree: false,
    focusTimer: 25,
    breakTimer: 5,
    readingGoals: false,
    dailyGoal: 30,
    weeklyGoal: 200,
    readingStreak: 0,
    totalReadingTime: 0,
    booksRead: 0,
    pagesRead: 0,
    averageSpeed: 0,
    comprehensionScore: 0,
    vocabularyLevel: 'intermediate',
    readingLevel: 'grade8',
    customThemes: [],
    savedSearches: [],
    readingLists: [],
    annotations: [],
    notes: [],
    tags: [],
    categories: [],
    favorites: [],
    recentlyRead: [],
    recommendations: [],
    readingChallenges: [],
    achievements: [],
    badges: [],
    points: 0,
    level: 1,
    experience: 0,
    nextLevel: 100,
    profile: {
      name: 'Reader',
      avatar: null,
      bio: '',
      preferences: {},
      stats: {},
      goals: {},
      achievements: []
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [ttsState, setTtsState] = useState('stopped'); // stopped, playing, paused

  // Load settings from storage on mount
  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.get(['beaconSettings'], (result) => {
        if (result.beaconSettings) {
          setSettings(result.beaconSettings);
        }
      });
    } else {
      console.warn('chrome.storage.sync is not available');
    }
  }, []);

  // Save settings to storage
  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ beaconSettings: newSettings });
    } else {
      console.warn('chrome.storage.sync is not available');
    }
  };

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
  };

  // API call wrapper
  const apiCall = async (endpoint, data) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual backend URL
      const response = await fetch(`https://api.beacon-extension.com/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return { error: 'Service temporarily unavailable' };
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced functionality handlers
  const handleSubMenuClick = (subMenuId) => {
    setActiveSubMenu(subMenuId);
    
    // Implement specific functionality for each sub-menu
    switch (subMenuId) {
      case 'dyslexia':
        updateSetting('dyslexiaFont', !settings.dyslexiaFont);
        break;
      case 'focus':
        updateSetting('lineFocusMode', !settings.lineFocusMode);
        break;
      case 'live':
        updateSetting('liveTranslation', !settings.liveTranslation);
        break;
      case 'darkMode':
        updateSetting('darkMode', !settings.darkMode);
        break;
      case 'notifications':
        updateSetting('notifications', !settings.notifications);
        break;
      case 'privacy':
        updateSetting('privacyMode', !settings.privacyMode);
        break;
      case 'autoSync':
        updateSetting('autoSync', !settings.autoSync);
        break;
      case 'readingProgress':
        updateSetting('readingProgress', !settings.readingProgress);
        break;
      case 'distractionFree':
        updateSetting('distractionFree', !settings.distractionFree);
        break;
      case 'readingGoals':
        updateSetting('readingGoals', !settings.readingGoals);
        break;
      case 'voiceCommands':
        updateSetting('voiceCommands', !settings.voiceCommands);
        break;
      case 'gestureControls':
        updateSetting('gestureControls', !settings.gestureControls);
        break;
      case 'autoScroll':
        updateSetting('autoScroll', !settings.autoScroll);
        break;
      case 'bookmarkSync':
        updateSetting('bookmarkSync', !settings.bookmarkSync);
        break;
      case 'readingStats':
        updateSetting('readingStats', !settings.readingStats);
        break;
      case 'contrastMode':
        updateSetting('contrastMode', !settings.contrastMode);
        break;
      case 'reduceMotion':
        updateSetting('reduceMotion', !settings.reduceMotion);
        break;
      case 'screenReader':
        updateSetting('screenReader', !settings.screenReader);
        break;
      case 'keyboardNavigation':
        updateSetting('keyboardNavigation', !settings.keyboardNavigation);
        break;
      default:
        console.log(`Sub-menu ${subMenuId} clicked`);
    }
  };

  // TTS Controls
  const handleTtsControl = (action) => {
    setTtsState(action);
    // Implement actual TTS functionality here
    console.log(`TTS ${action}`);
  };

  // Text simplification (disabled as requested)
  const handleTextSimplification = async () => {
    // This functionality is disabled as requested
    console.log('Text simplification is disabled');
  };

  return (
    <div className="w-[380px] h-[600px] bg-[#F5E9DA] font-lexend text-neutral-800 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-[#e2c9b0] overflow-hidden">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between w-full p-4 border-b border-[#e2c9b0] bg-gradient-to-r from-[#f7e6c4] to-[#f5e9da] rounded-t-2xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#b08968] rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-[#7c5e3c]">Beacon</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg hover:bg-[#f7e6c4] transition-colors" title="Settings" aria-label="Settings">
            <Settings className="w-4 h-4 text-[#b08968]" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#f7e6c4] transition-colors" title="Help" aria-label="Help">
            <HelpCircle className="w-4 h-4 text-[#b08968]" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#f7e6c4] transition-colors" title="Profile" aria-label="Profile">
            <User className="w-4 h-4 text-[#b08968]" />
          </button>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex w-full border-b border-[#e2c9b0] bg-[#f7e6c4] overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveSubMenu(null);
              }}
              className={`flex-shrink-0 flex flex-col items-center py-3 px-2 text-xs font-medium transition-all duration-200 min-w-[80px] ${
                activeTab === tab.id
                  ? 'text-[#7c5e3c] bg-[#f5e9da] border-b-2 border-[#b08968]'
                  : 'text-[#b08968] hover:text-[#7c5e3c] hover:bg-[#f5e9da]'
              }`}
              aria-label={tab.label}
            >
              <Icon className="w-4 h-4 mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area - Enhanced with better scrolling */}
      <div className="flex-1 w-full min-h-0 overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#e2c9b0] scrollbar-track-[#f5e9da]">
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 w-full max-w-[340px] mx-auto"
              >
                {/* Sub-menu Navigation */}
                {activeSubMenu === null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <h3 className="text-lg font-semibold text-[#7c5e3c] mb-4">
                      {tabs.find(tab => tab.id === activeTab)?.label}
                    </h3>
                    {tabs.find(tab => tab.id === activeTab)?.subMenus.map((subMenu, index) => {
                      const SubIcon = subMenu.icon;
                      return (
                        <motion.button
                          key={subMenu.id}
                          onClick={() => handleSubMenuClick(subMenu.id)}
                          className="w-full bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 text-left group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#b08968] to-[#8b6b4a] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <SubIcon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium text-neutral-800">{subMenu.label}</h4>
                                <p className="text-sm text-neutral-600">{subMenu.description}</p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}

                {/* Sub-menu Content */}
                {activeSubMenu && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <button
                      onClick={() => setActiveSubMenu(null)}
                      className="flex items-center space-x-2 text-[#b08968] hover:text-[#7c5e3c] transition-colors mb-4"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      <span>Back to {tabs.find(tab => tab.id === activeTab)?.label}</span>
                    </button>
                    
                    {/* Render specific sub-menu content */}
                    {activeTab === 'reading' && (
                      <ReadingToolsPanel 
                        settings={settings} 
                        updateSetting={updateSetting}
                        onTextSimplification={handleTextSimplification}
                        isLoading={isLoading}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                    {activeTab === 'translation' && (
                      <TranslationPanel 
                        settings={settings} 
                        updateSetting={updateSetting}
                        isLoading={isLoading}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                    {activeTab === 'tts' && (
                      <TTSPanel 
                        settings={settings} 
                        updateSetting={updateSetting}
                        ttsState={ttsState}
                        onTtsControl={handleTtsControl}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                    {activeTab === 'layout' && (
                      <LayoutPanel 
                        settings={settings} 
                        updateSetting={updateSetting}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                    {activeTab === 'highlights' && (
                      <HighlightsPanel 
                        settings={settings}
                        updateSetting={updateSetting}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                    {activeTab === 'preferences' && (
                      <PreferencesPanel 
                        settings={settings} 
                        updateSetting={updateSetting}
                        activeSubMenu={activeSubMenu}
                      />
                    )}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Toggle Switch Component
function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
        checked ? 'bg-primary-500' : 'bg-neutral-300'
      }`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
