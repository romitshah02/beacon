import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Volume2, 
  Play, 
  Pause, 
  Square, 
  Mic,
  Settings,
  Loader2,
  Eye,
  ChevronRight,
  Zap,
  RotateCcw,
  Save,
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
  Info,
  BookOpen,
  Bookmark,
  Share2,
  FileText,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Copy,
  Link,
  ExternalLink,
  Settings as SettingsIcon,
  HelpCircle,
  User,
  LogOut,
  Plus,
  Minus,
  X,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Home,
  Menu,
  MoreHorizontal,
  MoreVertical,
  RefreshCw,
  RefreshCcw,
  Power,
  PowerOff,
  Volume,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  Mic as MicIcon,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  File,
  Folder,
  FolderOpen,
  HardDrive,
  Server,
  Database as Db,
  Key,
  KeyRound,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldX,
  AlertCircle,
  AlertTriangle as Warning,
  Info as InfoIcon,
  HelpCircle as Help,
  Lightbulb,
  Zap as Lightning,
  Sun,
  Moon,
  Monitor,
  Smartphone as Phone,
  Tablet as Tab,
  Watch,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Projector,
  Printer,
  Scanner,
  Fax,
  Phone as PhoneIcon,
  Mail,
  MessageSquare,
  MessageCircle as Message,
  Send,
  Inbox,
  Archive,
  Trash,
  Trash2 as Delete,
  Edit,
  Edit2,
  Edit3 as EditIcon,
  PenTool,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Quote,
  List as ListIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  Link as LinkIcon,
  Unlink,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  File as FileIcon,
  Folder as FolderIcon,
  Paperclip,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  ExternalLink as External,
  Copy as CopyIcon,
  Scissors,
  RotateCw as RotateCwIcon,
  RotateCcw as Rotate,
  Move,
  Crop,
  Filter as FilterIcon,
  Sliders,
  Settings as SettingsIcon2,
  Tool,
  Wrench,
  Hammer,
  Screwdriver,
  Cog,
  Cogs,
  Gear,
  Sliders as SlidersIcon,
  ToggleLeft,
  ToggleRight,
  CheckSquare,
  Square as SquareIcon,
  Circle,
  Minus as MinusIcon,
  Plus as PlusIcon,
  X as XIcon,
  Divide,
  Percent,
  Hash,
  AtSign,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  CreditCard,
  Wallet,
  ShoppingCart,
  ShoppingBag,
  Gift,
  Package,
  Box,
  Archive as ArchiveIcon,
  Book as BookIcon,
  BookOpen as BookOpenIcon,
  Bookmark as BookmarkIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Map,
  MapPin,
  Navigation,
  Compass,
  Globe,
  Flag,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Eye as EyeIcon,
  EyeOff,
  Ear,
  EarOff,
  Nose,
  Mouth,
  Hand,
  HandOff,
  Foot,
  Arm,
  Leg,
  Head,
  Brain,
  Heart as HeartIcon2,
  Lungs,
  Stomach,
  Liver,
  Kidney,
  Bone,
  Muscle,
  Skin,
  Hair,
  Tooth,
  Tongue,
  Throat,
  Neck,
  Shoulder,
  Elbow,
  Wrist,
  Finger,
  Thumb,
  Toe,
  Knee,
  Ankle,
  Hip,
  Back,
  Chest,
  Belly,
  Butt,
  Penis,
  Vagina,
  Breast,
  Nipple,
  Navel,
  Mole,
  Scar,
  Tattoo,
  Piercing,
  Glasses,
  Sunglasses,
  Hat,
  Cap,
  Helmet,
  Mask,
  Scarf,
  Tie,
  Belt,
  Watch as WatchIcon,
  Bracelet,
  Ring,
  Necklace,
  Earring,
  Glove,
  Sock,
  Shoe,
  Boot,
  Sandal,
  Sneaker,
  Heel,
  Flat,
  Slipper,
  Sock as SockIcon,
  Underwear,
  Bra,
  Panty,
  Boxer,
  Brief,
  Thong,
  GString,
  Corset,
  Garter,
  Stocking,
  Pantyhose,
  Tights,
  Legging,
  Short,
  Pant,
  Jean,
  Trouser,
  Skirt,
  Dress,
  Shirt,
  TShirt,
  Blouse,
  Sweater,
  Jacket,
  Coat,
  Hoodie,
  Sweatshirt,
  Vest,
  Tank,
  Top,
  Blazer,
  Suit,
  Uniform,
  Costume,
  Robe,
  Pajama,
  Nightgown,
  Bathrobe,
  Towel,
  Blanket,
  Pillow,
  Bed,
  Chair,
  Table,
  Desk,
  Shelf,
  Cabinet,
  Drawer,
  Box as BoxIcon,
  Container,
  Bag,
  Backpack,
  Purse,
  Handbag,
  Clutch,
  Tote,
  Duffel,
  Suitcase,
  Briefcase,
  Laptop,
  Computer,
  Monitor as MonitorIcon,
  Keyboard,
  Mouse,
  Mousepad,
  Speaker as SpeakerIcon,
  Headphone,
  Microphone,
  Camera as CameraIcon,
  Video as VideoIcon2,
  Phone as PhoneIcon2,
  Tablet as TabletIcon,
  Watch as WatchIcon2,
  Smartwatch,
  Fitness,
  Scale,
  Thermometer,
  Barometer,
  Hygrometer,
  Anemometer,
  Rain,
  Snow,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Sun as SunIcon,
  Moon as MoonIcon,
  Star as StarIcon2,
  Planet,
  Galaxy,
  Universe,
  Earth,
  Mars,
  Venus,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
  Asteroid,
  Comet,
  Meteor,
  BlackHole,
  Wormhole,
  Time,
  Space,
  Dimension,
  Parallel,
  Multiverse,
  Quantum,
  Atom,
  Molecule,
  Cell,
  DNA,
  Gene,
  Chromosome,
  Protein,
  Enzyme,
  Hormone,
  Vitamin,
  Mineral,
  Nutrient,
  Food,
  Water,
  Air,
  Fire,
  Earth as EarthIcon,
  Metal,
  Wood,
  Stone,
  Crystal,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Pearl,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Plastic,
  Glass,
  Ceramic,
  Paper,
  Cloth,
  Leather,
  Fur,
  Wool,
  Cotton,
  Silk,
  Linen,
  Nylon,
  Polyester,
  Acrylic,
  Rayon,
  Spandex,
  Lycra,
  Velvet,
  Satin,
  Denim,
  Corduroy,
  Flannel,
  Fleece,
  Canvas,
  Burlap,
  Jute,
  Hemp,
  Bamboo,
  Cork,
  Rubber,
  Latex,
  Vinyl,
  Teflon,
  Kevlar,
  Carbon,
  Graphite,
  Silicon,
  Quartz,
  Granite,
  Marble,
  Limestone,
  Sandstone,
  Slate,
  Obsidian,
  Basalt,
  Pumice,
  Scoria,
  Tuff,
  Breccia,
  Conglomerate,
  Shale,
  Clay,
  Silt,
  Sand,
  Gravel,
  Pebble,
  Boulder,
  Rock,
  Mountain,
  Hill,
  Valley,
  Canyon,
  Gorge,
  Ravine,
  Cliff,
  Bluff,
  Ridge,
  Peak,
  Summit,
  Crest,
  Slope,
  Incline,
  Decline,
  Ascent,
  Descent,
  Climb,
  Descend,
  Rise,
  Fall,
  Drop,
  Jump,
  Leap,
  Bounce,
  Spring,
  Float,
  Sink,
  Swim,
  Dive,
  Surf,
  Sail,
  Row,
  Paddle,
  Fish,
  Hunt,
  Gather,
  Farm,
  Plant,
  Grow,
  Water as WaterIcon,
  Fertilize,
  Prune,
  Harvest,
  Pick,
  Pluck,
  Cut,
  Chop,
  Slice,
  Dice,
  Mince,
  Grind,
  Crush,
  Mash,
  Blend,
  Mix,
  Stir,
  Whisk,
  Beat,
  Whip,
  Fold,
  Knead,
  Roll,
  Flatten,
  Shape,
  Mold,
  Form,
  Create,
  Build,
  Construct,
  Assemble,
  Install,
  Mount,
  Attach,
  Connect,
  Join,
  Link as LinkIcon2,
  Bind,
  Tie as TieIcon,
  Knot,
  Loop,
  Hook,
  Clasp,
  Button,
  Zipper,
  Velcro,
  Snap,
  Pin,
  Clip,
  Clamp,
  Screw,
  Nail,
  Bolt,
  Nut,
  Washer,
  Rivet,
  Weld,
  Solder,
  Glue,
  Tape,
  Cement,
  Mortar,
  Brick,
  Block,
  Tile,
  Shingle,
  Plank,
  Board,
  Beam,
  Post,
  Pole,
  Rod,
  Bar,
  Tube,
  Pipe,
  Hose,
  Cable,
  Wire,
  Cord,
  Rope,
  Chain,
  Belt as BeltIcon,
  Strap,
  Band,
  Ribbon,
  String,
  Thread,
  Yarn,
  Fiber,
  Filament,
  Strand,
  Hair as HairIcon,
  Fur as FurIcon,
  Feather,
  Scale as ScaleIcon,
  Shell,
  Bark,
  Leaf,
  Petal,
  Stem,
  Root,
  Branch,
  Twig,
  Sprout,
  Seed,
  Bulb,
  Tuber,
  Rhizome,
  Spore,
  Pollen,
  Nectar,
  Sap,
  Resin,
  Latex as LatexIcon,
  Oil,
  Fat,
  Protein as ProteinIcon,
  Carbohydrate,
  Sugar,
  Starch,
  Fiber as FiberIcon,
  Fat as FatIcon,
  Cholesterol,
  Sodium,
  Potassium,
  Calcium,
  Iron as IronIcon,
  Zinc,
  Magnesium,
  Phosphorus,
  Selenium,
  Iodine,
  Fluoride,
  Chloride,
  Sulfate,
  Nitrate,
  Phosphate,
  Carbonate,
  Bicarbonate,
  Hydroxide,
  Oxide,
  Sulfide,
  Chloride as ChlorideIcon,
  Bromide,
  Iodide,
  Fluoride as FluorideIcon,
  Nitride,
  Phosphide,
  Carbide,
  Silicide,
  Boride,
  Aluminide,
  Titanide,
  Vanadide,
  Chromide,
  Manganide,
  Ferride,
  Cobaltide,
  Nickelide,
  Copperide,
  Zincide,
  Gallide,
  Germanide,
  Arsenide,
  Selenide,
  Bromide as BromideIcon,
  Kryptide,
  Rubidide,
  Strontide,
  Yttride,
  Zirconide,
  Niobide,
  Molybdide,
  Technetide,
  Ruthenide,
  Rhodide,
  Palladide,
  Argentide,
  Cadmide,
  Indide,
  Stannide,
  Antimonide,
  Telluride,
  Iodide as IodideIcon,
  Xenide,
  Cesiumide,
  Bariumide,
  Lanthanide,
  Ceride,
  Praseodymide,
  Neodymide,
  Promethide,
  Samaride,
  Europide,
  Gadolinide,
  Terbide,
  Dysproside,
  Holide,
  Erbide,
  Thulide,
  Ytterbide,
  Lutetide,
  Hafnide,
  Tantalide,
  Tungstide,
  Rhenide,
  Osmide,
  Iridide,
  Platinide,
  Auride,
  Mercuride,
  Thallide,
  Plumbide,
  Bismuthide,
  Polonide,
  Astatide,
  Radonide,
  Franciumide,
  Radiumide,
  Actinide,
  Thoride,
  Protactinide,
  Uranide,
  Neptunide,
  Plutonide,
  Americide,
  Curide,
  Berkelide,
  Californide,
  Einsteinide,
  Fermide,
  Mendelevide,
  Nobelide,
  Lawrencide,
  Rutherfordide,
  Dubnide,
  Seaborgide,
  Bohride,
  Hassiumide,
  Meitneride,
  Darmstadtide,
  Roentgenide,
  Copernicide,
  Nihonide,
  Flerovide,
  Moscovide,
  Livermoride,
  Tennesside,
  Oganessonide
} from 'lucide-react';

