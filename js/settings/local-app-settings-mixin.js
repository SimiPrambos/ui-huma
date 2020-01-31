export default {
  props: {
    layoutActive: {
      type: String,
      required: true
    },
    layoutLocation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      buttonAlign: 'right',
      drawerAlign: 'end'
    }
  },
  computed: {
    options() {
      return [
        {
          id: 'theme',
          title: 'Theme',
          children: [
            {
              id: 'theme',
              title: 'Theme',
              component: 'form-image-group',
              value: 'light',
              options: [
                {
                  text: 'Dark Teal',
                  value: 'dark',
                  image: 'assets/images/theme-dark-teal.png'
                },
                {
                  text: 'Light Teal',
                  image: 'assets/images/theme-light-teal.png',
                  value: 'light',
                  selected: true,
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Dark Blue',
                  image: 'assets/images/theme-dark-blue.png',
                  value: 'dark-blue',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Yellow',
                  image: 'assets/images/theme-light-yellow.png',
                  value: 'light-yellow',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Dark Purple',
                  image: 'assets/images/theme-dark-purple.png',
                  value: 'dark-purple',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Purple',
                  image: 'assets/images/theme-light-purple.png',
                  value: 'light-purple',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Black',
                  image: 'assets/images/theme-black.png',
                  value: 'black',
                  disabled: !!this.settings['theme.darkMode']
                },
                {
                  text: 'Light Red',
                  image: 'assets/images/theme-light-red.png',
                  value: 'light-red',
                  disabled: !!this.settings['theme.darkMode']
                }
              ]
            },
            {
              id: 'darkMode',
              title: 'Dark Mode',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true
                },
                {
                  value: false,
                  selected: true
                }
              ]
            }
          ]
        },
        {
          id: 'layout',
          title: 'Layout',
          children: [
            {
              id: 'layout',
              title: 'Layout',
              component: 'form-image-group',
              cookies: false,
              value: 'compact',
              options: [
                {
                  text: 'Compact Layout',
                  image: 'assets/images/compact-layout.png',
                  value: 'compact',
                  selected: true
                },
                {
                  text: 'Mini Layout',
                  image: 'assets/images/mini-layout.png',
                  value: 'mini'
                },
                {
                  text: 'App Layout',
                  value: 'app',
                  image: 'assets/images/app-layout.png'
                },
                {
                  text: 'Sticky Layout',
                  value: 'sticky',
                  image: 'assets/images/sticky-layout.png'
                },
                {
                  text: 'Fixed',
                  image: 'assets/images/fixed-layout.png',
                  value: 'default'
                }
              ]
            },
            {
              id: 'rtl',
              title: 'RTL',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true
                },
                {
                  value: false,
                  selected: true
                }
              ]
            }
          ]
        },
        {
          id: 'type',
          title: 'Type',
          children: [
            {
              id: 'headingsFontFamily',
              title: 'Headings Font Family',
              component: 'b-form-select',
              options: [
                {
                  text: 'Exo 2',
                  value: 'exo2',
                  selected: true
                },
                {
                  text: 'Lato',
                  value: 'lato'
                },
                {
                  text: 'Oswald',
                  value: 'oswald'
                }
              ]
            }
          ]
        },
        {
          id: 'mainDrawer',
          title: 'Main Drawer',
          children: [
            {
              id: 'theme',
              options: [
                { value: 'light' },
                { value: 'dark' }
              ]
            },
            {
              id: 'align',
              title: 'Align',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Start',
                  value: 'start',
                  selected: true
                },
                {
                  text: 'End',
                  value: 'end'
                }
              ]
            }
          ]
        },
        {
          id: 'messagesDrawer',
          title: 'Messages Drawer',
          children: [
            {
              id: 'theme',
              options: [
                { value: 'light' },
                { value: 'dark' }
              ]
            }
          ]
        },
        {
          id: 'mainNavbar',
          title: 'Main Navbar',
          children: [
            {
              id: 'navbar',
              title: 'Main Navbar',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Transparent',
                  value: 'transparent',
                  disabled: ['default'].includes(this.settings['layout.layout']),
                  selected: true
                },
                {
                  text: 'Light',
                  value: 'light',
                  disabled: ['default'].includes(this.settings['layout.layout'])
                },
                {
                  text: 'Dark Teal',
                  value: 'dark',
                  disabled: ['app', 'mini'].includes(this.settings['layout.layout']) || this.settings['theme.theme'] !== 'dark'
                },
                {
                  text: 'Dark Blue',
                  value: 'dark-blue',
                  disabled: ['app', 'mini'].includes(this.settings['layout.layout']) || this.settings['theme.theme'] !== 'dark-blue'
                },
                {
                  text: 'Dark Purple',
                  value: 'dark-purple',
                  disabled: ['app', 'mini'].includes(this.settings['layout.layout']) || this.settings['theme.theme'] !== 'dark-purple'
                },
                {
                  text: 'Black',
                  value: 'black',
                  disabled: ['app', 'mini'].includes(this.settings['layout.layout']) || this.settings['theme.theme'] !== 'black'
                }
              ]
            }
          ]
        }
      ]
    },
    config() {

      let theme
      try {
        theme = this.settings['theme.theme']
      } catch(e) {
      }

      let navbarTransparentLogo = 'assets/images/logo/accent-teal-100@2x.png'
      
      if (theme === 'dark-blue' || theme === 'light-yellow') {
        navbarTransparentLogo = 'assets/images/logo/accent-yellow-100@2x.png'
      }
      if (theme === 'dark-purple' || theme === 'black' || theme === 'light-red') {
        navbarTransparentLogo = 'assets/images/logo/accent-red-100@2x.png'
      }
      if (theme === 'light-purple') {
        navbarTransparentLogo = 'assets/images/logo/purple-100@2x.png'
      }

      return {
        'layout.layout': function(layout) {
          if (layout !== this.layoutActive) {
            location = this.layoutLocation[layout]
          }
        },
        'layout.rtl': function(rtl) {
          document.querySelector('html').setAttribute('dir', rtl ? 'rtl' : 'ltr')

          ;[...document.querySelectorAll('.mdk-drawer')]
            .forEach(node => this.try(node, function() {
              this.mdkDrawer._resetPosition()
            }))

          ;[...document.querySelectorAll('.mdk-drawer-layout')]
            .forEach(node => this.try(node, function() {
              this.mdkDrawerLayout._resetLayout()
            }))
        },
        'theme.darkMode': function(darkMode) {
          document.querySelector('html').classList[darkMode ? 'add' : 'remove']('dark-mode')

          if (darkMode && this.settings['theme.theme'] !== 'dark') {
            this.settings['theme.theme'] = 'dark'
          }

          if (darkMode) {
            this.applyElements({
              '.chart-canvas': {
                setAttribute: [
                  { 'name': 'data-chart-dark-mode', 'value': '1' }
                ]
              }
            })
          }
          else {
            this.applyElements({
              '.chart-canvas': {
                removeAttribute: [ 'data-chart-dark-mode' ]
              }
            })
          }
        },
        'mainDrawer.align': function(align) {
          this.try(document.querySelector('#default-drawer'), function() {
            this.mdkDrawer.align = align
          })
        },
        'type.headingsFontFamily': function(headingsFontFamily) {
          ;[
            'headings-family-lato', 
            'headings-family-exo2', 
            'headings-family-oswald'
          ].forEach(className => {
            document.querySelector('body').classList.remove(className)
          })
          document.querySelector('body').classList.add(`headings-family-${headingsFontFamily}`)
        },
        'messagesDrawer.theme': {
          'light': {
            '#messages-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark']
            }
          },
          'dark': {
            '#messages-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light']
            }
          }
        },
        'mainDrawer.theme': {
          'light': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-light-red', 'sidebar-light-yellow', 'sidebar-light-purple']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-red': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-red'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-light-yellow', 'sidebar-light-purple']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-yellow': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-yellow'],
              removeClass: ['sidebar-dark', 'bg-dark', 'bg-dark-blue', 'bg-dark-purple', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-light-red', 'sidebar-light-purple']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'light-purple': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/purple-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light', 'sidebar-light-purple'],
              removeClass: ['sidebar-dark', 'bg-dark', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-light-yellow', 'sidebar-light-red']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'dark': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light', 'sidebar-light-red', 'sidebar-light-yellow', 'sidebar-light-purple', 'bg-white', 'sidebar-dark-purple', 'sidebar-dark-blue', 'sidebar-black']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'black': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-black'],
              removeClass: ['sidebar-dark', 'sidebar-dark-blue', 'sidebar-dark-purple', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-yellow', 'sidebar-light-red', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'dark-purple': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/white-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark-purple'],
              removeClass: ['sidebar-dark', 'sidebar-dark-blue', 'sidebar-black', 'sidebar-light', 'sidebar-light-purple', 'sidebar-light-yellow', 'sidebar-light-red', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          },
          'dark-blue': {
            '#default-drawer .sidebar-brand-icon': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark-blue'],
              removeClass: ['sidebar-dark', 'sidebar-dark-purple', 'sidebar-black', 'sidebar-light', 'sidebar-light-purple', 'bg-white', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          }
        },
        'theme.theme': {
          'light': {
            'mainNavbar.navbar': function() {
              if (this.settings['layout.layout'] === 'sticky') {
                return 'dark'
              }
              if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return !!this.settings['theme.darkMode'] ? 'dark' : 'light'
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-blue']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'teal;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;teal;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'teal;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'teal' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,teal' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },

            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-yellow']
            },
            '.border-left-accent-red': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-red']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent-red': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-red']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.alert-soft-accent-red': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-red']
            },

            '.text-accent-yellow': {
              addClass: ['text-accent'],
              removeClass: ['text-accent-yellow']
            },
            '.text-accent-red': {
              addClass: ['text-accent'],
              removeClass: ['text-accent-red']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent'],
              removeClass: ['bg-accent-yellow']
            },
            '.bg-accent-red': {
              addClass: ['bg-accent'],
              removeClass: ['bg-accent-red']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent'],
              removeClass: ['btn-accent-yellow']
            },
            '.btn-accent-red': {
              addClass: ['btn-accent'],
              removeClass: ['btn-accent-red']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent'],
              removeClass: ['badge-accent-yellow']
            },
            '.badge-accent-red': {
              addClass: ['badge-accent'],
              removeClass: ['badge-accent-red']
            }
          },
          'light-red': {
            'mainNavbar.navbar': function() {
              if (this.settings['layout.layout'] === 'sticky') {
                return 'black'
              }
              if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return !!this.settings['theme.darkMode'] ? 'black' : 'light-red'
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-blue']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;accent;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },

            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-yellow']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent']
            },

            '.text-accent-yellow': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent-yellow']
            },
            '.text-accent': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent-yellow']
            },
            '.bg-accent': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent'],
              removeClass: ['btn-accent-yellow']
            },
            '.btn-accent': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent-yellow']
            },
            '.badge-accent': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent']
            }
          },
          'light-yellow': {
            'mainNavbar.navbar': function() {
              if (this.settings['layout.layout'] === 'sticky') {
                return 'dark-blue'
              }
              if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return !!this.settings['theme.darkMode'] ? 'dark-blue' : 'light-yellow'
            },
            '.bg-dark': {
              addClass: ['bg-dark-blue'],
              removeClass: ['bg-dark']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'yellow;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;yellow;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'yellow;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'yellow' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,yellow' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },
            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-yellow'],
              removeClass: ['border-left-accent']
            },
            '.border-left-accent-red': {
              addClass: ['border-left-accent-yellow'],
              removeClass: ['border-left-accent-red']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent': {
              addClass: ['alert-accent-yellow'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-red': {
              addClass: ['alert-accent-yellow'],
              removeClass: ['alert-accent-red']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-yellow'],
              removeClass: ['alert-soft-accent']
            },
            '.alert-soft-accent-red': {
              addClass: ['alert-soft-accent-yellow'],
              removeClass: ['alert-soft-accent-red']
            },
            '.text-accent-red': {
              addClass: ['text-accent-yellow'],
              removeClass: ['text-accent-red']
            },
            '.text-accent': {
              addClass: ['text-accent-yellow'],
              removeClass: ['text-accent']
            },
            '.bg-accent-red': {
              addClass: ['bg-accent-yellow'],
              removeClass: ['bg-accent-red']
            },
            '.bg-accent': {
              addClass: ['bg-accent-yellow'],
              removeClass: ['bg-accent']
            },
            '.btn-accent-red': {
              addClass: ['btn-accent-yellow'],
              removeClass: ['btn-accent-red']
            },
            '.btn-accent': {
              addClass: ['btn-accent-yellow'],
              removeClass: ['btn-accent']
            },
            '.badge-accent-red': {
              addClass: ['badge-accent-yellow'],
              removeClass: ['badge-accent-red']
            },
            '.badge-accent': {
              addClass: ['badge-accent-yellow'],
              removeClass: ['badge-accent']
            }
          },
          'light-purple': {
            'mainNavbar.navbar': function() {
              if (this.settings['layout.layout'] === 'sticky') {
                return 'dark-purple'
              }
              if (!['light', 'transparent'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return !!this.settings['theme.darkMode'] ? 'dark-purple' : 'light-purple'
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-blue']
            },
            '.bg-dark': {
              addClass: ['bg-dark-purple'],
              removeClass: ['bg-dark']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'purple' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;purple;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple;accent;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'purple,accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary': {
              addClass: ['bg-primary-purple'],
              removeClass: ['bg-primary']
            },
            '.border-left-primary': {
              addClass: ['border-left-primary-purple'],
              removeClass: ['border-left-primary']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent-yellow']
            },
            '.alert-primary': {
              addClass: ['alert-primary-purple'],
              removeClass: ['alert-primary']
            },
            '.alert-accent': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary': {
              addClass: ['alert-soft-primary-purple'],
              removeClass: ['alert-soft-primary']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.text-accent': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent']
            },
            '.text-accent-yellow': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent-yellow']
            },
            '.bg-accent': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent-yellow']
            },
            '.btn-accent': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent-yellow']
            },
            '.badge-accent': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent-yellow']
            }
          },
          'dark': {
            'mainNavbar.navbar': function() {
              if (!!this.settings['theme.darkMode']) {
                return 'dark-mode'
              }
              if (this.settings['layout.layout'] === 'default') {
                return 'dark'
              }
              if (!['transparent', 'light'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return 'dark'
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-blue']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'teal;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;teal;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'teal;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'teal' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,teal' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },

            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-yellow']
            },
            '.border-left-accent-red': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-red']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent-red': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-red']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.alert-soft-accent-red': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-red']
            },

            '.text-accent-yellow': {
              addClass: ['text-accent'],
              removeClass: ['text-accent-yellow']
            },
            '.text-accent-red': {
              addClass: ['text-accent'],
              removeClass: ['text-accent-red']
            },
            '.bg-accent-red': {
              addClass: ['bg-accent'],
              removeClass: ['bg-accent-red']
            },
            '.btn-accent-red': {
              addClass: ['btn-accent'],
              removeClass: ['btn-accent-red']
            },
            '.badge-accent-red': {
              addClass: ['badge-accent'],
              removeClass: ['badge-accent-red']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent'],
              removeClass: ['bg-accent-yellow']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent'],
              removeClass: ['btn-accent-yellow']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent'],
              removeClass: ['badge-accent-yellow']
            }
          },
          'black': {
            'mainNavbar.navbar': function() {
              if (this.settings['layout.layout'] === 'default') {
                return 'black'
              }
              if (!['transparent', 'light'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return 'black'
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-blue']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;accent;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },

            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent'],
              removeClass: ['border-left-accent-yellow']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent']
            },

            '.text-accent': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent']
            },
            '.text-accent-yellow': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent-yellow']
            },
            '.bg-accent': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent-yellow']
            },
            '.btn-accent': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent-yellow']
            },
            '.badge-accent': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent-yellow']
            }
          },
          'dark-purple': {
            'mainNavbar.navbar': function() {
              if (['default'].includes(this.settings['layout.layout'])) {
                return 'dark-purple'
              }
              if (!['transparent', 'light'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return 'dark-purple'
            },
            '.bg-dark': {
              addClass: ['bg-dark-purple'],
              removeClass: ['bg-dark']
            },
            '.bg-dark-blue': {
              addClass: ['bg-dark-purple'],
              removeClass: ['bg-dark-blue']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'purple' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;purple;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple;accent;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'purple;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'accent;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'purple,accent' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary': {
              addClass: ['bg-primary-purple'],
              removeClass: ['bg-primary']
            },
            '.border-left-primary': {
              addClass: ['border-left-primary-purple'],
              removeClass: ['border-left-primary']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent']
            },
            '.border-left-accent-yellow': {
              addClass: ['border-left-accent-red'],
              removeClass: ['border-left-accent-yellow']
            },
            '.alert-primary': {
              addClass: ['alert-primary-purple'],
              removeClass: ['alert-primary']
            },
            '.alert-accent': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-yellow': {
              addClass: ['alert-accent-red'],
              removeClass: ['alert-accent-yellow']
            },
            '.alert-soft-primary': {
              addClass: ['alert-soft-primary-purple'],
              removeClass: ['alert-soft-primary']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent']
            },
            '.alert-soft-accent-yellow': {
              addClass: ['alert-soft-accent-red'],
              removeClass: ['alert-soft-accent-yellow']
            },
            '.text-accent': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent']
            },
            '.text-accent-yellow': {
              addClass: ['text-accent-red'],
              removeClass: ['text-accent-yellow']
            },
            '.bg-accent': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent']
            },
            '.bg-accent-yellow': {
              addClass: ['bg-accent-red'],
              removeClass: ['bg-accent-yellow']
            },
            '.btn-accent': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent']
            },
            '.btn-accent-yellow': {
              addClass: ['btn-accent-red'],
              removeClass: ['btn-accent-yellow']
            },
            '.badge-accent': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent']
            },
            '.badge-accent-yellow': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent-yellow']
            }
          },
          'dark-blue': {
            'mainNavbar.navbar': function() {
              if (['default'].includes(this.settings['layout.layout'])) {
                return 'dark-blue'
              }
              if (!['transparent', 'light'].includes(this.settings['mainNavbar.navbar'])) {
                return 'transparent'
              }
            },
            'mainDrawer.theme': function() {
              return 'dark-blue'
            },
            '.bg-dark': {
              addClass: ['bg-dark-blue'],
              removeClass: ['bg-dark']
            },
            '.bg-dark-purple': {
              addClass: ['bg-dark-blue'],
              removeClass: ['bg-dark-purple']
            },
            '.js-update-chart-line': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-area': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '0.24' }
              ]
            },
            '.js-update-chart-bar': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '#locationDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'yellow;primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1;1;0.24' }
              ]
            },
            '#attendanceDoughnutChart': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;yellow;gray.700;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'primary;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-progress-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-background-color', 'value': 'yellow;gray' },
                { 'name': 'data-chart-line-background-opacity', 'value': '1' }
              ]
            },
            '.js-update-chart-line-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'yellow' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.js-update-chart-line-2nd-accent': {
              setAttribute: [
                { 'name': 'data-chart-line-border-color', 'value': 'primary,yellow' },
                { 'name': 'data-chart-line-border-opacity', 'value': '1' },
              ]
            },
            '.bg-primary-purple': {
              addClass: ['bg-primary'],
              removeClass: ['bg-primary-purple']
            },
            '.border-left-primary-purple': {
              addClass: ['border-left-primary'],
              removeClass: ['border-left-primary-purple']
            },
            '.border-left-accent': {
              addClass: ['border-left-accent-yellow'],
              removeClass: ['border-left-accent']
            },
            '.border-left-accent-red': {
              addClass: ['border-left-accent-yellow'],
              removeClass: ['border-left-accent-red']
            },
            '.alert-primary-purple': {
              addClass: ['alert-primary'],
              removeClass: ['alert-primary-purple']
            },
            '.alert-accent': {
              addClass: ['alert-accent-yellow'],
              removeClass: ['alert-accent']
            },
            '.alert-accent-red': {
              addClass: ['alert-accent-yellow'],
              removeClass: ['alert-accent-red']
            },
            '.alert-soft-primary-purple': {
              addClass: ['alert-soft-primary'],
              removeClass: ['alert-soft-primary-purple']
            },
            '.alert-soft-accent': {
              addClass: ['alert-soft-accent-yellow'],
              removeClass: ['alert-soft-accent']
            },
            '.alert-soft-accent-red': {
              addClass: ['alert-soft-accent-yellow'],
              removeClass: ['alert-soft-accent-red']
            },
            '.text-accent': {
              addClass: ['text-accent-yellow'],
              removeClass: ['text-accent']
            },
            '.text-accent-red': {
              addClass: ['text-accent-yellow'],
              removeClass: ['text-accent-red']
            },
            '.bg-accent': {
              addClass: ['bg-accent-yellow'],
              removeClass: ['bg-accent']
            },
            '.bg-accent-red': {
              addClass: ['bg-accent-yellow'],
              removeClass: ['bg-accent-red']
            },
            '.btn-accent': {
              addClass: ['btn-accent-yellow'],
              removeClass: ['btn-accent']
            },
            '.btn-accent-red': {
              addClass: ['btn-accent-yellow'],
              removeClass: ['btn-accent-red']
            },
            '.badge-accent': {
              addClass: ['badge-accent-red'],
              removeClass: ['badge-accent']
            },
            '.badge-accent-red': {
              addClass: ['badge-accent-yellow'],
              removeClass: ['badge-accent-red']
            }
          }
        },
        'mainNavbar.navbar': {
          'light': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '.layout-default #default-navbar': {
              addClass: ['border-bottom-2']
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-white'],
              removeClass: ['navbar-dark', 'bg-dark', 'bg-body', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-dark-blue', 'bg-dark-purple']
            },
            '#default-navbar .border-black': {
              addClass: ['border-default'],
              removeClass: ['border-black']
            }
          },
          'transparent': {
            '#default-navbar .navbar-brand img': {
              src: navbarTransparentLogo,
            },
            '.layout-default #default-navbar': {
              addClass: ['border-bottom-2']
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-body'],
              removeClass: ['navbar-dark', 'bg-dark', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-dark-blue', 'bg-dark-purple']
            },
            '#default-navbar .border-black': {
              addClass: ['border-default'],
              removeClass: ['border-black']
            }
          },
          'dark': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'bg-dark'],
              removeClass: ['navbar-light', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-white', 'bg-body', 'border-bottom-2']
            },
            '#default-navbar .border-default': {
              addClass: ['border-black'],
              removeClass: ['border-default']
            }
          },
          'dark-mode': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-teal-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'bg-body'],
              removeClass: ['navbar-light', 'navbar-dark-blue', 'navbar-dark-purple', 'navbar-black', 'bg-white', 'border-bottom-2']
            },
            '#default-navbar .border-default': {
              addClass: ['border-black'],
              removeClass: ['border-default']
            }
          },
          'dark-blue': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-yellow-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-dark-blue'],
              removeClass: ['navbar-light', 'bg-dark', 'navbar-dark-purple', 'navbar-black', 'bg-white', 'bg-body', 'border-bottom-2']
            },
            '#default-navbar .border-default': {
              addClass: ['border-black'],
              removeClass: ['border-default']
            }
          },
          'dark-purple': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/white-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-dark-purple'],
              removeClass: ['navbar-light', 'bg-dark', 'navbar-dark-blue', 'navbar-black', 'bg-white', 'bg-body', 'border-bottom-2']
            },
            '#default-navbar .border-default': {
              addClass: ['border-black'],
              removeClass: ['border-default']
            }
          },
          'black': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/accent-red-100@2x.png',
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'navbar-black'],
              removeClass: ['navbar-light', 'bg-dark', 'navbar-dark-blue', 'navbar-dark-purple', 'bg-white', 'bg-body', 'border-bottom-2']
            },
            '#default-navbar .border-default': {
              addClass: ['border-black'],
              removeClass: ['border-default']
            }
          }
        }
      }
    },
    computedOptions() {
      const options = JSON.parse(JSON.stringify(this.options))
      options.map(option => {
        option.children
          .filter(group => group.cookies === false)
          .map(group => {
            if (this.layoutActive) {
              group.options.map(go => go.selected = go.value === this.layoutActive)
            } else {
              group.options.map(go => go.selected = go.value === group.value)
            }
          })
      })

      return options
    },
    localDrawerAlign() {
      let drawerAlign = this.drawerAlign
      try {
        drawerAlign = this.settings['mainDrawer.align'] === 'end' ? 'start' : 'end'
      } catch(e) {}

      return drawerAlign
    },
    localButtonAlign() {
      let buttonAlign = this.buttonAlign
      
      try {
        buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'left' : 'right'
        if (this.settings['layout.rtl']) {
          buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'right' : 'left'
        }
      } catch(e) {}

      return buttonAlign
    }
  },
  created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate)
  },
  methods: {
    try(node, callback) {
      try {
        callback.call(node)
      } catch(e) {
        node.addEventListener('domfactory-component-upgraded', callback)
      }
    }
  }
}
