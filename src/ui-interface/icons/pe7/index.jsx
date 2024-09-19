 
import React, { useState } from "react";
import Header from "../../../layouts/Header";
import Sidebar from "../../../layouts/Sidebar";
import * as Icons from 'react-feather';

const Pe7 = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const iconNames = [
    'LifeBuoy', 'Link', 'Link2', 'Linkedin', 'List', 'Loader', 'Lock', 'LogIn', 'LogOut', 'Mail', 'Map', 'MapPin', 'Maximize', 'Maximize2', 'Meh', 'Menu', 'MessageCircle', 'MessageSquare', 'Mic', 'MicOff', 'Minimize', 'Minimize2', 'Minus', 'MinusCircle', 'MinusSquare', 'Monitor', 'Moon', 'MoreHorizontal', 'MoreVertical', 'MousePointer', 'Move', 'Music', 'Navigation', 'Navigation2', 'Octagon', 'Package', 'Paperclip', 'Pause', 'PauseCircle', 'PenTool', 'Percent', 'Phone', 'PhoneCall', 'PhoneForwarded', 'PhoneIncoming', 'PhoneMissed', 'PhoneOff', 'PhoneOutgoing', 'PieChart', 'Play', 'PlayCircle', 'Plus', 'PlusCircle', 'PlusSquare', 'Pocket', 'Power', 'Printer', 'Radio', 'RefreshCcw', 'RefreshCw', 'Repeat', 'Rewind', 'RotateCcw', 'RotateCw', 'Rss', 'Save', 'Scissors', 'Search', 'Send', 'Server', 'Settings', 'Share', 'Share2', 'Shield', 'ShieldOff',
    'ShoppingBag', 'ShoppingCart', 'Shuffle', 'Sidebar', 'SkipBack', 'SkipForward', 'Slack', 'Slash', 'Sliders', 'Smartphone', 'Smile', 'Speaker', 'Square', 'Star', 'StopCircle', 'Sun', 'Sunrise', 'Sunset', 'Table', 'Tablet', 'Tag', 'Target', 'Terminal', 'Thermometer', 'ThumbsDown', 'ThumbsUp', 'ToggleLeft',
    'ToggleRight', 'Tool', 'Trash', 'Trash2', 'Trello', 'TrendingDown', 'TrendingUp', 'Triangle', 'Truck', 'Tv', 'Twitch', 'Twitter', 'Type', 'Umbrella', 'Underline', 'Unlock', 'Upload', 'UploadCloud', 'User', 'UserCheck', 'UserMinus', 'UserPlus', 'UserX', 'Users', 'Video', 'VideoOff', 'Voicemail', 'Volume', 'Volume1', 'Volume2', 'VolumeX', 'Watch', 'Wifi', 'WifiOff', 'Wind', 'X',
    'XCircle', 'XOctagon', 'XSquare', 'Youtube', 'Zap', 'ZapOff', 'ZoomIn', 'ZoomOut',
    'Activity', 'Airplay', 'AlertCircle', 'AlertOctagon', 'AlertTriangle', 'AlignCenter', 'AlignJustify', 'AlignLeft', 'AlignRight', 'Anchor', 'Aperture', 'Archive', 'ArrowDown', 'ArrowDownCircle', 'ArrowDownLeft', 'ArrowDownRight', 'ArrowLeft', 'ArrowLeftCircle', 'ArrowRight', 'ArrowRightCircle', 'ArrowUp', 'ArrowUpCircle', 'ArrowUpLeft', 'ArrowUpRight', 'AtSign', 'Award', 'BarChart', 'BarChart2', 'Battery', 'BatteryCharging', 'Bell', 'BellOff', 'Bluetooth', 'Bold', 'Book', 'BookOpen', 'Bookmark', 'Box', 'Briefcase', 'Calendar', 'Camera', 'CameraOff', 'Cast', 'Check', 'CheckCircle', 'CheckSquare', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronsDown', 'ChevronsLeft', 'ChevronsRight', 'ChevronsUp', 'Chrome', 'Circle', 'Clipboard', 'Clock', 'Cloud',
    'CloudDrizzle', 'CloudLightning', 'CloudOff', 'CloudRain', 'CloudSnow', 'Code', 'Codepen', 'Codesandbox', 'Coffee', 'Columns', 'Command', 'Compass', 'Copy', 'CornerDownLeft', 'CornerDownRight', 'CornerLeftDown', 'CornerLeftUp', 'CornerRightDown', 'CornerRightUp', 'CornerUpLeft', 'CornerUpRight', 'Cpu', 'CreditCard', 'Crop', 'Crosshair', 'Database', 'Delete', 'Disc', 'Divide', 'DivideCircle', 'DivideSquare', 'DollarSign', 'Download', 'DownloadCloud', 'Dribbble', 'Droplet', 'Edit', 'Edit2', 'Edit3', 'ExternalLink', 'Eye', 'EyeOff', 'Facebook', 'FastForward', 'Feather', 'Figma', 'File', 'FileMinus', 'FilePlus', 'FileText', 'Film', 'Filter', 'Flag', 'Folder', 'FolderMinus', 'FolderPlus', 'Framer', 'Frown', 'Gift', 'GitBranch', 'GitCommit', 'GitHub', 'GitMerge', 'GitPullRequest', 'Gitlab', 'Globe', 'Grid', 'HardDrive', 'Hash', 'Headphones', 'Heart', 'HelpCircle', 'Hexagon', 'Home', 'Image', 'Inbox',
    'Info', 'Instagram', 'Italic', 'Key', 'Layers', 'Layout'
  ];
  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Pe7 Icon</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              {/* Chart */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Pe7 Icon</div>
                  </div>
                  <div className="card-body">
                    <div className="icons-items">
                    <ul className="icons-list">
                         {iconNames.map((iconName, index) => {
                           const Icon = Icons[iconName];
                           if (Icon) {
                             return (
                               <li key={index}>
                                 <Icon />
                               </li>
                             );
                           }
                           return null; 
                         })}
                       </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pe7;
