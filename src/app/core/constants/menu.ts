import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Main Page', route: '/dashboard/Main Page' },
            // { label: 'Podcast', route: '/dashboard/podcast' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Authentication',
          route: '/auth',
          children: [
            { label: 'Register', route: '/auth/sign-up' },
            { label: 'Login', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'Change Password', route: '/auth/new-password' },
            // { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Errors',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [{ label: 'Table', route: '/components/table' }],
        },
      ],
    },
    {
      group: 'Profile Management',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'User Management',
          children: [
            { label: 'Edit Profile Users', route: '/edit-profile-users' }
          ],
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/company.svg',
          label: 'Company Management',
          children: [
            { label: 'Edit Profile Company', route: '/edit-profile-company' },
          ],
          route: '/download',
        },
      ],
    },
    {
      group: 'Production Management',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Production Line',
          children: [
            { label: 'Production Line Management', route: '/production-line-manangement' },
          ],
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/product.svg',
          label: 'Machine',
          children: [
            { label: 'Machine Management', route: '/machine-manangement' },
          ],
          route: '/download',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
          children: [
            { label: 'Change Theme', route: '/errors/404' },
            { label: 'Change Language', route: '/errors/404' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    }
  ];
}
