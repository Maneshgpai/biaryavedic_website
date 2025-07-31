# Bio-Aryavedic Naturals - Modular Website

This is a modular, component-based version of the Bio-Aryavedic Naturals website. The original monolithic HTML file has been broken down into reusable components for better maintainability and reusability.

## Project Structure

```
biaryavedic_website/
├── index.html                 # Original monolithic file
├── index-modular.html         # New modular version
├── components/                # Reusable HTML components
│   ├── header.html           # Navigation header
│   ├── hero.html             # Hero section with video
│   ├── features.html         # Features grid
│   ├── products.html         # Products showcase
│   ├── about.html            # About section
│   ├── stats.html            # Statistics section
│   ├── cta.html              # Call to action
│   └── footer.html           # Footer with contact info
├── styles/
│   └── main.css              # All CSS styles
├── js/
│   └── main.js               # JavaScript functionality
├── assets/                   # Media files
│   ├── logo.png
│   └── hero-video.mp4
└── README.md                 # This file
```

## Components

### 1. Header Component (`components/header.html`)
- Navigation menu
- Logo
- Responsive design

### 2. Hero Component (`components/hero.html`)
- Video background
- Main headline and description
- Call-to-action button

### 3. Features Component (`components/features.html`)
- Grid of feature cards
- Icons and descriptions
- Hover effects

### 4. Products Component (`components/products.html`)
- Product cards
- Product images and descriptions
- Shop buttons

### 5. About Component (`components/about.html`)
- Company information
- Commitment list
- Two-column layout

### 6. Stats Component (`components/stats.html`)
- Statistics grid
- Animated numbers
- Hover effects

### 7. CTA Component (`components/cta.html`)
- Call to action section
- Bug crawling animation

### 8. Footer Component (`components/footer.html`)
- Contact information
- Quick links
- Company details

## How to Use

### Option 1: Use the Modular Version
1. Open `index-modular.html` in a web browser
2. The JavaScript will automatically load all components
3. Each component is loaded dynamically from the `components/` folder

### Option 2: Use Individual Components
You can include individual components in any HTML file:

```html
<!-- Include a specific component -->
<div data-component="header"></div>
<div data-component="hero"></div>
```

### Option 3: Manual Inclusion
You can also manually include components by copying the HTML content:

```html
<!-- Copy the content from components/header.html -->
<header class="header">
    <!-- Header content -->
</header>
```

## Benefits of the Modular Approach

1. **Reusability**: Components can be used across multiple pages
2. **Maintainability**: Easy to update individual sections
3. **Collaboration**: Different team members can work on different components
4. **Testing**: Each component can be tested independently
5. **Performance**: Components can be loaded on demand
6. **Scalability**: Easy to add new components or modify existing ones

## File Dependencies

- `index-modular.html` requires:
  - `styles/main.css`
  - `js/main.js`
  - All files in `components/` folder
  - Assets in `assets/` folder

## Browser Compatibility

The modular version uses modern JavaScript features:
- `fetch()` API for loading components
- `data-*` attributes for component identification
- ES6+ syntax

For older browsers, consider using a build tool or polyfills.

## Customization

To customize components:
1. Edit the HTML files in the `components/` folder
2. Modify styles in `styles/main.css`
3. Update functionality in `js/main.js`

## Adding New Components

1. Create a new HTML file in the `components/` folder
2. Add the component to `index-modular.html`:
   ```html
   <div data-component="new-component"></div>
   ```
3. The JavaScript will automatically load it

## Performance Notes

- Components are loaded asynchronously
- CSS and JavaScript are cached by the browser
- Video files are optimized for web delivery
- Images are compressed for faster loading 