export default function TTSPanel({ settings, updateSetting, ttsState, onTtsControl, activeSubMenu }) {
  const [currentText, setCurrentText] = useState('');

  const voices = [
    { id: 'default', name: 'Default Voice', gender: 'neutral' },
    { id: 'male1', name: 'Male Voice 1', gender: 'male' },
    { id: 'male2', name: 'Male Voice 2', gender: 'male' },
    { id: 'female1', name: 'Female Voice 1', gender: 'female' },
    { id: 'female2', name: 'Female Voice 2', gender: 'female' },
    { id: 'child', name: 'Child Voice', gender: 'neutral' },
  ];

  const handleTtsControl = (action) => {
    onTtsControl(action);
    
    if (action === 'playing') {
      // Start TTS with selected text
      const selectedText = window.getSelection().toString() || currentText;
      if (selectedText) {
        console.log('Starting TTS for:', selectedText);
        // Implement actual TTS functionality here
      }
    } else if (action === 'stopped') {
      // Stop TTS
      console.log('Stopping TTS');
    }
  };

  const handleTextInput = (e) => {
    setCurrentText(e.target.value);
  };

  const handleUseSelectedText = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setCurrentText(selectedText);
    }
  };

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'playback':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Play className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Playback Controls</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => handleTtsControl('playing')}
                  disabled={ttsState === 'playing'}
                  className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Play"
                >
                  <Play className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => handleTtsControl('paused')}
                  disabled={ttsState !== 'playing'}
                  className="p-3 bg-neutral-500 text-white rounded-full hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Pause"
                >
                  <Pause className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => handleTtsControl('stopped')}
                  disabled={ttsState === 'stopped'}
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Stop"
                >
                  <Square className="w-5 h-5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  ttsState === 'playing' 
                    ? 'bg-green-100 text-green-800' 
                    : ttsState === 'paused'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-neutral-100 text-neutral-800'
                }`}>
                  {ttsState === 'playing' && <Loader2 className="w-3 h-3 mr-1 animate-spin" />}
                  {ttsState === 'playing' ? 'Playing' : ttsState === 'paused' ? 'Paused' : 'Stopped'}
                </span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Text Input</h5>
                <textarea
                  value={currentText}
                  onChange={handleTextInput}
                  placeholder="Enter text to read aloud or select text on the page..."
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows="3"
                />
                <button
                  onClick={handleUseSelectedText}
                  className="mt-2 w-full bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Use Selected Text
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 'voice':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Mic className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Voice Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Voice Selection
                </label>
                <select
                  value={settings.ttsVoice}
                  onChange={(e) => updateSetting('ttsVoice', e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {voices.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Speed: {settings.ttsSpeed}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={settings.ttsSpeed}
                  onChange={(e) => updateSetting('ttsSpeed', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Slow</span>
                  <span>Normal</span>
                  <span>Fast</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Pitch: {settings.ttsPitch || 1.0}
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={settings.ttsPitch || 1.0}
                  onChange={(e) => updateSetting('ttsPitch', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Low</span>
                  <span>Normal</span>
                  <span>High</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Volume: {settings.ttsVolume || 1.0}
                </label>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.1"
                  value={settings.ttsVolume || 1.0}
                  onChange={(e) => updateSetting('ttsVolume', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Mute</span>
                  <span>Normal</span>
                  <span>Max</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'highlighting':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Word Highlighting</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Highlight Words as Spoken</h4>
                  <p className="text-sm text-neutral-600">Highlight words as they're being read aloud</p>
                </div>
                <ToggleSwitch
                  checked={settings.wordHighlighting}
                  onChange={(checked) => updateSetting('wordHighlighting', checked)}
                />
              </div>
              
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Highlighting Settings</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Highlight Color
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['#ffeb3b', '#4caf50', '#2196f3', '#ff9800'].map((color) => (
                        <button
                          key={color}
                          onClick={() => updateSetting('highlightColor', color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            (settings.highlightColor || '#ffeb3b') === color ? 'border-neutral-600' : 'border-neutral-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Highlight Style
                    </label>
                    <select
                      value={settings.highlightStyle || 'background'}
                      onChange={(e) => updateSetting('highlightStyle', e.target.value)}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="background">Background</option>
                      <option value="underline">Underline</option>
                      <option value="border">Border</option>
                      <option value="glow">Glow</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Highlight Duration (ms)
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="100"
                      value={settings.highlightDuration || 300}
                      onChange={(e) => updateSetting('highlightDuration', parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-1">
                      <span>Quick</span>
                      <span>{settings.highlightDuration || 300}ms</span>
                      <span>Slow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  }

  // Default view - show all options
  return (
    <div className="space-y-4">
      {/* TTS Toggle */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Volume2 className="w-5 h-5 text-primary-500" />
            <div>
              <h3 className="font-medium text-neutral-800">Text-to-Speech</h3>
              <p className="text-sm text-neutral-600">Convert text to spoken audio</p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.ttsEnabled}
            onChange={(checked) => updateSetting('ttsEnabled', checked)}
          />
        </div>
      </motion.div>

      {/* Playback Controls */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Playback Controls</h3>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={() => handleTtsControl('playing')}
            disabled={ttsState === 'playing'}
            className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Play"
          >
            <Play className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => handleTtsControl('paused')}
            disabled={ttsState !== 'playing'}
            className="p-3 bg-neutral-500 text-white rounded-full hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Pause"
          >
            <Pause className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => handleTtsControl('stopped')}
            disabled={ttsState === 'stopped'}
            className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Stop"
          >
            <Square className="w-5 h-5" />
          </button>
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            ttsState === 'playing' 
              ? 'bg-green-100 text-green-800' 
              : ttsState === 'paused'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-neutral-100 text-neutral-800'
          }`}>
            {ttsState === 'playing' && <Loader2 className="w-3 h-3 mr-1 animate-spin" />}
            {ttsState === 'playing' ? 'Playing' : ttsState === 'paused' ? 'Paused' : 'Stopped'}
          </span>
        </div>
      </motion.div>

      {/* Voice Settings */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Mic className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Voice Settings</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Voice
            </label>
            <select
              value={settings.ttsVoice}
              onChange={(e) => updateSetting('ttsVoice', e.target.value)}
              className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {voices.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Speed: {settings.ttsSpeed}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={settings.ttsSpeed}
              onChange={(e) => updateSetting('ttsSpeed', parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </motion.div>

      {/* Word Highlighting */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Settings className="w-5 h-5 text-primary-500" />
            <div>
              <h3 className="font-medium text-neutral-800">Word Highlighting</h3>
              <p className="text-sm text-neutral-600">Highlight words as they're spoken</p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.wordHighlighting}
            onChange={(checked) => updateSetting('wordHighlighting', checked)}
          />
        </div>
      </motion.div>

      {/* Text Input */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Text Input</h3>
        
          <textarea
            value={currentText}
            onChange={handleTextInput}
          placeholder="Enter text to read aloud or select text on the page..."
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          rows="3"
          />
          
            <button
              onClick={handleUseSelectedText}
          className="mt-2 w-full bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Use Selected Text
            </button>
      </motion.div>
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