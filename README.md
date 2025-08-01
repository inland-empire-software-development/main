# IESD Main WordPress Theme

A minimal, modern WordPress theme built with UIKit CSS framework. This is a blank canvas theme ready for customization.

## 🚀 Features

- **UIKit CSS Framework** - Modern, responsive CSS framework
- **Clean PHP Templates** - Standard WordPress template hierarchy  
- **Navigation Menus** - Primary and footer menus with UIKit styling
- **Widget Areas** - Sidebar and footer widget areas
- **Build Tools** - Webpack for asset compilation and hot reloading
- **Responsive Design** - Mobile-first approach

## 📋 Requirements

- PHP 8.0+
- WordPress 6.0+
- Node.js 16+

## 🛠 Installation

1. Clone or download this theme to your `wp-content/themes/` directory
2. Install dependencies: `npm install`
3. Build assets: `npm run build` or `npm run dev`
4. Activate the theme in WordPress admin

## 🏗 Development

```bash
# Development with hot reloading
npm run dev

# Production build
npm run build

# Watch files for changes
npm run watch
```

## 📁 Structure

```
iesd-main/
├── assets/              # Source files (JS/SCSS)
├── dist/                # Compiled assets
├── inc/                 # PHP functions and classes
├── languages/           # Translation files
├── header.php           # Site header
├── footer.php           # Site footer
├── index.php            # Main posts template
├── single.php           # Single post template
├── functions.php        # Theme functions
└── style.css            # Theme info file
```

## 🎨 Customization

This is a blank canvas theme. You can:

- Edit SCSS files in `assets/scss/`
- Modify templates in the root directory
- Add new functionality in `inc/template-functions.php`
- Create new template files following WordPress conventions

## 📱 Responsive Breakpoints

The theme uses UIKit's responsive system:
- Small: 640px and up
- Medium: 960px and up  
- Large: 1200px and up

## 🌍 Internationalization

The theme is translation-ready. Use `__('Text', 'iesd-main')` for translatable strings.

## 📄 License

GPL v2 or later

---

**Ready to build something amazing!** 🎉 