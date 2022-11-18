import React from 'react';
import { SidebarBlankIcon, SidebarHomeIcon, SidebarCalendarIcon, SidebarProfileIcon, SidebarMapsIcon, SidebarInspectionsIcon } from '@iso/config/icon.config';

const options = [
  {
    key: 'Home',
    label: 'Home',
    leftIcon: <SidebarHomeIcon size={19} />,
  },
  {
    key: 'Calendar',
    label: 'Calendar',
    leftIcon: <SidebarCalendarIcon size={19} />,
  },
  {
    key: 'Employees',
    label: 'Employees',
    leftIcon: <SidebarProfileIcon size={19} />,
  },
  {
    key: 'Routes',
    label: 'Routes',
    leftIcon: <SidebarMapsIcon size={19} />,
  },
  {
    key: 'inspections',
    label: 'Inspections',
    leftIcon: <SidebarInspectionsIcon size={19} />,
  },
];
export default options;
