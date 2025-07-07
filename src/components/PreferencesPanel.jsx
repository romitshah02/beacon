import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Shield, 
  Save, 
  Download, 
  Upload, 
  Trash2,
  Eye,
  EyeOff,
  Bell,
  Moon,
  Sun,
  Cloud,
  ChevronRight,
  Zap,
  RotateCcw,
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
  BellOff,
  ShieldOff,
  Database,
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
  Volume2,
  Mic,
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
  Sun as SunIcon,
  Moon as MoonIcon,
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
  RotateCw,
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
  Square,
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
  EyeOff as EyeOffIcon,
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
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Sun as SunIcon2,
  Moon as MoonIcon2,
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

export default function PreferencesPanel({ settings, updateSetting, activeSubMenu }) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleExportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'beacon-settings.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSettings = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target.result);
          Object.keys(importedSettings).forEach(key => {
            updateSetting(key, importedSettings[key]);
          });
          alert('Settings imported successfully!');
        } catch (error) {
          alert('Error importing settings. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleResetSettings = () => {
    if (confirm('Are you sure you want to reset all settings to default? This cannot be undone.')) {
      // Reset to default settings
      const defaultSettings = {
        dyslexiaFont: false,
        textSimplification: false,
        lineFocusMode: false,
        wordSpacing: 1.2,
        letterSpacing: 1.1,
        colorTheme: 'light',
        sourceLanguage: 'auto',
        targetLanguage: 'en',
        liveTranslation: false,
        ttsEnabled: false,
        ttsSpeed: 1.0,
        ttsVoice: 'default',
        wordHighlighting: true,
        selectedFont: 'lexend',
        fontSize: 16,
        autoSave: true,
        privacyMode: false,
      };
      
      Object.keys(defaultSettings).forEach(key => {
        updateSetting(key, defaultSettings[key]);
      });
    }
  };

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'general':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">General Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Auto-save Settings</h4>
                  <p className="text-sm text-neutral-600">Automatically save your preferences</p>
                </div>
                <ToggleSwitch
                  checked={settings.autoSave}
                  onChange={(checked) => updateSetting('autoSave', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Notifications</h4>
                  <p className="text-sm text-neutral-600">Show helpful tips and updates</p>
                </div>
                <ToggleSwitch
                  checked={settings.notifications || false}
                  onChange={(checked) => updateSetting('notifications', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Dark Mode</h4>
                  <p className="text-sm text-neutral-600">Use dark theme for the extension</p>
                </div>
                <ToggleSwitch
                  checked={settings.darkMode || false}
                  onChange={(checked) => updateSetting('darkMode', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Reading Progress</h4>
                  <p className="text-sm text-neutral-600">Track reading progress across pages</p>
                </div>
                <ToggleSwitch
                  checked={settings.readingProgress !== false}
                  onChange={(checked) => updateSetting('readingProgress', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Reading Goals</h4>
                  <p className="text-sm text-neutral-600">Set and track reading goals</p>
                </div>
                <ToggleSwitch
                  checked={settings.readingGoals || false}
                  onChange={(checked) => updateSetting('readingGoals', checked)}
                />
              </div>
            </div>
          </motion.div>
        );

      case 'privacy':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Privacy & Security</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Privacy Mode</h4>
                  <p className="text-sm text-neutral-600">Don't send usage data to improve the tool</p>
                </div>
                <ToggleSwitch
                  checked={settings.privacyMode}
                  onChange={(checked) => updateSetting('privacyMode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Local Storage Only</h4>
                  <p className="text-sm text-neutral-600">Keep all data on your device</p>
                </div>
                <ToggleSwitch
                  checked={settings.localStorageOnly || false}
                  onChange={(checked) => updateSetting('localStorageOnly', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Clear Data on Close</h4>
                  <p className="text-sm text-neutral-600">Automatically clear temporary data</p>
                </div>
                <ToggleSwitch
                  checked={settings.clearDataOnClose || false}
                  onChange={(checked) => updateSetting('clearDataOnClose', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Encrypt Local Data</h4>
                  <p className="text-sm text-neutral-600">Encrypt stored data for extra security</p>
                </div>
                <ToggleSwitch
                  checked={settings.encryptLocalData || false}
                  onChange={(checked) => updateSetting('encryptLocalData', checked)}
                />
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Data Retention</h5>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Keep data for: {settings.dataRetention || 30} days
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="365"
                    step="1"
                    value={settings.dataRetention || 30}
                    onChange={(e) => updateSetting('dataRetention', parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>1 day</span>
                    <span>1 month</span>
                    <span>1 year</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'sync':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Sync & Backup</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Auto-sync</h4>
                  <p className="text-sm text-neutral-600">Automatically sync data across devices</p>
                </div>
                <ToggleSwitch
                  checked={settings.autoSync !== false}
                  onChange={(checked) => updateSetting('autoSync', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Cloud Backup</h4>
                  <p className="text-sm text-neutral-600">Backup data to cloud storage</p>
                </div>
                <ToggleSwitch
                  checked={settings.cloudBackup || false}
                  onChange={(checked) => updateSetting('cloudBackup', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Bookmark Sync</h4>
                  <p className="text-sm text-neutral-600">Sync reading bookmarks</p>
                </div>
                <ToggleSwitch
                  checked={settings.bookmarkSync !== false}
                  onChange={(checked) => updateSetting('bookmarkSync', checked)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleExportSettings}
                  className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Settings</span>
                </button>
                
                <label className="bg-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Import Settings</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportSettings}
                    className="hidden"
                  />
                </label>
              </div>

              <button
                onClick={handleResetSettings}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Default</span>
              </button>
            </div>
          </motion.div>
        );

      case 'accessibility':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Accessibility</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">High Contrast Mode</h4>
                  <p className="text-sm text-neutral-600">Use high contrast colors</p>
                </div>
                <ToggleSwitch
                  checked={settings.contrastMode || false}
                  onChange={(checked) => updateSetting('contrastMode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Reduce Motion</h4>
                  <p className="text-sm text-neutral-600">Minimize animations and transitions</p>
                </div>
                <ToggleSwitch
                  checked={settings.reduceMotion || false}
                  onChange={(checked) => updateSetting('reduceMotion', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Screen Reader Support</h4>
                  <p className="text-sm text-neutral-600">Enhanced screen reader compatibility</p>
                </div>
                <ToggleSwitch
                  checked={settings.screenReader || false}
                  onChange={(checked) => updateSetting('screenReader', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Keyboard Navigation</h4>
                  <p className="text-sm text-neutral-600">Full keyboard navigation support</p>
                </div>
                <ToggleSwitch
                  checked={settings.keyboardNavigation !== false}
                  onChange={(checked) => updateSetting('keyboardNavigation', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Voice Commands</h4>
                  <p className="text-sm text-neutral-600">Control extension with voice</p>
                </div>
                <ToggleSwitch
                  checked={settings.voiceCommands || false}
                  onChange={(checked) => updateSetting('voiceCommands', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Gesture Controls</h4>
                  <p className="text-sm text-neutral-600">Use touch gestures on mobile</p>
                </div>
                <ToggleSwitch
                  checked={settings.gestureControls || false}
                  onChange={(checked) => updateSetting('gestureControls', checked)}
                />
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
      {/* General Settings */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Settings className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">General Settings</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Auto-save Settings</h4>
              <p className="text-sm text-neutral-600">Automatically save your preferences</p>
            </div>
            <ToggleSwitch
              checked={settings.autoSave}
              onChange={(checked) => updateSetting('autoSave', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Notifications</h4>
              <p className="text-sm text-neutral-600">Show helpful tips and updates</p>
            </div>
            <ToggleSwitch
              checked={settings.notifications || false}
              onChange={(checked) => updateSetting('notifications', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Dark Mode</h4>
              <p className="text-sm text-neutral-600">Use dark theme for the extension</p>
            </div>
            <ToggleSwitch
              checked={settings.darkMode || false}
              onChange={(checked) => updateSetting('darkMode', checked)}
            />
          </div>
        </div>
      </motion.div>

      {/* Privacy Settings */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Privacy & Security</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Privacy Mode</h4>
              <p className="text-sm text-neutral-600">Don't send usage data to improve the tool</p>
            </div>
            <ToggleSwitch
              checked={settings.privacyMode}
              onChange={(checked) => updateSetting('privacyMode', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Local Storage Only</h4>
              <p className="text-sm text-neutral-600">Keep all data on your device</p>
            </div>
            <ToggleSwitch
              checked={settings.localStorageOnly || false}
              onChange={(checked) => updateSetting('localStorageOnly', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Clear Data on Close</h4>
              <p className="text-sm text-neutral-600">Automatically clear temporary data</p>
            </div>
            <ToggleSwitch
              checked={settings.clearDataOnClose || false}
              onChange={(checked) => updateSetting('clearDataOnClose', checked)}
            />
          </div>
        </div>
      </motion.div>

      {/* Data Management */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Save className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Data Management</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleExportSettings}
            className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Settings</span>
          </button>
          
          <label className="bg-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Import Settings</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportSettings}
              className="hidden"
            />
          </label>
        </div>
      </motion.div>

      {/* Advanced Settings */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center justify-between w-full mb-4"
        >
          <div className="flex items-center space-x-3">
            <Settings className="w-5 h-5 text-primary-500" />
            <h3 className="font-medium text-neutral-800">Advanced Settings</h3>
          </div>
          <motion.div
            animate={{ rotate: showAdvanced ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: showAdvanced ? 'auto' : 0, opacity: showAdvanced ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-neutral-800">Debug Mode</h4>
                <p className="text-sm text-neutral-600">Show detailed error messages</p>
              </div>
              <ToggleSwitch
                checked={settings.debugMode || false}
                onChange={(checked) => updateSetting('debugMode', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-neutral-800">Performance Mode</h4>
                <p className="text-sm text-neutral-600">Optimize for faster performance</p>
              </div>
              <ToggleSwitch
                checked={settings.performanceMode || false}
                onChange={(checked) => updateSetting('performanceMode', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-neutral-800">Experimental Features</h4>
                <p className="text-sm text-neutral-600">Enable beta features</p>
              </div>
              <ToggleSwitch
                checked={settings.experimentalFeatures || false}
                onChange={(checked) => updateSetting('experimentalFeatures', checked)}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Reset Options */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Reset Options</h3>
        
        <div className="space-y-3">
          <button
            onClick={handleResetSettings}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Reset All Settings</span>
          </button>
          
          <div className="text-xs text-neutral-500 text-center">
            This will restore all settings to their default values. Your highlights and saved data will be preserved.
          </div>
        </div>
      </motion.div>

      {/* About */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">About Beacon</h3>
        
        <div className="space-y-2 text-sm text-neutral-600">
          <p>Version: 1.0.0</p>
          <p>A dyslexia support browser extension designed to make reading easier and more accessible.</p>
          <p>Built with accessibility and neurodivergent users in mind.</p>
        </div>
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

// Chevron Down Icon
function ChevronDown({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
} 