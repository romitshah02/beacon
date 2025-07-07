import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Type, 
  Eye, 
  Palette, 
  Sparkles, 
  Loader2,
  CheckCircle,
  AlertCircle,
  Zap,
  ChevronRight,
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
  CheckCircle as Check,
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
  Settings,
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
  AlertCircle as Alert,
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
  Type as Text,
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
  Settings as SettingsIcon,
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
  Globe as GlobeIcon,
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

export default function ReadingToolsPanel({ settings, updateSetting, isLoading, activeSubMenu }) {
  const [simplifiedText, setSimplifiedText] = useState('');
  const [showSimplified, setShowSimplified] = useState(false);

  const handleTextSimplification = async () => {
    // This functionality is disabled as requested
    console.log('Text simplification is disabled');
  };

  const colorThemes = [
    { id: 'light', name: 'Light', bg: 'bg-white', text: 'text-neutral-800' },
    { id: 'sepia', name: 'Sepia', bg: 'bg-amber-50', text: 'text-amber-900' },
    { id: 'dark', name: 'Dark', bg: 'bg-neutral-900', text: 'text-neutral-100' },
  ];

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'dyslexia':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Type className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Dyslexia Font</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">OpenDyslexic Font</h4>
                  <p className="text-sm text-neutral-600">Use OpenDyslexic font for better readability</p>
                </div>
                <ToggleSwitch
                  checked={settings.dyslexiaFont}
                  onChange={(checked) => updateSetting('dyslexiaFont', checked)}
                />
              </div>
              
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Preview</h5>
                <p className={`text-sm ${settings.dyslexiaFont ? 'font-opendyslexic' : 'font-lexend'}`}>
                  This is how the text will appear with {settings.dyslexiaFont ? 'OpenDyslexic' : 'default'} font.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'focus':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Line Focus Mode</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800">Highlight Current Line</h4>
                  <p className="text-sm text-neutral-600">Highlight the current line for better focus</p>
                </div>
                <ToggleSwitch
                  checked={settings.lineFocusMode}
                  onChange={(checked) => updateSetting('lineFocusMode', checked)}
                />
              </div>
              
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Focus Settings</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Focus Width: {settings.focusWidth || 3} lines
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={settings.focusWidth || 3}
                      onChange={(e) => updateSetting('focusWidth', parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Focus Color
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['#ffeb3b', '#4caf50', '#2196f3', '#ff9800'].map((color) => (
                        <button
                          key={color}
                          onClick={() => updateSetting('focusColor', color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            (settings.focusColor || '#ffeb3b') === color ? 'border-neutral-600' : 'border-neutral-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'spacing':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Text Spacing</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Word Spacing: {settings.wordSpacing}
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="2.0"
                  step="0.1"
                  value={settings.wordSpacing}
                  onChange={(e) => updateSetting('wordSpacing', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Tight</span>
                  <span>Normal</span>
                  <span>Wide</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Letter Spacing: {settings.letterSpacing}
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.1"
                  value={settings.letterSpacing}
                  onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Tight</span>
                  <span>Normal</span>
                  <span>Wide</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Line Height: {settings.lineHeight}
                </label>
                <input
                  type="range"
                  min="1.0"
                  max="2.5"
                  step="0.1"
                  value={settings.lineHeight}
                  onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Compact</span>
                  <span>Normal</span>
                  <span>Spacious</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Paragraph Spacing: {settings.paragraphSpacing}
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="2.0"
                  step="0.1"
                  value={settings.paragraphSpacing}
                  onChange={(e) => updateSetting('paragraphSpacing', parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Tight</span>
                  <span>Normal</span>
                  <span>Wide</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'themes':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Palette className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Color Themes</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => updateSetting('colorTheme', theme.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      settings.colorTheme === theme.id
                        ? 'border-primary-500 shadow-md'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className={`w-full h-8 rounded ${theme.bg} mb-2`}></div>
                    <span className={`text-sm font-medium ${theme.text}`}>
                      {theme.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Custom Theme</h5>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Background Color
                    </label>
                    <input
                      type="color"
                      value={settings.customBgColor || '#ffffff'}
                      onChange={(e) => updateSetting('customBgColor', e.target.value)}
                      className="w-full h-10 rounded-lg border border-neutral-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Text Color
                    </label>
                    <input
                      type="color"
                      value={settings.customTextColor || '#000000'}
                      onChange={(e) => updateSetting('customTextColor', e.target.value)}
                      className="w-full h-10 rounded-lg border border-neutral-300"
                    />
                  </div>
                  
                  <button
                    onClick={() => updateSetting('colorTheme', 'custom')}
                    className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Apply Custom Theme
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'simplify':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Text Simplification</h3>
            </div>
            
            <div className="text-center py-8">
              <AlertCircle className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-neutral-800 mb-2">Feature Disabled</h4>
              <p className="text-sm text-neutral-600">
                Text simplification functionality is currently disabled as requested.
              </p>
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
      {/* Dyslexia Font Toggle */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Type className="w-5 h-5 text-primary-500" />
            <div>
              <h3 className="font-medium text-neutral-800">Dyslexia Font</h3>
              <p className="text-sm text-neutral-600">Use OpenDyslexic font for better readability</p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.dyslexiaFont}
            onChange={(checked) => updateSetting('dyslexiaFont', checked)}
          />
        </div>
      </motion.div>

      {/* Text Simplification */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <div>
            <h3 className="font-medium text-neutral-800">Text Simplification</h3>
            <p className="text-sm text-neutral-600">Simplify complex text for easier reading</p>
          </div>
        </div>
        
        <div className="text-center py-4">
          <AlertCircle className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
          <p className="text-sm text-neutral-600">Feature disabled as requested</p>
        </div>
      </motion.div>

      {/* Line Focus Mode */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-primary-500" />
            <div>
              <h3 className="font-medium text-neutral-800">Line Focus Mode</h3>
              <p className="text-sm text-neutral-600">Highlight current line for better focus</p>
            </div>
          </div>
          <ToggleSwitch
            checked={settings.lineFocusMode}
            onChange={(checked) => updateSetting('lineFocusMode', checked)}
          />
        </div>
      </motion.div>

      {/* Spacing Controls */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Text Spacing</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Word Spacing: {settings.wordSpacing}
            </label>
            <input
              type="range"
              min="0.8"
              max="2.0"
              step="0.1"
              value={settings.wordSpacing}
              onChange={(e) => updateSetting('wordSpacing', parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Letter Spacing: {settings.letterSpacing}
            </label>
            <input
              type="range"
              min="0.8"
              max="1.5"
              step="0.1"
              value={settings.letterSpacing}
              onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </motion.div>

      {/* Color Theme */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Palette className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Color Theme</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {colorThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => updateSetting('colorTheme', theme.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                settings.colorTheme === theme.id
                  ? 'border-primary-500 shadow-md'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className={`w-full h-8 rounded ${theme.bg} mb-2`}></div>
              <span className={`text-sm font-medium ${theme.text}`}>
                {theme.name}
              </span>
            </button>
          ))}
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