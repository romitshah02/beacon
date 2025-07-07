import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Languages, 
  Loader2,
  Copy,
  CheckCircle,
  AlertCircle,
  Wifi,
  Edit3,
  ChevronRight,
  Download,
  Upload,
  Trash2,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Settings,
  HelpCircle,
  User,
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
  Database,
  Key,
  KeyRound,
  Lock,
  Unlock,
  Shield,
  ShieldOff,
  ShieldCheck,
  ShieldX,
  AlertTriangle,
  Info,
  Lightbulb,
  Zap,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Projector,
  Printer,
  Scanner,
  Fax,
  Phone,
  Mail,
  MessageSquare,
  MessageCircle,
  Send,
  Inbox,
  Archive,
  Trash,
  Edit,
  Edit2,
  EditIcon,
  PenTool,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Quote,
  ListIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  Link,
  Unlink,
  ImageIcon,
  VideoIcon,
  Music,
  FileIcon,
  FolderIcon,
  Paperclip,
  DownloadIcon,
  UploadIcon,
  Share2,
  ExternalLink,
  CopyIcon,
  Scissors,
  RotateCw,
  RotateCcw,
  Move,
  Crop,
  FilterIcon,
  Sliders,
  SettingsIcon,
  Tool,
  Wrench,
  Hammer,
  Screwdriver,
  Cog,
  Cogs,
  Gear,
  SlidersIcon,
  ToggleLeft,
  ToggleRight,
  CheckSquare,
  Square,
  Circle,
  MinusIcon,
  PlusIcon,
  XIcon,
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
  ArchiveIcon,
  Book,
  BookOpen,
  Bookmark,
  Calendar,
  Clock,
  Map,
  MapPin,
  Navigation,
  Compass,
  GlobeIcon,
  Flag,
  Award,
  Trophy,
  Medal,
  Crown,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Eye,
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
  HeartIcon,
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
  WatchIcon,
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
  SockIcon,
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
  MonitorIcon,
  Keyboard,
  Mouse,
  Mousepad,
  SpeakerIcon,
  Headphone,
  Microphone,
  CameraIcon,
  VideoIcon2,
  PhoneIcon2,
  TabletIcon,
  WatchIcon2,
  Smartwatch,
  Fitness,
  Scale,
  Thermometer,
  Barometer,
  Hygrometer,
  Anemometer,
  Rain,
  Snow,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  SunIcon,
  MoonIcon,
  StarIcon,
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
  EarthIcon,
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
  WaterIcon,
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
  LinkIcon,
  Bind,
  TieIcon,
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
  BeltIcon,
  Strap,
  Band,
  Ribbon,
  String,
  Thread,
  Yarn,
  Fiber,
  Filament,
  Strand,
  HairIcon,
  FurIcon,
  Feather,
  ScaleIcon,
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
  LatexIcon,
  Oil,
  Fat,
  ProteinIcon,
  Carbohydrate,
  Sugar,
  Starch,
  FiberIcon,
  FatIcon,
  Cholesterol,
  Sodium,
  Potassium,
  Calcium,
  IronIcon,
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
  ChlorideIcon,
  Bromide,
  Iodide,
  FluorideIcon,
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
  BromideIcon,
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
  IodideIcon,
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

