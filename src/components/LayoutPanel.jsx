import React from 'react';
import { motion } from 'framer-motion';
import { 
  Type, 
  Palette, 
  Eye,
  Settings,
  CheckCircle,
  ZoomIn,
  Monitor,
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
  ZoomOut,
  Lock,
  Unlock,
  Bell,
  BellOff,
  Shield,
  ShieldOff,
  Database,
  Wifi,
  WifiOff,
  Smartphone,
  Tablet,
  Monitor as Desktop,
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

export default function LayoutPanel({ settings, updateSetting, activeSubMenu }) {
  const fonts = [
    { id: 'lexend', name: 'Lexend', description: 'Modern, readable font', preview: 'AaBbCcDd' },
    { id: 'dyslexic', name: 'OpenDyslexic', description: 'Dyslexia-friendly font', preview: 'AaBbCcDd' },
    { id: 'comic', name: 'Comic Sans', description: 'Friendly, rounded font', preview: 'AaBbCcDd' },
    { id: 'arial', name: 'Arial', description: 'Clean, standard font', preview: 'AaBbCcDd' },
    { id: 'times', name: 'Times New Roman', description: 'Classic serif font', preview: 'AaBbCcDd' },
    { id: 'georgia', name: 'Georgia', description: 'Elegant serif font', preview: 'AaBbCcDd' },
  ];

  const layoutOptions = [
    { id: 'single-column', name: 'Single Column', description: 'Narrow, focused reading' },
    { id: 'two-column', name: 'Two Column', description: 'Wider layout' },
    { id: 'full-width', name: 'Full Width', description: 'Maximum width' },
  ];

  const lineHeightOptions = [
    { value: 1.2, label: 'Compact' },
    { value: 1.5, label: 'Normal' },
    { value: 1.8, label: 'Relaxed' },
    { value: 2.2, label: 'Very Relaxed' },
  ];

  // Render specific sub-menu content
  if (activeSubMenu) {
    switch (activeSubMenu) {
      case 'fonts':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Type className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Font Selection</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {fonts.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => updateSetting('selectedFont', font.id)}
                    className={`p-3 rounded-lg border-2 transition-all text-left relative ${
                      settings.selectedFont === font.id
                        ? 'border-primary-500 bg-primary-50 shadow-md'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className={`text-lg font-medium mb-1 ${
                      font.id === 'dyslexic' ? 'font-dyslexic' :
                      font.id === 'lexend' ? 'font-lexend' :
                      font.id === 'comic' ? 'font-comic' :
                      font.id === 'times' ? 'font-times' :
                      font.id === 'georgia' ? 'font-georgia' :
                      'font-arial'
                    }`}>
                      {font.preview}
                    </div>
                    <div className="text-sm font-medium text-neutral-800">{font.name}</div>
                    <div className="text-xs text-neutral-600">{font.description}</div>
                    {settings.selectedFont === font.id && (
                      <CheckCircle className="w-4 h-4 text-primary-500 absolute top-2 right-2" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Font Preview</h5>
                <div className={`p-3 border border-neutral-300 rounded-lg ${
                  settings.selectedFont === 'dyslexic' ? 'font-dyslexic' :
                  settings.selectedFont === 'lexend' ? 'font-lexend' :
                  settings.selectedFont === 'comic' ? 'font-comic' :
                  settings.selectedFont === 'times' ? 'font-times' :
                  settings.selectedFont === 'georgia' ? 'font-georgia' :
                  'font-arial'
                }`}>
                  <p className="text-sm">
                    This is how your text will appear with the selected font. The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'sizing':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <ZoomIn className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Font Sizing</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Font Size: {settings.fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="32"
                  step="1"
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>Small</span>
                  <span>Normal</span>
                  <span>Large</span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => updateSetting('fontSize', 14)}
                  className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                >
                  Small
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 16)}
                  className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                >
                  Normal
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 20)}
                  className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                >
                  Large
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 24)}
                  className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                >
                  Extra Large
                </button>
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

              <div className="grid grid-cols-4 gap-2">
                {lineHeightOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateSetting('lineHeight', option.value)}
                    className={`py-2 px-3 rounded-lg transition-colors text-sm ${
                      settings.lineHeight === option.value
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <h5 className="font-medium text-neutral-800 mb-2">Preview</h5>
                <div 
                  className="p-3 border border-neutral-300 rounded-lg"
                  style={{ 
                    fontSize: `${settings.fontSize}px`,
                    lineHeight: settings.lineHeight
                  }}
                >
                  <p className="text-sm">
                    This is how your text will appear with the current font size and line height settings. The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'display':
        return (
          <motion.div 
            className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-neutral-800">Display Options</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Layout Options</h4>
                <div className="space-y-3">
                  {layoutOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => updateSetting('layout', option.id)}
                      className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                        settings.layout === option.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-medium text-neutral-800">{option.name}</div>
                      <div className="text-sm text-neutral-600">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-3">Text Alignment</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'left', label: 'Left', icon: AlignLeft },
                    { value: 'center', label: 'Center', icon: AlignCenter },
                    { value: 'justify', label: 'Justify', icon: AlignJustify }
                  ].map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => updateSetting('textAlignment', option.value)}
                        className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center ${
                          settings.textAlignment === option.value
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
                <h4 className="font-medium text-neutral-800 mb-3">Reading Mode</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'scroll', label: 'Scroll', icon: ArrowDown },
                    { value: 'paged', label: 'Paged', icon: FileText }
                  ].map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => updateSetting('readingMode', option.value)}
                        className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center ${
                          settings.readingMode === option.value
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
                <h4 className="font-medium text-neutral-800 mb-3">Margins</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'narrow', label: 'Narrow' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'wide', label: 'Wide' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateSetting('marginSize', option.value)}
                      className={`py-2 px-3 rounded-lg border-2 transition-all text-sm ${
                        settings.marginSize === option.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
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
      {/* Font Selection */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Type className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Font Selection</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {fonts.slice(0, 4).map((font) => (
            <button
              key={font.id}
              onClick={() => updateSetting('selectedFont', font.id)}
              className={`p-3 rounded-lg border-2 transition-all text-left relative ${
                settings.selectedFont === font.id
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className={`text-lg font-medium mb-1 ${
                font.id === 'dyslexic' ? 'font-dyslexic' :
                font.id === 'lexend' ? 'font-lexend' :
                font.id === 'comic' ? 'font-comic' :
                'font-arial'
              }`}>
                {font.preview}
              </div>
              <div className="text-sm font-medium text-neutral-800">{font.name}</div>
              <div className="text-xs text-neutral-600">{font.description}</div>
              {settings.selectedFont === font.id && (
                <CheckCircle className="w-4 h-4 text-primary-500 absolute top-2 right-2" />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Font Size */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Font Size</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Size: {settings.fontSize}px
            </label>
            <input
              type="range"
              min="12"
              max="32"
              step="1"
              value={settings.fontSize}
              onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => updateSetting('fontSize', 14)}
              className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
            >
              Small
            </button>
            <button
              onClick={() => updateSetting('fontSize', 16)}
              className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
            >
              Normal
            </button>
            <button
              onClick={() => updateSetting('fontSize', 20)}
              className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
            >
              Large
            </button>
            <button
              onClick={() => updateSetting('fontSize', 24)}
              className="py-2 px-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
            >
              Extra Large
            </button>
          </div>
        </div>
      </motion.div>

      {/* Line Height */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="font-medium text-neutral-800 mb-4">Line Height</h3>
        
        <div className="grid grid-cols-4 gap-2">
          {lineHeightOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateSetting('lineHeight', option.value)}
              className={`py-2 px-3 rounded-lg transition-colors text-sm ${
                settings.lineHeight === option.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Layout Options */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Layout Options</h3>
        </div>
        
        <div className="space-y-3">
          {layoutOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => updateSetting('layout', option.id)}
              className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                settings.layout === option.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="font-medium text-neutral-800">{option.name}</div>
              <div className="text-sm text-neutral-600">{option.description}</div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Reading Preferences */}
      <motion.div 
        className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Settings className="w-5 h-5 text-primary-500" />
          <h3 className="font-medium text-neutral-800">Reading Preferences</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Justified Text</h4>
              <p className="text-sm text-neutral-600">Align text to both margins</p>
            </div>
            <ToggleSwitch
              checked={settings.justifiedText || false}
              onChange={(checked) => updateSetting('justifiedText', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-neutral-800">Page Breaks</h4>
              <p className="text-sm text-neutral-600">Show page breaks in content</p>
            </div>
            <ToggleSwitch
              checked={settings.pageBreaks || false}
              onChange={(checked) => updateSetting('pageBreaks', checked)}
            />
          </div>
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