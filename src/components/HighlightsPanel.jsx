import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Trash2, 
  Copy, 
  Bookmark,
  Search,
  Filter,
  Download,
  Edit3,
  ChevronRight,
  Zap,
  RotateCcw,
  Save,
  Upload,
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
  Share2,
  FileText,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  Heart,
  ThumbsUp,
  MessageCircle,
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

export default function HighlightsPanel({ settings, updateSetting, activeSubMenu }) {
  const [highlights, setHighlights] = useState([
    {
      id: 1,
      text: "The quick brown fox jumps over the lazy dog.",
      source: "https://example.com/article1",
      date: "2024-01-15",
      tags: ["reading", "example"],
      color: "yellow"
    },
    {
      id: 2,
      text: "This is another important highlight that was saved for later reference.",
      source: "https://example.com/article2",
      date: "2024-01-14",
      tags: ["important", "reference"],
      color: "green"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleDeleteHighlight = (id) => {
    setHighlights(highlights.filter(h => h.id !== id));
  };

  const handleCopyHighlight = (text) => {
    navigator.clipboard.writeText(text);
    // Show success feedback
  };

  const filteredHighlights = highlights.filter(highlight => {
    const matchesSearch = highlight.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         highlight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'all' || highlight.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const allTags = [...new Set(highlights.flatMap(h => h.tags))];

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'view':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Bookmark className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">View Highlights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search highlights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-neutral-400" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="flex-1 p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All highlights</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                {filteredHighlights.length === 0 ? (
                  <div className="text-center py-8">
                    <Bookmark className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-neutral-600 mb-2">No highlights found</h3>
                    <p className="text-sm text-neutral-500">
                      {searchTerm || selectedFilter !== 'all' 
                        ? 'Try adjusting your search or filter criteria.'
                        : 'Start highlighting text on web pages to save important passages here.'
                      }
                    </p>
                  </div>
                ) : (
                  filteredHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.id}
                      className="p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full bg-${highlight.color}-400`}></div>
                          <span className="text-xs text-neutral-500">{highlight.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleCopyHighlight(highlight.text)}
                            className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                            title="Copy text"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteHighlight(highlight.id)}
                            className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                            title="Delete highlight"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-neutral-800 mb-2 leading-relaxed">
                        "{highlight.text}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {highlight.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={highlight.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          View source
                        </a>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        );

      case 'export':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Download className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Export Data</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Export Format</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'json', label: 'JSON', icon: FileText },
                    { value: 'txt', label: 'Plain Text', icon: File },
                    { value: 'csv', label: 'CSV', icon: Grid },
                    { value: 'html', label: 'HTML', icon: Code }
                  ].map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => updateSetting('exportFormat', option.value)}
                        className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center ${
                          (settings.exportFormat || 'json') === option.value
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <Icon className="w-4 h-4 mb-1" />
                        <span className="text-xs">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Export Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Include Metadata</h5>
                      <p className="text-sm text-neutral-600">Include source URLs and dates</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.includeMetadata !== false}
                      onChange={(checked) => updateSetting('includeMetadata', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Include Tags</h5>
                      <p className="text-sm text-neutral-600">Include highlight tags</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.includeTags !== false}
                      onChange={(checked) => updateSetting('includeTags', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Include Colors</h5>
                      <p className="text-sm text-neutral-600">Include highlight colors</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.includeColors || false}
                      onChange={(checked) => updateSetting('includeColors', checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    const allText = filteredHighlights.map(h => h.text).join('\n\n');
                    navigator.clipboard.writeText(allText);
                  }}
                  className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy All</span>
                </button>
                
                <button
                  onClick={() => {
                    const data = JSON.stringify(highlights, null, 2);
                    const blob = new Blob([data], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'highlights.json';
                    a.click();
                  }}
                  className="bg-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 'manage':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Edit3 className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Manage Data</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Data Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Auto-sync Highlights</h5>
                      <p className="text-sm text-neutral-600">Automatically sync across devices</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.autoSyncHighlights !== false}
                      onChange={(checked) => updateSetting('autoSyncHighlights', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Backup to Cloud</h5>
                      <p className="text-sm text-neutral-600">Store highlights in cloud storage</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.backupToCloud || false}
                      onChange={(checked) => updateSetting('backupToCloud', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-neutral-800">Auto-cleanup</h5>
                      <p className="text-sm text-neutral-600">Remove old highlights automatically</p>
                    </div>
                    <ToggleSwitch
                      checked={settings.autoCleanup || false}
                      onChange={(checked) => updateSetting('autoCleanup', checked)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Data Retention</h4>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Keep highlights for: {settings.dataRetention || 30} days
                  </label>
                  <input
                    type="range"
                    min="7"
                    max="365"
                    step="7"
                    value={settings.dataRetention || 30}
                    onChange={(e) => updateSetting('dataRetention', parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>1 week</span>
                    <span>1 month</span>
                    <span>1 year</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete all highlights?')) {
                      setHighlights([]);
                    }
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete All</span>
                </button>
                
                <button
                  onClick={() => {
                    // Import functionality
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = '.json';
                    input.onchange = (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          try {
                            const importedHighlights = JSON.parse(e.target.result);
                            setHighlights(importedHighlights);
                          } catch (error) {
                            alert('Invalid file format');
                          }
                        };
                        reader.readAsText(file);
                      }
                    };
                    input.click();
                  }}
                  className="bg-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Import</span>
                </button>
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
      {/* Search and Filter */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Star className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Saved Highlights</h3>
        </div>
        
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search highlights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-neutral-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="flex-1 p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All highlights</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Highlights List */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {filteredHighlights.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm text-center">
            <Bookmark className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-neutral-600 mb-2">No highlights found</h3>
            <p className="text-sm text-neutral-500">
              {searchTerm || selectedFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Start highlighting text on web pages to save important passages here.'
              }
            </p>
          </div>
        ) : (
          filteredHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full bg-${highlight.color}-400`}></div>
                  <span className="text-xs text-neutral-500">{highlight.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleCopyHighlight(highlight.text)}
                    className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                    title="Copy text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteHighlight(highlight.id)}
                    className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                    title="Delete highlight"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-neutral-800 mb-3 leading-relaxed">
                "{highlight.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {highlight.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={highlight.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-500 hover:text-primary-600 transition-colors"
                >
                  View source
                </a>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              const allText = filteredHighlights.map(h => h.text).join('\n\n');
              navigator.clipboard.writeText(allText);
            }}
            className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Copy className="w-4 h-4" />
            <span>Export All</span>
          </button>
          
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete all highlights?')) {
                setHighlights([]);
              }
            }}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete All</span>
          </button>
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