export default function TranslationPanel({ settings, updateSetting, isLoading, activeSubMenu }) {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);

  const languages = [
    { code: 'auto', name: 'Auto Detect' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      alert('Please enter text to translate');
      return;
    }

    // Simulate API call
    setShowTranslation(true);
    setTranslatedText('This is the translated version of your text...');
  };

  const handleCopyTranslation = () => {
    navigator.clipboard.writeText(translatedText);
    // Show success feedback
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (error) {
      console.error('Failed to read clipboard:', error);
    }
  };

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'live':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Wifi className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Live Translation</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Auto-translate Selected Text</h4>
                  <p className="text-sm text-neutral-600">Automatically translate text when selected</p>
                </div>
                <ToggleSwitch
                  checked={settings.liveTranslation}
                  onChange={(checked) => updateSetting('liveTranslation', checked)}
                />
              </div>
              
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Live Translation Settings</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Translation Delay (ms)
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="100"
                      value={settings.translationDelay || 500}
                      onChange={(e) => updateSetting('translationDelay', parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-1">
                      <span>Fast</span>
                      <span>{settings.translationDelay || 500}ms</span>
                      <span>Slow</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Show Translation Tooltip
                    </label>
                    <ToggleSwitch
                      checked={settings.showTranslationTooltip !== false}
                      onChange={(checked) => updateSetting('showTranslationTooltip', checked)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Auto-copy Translation
                    </label>
                    <ToggleSwitch
                      checked={settings.autoCopyTranslation || false}
                      onChange={(checked) => updateSetting('autoCopyTranslation', checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'manual':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Edit3 className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Manual Translation</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Input Text
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to translate or paste from clipboard..."
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows="4"
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handlePasteFromClipboard}
                  className="flex-1 bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Paste</span>
                </button>
                
                <button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim()}
                  className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Translating...</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-4 h-4" />
                      <span>Translate</span>
                    </>
                  )}
                </button>
              </div>

              {/* Translation Result */}
              {showTranslation && translatedText && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3 bg-accent-50 border border-accent-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-accent-800">Translation:</h4>
                    <button
                      onClick={handleCopyTranslation}
                      className="p-1 text-accent-600 hover:text-accent-800 transition-colors"
                      title="Copy translation"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-accent-700">{translatedText}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 'languages':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Languages className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Language Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Source Language
                </label>
                <select
                  value={settings.sourceLanguage}
                  onChange={(e) => updateSetting('sourceLanguage', e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Target Language
                </label>
                <select
                  value={settings.targetLanguage}
                  onChange={(e) => updateSetting('targetLanguage', e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {languages.filter(lang => lang.code !== 'auto').map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Translation Preferences</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Translation Quality
                    </label>
                    <select
                      value={settings.translationQuality || 'balanced'}
                      onChange={(e) => updateSetting('translationQuality', e.target.value)}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="fast">Fast (Basic)</option>
                      <option value="balanced">Balanced (Recommended)</option>
                      <option value="accurate">Accurate (Slow)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preserve Formatting
                    </label>
                    <ToggleSwitch
                      checked={settings.preserveFormatting !== false}
                      onChange={(checked) => updateSetting('preserveFormatting', checked)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Show Original Text
                    </label>
                    <ToggleSwitch
                      checked={settings.showOriginalText || false}
                      onChange={(checked) => updateSetting('showOriginalText', checked)}
                    />
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
      {/* Live Translation Toggle */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-primary-500" />
            <div>
              <h3 className="font-medium text-neutral-800">Live Translation</h3>
              <p className="text-sm text-neutral-600">Automatically translate selected text</p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.liveTranslation}
            onChange={(checked) => updateSetting('liveTranslation', checked)}
          />
        </div>
      </motion.div>

      {/* Language Selection */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Languages className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Language Settings</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Source Language
            </label>
            <select
              value={settings.sourceLanguage}
              onChange={(e) => updateSetting('sourceLanguage', e.target.value)}
              className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Target Language
            </label>
            <select
              value={settings.targetLanguage}
              onChange={(e) => updateSetting('targetLanguage', e.target.value)}
              className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {languages.filter(lang => lang.code !== 'auto').map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Text Input */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Translate Text</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Input Text
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate or paste from clipboard..."
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows="4"
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handlePasteFromClipboard}
              className="flex-1 bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Copy className="w-4 h-4" />
              <span>Paste</span>
            </button>
            
            <button
              onClick={handleTranslate}
              disabled={isLoading || !inputText.trim()}
              className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4" />
                  <span>Translate</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Translation Result */}
        {showTranslation && translatedText && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-3 bg-accent-50 border border-accent-200 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-accent-800">Translation:</h4>
              <button
                onClick={handleCopyTranslation}
                className="p-1 text-accent-600 hover:text-accent-800 transition-colors"
                title="Copy translation"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-accent-700">{translatedText}</p>
          </motion.div>
        )}
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